<template>
    <protected-component permission-key="company-access" is-page>
        <div class="flex items-center justify-between">
            <p class="font-bold text-lg">
                {{ $translate('List of companies') }}
            </p>
            <protected-component permission-key="company-create-company">
                <q-btn
                    :label="$translate('Add new company')"
                    size="small"
                    color="primary"
                    icon-right="add"
                    to="companies/form"
                    outline
                />
            </protected-component>
        </div>
        <div class="mt-5"></div>
    </protected-component>
</template>
<script>
import ProtectedComponent from 'components/ProtectedComponent.vue';

export default {
    components: { ProtectedComponent },
};
</script>
