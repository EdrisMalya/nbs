<template>
    <slot name="activator" :handleModal="handleModal" />
    <q-dialog v-model="open" persistent>
        <q-card class="min-w-[800px]">
            <q-card-section>
                <div class="flex items-center justify-between">
                    <p class="text-lg font-bold">{{ title }}</p>
                    <div>
                        <q-btn flat icon="close" round @click="handleModal(false)" />
                    </div>
                </div>
            </q-card-section>
            <q-card-section>
                <slot />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script>
export default {
    props: ['title'],
    data() {
        return {
            open: false,
        };
    },
    methods: {
        handleModal(modal) {
            this.open = modal;
        },
    },
};
</script>
