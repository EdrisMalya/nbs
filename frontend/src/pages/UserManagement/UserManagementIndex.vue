<template>
    <protected-component permission-key="user-management-access" is-page>
        <div>
            <div class="py-32 text-center">
                <p class="text-xl md:text-2xl">
                    {{ $translate('Welcome to user management section') }}
                </p>
            </div>
        </div>
    </protected-component>
</template>
<script>
import { defineComponent } from 'vue';
import { useGeneralStore } from 'stores/generalStore';
import ProtectedComponent from 'components/ProtectedComponent.vue';

export default defineComponent({
    name: 'UserManagementIndex',
    components: { ProtectedComponent },
    setup() {
        const generalStore = useGeneralStore();
        return {
            generalStore,
        };
    },
    mounted() {
        this.generalStore.setActivePage('user-management');
        this.generalStore.setPageTitle('User management');
    },
});
</script>
