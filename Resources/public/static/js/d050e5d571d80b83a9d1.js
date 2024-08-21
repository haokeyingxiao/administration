(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[24090],{30886:function(){},824090:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}}),r(32945);let{Mixin:d}=Shopware,{Criteria:s}=Shopware.Data,t=Shopware.Classes.ApiService,i=Shopware.Utils.format;var a={template:'\n{% block sw_order_detail_base_order_overview %}\n<sw-card\n    class="sw-order-user-card"\n    position-identifier="sw-order-user-card"\n    :title="$tc(\'sw-order.detailBase.cardTitleDetails\')"\n    :is-loading="isLoading"\n>\n\n    \n    {% block sw_order_detail_base_address_modal %}\n    <sw-order-address-modal\n        v-if="addressBeingEdited"\n        :countries="countries"\n        :address="addressBeingEdited"\n        :order="currentOrder"\n        :version-context="versionContext"\n        @address-select="onAddressModalAddressSelected"\n        @reset="onResetOrder"\n        @save="onAddressModalSave"\n        @error="$emit(\'error\')"\n    />\n    {% endblock %}\n\n    <template #grid>\n        <sw-container rows="auto auto">\n\n            \n            {% block sw_order_user_card_row_primary %}\n            <sw-card-section divider="bottom">\n\n                \n                {% block sw_order_user_card_metadata_container %}\n                <sw-container\n                    columns="80px 1fr max-content"\n                    gap="0px 30px"\n                    align="center"\n                    class="sw-order-user-card__container"\n                >\n\n                    \n                    {% block sw_order_user_card_avatar %}\n                    <sw-avatar\n                        size="80px"\n                        color="$route.meta.$module.color"\n                        :first-name="currentOrder.orderCustomer.firstName"\n                        :last-name="currentOrder.orderCustomer.lastName"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_order_user_card_metadata %}\n                    <div class="sw-order-user-card__metadata">\n                        \n                        {% block sw_order_user_card_metadata_user_name %}\n                        <div\n                            v-if="currentOrder.orderCustomer"\n                            class="sw-order-user-card__metadata-user-name"\n                        >\n                            {{ fullName }}\n                        </div>\n                        {% endblock %}\n                        \n                        {% block sw_order_user_card_metadata_tags %}\n\n                        <sw-entity-tag-select\n                            v-if="isEditing || hasTags"\n                            class="sw-order-user-card__tag-select"\n                            :placeholder="$tc(\'sw-order.detailBase.placeholderTagSelect\')"\n                            :size="!isEditing ? \'default\' : \'medium\'"\n                            :disabled="!isEditing"\n                            :entity-collection="currentOrder.tags"\n                            @item-add="onAddTag"\n                            @item-remove="onRemoveTag"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_detail_base_info_summary %}\n                    <div class="sw-order-user-card__info-summary">\n                        \n                        {% block  sw_order_detail_base_info_summary_entries %}\n                        <div class="sw-order-user-card__metadata-price">\n                            {{ currencyFilter(currentOrder.amountTotal, currentOrder.currency.isoCode) }}\n                        </div>\n\n                        <div class="sw-order-user-card__metadata-item">\n                            {{ orderDate }}\n                        </div>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                </sw-container>\n                {% endblock %}\n\n                <slot name="additional-actions">\n                    \n                    {% block sw_order_user_card_slot_additional_actions %}{% endblock %}\n                </slot>\n\n                \n                {% block sw_order_detail_base_order_overview_columns %}\n                <sw-container\n                    columns="repeat(auto-fit, minmax(250px, 1fr))"\n                    gap="30px 30px"\n                >\n\n                    \n                    {% block sw_order_detail_base_order_overview_left_column %}\n                    <sw-description-list\n                        columns="1fr"\n                        grid="1fr"\n                        class="sw-order-user-card__summary-vertical"\n                    >\n\n                        \n                        {% block sw_order_detail_base_order_overview_email %}\n                        <dt>{{ $tc(\'sw-order.detailBase.labelCustomerEmail\') }}*</dt>\n                        <dd>\n                            <sw-order-inline-field\n                                v-model:value="currentOrder.orderCustomer.email"\n                                :display-value="currentOrder.orderCustomer.email ? currentOrder.orderCustomer.email : $tc(\'sw-order.detailBase.labelNoEmail\')"\n                                required\n                                :editable="isEditing"\n                                @update:value="$emit(\'order-change\')"\n                            />\n                        </dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_order_overview_billing_address %}\n                        <dt>\n                            {{ $tc(\'sw-order.detailBase.headlineBillingAddress\') }}\n                            <sw-button\n                                v-if="isEditing"\n                                class="sw-order-user-card__address-edit-button"\n                                size="small"\n                                @click="onEditBillingAddress"\n                            >\n                                {{ $tc(\'sw-order.detailBase.buttonEditAddress\') }}\n                            </sw-button>\n                        </dt>\n                        <dd\n                            role="button"\n                            tabindex="0"\n                            @click="onEditBillingAddress"\n                            @keydown.enter="onEditBillingAddress">\n                            <sw-address\n                                :address="billingAddress"\n                                :formatting-address="formattingAddress"\n                            />\n                        </dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_order_overview_left_column_slot %}\n                        {% endblock %}\n\n                    </sw-description-list>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_detail_base_order_overview_right_column %}\n                    <sw-description-list\n                        columns="1fr"\n                        grid="1fr"\n                        class="sw-order-user-card__summary-vertical"\n                    >\n\n                        \n                        {% block sw_order_detail_base_order_overview_phone_number %}\n                        <dt>\n                            {{ $tc(\'sw-order.detailBase.labelCustomerPhoneNumber\') }}\n                            <sw-label\n                                v-if="hasDifferentBillingAndShippingAddress"\n                                size="small"\n                                appearance="pill"\n                                class="sw-order-user-card__address-phone-label"\n                            >\n                                {{ $tc(\'sw-order.detailBase.headlineBillingAddress\') }}\n                            </sw-label>\n                        </dt>\n                        <dd>\n                            <sw-order-inline-field\n                                v-model:value="billingAddress.phoneNumber"\n                                :display-value="billingAddress.phoneNumber? billingAddress.phoneNumber : $tc(\'sw-order.detailBase.labelNoPhoneNumber\')"\n                                :editable="isEditing"\n                                class="sw-order-inline-field__truncateable"\n                                @update:value="$emit(\'order-change\')"\n                            />\n                        </dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_order_overview_shipping_address %}\n                        <dt>\n                            {{ $tc(\'sw-order.detailBase.headlineDeliveryAddress\') }}\n                            <sw-button\n                                v-show="hasDifferentBillingAndShippingAddress && isEditing"\n                                class="sw-order-user-card__address-edit-button"\n                                size="small"\n                                @click="onEditDeliveryAddress"\n                            >\n                                {{ $tc(\'sw-order.detailBase.buttonEditAddress\') }}\n                            </sw-button>\n                        </dt>\n\n                        <dd v-if="!hasDifferentBillingAndShippingAddress && hasDeliveries">\n                            <span>\n                                {{ $tc(\'sw-order.detailBase.labelSameDeliveryAndBillingAddress\') }}\n                            </span>\n                            <sw-button\n                                v-show="!hasDifferentBillingAndShippingAddress && isEditing"\n                                class="sw-order-user-card__address-add-button"\n                                size="small"\n                                block\n                                @click="onAddNewDeliveryAddress"\n                            >\n                                {{ $tc(\'sw-order.detailBase.buttonAddDeliveryAddress\') }}\n                            </sw-button>\n                        </dd>\n\n                        <dd\n                            v-else-if="hasDeliveries"\n                            role="button"\n                            tabindex="0"\n                            @click="$emit(\'onEditDeliveryAddress\',$event)"\n                            @keydown.enter="$emit(\'onEditDeliveryAddress\',$event)"\n                        >\n                            <sw-address\n                                :address="delivery.shippingOrderAddress"\n                                :formatting-address="formattingAddress"\n                            />\n                        </dd>\n\n                        <dd v-else>\n                            {{ $tc(\'sw-order.detailBase.labelNoDeliveriesYet\') }}\n                        </dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_order_overview_right_column_slot %}\n                        {% endblock %}\n\n                    </sw-description-list>\n                    {% endblock %}\n\n                </sw-container>\n                {% endblock %}\n\n            </sw-card-section>\n            {% endblock %}\n\n            \n            {% block sw_order_user_card_row_secondary %}\n            <sw-card-section\n                secondary\n                slim\n            >\n\n                \n                {% block sw_order_detail_base_secondary_info_order_overview %}\n                <sw-container\n                    columns="repeat(auto-fit, minmax(250px, 1fr))"\n                    gap="30px 30px"\n                >\n\n                    \n                    {% block sw_order_detail_base_secondary_info_order_overview_contents %}\n                    <sw-description-list\n                        columns="1fr"\n                        grid="1fr"\n                        class="sw-order-user-card__summary-vertical"\n                    >\n\n                        \n                        {% block sw_order_detail_base_secondary_info_order_overview_left_column %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_sales_channel %}\n                        <dt>{{ $tc(\'sw-order.detailBase.labelSalesChannel\') }}</dt>\n                        <dd class="sw-order-base__label-sales-channel">\n                            {{ currentOrder.salesChannel.translated.name }}\n                        </dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_payment %}\n                        <template v-if="currentOrder.transactions.length > 0">\n                            <dt>{{ $tc(\'sw-order.detailBase.labelPaymentMethod\') }}</dt>\n                            <dd>\n                                {{ currentOrder.transactions.last().paymentMethod.translated.distinguishableName }}\n                            </dd>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_delivery %}\n                        <dt>{{ $tc(\'sw-order.detailBase.labelShippingMethod\') }}</dt>\n                        <dd>{{ hasDeliveries ? delivery.shippingMethod.translated.name :$tc(\'sw-order.detailBase.labelNoDeliveriesYet\') }}</dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_affiliate %}\n                        <dt>{{ $tc(\'sw-order.detailBase.labelAffiliateCode\') }}</dt>\n                        <dd>{{ currentOrder.affiliateCode || \'-\' }}</dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_order_overview_left_column_slot %}\n                        {% endblock %}\n\n                        {% endblock %}\n                    </sw-description-list>\n\n                    <sw-description-list\n                        columns="1fr"\n                        grid="1fr"\n                        class="sw-order-user-card__summary-vertical"\n                    >\n                        {%  block sw_order_detail_base_secondary_info_order_overview_right_column %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_order_language %}\n                        <dt>{{ $tc(\'sw-order.detailBase.labelLanguage\') }}</dt>\n                        <dd>{{ currentOrder.language.name }}</dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_last_change %}\n                        <dt>{{ $tc(\'sw-order.detailBase.labelLastChange\') }}</dt>\n                        <dd>{{ lastChangedDate }}</dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_tracking_codes %}\n                        <template v-if="isEditing && delivery">\n                            \n                            {% block sw_order_detail_base_secondary_info_tracking_codes_input %}\n                            <dt>\n                                \n                                {% block sw_order_detail_base_secondary_info_tracking_codes_input_label %}\n                                {{ $tc(\'sw-order.detailBase.labelTrackingCodes\') }}\n                                {% endblock %}\n                            </dt>\n                            <dd>\n                                \n                                {% block sw_order_detail_base_secondary_info_tracking_codes_input_content %}\n                                <sw-multi-tag-select\n                                    v-model:value="delivery.trackingCodes"\n                                    class="sw-order-user-card__tracking-code-select"\n                                    :placeholder="$tc(\'sw-order.detailBase.placeholderTrackingCodeSelect\')"\n                                    @update:value="emitChange"\n                                >\n                                    <template #message-add-data>\n                                        <span>{{ $tc(\'sw-order.detailBase.addTrackingCode\') }}</span>\n                                    </template>\n                                    <template #message-enter-valid-data>\n                                        <span>{{ $tc(\'sw-order.detailBase.enterValidTrackingCode\') }}</span>\n                                    </template>\n                                </sw-multi-tag-select>\n                                {% endblock %}\n                            </dd>\n                            {% endblock %}\n                        </template>\n                        <template v-else-if="delivery">\n                            \n                            {% block sw_order_detail_base_secondary_info_tracking_codes_display %}\n                            <dt>\n                                \n                                {% block sw_order_detail_base_secondary_info_tracking_codes_display_label %}\n                                {{ $tc(\'sw-order.detailBase.labelTrackingCodes\') }}\n                                {% endblock %}\n                            </dt>\n                            <dd>\n                                \n                                {% block sw_order_detail_base_secondary_info_tracking_codes_display_content %}\n                                <sw-button\n                                    v-for="trackingCode in delivery.trackingCodes"\n                                    :key="trackingCode"\n                                    class="sw-order-user-card__tracking-code-link"\n                                    size="x-small"\n                                    :link="renderTrackingUrl(trackingCode, delivery.shippingMethod)"\n                                    :disabled="!renderTrackingUrl(trackingCode, delivery.shippingMethod)"\n                                >{{ trackingCode }}</sw-button>\n                                {% endblock %}\n                            </dd>\n                            {% endblock %}\n                        </template>\n                        <template v-else>\n                            \n                            {% block sw_order_detail_base_secondary_info_tracking_codes_empty %}\n                            <dt>\n                                \n                                {% block sw_order_detail_base_secondary_info_tracking_codes_empty_label %}\n                                {{ $tc(\'sw-order.detailBase.labelTrackingCodes\') }}\n                                {% endblock %}\n                            </dt>\n                            <dd>\n                                \n                                {% block sw_order_detail_base_secondary_info_tracking_codes_empty_content %}\n                                <span>-</span>\n                                {% endblock %}\n                            </dd>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_campaign %}\n                        <template v-if="currentOrder.campaignCode">\n                            <dt>{{ $tc(\'sw-order.detailBase.labelCampaignCode\') }}</dt>\n                            <dd>{{ currentOrder.campaignCode || \'-\' }}</dd>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_base_secondary_info_order_overview_right_column_slot %}\n                        {% endblock %}\n\n                        {% endblock %}\n\n                    </sw-description-list>\n                    {% endblock %}\n\n                </sw-container>\n                {% endblock %}\n\n            </sw-card-section>\n            {% endblock %}\n\n        </sw-container>\n    </template>\n</sw-card>\n\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["customSnippetApiService","orderService","repositoryFactory","feature"],emits:["error","order-change","onEditDeliveryAddress","order-reset"],mixins:[d.getByName("salutation")],props:{currentOrder:{type:Object,required:!0},versionContext:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},isEditing:{type:Boolean,required:!0}},data(){return{addressBeingEdited:null,countries:null,formattingAddress:""}},computed:{countryRepository(){return this.repositoryFactory.create("country")},orderAddressRepository(){return this.repositoryFactory.create("order_address")},OrderTagRepository(){return this.repositoryFactory.create(this.currentOrder.tags.entity,this.currentOrder.tags.source)},billingAddress(){return this.currentOrder.addresses.find(e=>e.id===this.currentOrder.billingAddressId)},delivery(){return this.currentOrder.deliveries[0]},orderDate(){return this.currentOrder&&!this.currentOrder.isLoading?i.date(this.currentOrder.orderDateTime):""},hasDeliveries(){return this.currentOrder.deliveries.length>0},hasDeliveryTrackingCode(){return this.hasDeliveries&&this.delivery.trackingCodes.length},hasDifferentBillingAndShippingAddress(){return this.hasDeliveries&&this.billingAddress.id!==this.delivery.shippingOrderAddressId},lastChangedDate(){return this.currentOrder?this.currentOrder.updatedAt?i.date(this.currentOrder.updatedAt):i.date(this.currentOrder.orderDateTime):""},hasTags(){return 0!==this.currentOrder.tags.length},fullName(){return Object.values({name:this.salutation(this.currentOrder.orderCustomer),company:this.currentOrder.orderCustomer.company}).filter(e=>null!==e).join(" - ").trim()},currencyFilter(){return Shopware.Filter.getByName("currency")}},created(){this.createdComponent()},methods:{createdComponent(){this.reload(),this.renderFormattingAddress()},renderFormattingAddress(){this.customSnippetApiService.render(this.billingAddress,this.billingAddress.country?.addressFormat).then(e=>{this.formattingAddress=e.rendered})},reload(){this.countryRepository.search(this.countryCriteria()).then(e=>{this.countries=e})},countryCriteria(){let e=new s(1,100);return e.addSorting(s.sort("name","ASC")),e},onEditBillingAddress(){this.isEditing&&(this.addressBeingEdited=this.billingAddress)},onEditDeliveryAddress(){this.isEditing&&(this.addressBeingEdited=this.delivery.shippingOrderAddress)},onAddressModalSave(){this.addressBeingEdited=null,this.$nextTick(()=>{this.emitChange()})},onResetOrder(){this.addressBeingEdited=null,this.$nextTick(()=>{this.$emit("order-reset")})},onAddressModalAddressSelected(e){let n=this.addressBeingEdited.id;this.addressBeingEdited=null,this.$nextTick(()=>this.orderService.changeOrderAddress(n,e.id,{},t.getVersionHeader(this.currentOrder.versionId)).then(()=>{this.emitChange()}).catch(e=>{this.$emit("error",e)}))},onAddNewDeliveryAddress(){this.isEditing&&this.orderAddressRepository.clone(this.delivery.shippingOrderAddressId,{},this.versionContext).then(e=>{this.delivery.shippingOrderAddressId=e.id,this.emitChange()}).catch(e=>{this.$emit("error",e)})},emitChange(){this.$emit("order-change")},onAddTag(e){this.OrderTagRepository.assign(e.id,Shopware.Context.api).then(()=>{this.emitChange()})},onRemoveTag(e){this.OrderTagRepository.delete(e.id).then(()=>{this.emitChange()})},renderTrackingUrl(e,n){let r=n?n.trackingUrl:null;return r?r.replace("%s",encodeURIComponent(e)):""}}}},32945:function(e,n,r){var d=r(30886);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals),(0,r(745346).Z)("5d41dfe1",d,!0,{})}}]);