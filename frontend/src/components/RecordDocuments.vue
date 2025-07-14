<template>
    <datatable-component
        :url="`document/${relationId}/${relationName}`"
        :datatable-actions="[
            {
                icon: 'add',
                tooltip: 'Add new document',
                permission_key: 'for-all',
                forAll: true,
                onClick: () => {
                    handleForm(true);
                },
            },
        ]"
        :table-name="relationName"
        delete-permission-key="for-all"
        :columns="[
            {
                name: 'id',
                label: 'ID',
                sortable: true,
            },
            {
                name: 'document_title',
                label: 'Document title',
                sortable: true,
            },
            {
                name: 'file.file_name',
                label: 'File name',
                sortable: true,
            },
            {
                name: 'file.file_size',
                label: 'File size',
                sortable: true,
            },
            {
                name: 'file.file_url',
                label: 'file.file_name',
                file_viewer: true,
            },
        ]"
    />
    <document-form-modal
        v-if="form"
        :handle-form="handleForm"
        :relation-id="relationId"
        :relation-name="relationName"
    />
</template>
<script>
import DatatableComponent from 'components/DatatableComponent.vue';
import DocumentFormModal from 'components/DocumentFormModal.vue';

export default {
    components: { DocumentFormModal, DatatableComponent },
    props: ['relationId', 'relationName'],
    data() {
        return {
            form: false,
        };
    },
    methods: {
        handleForm(form) {
            this.form = form;
        },
    },
};
</script>
