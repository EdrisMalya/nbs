<template>
    <slot :onAction="handleAction" />
</template>
<script>
import { api } from 'boot/axios';
import { errorHandler } from 'src/lib/errorHandler';

export default {
    methods: {
        handleAction(
            url,
            revalidateKey,
            method = 'DELETE',
            onSuccess = undefined,
            title = 'Confirm',
            message = 'Are you sure you want to delete?',
            okLabel = 'Yes',
            cancelLabel = 'No'
        ) {
            this.$q
                .dialog({
                    title: this.$translate(title),
                    message: this.$translate(message),
                    dir: this.$localization.direction,
                    cancel: {
                        label: this.$translate(cancelLabel),
                        color: 'green',
                    },
                    ok: {
                        label: this.$translate(okLabel),
                        color: 'red',
                    },
                })
                .onOk(async () => {
                    this.$q.loading.show();
                    try {
                        const result = await api()({
                            url,
                            method,
                        });
                        if (typeof onSuccess !== 'undefined') {
                            if (typeof onSuccess === 'function') onSuccess(result.data);
                        }
                        if (result.data.result) {
                            this.$q.notify({
                                message: this.$translate(result.data.message),
                                color: 'green',
                            });
                            this.$generalStore.revalidate(revalidateKey);
                        } else {
                            this.$q.loading.hide();
                            this.$q.notify({
                                message: this.$translate(result.data.message),
                                color: 'red',
                            });
                        }
                    } catch (error) {
                        errorHandler(error);
                        this.$q.notify({
                            message: this.$translate(`Something went wrong - [error_message]`, {
                                error_message: error?.response?.data?.message,
                            }),
                            color: 'red',
                        });
                    } finally {
                        this.$q.loading.hide();
                    }
                });
        },
    },
};
</script>
