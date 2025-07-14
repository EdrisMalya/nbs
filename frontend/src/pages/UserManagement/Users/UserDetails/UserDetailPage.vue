<template>
    <protected-component permission-key="users-view-details" is-pages>
        <div>
            <div class="md:px-2 py-4">
                <div class="flex items-center justify-between">
                    <p class="text-lg font-semibold">
                        {{ translate('User details') }}
                    </p>
                </div>
                <user-detail-layout>
                    <user-details-info v-if="$route.params.active === 'info'" />
                    <user-detail-activity-logs v-if="$route.params.active === 'activity-log'" />
                </user-detail-layout>
            </div>
        </div>
    </protected-component>
</template>
<script>
import { defineComponent } from 'vue';
import ProtectedComponent from 'components/ProtectedComponent.vue';
import { useGeneralStore } from 'stores/generalStore';
import UserDetailLayout from 'pages/UserManagement/Users/UserDetails/UserDetailLayout.vue';
import UserDetailsInfo from 'pages/UserManagement/Users/UserDetails/UserDetailsInfo.vue';
import UserDetailActivityLogs from 'pages/UserManagement/Users/UserDetails/UserDetailActivityLogs.vue';
import { useLanguageStore } from 'stores/languageStore';

export default defineComponent({
    nane: 'UserDetailPage',
    components: {
        UserDetailActivityLogs,
        UserDetailsInfo,
        UserDetailLayout,
        ProtectedComponent,
    },
    setup() {
        const generalStore = useGeneralStore();
        const { translate } = useLanguageStore();
        return {
            generalStore,
            translate,
        };
    },
    mounted() {
        this.generalStore.setActivePage('user-management');
    },
});
</script>
