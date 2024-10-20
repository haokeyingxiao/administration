(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[87074],{530760:function(){},539613:function(e,s){"use strict";s.Z=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},687074:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}}),t(506639);var r=t(539613);let{Mixin:n}=Shopware,{Criteria:o}=Shopware.Data,{mapPageErrors:i}=Shopware.Component.getComponentHelper();var a={template:'\n{% block sw_order_new_customer_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.createBase.detailsHeader.buttonAddNewCustomer\')"\n    @modal-close="onClose"\n>\n    \n    {% block sw_order_new_customer_modal_tabs %}\n    <sw-tabs\n        class="sw-order-new-customer-modal"\n        position-identifier="sw-order-new-customer-modal"\n        default-item="details"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_order_new_customer_modal_tabs_details %}\n            <sw-tabs-item\n                name="details"\n                :active-tab="active"\n                :has-error="swOrderNewCustomerDetailError"\n            >\n                {{ $tc(\'sw-order.newCustomerModal.labelDetails\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_order_new_customer_modal_tabs_billing %}\n            <sw-tabs-item\n                name="billingAddress"\n                :active-tab="active"\n                :has-error="swOrderNewCustomerAddressError"\n            >\n                {{ $tc(\'sw-order.createBase.detailsBody.labelBillingAddress\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_order_new_customer_modal_tabs_shipping %}\n            <sw-tabs-item\n                name="shippingAddress"\n                :active-tab="active"\n                :has-error="!isSameBilling && swOrderNewCustomerAddressError"\n            >\n                {{ $tc(\'sw-order.createBase.detailsBody.labelShippingAddress\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            \n            {% block sw_order_new_customer_modal_content_details %}\n            <div v-if="active ===\'details\'">\n                \n                {% block sw_order_new_customer_modal_content_details_guest %}\n                <sw-switch-field\n                    v-model:value="customer.guest"\n                    no-margin-top\n                    :label="$tc(\'sw-order.newCustomerModal.labelGuest\')"\n                />\n                {% endblock %}\n                \n                {% block sw_order_new_customer_modal_content_details_form %}\n                <sw-customer-base-form\n                    :is-loading="isLoading"\n                    :customer="customer"\n                    @sales-channel-change="onChangeSalesChannel"\n                />\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_new_customer_modal_content_shipping %}\n            <div v-if="active === \'shippingAddress\'">\n                \n                {% block sw_order_new_customer_modal_content_shipping_same_billing %}\n                <sw-switch-field\n                    v-model:value="isSameBilling"\n                    no-margin-top\n                    :label="$tc(\'sw-customer.addressForm.labelSameBillingAddress\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_order_new_customer_modal_content_shipping_form %}\n                <sw-customer-address-form\n                    :customer="customer"\n                    :disabled="isSameBilling"\n                    :address="shippingAddress"\n                />\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_new_customer_modal_content_billing %}\n            <div v-if="active ===\'billingAddress\'">\n                \n                {% block sw_order_new_customer_modal_content_billing_form %}\n                <sw-customer-address-form\n                    :customer="customer"\n                    :address="billingAddress"\n                />\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_order_new_customer_modal_actions %}\n    <template #modal-footer>\n        \n        {% block sw_order_new_customer_modal_action_close %}\n        <sw-button\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_new_customer_modal_actions_apply %}\n        <sw-button\n            size="small"\n            variant="primary"\n            :is-loading="isLoading"\n            @click="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","numberRangeService","systemConfigApiService","customerValidationService"],emits:["on-select-existing-customer","close"],mixins:[n.getByName("notification")],data(){return{customer:null,isLoading:!1,customerNumberPreview:"",defaultSalutationId:null}},computed:{...i({"sw.order.new.customer.detail":{customer:["firstName","lastName","email","salesChannelId","customerNumber","defaultPaymentMethodId","groupId"]},"sw.order.new.customer.address":{customer_address:["firstName","lastName","street","city","countryId"]}}),customerRepository(){return this.repositoryFactory.create("customer")},addressRepository(){return this.repositoryFactory.create("customer_address")},shippingAddress(){return this.isSameBilling?this.billingAddress:null!==this.customer?this.customer.addresses.get(this.customer.defaultShippingAddressId):null},billingAddress(){return null!==this.customer?this.customer.addresses.get(this.customer.defaultBillingAddressId):null},isSameBilling:{get(){return null===this.customer||this.customer.defaultBillingAddressId===this.customer.defaultShippingAddressId},set(e){if(!0===e){this.customer.defaultShippingAddressId=this.customer.defaultBillingAddressId,this.customer.isNew()&&(this.customer.addresses=this.customer.addresses.filter(e=>e.id===this.customer.defaultBillingAddressId));return}let s=this.addressRepository.create();s.salutationId=this.defaultSalutationId,this.customer.addresses.add(s),this.customer.defaultShippingAddressId=s.id}},validCompanyField(){return this.customer?.accountType!==r.Z.ACCOUNT_TYPE_BUSINESS||this.customer?.company?.trim().length},languageRepository(){return this.repositoryFactory.create("language")},languageCriteria(){let e=new o;return e.setLimit(1),this.customer?.salesChannelId&&e.addFilter(o.equals("salesChannelDefaultAssignments.id",this.customer.salesChannelId)),e},languageId(){return this.loadLanguage(this.customer.salesChannelId)},salutationRepository(){return this.repositoryFactory.create("salutation")},salutationCriteria(){let e=new o(1,1);return e.addFilter(o.equals("salutationKey","not_specified")),e}},watch:{"customer.salesChannelId"(e){this.systemConfigApiService.getValues("core.systemWideLoginRegistration").then(s=>{s["core.systemWideLoginRegistration.isCustomerBoundToSalesChannel"]&&(this.customer.boundSalesChannelId=e)})},"customer.accountType"(e){e!==r.Z.ACCOUNT_TYPE_BUSINESS&&Shopware.State.dispatch("error/removeApiError",{expression:`customer_address.${this.billingAddress?.id}.company`})}},created(){this.createdComponent()},methods:{async createdComponent(){this.customer=this.customerRepository.create(),this.defaultSalutationId=await this.getDefaultSalutationId();let e=this.addressRepository.create();e.salutationId=this.defaultSalutationId,this.customer.addresses.add(e),this.customer.defaultShippingAddressId=e.id,this.customer.defaultBillingAddressId=e.id,this.customer.accountType=r.Z.ACCOUNT_TYPE_PRIVATE,this.customer.vatIds=[],this.customer.salutationId=this.defaultSalutationId},async onSave(){let e=!1,s=await this.validateEmail();if(s&&s.isValid||(e=!0),this.validCompanyField||(this.createErrorMessageForCompanyField(),e=!0),this.customer.accountType===r.Z.ACCOUNT_TYPE_PRIVATE&&(this.customer.vatIds=[]),e)return this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,!1;let t=Promise.resolve();return this.customerNumberPreview===this.customer.customerNumber&&(t=this.numberRangeService.reserve("customer",this.customer.salesChannelId).then(e=>{this.customerNumberPreview=e.number,this.customer.customerNumber=e.number})),t.then(()=>this.saveCustomer())},async saveCustomer(){let e=await this.languageId,s={...Shopware.Context.api,languageId:e};return this.customerRepository.save(this.customer,s).then(e=>(this.$emit("on-select-existing-customer",this.customer.id),this.isLoading=!1,this.onClose(),e)).catch(()=>{this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1})},onChangeSalesChannel(e){this.customer.salesChannelId=e,this.numberRangeService.reserve("customer",e,!0).then(e=>{this.customerNumberPreview=e.number,this.customer.customerNumber=e.number})},onClose(){this.$emit("close")},createErrorMessageForCompanyField(){Shopware.State.dispatch("error/addApiError",{expression:`customer_address.${this.billingAddress.id}.company`,error:new Shopware.Classes.ShopwareError({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})})},validateEmail(){let{id:e,email:s,boundSalesChannelId:t}=this.customer;return s?this.customerValidationService.checkCustomerEmail({id:e,email:s,boundSalesChannelId:t}).then(e=>e).catch(e=>{e&&Shopware.State.dispatch("error/addApiError",{expression:`customer.${this.customer.id}.email`,error:e?.response?.data?.errors[0]})}):Promise.resolve({isValid:!0})},async loadLanguage(e){let s=Shopware.Context.api.languageId;if(!e)return s;let t=await this.languageRepository.searchIds(this.languageCriteria);return t?.data?t.data[0]:s},async getDefaultSalutationId(){let e=await this.salutationRepository.searchIds(this.salutationCriteria);return e.data?.[0]}}}},506639:function(e,s,t){var r=t(530760);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,t(745346).Z)("135417b2",r,!0,{})}}]);