<template>
    <div class="flex items-center justify-between">
        <div />
        <div />
        <p class="font-bold text-lg">{{ $translate('List of company owners') }}</p>
        <q-btn
            :label="$translate('Add new employee')"
            icon-right="add"
            color="primary"
            outline
            size="small"
            @click="handleForm(true, 0)"
        />
    </div>
    <div>
        <q-input
            v-model="search"
            debounce="500"
            :label="$translate('Search by name')"
            dense
            class="w-[30%]"
            clearable
        />
    </div>
    <server-data
        :url="`company/owner/${companyId}?fetch_company_owner=true&search=${search}`"
        id="company_owners"
        v-slot="{ data }"
    >
        <div class="py-8 grid grid-cols-4 gap-3">
            <q-card v-for="owner in data" :key="owner?.id">
                <q-card-section class="text-center">
                    <q-avatar size="100px">
                        <q-img :src="owner?.file?.file_url" />
                    </q-avatar>
                    <p class="text-lg font-bold">
                        {{ owner?.full_name_eng }}
                    </p>
                    <p>
                        {{ owner?.full_name_da }}
                    </p>
                </q-card-section>
                <q-card-section class="text-sm text-gray-500">
                    <q-markup-table
                        class="text-xs shadow-0 !text-left"
                        dense
                        separator="horizontal"
                    >
                        <tr>
                            <th class="font-bold">{{ $translate('Father name English') }}</th>
                            <td>{{ owner?.father_full_name_eng }}</td>
                        </tr>
                        <tr>
                            <th class="font-bold">
                                {{ $translate('Father name Dari') }}
                            </th>
                            <td>
                                {{ owner?.father_full_name_da }}
                            </td>
                        </tr>
                        <tr>
                            <th class="font-bold flex items-center space-x-1">
                                <div>
                                    <q-icon name="phone" size="15px" />
                                </div>
                                <div>
                                    {{ $translate('Phone number') }}
                                </div>
                            </th>
                            <td>{{ owner?.phone_number }}</td>
                        </tr>
                        <tr>
                            <th class="font-bold">
                                {{ $translate('Owner percentage') }}
                            </th>
                            <td><q-badge :label="`${owner?.owner_percentage}%`" /></td>
                        </tr>
                    </q-markup-table>
                </q-card-section>
                <q-card-actions>
                    <q-btn
                        icon="edit"
                        color="orange"
                        round
                        size="sm"
                        flat
                        @click="handleForm(true, owner?.id)"
                    />
                    <action-provider v-slot="{ onAction }">
                        <q-btn
                            icon="delete"
                            @click="onAction(`company/owner/${owner?.id}`, 'company_owners')"
                            color="red"
                            round
                            size="sm"
                            flat
                        />
                    </action-provider>
                    <modal-provider
                        :title="
                            $translate('[owner_full_name] owner details', {
                                owner_full_name: owner?.full_name_eng,
                            })
                        "
                    >
                        <template #activator="{ handleModal }">
                            <q-btn
                                @click="handleModal(true)"
                                flat
                                size="sm"
                                round
                                icon="visibility"
                                color="primary"
                            />
                        </template>
                        <owner-details-component :owner="owner" />
                    </modal-provider>
                    <modal-provider
                        :title="
                            $translate('[owner_full_name] owner documents', {
                                owner_full_name: owner?.full_name_eng,
                            })
                        "
                    >
                        <template #activator="{ handleModal }">
                            <q-btn
                                @click="handleModal(true)"
                                flat
                                size="sm"
                                round
                                icon="list"
                                color="primary"
                            >
                                <q-tooltip>
                                    {{ $translate('List of documents') }}
                                </q-tooltip>
                            </q-btn>
                        </template>
                        <record-documents
                            relation-name="owner_documents"
                            :relation-id="owner?.id"
                        />
                    </modal-provider>
                </q-card-actions>
            </q-card>
        </div>
    </server-data>
    <company-owners-form-modal
        v-if="form.model"
        :handle-form="handleForm"
        :owner-id="form.id"
        :company-id="companyId"
    />
</template>
<script>
import ServerData from 'components/ServerData.vue';
import CompanyOwnersFormModal from 'pages/Companies/Owners/CompanyOwnersFormModal.vue';
import ActionProvider from 'components/ActionProvider.vue';
import ModalProvider from 'components/ModalProvider.vue';
import OwnerDetailsComponent from 'pages/Companies/Owners/OwnerDetailsComponent.vue';
import OwnerDocuments from 'pages/Companies/Owners/OwnerDocuments.vue';
import RecordDocuments from 'components/RecordDocuments.vue';

export default {
    components: {
        RecordDocuments,
        OwnerDetailsComponent,
        ModalProvider,
        ActionProvider,
        CompanyOwnersFormModal,
        ServerData,
    },
    props: ['companyId'],
    data() {
        return {
            form: {
                model: false,
                id: 0,
            },
            search: '',
        };
    },
    methods: {
        handleForm(model, id = 0, revalidate = false) {
            this.form = { model, id };
            if (revalidate) {
                this.$generalStore.revalidate('company_owners');
            }
        },
    },
};
</script>
