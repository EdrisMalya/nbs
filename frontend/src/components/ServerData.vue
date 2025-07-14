<template>
    <div
        v-if="!data && !error && fetchData"
        class="flex items-center justify-center"
        :class="!disableDefaultHeigth && ' h-32'"
    >
        <q-spinner size="2rem" color="primary" />
    </div>
    <div v-else-if="error && fetchData" class="text-center text-red-500 py-12">
        <span v-if="error?.response?.data?.message">{{ error?.response?.data?.message }}</span>
        <span v-else> {{ $translate('Something went wrong') }} </span>
    </div>
    <div v-else>
        <slot v-if="data?.length < 1 && !ignoreNull && fetchData" name="not-data">
            <p class="text-red-500 text-center py-12">No data found</p>
        </slot>
        <q-intersection v-else transition="scale">
            <slot :data="data" />
        </q-intersection>
    </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import { api } from 'boot/axios';
import { errorHandler } from 'src/lib/errorHandler';
import { useRouter } from 'vue-router';
import { useGeneralStore } from 'stores/generalStore';
import { useQuasar } from 'quasar';

export default defineComponent({
    name: 'ServerData',
    props: {
        url: {
            type: String,
            default: '',
        },
        fromResource: {
            type: Boolean,
            default: true,
        },
        disableDefaultHeigth: {
            type: Boolean,
            default: false,
        },
        id: {
            type: String,
            default: null,
        },
        ignoreNull: {
            type: Boolean,
            default: false,
        },
        fetchData: {
            type: Boolean,
            default: true,
        },
        onDataReceived: {
            type: Function,
            default: undefined,
        },
        onError: {
            type: Function,
            default: undefined,
        },
    },
    setup(prop) {
        const router = useRouter();
        const generalStore = useGeneralStore();
        const data = ref(undefined);
        const error = ref(null);
        const $q = useQuasar();

        const fetchDataFromServer = async () => {
            if (!prop.fetchData || !prop.url) return;

            try {
                const response = await api().get(prop.url);
                data.value = prop.fromResource ? response.data.data : response.data;
                if (prop.onDataReceived) {
                    prop.onDataReceived(data.value);
                }
            } catch (err) {
                errorHandler(err, '', router);
                error.value = err;
                if (typeof prop.onError !== 'undefined') {
                    prop.onError();
                    $q.notify({
                        message: err?.response?.data?.message,
                        color: 'red',
                    });
                }
            }
        };

        watch(
            () => generalStore.revalidateServerData,
            (newValue) => {
                if ((newValue && newValue === prop.id) || newValue === '*') {
                    data.value = undefined;
                    fetchDataFromServer().finally(() => {
                        generalStore.revalidate(null);
                    });
                }
            }
        );

        watch(
            () => prop.url,
            () => {
                data.value = undefined;
                error.value = null;
                fetchDataFromServer();
            }
        );

        fetchDataFromServer();

        return {
            data,
            error,
        };
    },
    mounted() {
        if (this.data) {
            this.data = this.data;
        }
    },
});
</script>
