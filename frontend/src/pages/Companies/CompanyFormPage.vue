<template>
    <protected-component permission-key="company-create-company" is-page>
        <div>
            <q-stepper
                header-nav
                class="shadow-0"
                v-model="step"
                ref="stepper"
                color="primary"
                animated
            >
                <q-step
                    name="company_name"
                    :title="$translate('Company information')"
                    :done="done_steps.includes('company_name')"
                    done-color="green"
                >
                    <company-form-component
                        :change-step="changeStep"
                        :on-company-received="(data) => (company = data)"
                    />
                    <q-stepper-navigation v-if="$route.params?.id">
                        <q-btn
                            label="Next"
                            @click="changeStep('owners', 'company_name')"
                            class="float-right -mt-12"
                            icon-right="arrow_forward"
                        />
                    </q-stepper-navigation>
                </q-step>

                <q-step
                    name="owners"
                    :title="$translate('Owners')"
                    icon="people"
                    :done="done_steps.includes('owners')"
                    done-color="green"
                    :disable="!done_steps.includes('company_name')"
                >
                    <company-owners-component
                        v-if="$route.params?.id"
                        :company-id="$route.params?.id"
                    />
                    <q-stepper-navigation class="flex items-center justify-between">
                        <q-btn
                            :label="$translate('Back')"
                            class="mt-3"
                            @click="step = 'company_name'"
                            icon="arrow_left"
                        />
                        <q-btn
                            :label="$translate('Validate & Next')"
                            class="mt-3"
                            color="primary"
                            @click="nextStep('owners', 'employees', 'owners')"
                            icon-right="arrow_right"
                            :loading="loading"
                            :disable="loading"
                        />
                    </q-stepper-navigation>
                </q-step>

                <q-step
                    name="employees"
                    :title="$translate('Employees')"
                    icon="people"
                    done-color="green"
                    :done="done_steps.includes('employees')"
                    :disable="!done_steps.includes('owners')"
                >
                    <company-employee-component :company-id="$route.params.id" />
                </q-step>

                <q-step :name="4" title="Create an ad" icon="add_comment">
                    Try out different ad text to see what brings in the most customers, and learn
                    how to enhance your ads using features like ad extensions. If you run into any
                    problems with your ads, find out how to tell if they're running and how to
                    resolve approval issues.
                </q-step>

                <!--                <template v-slot:navigation>
                    <q-stepper-navigation>
                        <q-btn
                            @click="$refs.stepper.next()"
                            color="primary"
                            :label="step === 4 ? 'Finish' : 'Continue'"
                        />
                        <q-btn
                            v-if="step > 1"
                            flat
                            color="primary"
                            @click="$refs.stepper.previous()"
                            label="Back"
                            class="q-ml-sm"
                        />
                    </q-stepper-navigation>
                </template>-->
            </q-stepper>
        </div>
    </protected-component>
</template>
<script>
import ProtectedComponent from 'components/ProtectedComponent.vue';
import CompanyFormComponent from 'pages/Companies/CompanyFormComponent.vue';
import { ref } from 'vue';
import CompanyOwnersComponent from 'pages/Companies/Owners/CompanyOwnersComponent.vue';
import CompanyEmployeeComponent from 'pages/Companies/Employee/CompanyEmployeeComponent.vue';

export default {
    components: {
        CompanyEmployeeComponent,
        CompanyOwnersComponent,
        CompanyFormComponent,
        ProtectedComponent,
    },
    data() {
        return {
            step: 'company_name',
            done_steps: [],
            loading: false,
            company: null,
        };
    },
    methods: {
        changeStep(step, done_step = null) {
            this.step = step;
            if (done_step !== null) {
                this.done_steps.push(done_step);
            }
        },
        async nextStep(currentStep, nextStep, step) {
            this.loading = true;
            try {
                const result = await this.$api().put(
                    `company/${this.company?.id}/validateStep/${step}`
                );
                if (result.data.result) {
                    this.$q.notify({
                        message: result.data.message,
                        color: 'green',
                    });
                    this.changeStep(nextStep, currentStep);
                } else {
                    this.$q.notify({
                        message: result.data.message,
                        color: 'red',
                    });
                }
            } catch (err) {
                this.$q.notify({
                    message: this.$translate('Something went wrong'),
                    color: 'red',
                });
            } finally {
                this.loading = false;
            }
        },
    },
    watch: {
        company(data) {
            if (data?.has_owner) {
                this.done_steps.push('owners');
            }
            if (data?.has_employee) {
                this.done_steps.push('employees');
            }
        },
    },
};
</script>
