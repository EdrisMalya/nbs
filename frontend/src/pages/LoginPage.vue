<template>
    <div v-if="fullPageLoading" class="flex items-center justify-center h-screen">
        <q-spinner color="primary" size="3rem" />
    </div>
    <div v-else>
        <q-parallax :height="sh" class="px-5">
            <template v-slot:media>
                <q-img src="~assets/login-bg.jpeg" />
            </template>
            <div
                class="border bg-white shadow-lg max-w-2xl mx-auto p-6 w-[100%] md:w-[50%] lg:w-[25%] rounded-xl"
            >
                <div
                    class="bg-gradient-to-r from-blue-400 to-blue-800 px-3 py-12 -mt-12 rounded-xl shadow-xl"
                >
                    <h3 class="text-3xl text-center text-white">
                        {{ $translate('Sign in') }}
                    </h3>
                </div>
                <div class="my-8 h-[1px] bg-gray-200" />
                <div class="mx-3">
                    <ValidationForm
                        :validation-schema="schema"
                        @submit="onSubmit"
                        class="py-4 flex flex-col"
                    >
                        <Field name="email" v-slot="{ errorMessage, value, field }">
                            <q-input
                                label="Email"
                                :model-value="value"
                                size="small"
                                v-bind="field"
                                :error-message="$translate(errorMessage)"
                                :error="!!errorMessage"
                                outlined
                            >
                                <template v-slot:prepend>
                                    <q-icon name="person" />
                                </template>
                            </q-input>
                        </Field>
                        <Field name="password" v-slot="{ errorMessage, value, field }">
                            <q-input
                                outlined
                                bottom-slots
                                :model-value="value"
                                size="small"
                                v-bind="field"
                                :error-message="$translate(errorMessage)"
                                :error="!!errorMessage"
                                label="Password"
                                :type="showPassword ? 'text' : 'password'"
                            >
                                <template v-slot:append>
                                    <q-btn
                                        :icon="showPassword ? 'visibility_off' : 'visibility'"
                                        size="small"
                                        round
                                        flat
                                        @click="onPasswordButtonClick"
                                    />
                                </template>
                                <template v-slot:prepend>
                                    <q-icon name="lock" />
                                </template>
                            </q-input>
                        </Field>
                        <Field :value="false" name="remember" v-slot="{ value, field }">
                            <q-toggle
                                v-bind="field"
                                :label="$translate('Remember me')"
                                :model-value="value"
                            />
                        </Field>
                        <q-btn
                            class="my-8"
                            color="primary"
                            :loading="loading"
                            type="submit"
                            icon-right="login"
                            :label="$translate('Login')"
                        />
                    </ValidationForm>
                </div>
            </div>
        </q-parallax>
    </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import { Form as ValidationForm, Field } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from 'stores/UserManagementStores/AuthStore';
import { useQuasar } from 'quasar';
import { errorHandler } from 'src/lib/errorHandler';
import { useRouter } from 'vue-router/dist/vue-router';

export default defineComponent({
    name: 'LoginPage',
    components: {
        ValidationForm,
        Field,
    },
    setup() {
        const authStore = useAuthStore();
        const q = useQuasar();
        const router = useRouter();
        const schema = yup.object({
            email: yup.string().required('This section is required'),
            remember: yup.boolean().required('This section is required'),
            password: yup
                .string()
                .required('This section is required')
                .min(6)
                .label('Password')
                .default('password@123'),
        });
        return {
            schema,
            q,
            router,
            authStore,
        };
    },
    data() {
        return {
            email: '',
            password: '',
            showPassword: false,
            loading: false,
            fullPageLoading: true,
            sh: 0,
        };
    },
    methods: {
        onPasswordButtonClick() {
            this.showPassword = !this.showPassword;
        },
        async onSubmit(values, actions) {
            this.loading = true;

            try {
                await this.authStore.getToken();
                const result = await this.authStore.login(
                    values?.email,
                    values?.password,
                    values?.remember
                );
                this.loading = false;
                this.authStore.token = result.data;
                localStorage.setItem('token', result.data);
                this.$q.notify({
                    message: 'Logged in successfully',
                    color: 'green',
                });
                await this.router.push('/');
                window.location.reload();
            } catch (e) {
                this.loading = false;
                this.$q.notify({
                    message: 'Something went wrong',
                    color: 'red',
                });
                errorHandler(e, actions.setErrors);
            }
        },
    },
    async mounted() {
        try {
            await this.authStore.getLoggedInUse();
            this.router.push('/');
        } catch (e) {
            this.fullPageLoading = false;
        }
        this.sh = screen.height;
    },
});
</script>
