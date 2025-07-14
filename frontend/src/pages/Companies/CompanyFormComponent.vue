<template>
    <server-data
        :url="`company/${$route.params?.id}`"
        :fetch-data="updateMode()"
        v-slot="{ data }"
        :on-data-received="
            (data) => {
                if (data) {
                    changeStep('company_name', 'company_name');
                    onCompanyReceived(data);
                }
            }
        "
    >
        <form-builder-component
            class-name="grid grid-cols-4 gap-x-3 mt-4"
            :action="updateMode() ? `company/${$route.params?.id}` : 'company'"
            :method="updateMode() ? 'PUT' : 'POST'"
            :on-submit-completed="onSubmit"
            :submit-label="updateMode() ? 'Update' : 'Save'"
            :fields="[
                {
                    label: 'Company English name',
                    name: 'eng_name',
                    type: 'text',
                    value: data?.eng_name,
                    className: 'col-span-2',
                    validation: yup.string().required(),
                },
                {
                    label: 'Company Dari name',
                    name: 'da_name',
                    type: 'text',
                    value: data?.da_name,
                    className: 'col-span-2',
                    validation: yup.string().required(),
                },
                {
                    label: 'Company type',
                    name: 'company_type_id',
                    type: 'server-select',
                    url: 'general/company-type',
                    value: data?.company_type_id,
                    validation: yup.string().required(),
                    create_able: true,
                },
                {
                    label: 'Total receivable cash guarantee',
                    name: 'cash_guarantee',
                    value: data?.cash_guarantee ?? 0,
                    type: 'money',
                    append_text: 'AFN',
                    validation: yup.string().required(),
                },
                {
                    label: 'License fee',
                    name: 'license_fee',
                    type: 'money',
                    append_text: 'AFN',
                    value: data?.license_fee ?? 0,
                    validation: yup.string().required(),
                },
                {
                    label: 'TIN number',
                    name: 'tin_number',
                    type: 'text',
                    value: data?.tin_number,
                    validation: yup.string().required(),
                },
                {
                    label: 'Establishment date',
                    name: 'establishment_date',
                    type: 'datepicker',
                    value: data?.establishment_date,
                    validation: yup.date().required(),
                },
                {
                    type: 'div',
                    label: 'Company address information',
                    name: 'test',
                    className: 'col-span-4 text-center pb-3 font-bold',
                },
                {
                    label: 'Office number',
                    name: 'office_number',
                    type: 'text',
                    value: data?.office_number,
                    validation: yup.string().required(),
                },
                {
                    label: 'Floor',
                    name: 'floor',
                    type: 'number',
                    value: data?.floor ?? 1,
                    validation: yup.string().required(),
                },
                {
                    label: 'GPS location',
                    name: 'gps_location',
                    type: 'text',
                    value: data?.gps_location,
                    validation: yup.string().required(),
                    className: 'col-span-2',
                },
                {
                    label: 'Market',
                    name: 'market',
                    type: 'text',
                    value: data?.market,
                    validation: yup.string().required(),
                },
                {
                    label: 'Province',
                    name: 'province_id',
                    type: 'server-select',
                    url: 'general/provinces',
                    value: data?.province_id,
                    validation: yup.string().required(),
                },
                {
                    label: 'Zones',
                    name: 'zone_id',
                    type: 'server-select',
                    url: 'general/zones',
                    value: data?.zone_id,
                    validation: yup.string().required(),
                    className: 'col-span-2',
                },
                {
                    type: 'div',
                    name: 'div',
                },
            ]"
        />
    </server-data>
</template>
<script>
import FormBuilderComponent from 'components/FormBuilderComponent.vue';
import * as yup from 'yup';
import ServerData from 'components/ServerData.vue';

export default {
    props: ['changeStep', 'onCompanyReceived'],
    components: { ServerData, FormBuilderComponent },
    setup() {
        return {
            yup,
        };
    },
    methods: {
        onSubmit(data) {
            this.changeStep('owners', 'company_name');
            this.$router.push({ path: `/companies/form/${data?.data?.id}` });
        },
        updateMode() {
            return typeof this.$route.params?.id !== 'undefined';
        },
    },
};
</script>
