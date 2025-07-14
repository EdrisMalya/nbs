<template>
    <div>
        <div class="text-center">
            <q-avatar size="100px">
                <q-img :src="owner?.file?.file_url" />
            </q-avatar>
        </div>
        <form-builder-component
            action="test"
            method="POST"
            class-name="grid grid-cols-3 gap-x-3"
            :hide-submit-button="true"
            submit-area-class-name="col-span-3"
            :fields="[
                {
                    name: 'full_name_eng',
                    value: owner?.full_name_eng,
                    disabled: true,
                    label: 'English full name',
                    type: 'text',
                    validation: yup.string().required(),
                },
                {
                    name: 'full_name_da',
                    value: owner?.full_name_da,
                    disabled: true,
                    label: 'Dari full name',
                    type: 'text',
                    validation: yup.string().required(),
                },
                {
                    name: 'father_full_name_eng',
                    value: owner?.father_full_name_eng,
                    disabled: true,
                    label: 'English father full name',
                    type: 'text',
                    validation: yup.string().required(),
                },
                {
                    name: 'father_full_name_da',
                    value: owner?.father_full_name_da,
                    disabled: true,
                    label: 'Dari father full name',
                    type: 'text',
                    validation: yup.string().required(),
                },
                {
                    label: 'Degree',
                    name: 'degree_id',
                    value: owner?.degree_id,
                    disabled: true,
                    type: 'server-select',
                    url: 'general/degrees',
                    validation: yup.string().required(),
                    create_able: true,
                    className: 'col-span-2',
                },
                {
                    name: 'degree_title',
                    value: owner?.degree_title,
                    disabled: true,
                    label: 'Degree title',
                    type: 'text',
                    validation: yup.string().required(),
                    className: 'col-span-2',
                },
                {
                    name: 'owner_percentage',
                    value: owner?.owner_percentage,
                    disabled: true,
                    label: 'Owner percentage',
                    type: 'number',
                    validation: yup.number().min(1).max(100).required(),
                    append_text: '%',
                },
                {
                    name: 'email',
                    value: owner?.email,
                    disabled: true,
                    label: 'Email address',
                    type: 'text',
                    validation: yup.string().nullable(),
                    prepend_icon: 'email',
                },
                {
                    name: 'phone_number',
                    value: owner?.phone_number,
                    disabled: true,
                    label: 'Phone number',
                    type: 'text',
                    validation: yup.string().required(),
                    prepend_icon: 'phone',
                    mask: '(###) ### ####',
                },
                {
                    name: 'national_id',
                    value: owner?.national_id,
                    disabled: true,
                    label: 'National id',
                    type: 'text',
                    validation: yup.string().required(),
                },
                {
                    name: 'passport_number',
                    value: owner?.passport_number,
                    disabled: true,
                    label: 'Passport number',
                    type: 'text',
                    validation: yup.string().required(),
                },
            ]"
        />
    </div>
</template>

<script>
import FormBuilderComponent from 'components/FormBuilderComponent.vue';
import * as yup from 'yup';

export default {
    components: { FormBuilderComponent },
    props: ['owner'],
    setup() {
        return {
            yup,
        };
    },
};
</script>
