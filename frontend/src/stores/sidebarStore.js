import { defineStore } from 'pinia/dist/pinia';
import { sidebar } from 'src/lib/sidebar';

export const useSidebarStore = defineStore('SidebarStore', {
    state: () => ({
        modules: sidebar,
    }),
    actions: {},
});
