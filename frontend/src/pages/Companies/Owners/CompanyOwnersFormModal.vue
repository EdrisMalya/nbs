<template>
    <q-dialog :model-value="true" persistent :full-height="full_mode" :full-width="full_mode">
        <q-card class="min-w-[1000px]">
            <q-card-section class="border-b flex items-center justify-between">
                <p class="font-bold text-lg">
                    {{ $translate('Company owner form') }}
                </p>
                <div>
                    <q-btn
                        size="sm"
                        :icon="full_mode ? 'fullscreen_exit' : 'fullscreen'"
                        flat
                        round
                        @click="full_mode = !full_mode"
                    />
                    <q-btn size="sm" icon="close" flat round @click="handleForm(false)" />
                </div>
            </q-card-section>
            <q-card-section>
                <server-data
                    v-slot="{ data }"
                    :url="`company/owner/${ownerId}`"
                    :fetch-data="ownerId !== 0"
                >
                    <form-builder-component
                        :action="
                            ownerId === 0
                                ? `company/owner?company_id=${companyId}`
                                : `company/owner/${ownerId}?_method=PUT`
                        "
                        method="POST"
                        class-name="grid grid-cols-4 gap-x-3"
                        submit-area-class-name="col-span-4"
                        :on-submit-completed="onSuccess"
                        :fields="[
                            {
                                name: 'profile',
                                photo_url: data?.file?.file_url,
                                label: 'Person image',
                                type: 'file',
                                validation: yup.mixed().when('test', (test, schema) => {
                                    if (ownerId === 0) {
                                        return schema.required('Photo is required');
                                    }
                                    return schema.nullable();
                                }),
                                scanable: false,
                                className: 'col-span-2',
                                accept: 'image/*',
                            },
                            {
                                name: 'div',
                                value: data?.div,
                                type: 'div',
                                className: 'col-span-2',
                            },
                            {
                                name: 'full_name_eng',
                                value: data?.full_name_eng,
                                label: 'English full name',
                                type: 'text',
                                validation: yup.string().required(),
                            },
                            {
                                name: 'full_name_da',
                                value: data?.full_name_da,
                                label: 'Dari full name',
                                type: 'text',
                                validation: yup.string().required(),
                            },
                            {
                                name: 'father_full_name_eng',
                                value: data?.father_full_name_eng,
                                label: 'English father full name',
                                type: 'text',
                                validation: yup.string().required(),
                            },
                            {
                                name: 'father_full_name_da',
                                value: data?.father_full_name_da,
                                label: 'Dari father full name',
                                type: 'text',
                                validation: yup.string().required(),
                            },
                            {
                                label: 'Degree',
                                name: 'degree_id',
                                value: data?.degree_id,
                                type: 'server-select',
                                url: 'general/degrees',
                                validation: yup.string().required(),
                                create_able: true,
                            },
                            {
                                name: 'degree_title',
                                value: data?.degree_title,
                                label: 'Degree title',
                                type: 'text',
                                validation: yup.string().required(),
                                className: 'col-span-2',
                            },
                            {
                                name: 'owner_percentage',
                                value: data?.owner_percentage,
                                label: 'Owner percentage',
                                type: 'number',
                                validation: yup.number().min(1).max(100).required(),
                                append_text: '%',
                            },
                            {
                                name: 'email',
                                value: data?.email,
                                label: 'Email address',
                                type: 'text',
                                validation: yup.string().nullable(),
                                prepend_icon: 'email',
                            },
                            {
                                name: 'phone_number',
                                value: data?.phone_number,
                                label: 'Phone number',
                                type: 'text',
                                validation: yup.string().required(),
                                prepend_icon: 'phone',
                                mask: '(###) ### ####',
                            },
                            {
                                name: 'national_id',
                                value: data?.national_id,
                                label: 'National id',
                                type: 'text',
                                validation: yup.string().required(),
                            },
                            {
                                name: 'passport_number',
                                value: data?.passport_number,
                                label: 'Passport number',
                                type: 'text',
                                validation: yup.string().required(),
                            },
                        ]"
                    >
                        <template v-slot:other_actions>
                            <q-btn
                                :label="$translate('Close')"
                                color="red"
                                size="small"
                                icon-right="close"
                                class="ml-2"
                                @click="handleForm(false)"
                            />
                        </template>
                    </form-builder-component>
                </server-data>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script>
import FormBuilderComponent from 'components/FormBuilderComponent.vue';
import * as yup from 'yup';
import ServerData from 'components/ServerData.vue';
export default {
    components: { ServerData, FormBuilderComponent },
    props: ['handleForm', 'ownerId', 'companyId'],
    data() {
        return {
            full_mode: false,
        };
    },
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
                this.handleForm(false, 0, true);
            }
        },
    },
};
</script>
