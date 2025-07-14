<template>
    <protected-component for-all>
        <q-intersection transition="fade">
            <q-page class="p-3">
                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-2" v-for="data in 6" :key="data">
                        <div
                            class="p-4 flex items-center space-x-3 flex-nowrap rounded-lg shadow bg-gradient-to-b from-blue-400 to-blue-500 text-white"
                        >
                            <div>
                                <div
                                    class="w-14 h-14 bg-white/30 rounded-full p-2 flex items-center justify-center"
                                >
                                    <q-icon name="add_shopping_cart" class="text-2xl" />
                                </div>
                            </div>
                            <div>
                                <p class="text-lg font-bold">{{ $translate('Page') }} {{ data }}</p>
                                <p class="text-2xl font-bolder">{{ data }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-8">
                        <bar-chart />
                    </div>
                    <div class="col-span-4">
                        <polar-area-chart />
                    </div>
                </div>
            </q-page>
        </q-intersection>
    </protected-component>
</template>

<script>
import { defineComponent } from 'vue';
import { useGeneralStore } from 'stores/generalStore';
import ProtectedComponent from 'components/ProtectedComponent.vue';
import { useLanguageStore } from 'stores/languageStore';
import BarChart from 'components/Barchart.vue';
import PolarAreaChart from 'components/PolarAreaChart.vue';

export default defineComponent({
    name: 'IndexPage',
    components: {
        PolarAreaChart,
        BarChart,
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
    data() {
        return {
            dashboardBoxNumber: [1, 2, 3, 4, 5, 6],
        };
    },
    mounted() {
        this.generalStore.setActivePage('home');
        this.generalStore.setPageTitle('Home page');
    },
});
</script>
