<template>
    <q-layout
        :dir="languageStore.direction"
        :class="languageStore.direction === 'rtl' ? 'text-right' : 'text-left'"
    >
        <div v-if="isLoading" class="h-screen flex items-center justify-center">
            <loading-component />
        </div>
        <div
            v-else
            class="h-screen w-full bg-white"
            :class="!collapse_sidebar ? 'grid grid-cols-12' : 'flex flex-nowrap'"
        >
            <div
                class="border-gray-300 h-full"
                :class="`${!collapse_sidebar && 'col-span-2'} ${
                    $localization.direction === 'rtl' ? 'border-l' : 'border-r'
                }`"
            >
                <div class="flex h-full">
                    <div
                        class="flex flex-col h-screen border-gray-300"
                        :class="$localization.direction === 'rtl' ? 'border-l' : 'border-r'"
                    >
                        <div class="flex flex-col gap-3 p-3 overflow-x-hidden flex-nowrap flex-1">
                            <protected-component
                                v-for="{ name, icon, permission_key, tooltip } in modules"
                                :key="name"
                                :for-all="permission_key === 'for-all'"
                                :permission-key="permission_key"
                            >
                                <div
                                    @click="fetchModuleSections(name)"
                                    class="flex items-center justify-center p-3 rounded-xl cursor-pointer hover:bg-gray-200 transition duration-150"
                                    :class="active_module === name && 'bg-blue-200'"
                                >
                                    <q-icon :name="icon" size="md" color="primary">
                                        <q-tooltip>
                                            {{ $translate(tooltip) }}
                                        </q-tooltip>
                                    </q-icon>
                                </div>
                            </protected-component>
                        </div>
                        <div class="my-4 flex items-center justify-center">
                            <q-btn round>
                                <q-avatar>
                                    <q-img :src="$authStore.user.image ?? '~assets/material.png'" />
                                </q-avatar>
                                <q-menu>
                                    <q-card class="w-[400px]">
                                        <q-card-section>
                                            <p class="text-xl font-bold text-center">
                                                {{ $authStore.user.full_name }}
                                            </p>
                                        </q-card-section>
                                        <q-card-section>
                                            <div class="flex items-center space-x-2">
                                                <div>
                                                    <q-icon name="mail" />
                                                </div>
                                                <div>
                                                    {{ $authStore.user.email }}
                                                </div>
                                            </div>

                                            <div class="flex items-center mt-2">
                                                <p class="font-bold">
                                                    {{ $translate('Roles') }}
                                                </p>
                                                <q-chip
                                                    v-for="role in $authStore.user.roles"
                                                    :label="role.name"
                                                    :key="role.id"
                                                    size="md"
                                                />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-menu>
                                <q-tooltip>
                                    {{ $authStore.user.full_name }}
                                </q-tooltip>
                            </q-btn>
                        </div>
                    </div>
                    <div class="flex-1 h-screen overflow-y-auto" v-if="!collapse_sidebar">
                        <p class="font-bold text-lg pb-3 sticky top-0 px-5 pt-5 backdrop-blur">
                            {{ $translate(module_label) }}
                        </p>
                        <div class="px-5">
                            <div v-for="(link, index) in links" :key="index">
                                <div class="border-b my-5 pb-5">
                                    <protected-component
                                        :permission-key="section.permission_key"
                                        :for-all="section.permission_key === 'for-all'"
                                        v-for="section in link"
                                        :key="section.link"
                                    >
                                        <router-link
                                            :to="section.link"
                                            v-if="section.type === 'link'"
                                        >
                                            <p
                                                class="text-[15px] mt-3"
                                                :class="
                                                    checkSectionActive(section)
                                                        ? 'text-blue-800 font-bold'
                                                        : ''
                                                "
                                            >
                                                {{ $translate(section.label) }}
                                            </p>
                                        </router-link>
                                        <div v-else>
                                            <div
                                                class="mt-3 cursor-pointer flex items-center justify-between"
                                                @click="toggleCollapse(section)"
                                            >
                                                <p
                                                    class="text-[15px] flex-1 truncate"
                                                    :class="
                                                        checkSectionActive(section)
                                                            ? 'text-blue-800 font-bold'
                                                            : ''
                                                    "
                                                >
                                                    {{ $translate(section.label) }}
                                                    <q-tooltip>
                                                        {{ $translate(section.label) }}
                                                    </q-tooltip>
                                                </p>
                                                <div>
                                                    <q-icon
                                                        :name="getCollapseIcon(section)"
                                                        size="sm"
                                                    />
                                                </div>
                                            </div>
                                            <q-slide-transition>
                                                <div v-show="shouldShowChildren(section)">
                                                    <div
                                                        class="py-2"
                                                        :class="
                                                            $localization.direction === 'rtl'
                                                                ? 'pr-8'
                                                                : 'pl-8'
                                                        "
                                                    >
                                                        <ul class="list-disc">
                                                            <protected-component
                                                                v-for="sectionLink in section.children"
                                                                :key="sectionLink.link"
                                                                :permission-key="
                                                                    sectionLink.permission_key
                                                                "
                                                                :for-all="
                                                                    sectionLink.permission_key ===
                                                                    'for-all'
                                                                "
                                                            >
                                                                <li
                                                                    class="my-2"
                                                                    :class="
                                                                        checkSectionActive(
                                                                            sectionLink
                                                                        )
                                                                            ? 'text-blue-800 font-bold'
                                                                            : ''
                                                                    "
                                                                >
                                                                    <router-link
                                                                        :to="sectionLink.link"
                                                                    >
                                                                        {{
                                                                            $translate(
                                                                                sectionLink.label
                                                                            )
                                                                        }}
                                                                    </router-link>
                                                                </li>
                                                            </protected-component>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </q-slide-transition>
                                        </div>
                                    </protected-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="h-full overflow-x-auto"
                :class="`${collapse_sidebar ? 'flex-1' : 'col-span-10'}`"
            >
                <div class="sticky top-0 backdrop-blur-xl !z-50">
                    <div
                        class="flex items-center justify-between border-b p-2 bg-blue-500 text-white"
                    >
                        <div>
                            <div class="flex items-center">
                                <div>
                                    <q-btn
                                        :icon="
                                            !collapse_sidebar
                                                ? $localization.direction === 'rtl'
                                                    ? 'keyboard_arrow_right'
                                                    : 'keyboard_arrow_left'
                                                : $localization.direction === 'rtl'
                                                ? 'keyboard_arrow_left'
                                                : 'keyboard_arrow_right'
                                        "
                                        round
                                        flat
                                        color="white"
                                        @click="collapse_sidebar = !collapse_sidebar"
                                    />
                                </div>
                                <h2
                                    class="text-lg"
                                    :class="`${
                                        $localization.direction === 'rtl' ? 'mr-2' : 'ml-2'
                                    }`"
                                >
                                    {{
                                        $translate(
                                            $route.meta.page_title ??
                                                $generalStore.page_title ??
                                                'Page title'
                                        )
                                    }}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <notification-component />
                            <language-selector-component />
                            <navbar-profile />
                        </div>
                    </div>
                    <div
                        v-if="$route?.meta?.breadcrumb?.length > 0"
                        class="p-3 shadow !z-[9999] border"
                    >
                        <q-breadcrumbs>
                            <q-breadcrumbs-el icon="home" to="/" />
                            <q-breadcrumbs-el
                                v-for="data in $route.meta.breadcrumb"
                                :key="data.link"
                                :to="data.link"
                                :label="$translate(data.text)"
                            />
                        </q-breadcrumbs>
                    </div>
                </div>
                <div class="bg-gray-100 h-screen">
                    <div class="p-4">
                        <q-card class="!z-10">
                            <q-card-section>
                                <q-page-container>
                                    <router-view />
                                </q-page-container>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
import { useSidebarStore } from 'stores/sidebarStore';
import ProtectedComponent from 'components/ProtectedComponent.vue';
import LanguageSelectorComponent from 'components/LanguageSelectorComponent.vue';
import NotificationComponent from 'components/NotificationComponent.vue';
import NavbarProfile from 'components/navbarProfile.vue';
import LoadingComponent from 'components/LoadingComponent.vue';
import { useAuthStore } from 'stores/UserManagementStores/AuthStore';
import { useGeneralStore } from 'stores/generalStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useLanguageStore } from 'stores/languageStore';
import { useNotificationsStore } from 'stores/notificationStore';
import { errorHandler } from 'src/lib/errorHandler';
import ChangePasswordComponent from 'components/ChangePasswordComponent.vue';

export default {
    components: {
        LoadingComponent,
        NavbarProfile,
        NotificationComponent,
        LanguageSelectorComponent,
        ProtectedComponent,
    },
    setup() {
        const authStore = useAuthStore();
        const generalStore = useGeneralStore();
        const drawer = ref(false);
        const router = useRouter();
        const q = useQuasar();
        const languageStore = useLanguageStore();
        const notificationsStore = useNotificationsStore();
        q.lang.rtl = false;
        const sidebarStore = useSidebarStore();
        const { modules } = sidebarStore;

        return {
            modules,
            drawer,
            toggleLeftDrawer() {
                drawer.value = !drawer.value;
            },
            router,
            q,
            authStore,
            generalStore,
            languageStore,
            notificationsStore,
        };
    },
    data() {
        return {
            links: [],
            module_label: null,
            active_module: null,
            active_collapse_item: null,
            collapse_sidebar: false,
            isLoading: true,
            active_page: null,
        };
    },
    async mounted() {
        const activeModule = this.$route.meta.active;
        this.fetchModuleSections(activeModule);
        const defaultCollapse = this.$route.meta.collapse_sidebar;
        this.checkDefaultSidebarCollapse(defaultCollapse);
        this.$echo
            .private('applicationChannel')
            .listen('UserUpdatedEvent', (e) => {
                this.authStore.getLoggedInUse();
                if (!e.result?.is_active && e.result?.user_id === this.authStore.user.id) {
                    this.logoutFunction(e.result.message);
                }
            })
            .listen('NotificationPushedEvent', () => {
                this.$q.notify({
                    message: this.$translate('You have a new notification'),
                    color: 'info',
                    position: 'bottom-left',
                });
                this.notificationsStore.fetchNotifications();
            })
            .listen('LanguageWordUpdateEvent', (message) => {
                this.languageStore.getLanguageDictionary();
            })
            .listen('NotifyEvent', (message) => {
                this.$q.notify({
                    message: this.$translate(message?.message),
                    color: message?.color ?? 'green',
                    position: 'bottom-left',
                });
                this.notificationsStore.fetchNotifications();
            })
            .subscribe();

        const language = localStorage.getItem('lang');
        const dir = localStorage.getItem('dir');
        this.languageStore.setLanguage(language ?? 'eng', dir ?? 'ltr');
        try {
            const data = await this.authStore.getLoggedInUse();
            const user = data.data.data;
            if (user.change_password) {
                this.changePassword(false);
            }
            if (!user.is_active) {
                await this.logoutFunction('Your account is disabled', 'red');
            }
            this.isLoading = false;
        } catch (e) {
            errorHandler(e, '', this.router);
        }
    },
    methods: {
        checkDefaultSidebarCollapse(collapse) {
            if (typeof collapse !== 'undefined') {
                if (collapse) {
                    this.collapse_sidebar = true;
                    return true;
                } else {
                    this.collapse_sidebar = false;
                    return false;
                }
            }
            return false;
        },
        fetchModuleSections(module) {
            this.active_module = module;
            const moduleIndex = this.modules.findIndex((md) => md.name === module);
            if (moduleIndex !== -1) {
                this.links = this.modules[moduleIndex].links;
                this.module_label = this.modules[moduleIndex].label;
            }

            const { collapse_sidebar } = this.$route.meta;
            this.collapse_sidebar = false;
        },
        setActivePage(pageName) {
            this.active_page = pageName;
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
                await this.router.push({ path: '/login' });
            } catch (e) {
                this.$q.notify({
                    message: 'Something went wrong',
                    color: 'red',
                });
                this.$q.loading.hide();
            }
            // console.log('>>>> OK')
        },
        changePassword(showCloseButton) {
            this.$q.dialog({
                component: ChangePasswordComponent,
                componentProps: {
                    showCloseButton: showCloseButton,
                },
            });
        },

        checkSectionActive(section) {
            if (this.$route.meta?.active_section) {
                return this.$route.meta.active_section === section.link;
            }

            if (section.type === 'link') {
                return this.$route.path === section.link;
            }

            // Collapsible section with active child
            return this.hasActiveChild(section);
        },

        // Optimized child activity check
        hasActiveChild(section) {
            return section.children?.some(
                (child) =>
                    child.link === this.$route.path ||
                    child.link === this.$route.meta?.active_section
            );
        },

        // Collapse toggle handler
        toggleCollapse(section) {
            this.active_collapse_item =
                this.active_collapse_item === section.label ? null : section.label;
        },

        // Icon determination
        getCollapseIcon(section) {
            if (this.checkSectionActive(section)) return 'keyboard_arrow_down';
            return this.$localization.direction === 'rtl'
                ? 'keyboard_arrow_left'
                : 'keyboard_arrow_right';
        },

        // Visibility check for children
        shouldShowChildren(section) {
            return this.active_collapse_item === section.label || this.checkSectionActive(section);
        },
    },
    watch: {
        '$route.path'() {
            this.active_collapse_item = null;
        },
        '$route.meta'(newValue) {
            this.checkDefaultSidebarCollapse(newValue.collapse_sidebar);
        },
    },
};
</script>
