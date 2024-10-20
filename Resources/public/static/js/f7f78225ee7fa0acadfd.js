(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[42831],{958023:function(){},42831:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}}),s(104072);let{Component:n,State:a,Mixin:o,Context:r}=Shopware,{Criteria:i}=Shopware.Data;var l=n.wrapComponentConfig({template:'\n{% block sw_order_customer_grid %}\n<sw-card\n    class="sw-order-customer-grid"\n    position-identifier="sw-order-customer-grid"\n    :is-loading="isSwitchingCustomer"\n>\n    <template #toolbar>\n        \n        {% block sw_order_customer_grid_toolbar %}\n        <div class="sw-order-customer-grid__toolbar">\n            \n            {% block sw_order_customer_grid_search_input %}\n            <sw-card-filter\n                ref="customerFilter"\n                @sw-card-filter-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_customer_grid_add_new_customer %}\n            <sw-button\n                class="sw-order-customer-grid__add-customer"\n                variant="ghost"\n                size="small"\n                @click="onShowNewCustomerModal"\n            >\n                {{ $tc(\'sw-order.initialModal.customerGrid.buttonAddNewCustomer\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    <template #grid>\n        <div\n            class="sw-order-customer-grid__container"\n        >\n            \n            {% block sw_order_customer_grid_content %}\n            <sw-entity-listing\n                class="sw-order-customer-grid__content"\n                :show-selection="false"\n                :show-settings="false"\n                :items="customers"\n                :columns="customerColumns"\n                :repository="customerRepository"\n                :is-loading="isLoading"\n                :is-record-disabled="customerUnavailable"\n            >\n                \n                {% block sw_order_customer_grid_content_column_select %}\n                <template #column-select="{ item }">\n                    <div class="sw-field__radio-input">\n                        \n                        <input\n                            type="radio"\n                            :checked="isChecked(item)"\n                            :disabled="customerUnavailable(item)"\n                            @change="onCheckCustomer(item)"\n                        >\n                        <div class="sw-field__radio-state"></div>\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_customer_grid_content_grid_column_name %}\n                <template #column-firstName="{ item }">\n                    <router-link\n                        v-if="!customerUnavailable(item)"\n                        :to="{ name: \'sw.customer.detail\', params: { id: item.id } }"\n                    >\n                        {{ item.firstName }} {{ item.lastName }}\n                    </router-link>\n\n                    <div\n                        v-else\n                        v-tooltip.top="{\n                            message: $tc(\'sw-order.initialModal.tooltip.customerUnavailable\'),\n                            disabled: !customerUnavailable(item),\n                        }"\n                    >\n                        {{ item.firstName }} {{ item.lastName }}\n                    </div>\n                </template>\n                {% endblock %}\n\n                <template #column-salesChannel="{ item }">\n                    {{ item.boundSalesChannelId ? item?.boundSalesChannel.translated.name : $tc(\'sw-order.initialModal.customerGrid.labelAllChannel\') }}\n                </template>\n\n                \n                {% block sw_settings_product_feature_set_list_grid_columns_actions %}\n                <template #actions="{ item }">\n                    <sw-context-menu-item\n                        target="_blank"\n                        rel="noopener"\n                        :router-link="{ name: \'sw.customer.detail\', params: { id: item.id } }"\n                    >\n                        {{ $tc(\'sw-order.initialModal.customerGrid.contextOpenButton\') }}\n                    </sw-context-menu-item>\n                </template>\n                {% endblock %}\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_order_customer_grid_empty_state %}\n            <sw-empty-state\n                v-if="showEmptyState"\n                class="sw-order-customer-grid__empty-state"\n                :show-description="false"\n                :title="emptyTitle"\n            >\n                \n                {% block sw_order_customer_grid_empty_state_icon %}\n                <template #icon>\n                    <img\n                        :src="assetFilter(\'/administration/static/img/empty-states/customer-empty-state.svg\')"\n                        :alt="$tc(\'sw-customer.list.messageEmpty\')"\n                    >\n                </template>\n                {% endblock %}\n            </sw-empty-state>\n            {% endblock %}\n        </div>\n\n        \n        {% block sw_order_customer_grid_new_customer_modal %}\n        <sw-order-new-customer-modal\n            v-if="showNewCustomerModal"\n            @on-select-existing-customer="onAddNewCustomer"\n            @close="showNewCustomerModal = false"\n        />\n        {% endblock %}\n\n        {% block sw_order_customer_grid_sales_channel_select_modal %}\n        <sw-modal\n            v-if="showSalesChannelSelectModal"\n            class="sw-order-customer-grid__sales-channel-selection-modal"\n            :title="$tc(\'sw-order.initialModal.customerGrid.titleSelectSalesChannel\')"\n            @modal-close="onCloseSalesChannelSelectModal"\n        >\n            <template #default>\n                {% block sw_order_customer_grid_sales_channel_description %}\n                <p class="sw-order-customer-grid__sales-channel-selection--description">\n                    {{ $tc(\'sw-order.initialModal.customerGrid.descriptionSelectSalesChannel\') }}\n                </p>\n                {% endblock %}\n\n                \n                {% block sw_order_customer_grid_sales_channel_select %}\n                <sw-entity-single-select\n                    class="sw-order-customer-grid__sales-channel-selection"\n                    entity="sales_channel"\n                    :criteria="salesChannelCriteria"\n                    :label="$tc(\'sw-order.initialModal.customerGrid.labelSalesChannel\')"\n                    :placeholder="$tc(\'sw-order.initialModal.customerGrid.placeholderSalesChannel\')"\n                    :value="customer.salesChannelId"\n                    @update:value="onSalesChannelChange"\n                />\n                {% endblock %}\n\n                {% block sw_order_customer_grid_sales_channel_notification_alert %}\n                <sw-alert\n                    class="sw-order-customer-grid__sales-channel-selection--notification-alert"\n                    variant="warning"\n                    :show-icon="false"\n                >\n                    {{ $tc(\'sw-order.initialModal.customerGrid.alertSelectSalesChannel\') }}\n                </sw-alert>\n                {% endblock %}\n            </template>\n\n            <template #modal-footer>\n                \n                {% block sw_order_customer_grid_sales_channel_action_close %}\n                <sw-button\n                    size="small"\n                    @click="onCloseSalesChannelSelectModal"\n                >\n                    {{ $tc(\'global.default.cancel\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_customer_grid_sales_channel_action_select %}\n                <sw-button\n                    size="small"\n                    variant="primary"\n                    :is-loading="isLoading"\n                    :disabled="isSelectSalesChannelDisabled"\n                    @click="onSelectSalesChannel"\n                >\n                    {{ $tc(\'sw-order.initialModal.customerGrid.buttonSelectSalesChannel\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-modal>\n        {% endblock %}\n\n        {% block sw_order_customer_grid_customer_changes_modal %}\n        <sw-modal\n            v-if="showCustomerChangesModal"\n            class="sw-order-customer-grid__customer-changes-modal"\n            :title="$tc(\'sw-order.initialModal.customerGrid.titleCustomerChanges\')"\n            @modal-close="onCloseSalesChannelSelectModal"\n        >\n            <template #default>\n                {% block sw_order_customer_grid_customer_changes_modal_description %}\n                <p class="sw-order-customer-grid__customer-changes--description">\n                    {{ $tc(\'sw-order.initialModal.customerGrid.descriptionCustomerChanges\') }}\n                </p>\n                {% endblock %}\n            </template>\n\n            <template #modal-footer>\n                \n                {% block sw_order_customer_grid_customer_changes_modal_action_close %}\n                <sw-button\n                    size="small"\n                    @click="onCloseCustomerChangesModal"\n                >\n                    {{ $tc(\'global.default.cancel\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_customer_grid_customer_changes_modal_action_changes %}\n                <sw-button\n                    size="small"\n                    variant="primary"\n                    :is-loading="isLoading"\n                    @click="onChangeCustomer"\n                >\n                    {{ $tc(\'sw-order.initialModal.customerGrid.buttonChangeCustomer\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-modal>\n        {% endblock %}\n    </template>\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","feature"],mixins:[o.getByName("listing"),o.getByName("notification")],data(){return{customers:null,isLoading:!1,isSwitchingCustomer:!1,showNewCustomerModal:!1,customer:null,customerDraft:null,disableRouteParams:!0,showSalesChannelSelectModal:!1,showCustomerChangesModal:!1,salesChannelIds:[]}},computed:{customerData(){return a.get("swOrder").customer},customerRepository(){return this.repositoryFactory.create("customer")},customerCriteria(){let e=new i(this.page,this.limit);return e.addAssociation("salesChannel"),e.addAssociation("boundSalesChannel"),e.addSorting(i.sort("createdAt","DESC")),this.term&&e.setTerm(this.term),e},customerCriterion(){let e=new i(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel.languages").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags").addAssociation("boundSalesChannel"),this.feature.isActive("v6.7.0.0")||e.addAssociation("defaultPaymentMethod"),e},customerColumns(){return[{property:"select",label:""},{property:"firstName",dataIndex:"lastName,firstName",label:this.$tc("sw-order.initialModal.customerGrid.columnCustomerName"),primary:!0},{property:"customerNumber",label:this.$tc("sw-order.initialModal.customerGrid.columnCustomerNumber")},{property:"salesChannel",label:this.$tc("sw-order.initialModal.customerGrid.columnSalesChannel")},{property:"email",label:this.$tc("sw-order.initialModal.customerGrid.columnEmailAddress")}]},showEmptyState(){return!this.total&&!this.isLoading},emptyTitle(){return this.term?this.$tc("sw-order.initialModal.customerGrid.textEmptySearch",0,{name:this.term}):this.$tc("sw-customer.list.messageEmpty")},cart(){return a.get("swOrder").cart},assetFilter(){return Shopware.Filter.getByName("asset")},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},salesChannelCriteria(){let e=new i;return e.addFilter(i.equals("active",!0)),this.customer?.boundSalesChannelId&&e.addFilter(i.equals("id",this.customer.boundSalesChannelId)),e},isSelectSalesChannelDisabled(){return!this.customer?.salesChannelId||!this.salesChannelIds.includes(this.customer.salesChannelId)}},mounted(){this.mountedComponent()},methods:{async mountedComponent(){this.salesChannelIds=await this.loadSalesChannel(),this.customerData&&(this.$refs.customerFilter.term=this.customerData?.customerNumber,this.onCheckCustomer(this.customerData))},getList(){return this.isLoading=!0,this.customerRepository.search(this.customerCriteria).then(e=>{this.customers=e,this.total=e.total}).finally(()=>{this.isLoading=!1})},onShowNewCustomerModal(){this.showNewCustomerModal=!0},isChecked(e){return e.id===this.customer?.id},async onCheckCustomer(e){this.customer&&(this.customerDraft=this.customer),this.customer=await this.customerRepository.get(e.id,r.api,this.customerCriterion);let t=(this.customer?.salesChannel?.languages||[]).some(e=>e.id===r.api.systemLanguageId);if(!t&&this.customer?.salesChannel?.languageId&&a.commit("context/setLanguageId",this.customer.salesChannel.languageId),t&&!a.getters["context/isSystemDefaultLanguage"]&&a.commit("context/resetLanguageToDefault"),!this.customer?.boundSalesChannelId){this.showSalesChannelSelectModal=!0;return}if(this.customerDraft&&this.customer?.boundSalesChannelId&&this.customerDraft.salesChannelId!==this.customer.boundSalesChannelId){this.showCustomerChangesModal=!0;return}this.handleSelectCustomer()},createCart(e){return a.dispatch("swOrder/createCart",{salesChannelId:e})},setCustomer(e){a.dispatch("swOrder/selectExistingCustomer",{customer:e})},async handleSelectCustomer(){this.isSwitchingCustomer=!0;try{this.cart.token||await this.createCart(this.customer?.salesChannelId??""),this.setCustomer(this.customer),await this.updateCustomerContext()}catch{this.createNotificationError({message:this.$tc("sw-order.create.messageSwitchCustomerError")})}finally{this.isSwitchingCustomer=!1}},onAddNewCustomer(e){e&&(this.getList(),this.page=1,this.term="")},updateCustomerContext(){return a.dispatch("swOrder/updateCustomerContext",{customerId:this.customer?.id,salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token}).then(e=>{200===e.status&&this.getCart()})},getCart(){return a.dispatch("swOrder/getCart",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token})},async loadSalesChannel(){let{data:e}=await this.salesChannelRepository.searchIds(this.salesChannelCriteria);return e},onSalesChannelChange(e){this.customer&&(this.customer.salesChannelId=e)},onCloseSalesChannelSelectModal(){this.customer=this.customerDraft,this.showSalesChannelSelectModal=!1},async onSelectSalesChannel(){this.isLoading=!0;try{await this.handleSelectCustomer()}finally{this.isLoading=!1,this.showSalesChannelSelectModal=!1}},customerUnavailable(e){return!this.salesChannelIds.length||!!e?.boundSalesChannelId&&!this.salesChannelIds.includes(e.boundSalesChannelId)},async onChangeCustomer(){this.isLoading=!0;try{await this.handleSelectCustomer()}finally{this.isLoading=!1,this.showCustomerChangesModal=!1}},onCloseCustomerChangesModal(){this.customer=this.customerDraft,this.showCustomerChangesModal=!1}}})},104072:function(e,t,s){var n=s(958023);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(745346).Z)("4894c682",n,!0,{})}}]);