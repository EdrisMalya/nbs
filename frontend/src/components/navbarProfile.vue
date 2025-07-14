<template>
    <q-btn size="small" flat color="white" round icon="person">
        <q-tooltip>
            {{ $translate('Profile') }}
        </q-tooltip>
        <q-menu transition-show="scale" transition-hide="scale">
            <q-list>
                <router-link to="/profile">
                    <q-item clickable v-close-popup>
                        <q-item-section avatar>
                            <q-avatar size="lg" icon="person" color="primary" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ $translate('Profile') }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </router-link>
                <q-item clickable v-close-popup @click="changePassword(true)">
                    <q-item-section avatar>
                        <q-avatar size="lg" icon="lock" color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>
                            {{ $translate('Change password') }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="logout">
                    <q-item-section avatar>
                        <q-avatar size="lg" icon="logout" color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ $translate('Logout') }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>
<script>
import ChangePasswordComponent from 'components/ChangePasswordComponent.vue';
import { useAuthStore } from 'stores/UserManagementStores/AuthStore';

export default {
    setup() {
        const authStore = useAuthStore();
        return {
            authStore,
        };
    },
    methods: {
        changePassword(showCloseButton) {
            this.$q.dialog({
                component: ChangePasswordComponent,
                componentProps: {
                    showCloseButton: showCloseButton,
                },
            });
        },
        logout() {
            this.$q
                .dialog({
                    title: 'Confirm',
                    message: 'Do you really want to log out',
                    cancel: true,
                    persistent: true,
                })
                .onOk(async () => {
                    await this.logoutFunction('Logged out successfully');
                });
        },
        logoutFunction: async function (message, color = 'green') {
            this.$q.loading.show({
                message: 'Some important process  is in progress. Hang on...',
            });
            try {
                await this.authStore.logout();
                this.$q.loading.hide();
                this.$q.notify({
                    message: message,
                    color,
                });
                localStorage.removeItem('token');
                await this.$router.push({ path: '/login' });
            } catch (e) {
                this.$q.notify({
                    message: 'Something went wrong',
                    color: 'red',
                });
                this.$q.loading.hide();
                console.log(e);
            }
            // console.log('>>>> OK')
        },
    },
};
</script>
