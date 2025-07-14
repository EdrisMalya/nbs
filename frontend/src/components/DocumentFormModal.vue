<template>
    <q-dialog :model-value="true" persistent>
        <q-card class="min-w-[400px]">
            <q-card-section class="flex items-center justify-between">
                <p class="font-bold">{{ $translate('Document form') }}</p>
                <q-btn @click="handleForm(false)" flat size="sm" icon="close" round />
            </q-card-section>
            <q-card-section>
                <form-builder-component
                    :action="`document/${relationId}/${relationName}`"
                    :on-submit-completed="onSuccess"
                    :fields="[
                        {
                            label: 'Document title',
                            name: 'document_title',
                            type: 'text',
                            validation: yup.string().required(),
                        },
                        {
                            label: 'Document',
                            name: 'document',
                            type: 'file',
                            validation: yup.mixed().required(),
                            accept: 'image/*, application/pdf',
                        },
                    ]"
                />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script>
import FormBuilderComponent from 'components/FormBuilderComponent.vue';
import * as yup from 'yup';

export default {
    components: { FormBuilderComponent },
    props: ['relationName', 'relationId', 'handleForm'],
    setup() {
        return {
            yup,
        };
    },
    methods: {
        onSuccess(result) {
            if (result.data.result) {
                this.$q.notify({
                    message: result.data.message,
                    color: 'green',
                });
                this.handleForm(false);
                this.$generalStore.revalidate(this.relationName);
            } else {
                this.$q.notify({
                    message: result.data.message,
                    color: 'red',
                });
            }
        },
    },
};
</script>
