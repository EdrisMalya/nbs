<template>
    <div class="flex items-center justify-between">
        <p class="font-bold">
            {{ $translate('Company list of employees') }}
        </p>
        <q-btn
            :label="$translate('Add new employee')"
            size="small"
            color="primary"
            icon-right="add"
            outline
            @click="handleForm(true, 0)"
        />
    </div>
    <div class="mt-5">
        <datatable-component
            url="employees"
            :filters="{ company_id: companyId }"
            table-name="company_employees"
            delete-permission-key="for-all"
            edit-permission-key="for-all"
            :on-edit="(emp) => handleForm(true, emp?.id)"
            :datatable-actions="[
                {
                    icon: 'list',
                    tooltip: 'Documents',
                    permission_key: 'for-all',
                    show_on_select: true,
                    onClick: (data) => {
                        documents = {
                            model: true,
                            employee_id: data?.id,
                        };
                    },
                },
            ]"
            :columns="[
                {
                    name: 'id',
                    label: 'ID',
                    sortable: true,
                },
                {
                    label: 'Profile image',
                    name: 'profile.url',
                    is_image: true,
                },
                {
                    label: 'Full name',
                    name: 'full_name',
                    sortable: true,
                },
                {
                    label: 'Father name',
                    name: 'father_name',
                    sortable: true,
                },
                {
                    label: 'Degree',
                    name: 'degree.name',
                    sortable: true,
                },
                {
                    label: 'Position',
                    name: 'position.name',
                    sortable: true,
                },
                {
                    label: 'Degree title',
                    name: 'degree_title',
                    sortable: true,
                },
                {
                    label: 'Phone number',
                    name: 'phone_number',
                    sortable: true,
                },
                {
                    label: 'National ID',
                    name: 'national_id',
                    sortable: true,
                },
                {
                    label: 'Passport number',
                    name: 'passport_number',
                    sortable: true,
                },
            ]"
        />
    </div>
    <company-employee-form
        v-if="form.model"
        :company-id="companyId"
        :employee-id="form.employee_id"
        :handle-form="handleForm"
    />
    <q-dialog v-model="documents.model" persistent>
        <q-card class="min-w-[700px]">
            <q-card-section class="flex items-center justify-between">
                <p class="font-bold text-lg">
                    {{ $translate('Employee documents') }}
                </p>
                <div>
                    <q-btn flat size="sm" icon="close" round @click="documents.model = false" />
                </div>
            </q-card-section>
            <q-card-section>
                <record-documents
                    relation-name="employee_documents"
                    :relation-id="documents.employee_id"
                />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script>
import CompanyEmployeeForm from 'pages/Companies/Employee/CompanyEmployeeForm.vue';
import DatatableComponent from 'components/DatatableComponent.vue';
import RecordDocuments from 'components/RecordDocuments.vue';

export default {
    components: { RecordDocuments, DatatableComponent, CompanyEmployeeForm },
    props: ['companyId'],
    data() {
        return {
            form: {
                model: false,
                employee_id: 0,
            },
            documents: {
                model: false,
                employee_id: 0,
            },
        };
    },
    methods: {
        handleForm(model, id = 0, revalidate = false) {
            this.form = { model, employee_id: id };
            if (revalidate) {
                this.$generalStore.revalidate('company_employees');
            }
        },
    },
};
</script>
