(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[91597],{991886:function(){},974071:function(t,e){"use strict";e.Z=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},691597:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}}),s(662136);var a=s(37698),o=s(974071);let{Mixin:n}=Shopware,{Criteria:i}=Shopware.Data,{ShopwareError:r}=Shopware.Classes,{mapPageErrors:c}=Shopware.Component.getComponentHelper();var d={template:'\n{% block sw_customer_detail %}\n<sw-page class="sw-customer-detail">\n    \n    {% block sw_customer_detail_header %}\n    <template\n        v-if="!isLoading"\n        #smart-bar-header\n    >\n        <h2>\n            {{ salutation(customer) }}\n        </h2>\n        <sw-label\n            v-if="customer?.createdById"\n            appearance="pill"\n            size="small"\n            class="sw-customer-detail__created-by-admin-label"\n        >\n            {{ $tc(\'sw-customer.detail.labelCreatedByAdmin\') }}\n        </sw-label>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_customer_detail_actions_edit %}\n        <span v-if="!editMode">\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'customer.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-customer-detail__open-edit-mode-action"\n                variant="primary"\n                :disabled="isLoading || !acl.can(\'customer.editor\')"\n                @click.prevent="onActivateCustomerEditMode"\n            >\n                {{ $tc(\'sw-customer.detail.buttonEdit\') }}\n            </sw-button>\n        </span>\n        {% endblock %}\n\n        <span v-else>\n            \n            {% block sw_customer_detail_actions_cancel %}\n            <sw-button\n                :disabled="isLoading"\n                @click="onAbortButtonClick"\n            >\n                {{ $tc(\'sw-customer.detail.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_actions_save %}\n            <sw-button-process\n                class="sw-customer-detail__save-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                :disabled="isLoading"\n                variant="primary"\n                @update:process-success="saveFinish"\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-customer.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n        </span>\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            :abort-change-function="abortOnLanguageChange"\n            :save-changes-function="saveOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_customer_detail_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_customer_detail_content_customer_group_registration %}\n            <div class="sw-customer-detail__customer-registration-alert">\n                <sw-alert\n                    v-if="customer && customer.requestedGroup"\n                    variant="info"\n                >\n                    \n                    {% block sw_customer_detail_content_customer_group_registration_content %}\n                    <div class="sw-customer-detail__customer-registration-alert-text">\n                        \n                        {% block sw_customer_detail_content_customer_group_registration_message %}\n                        {{ $tc(\'sw-customer.customerGroupRegistration.alert\', 0, { name: customer.requestedGroup.translated.name }) }}\n                        {% endblock %}\n                    </div>\n                    <div class="sw-customer-detail__customer-registration-alert-actions">\n                        \n                        {% block sw_customer_detail_content_customer_group_registration_actions %}\n                        <sw-button\n                            variant="danger"\n                            size="small"\n                            @click="declineCustomerGroupRegistration"\n                        >\n                            {{ $tc(\'sw-customer.customerGroupRegistration.decline\') }}\n                        </sw-button>\n\n                        <sw-button\n                            variant="primary"\n                            size="small"\n                            @click="acceptCustomerGroupRegistration"\n                        >\n                            {{ $tc(\'sw-customer.customerGroupRegistration.accept\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </sw-alert>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_content_tabs %}\n            <sw-tabs\n                class="sw-customer-detail-page__tabs"\n                position-identifier="sw-customer-detail-tabs"\n            >\n                \n                {% block sw_customer_detail_content_tab_general %}\n                <sw-tabs-item\n                    class="sw-customer-detail__tab-general"\n                    :route="generalRoute"\n                    :title="$tc(\'sw-customer.detail.tabGeneral\')"\n                    :has-error="swCustomerDetailBaseError"\n                >\n                    {{ $tc(\'sw-customer.detail.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_customer_detail_content_tab_addresses %}\n                <sw-tabs-item\n                    class="sw-customer-detail__tab-addresses"\n                    :route="addressesRoute"\n                    :title="$tc(\'sw-customer.detail.tabAddresses\')"\n                >\n                    {{ $tc(\'sw-customer.detail.tabAddresses\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_customer_detail_content_tab_order %}\n                <sw-tabs-item\n                    class="sw-customer-detail__tab-order"\n                    :route="ordersRoute"\n                    :title="$tc(\'sw-customer.detailBase.labelOrderCard\')"\n                >\n                    {{ $tc(\'sw-customer.detailBase.labelOrderCard\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_customer_detail_content_tab_after %}{% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            <sw-extension-component-section\n                position-identifier="sw-customer-detail__before-content"\n            />\n\n            \n            {% block sw_customer_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <router-view\n                v-if="customer"\n                v-slot="{ Component }"\n            >\n                {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n                <component\n                    :is="Component"\n                    v-show="!isLoading"\n                    :customer="customer"\n                    :customer-edit-mode="editMode"\n                />\n            </router-view>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","customerGroupRegistrationService","acl","customerValidationService","feature"],mixins:[n.getByName("notification"),n.getByName("salutation"),n.getByName("discard-detail-page-changes")("customer")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onAbortButtonClick"},props:{customerId:{type:String,required:!0}},data(){return{isLoading:!1,isSaveSuccessful:!1,customer:null,customerAddressCustomFieldSets:[],customerCustomFieldSets:[],errorEmailCustomer:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return null!==this.customer?this.salutation(this.customer):""},customerRepository(){return this.repositoryFactory.create("customer")},editMode:{get(){return"boolean"==typeof this.$route.query.edit?this.$route.query.edit:"true"===this.$route.query.edit},set(t){this.$router.push({name:this.$route.name,query:{edit:t}})}},defaultCriteria(){let t=new i(1,25);return t.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel.domains").addAssociation("boundSalesChannel.domains").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags").addAssociation("requestedGroup").addAssociation("boundSalesChannel"),this.feature.isActive("v6.7.0.0")||t.addAssociation("defaultPaymentMethod"),t.getAssociation("addresses").addSorting(i.sort("firstName"),"ASC",!1),t},generalRoute(){return{name:"sw.customer.detail.base",params:{id:this.customerId},query:{edit:this.editMode}}},addressesRoute(){return{name:"sw.customer.detail.addresses",params:{id:this.customerId},query:{edit:this.editMode}}},ordersRoute(){return{name:"sw.customer.detail.order",params:{id:this.customerId},query:{edit:this.editMode}}},emailHasChanged(){let t=this.customer.getOrigin();return!!this.customer.isNew()||!t.email||t.email!==this.customer.email},validCompanyField(){return this.customer.accountType!==o.Z.ACCOUNT_TYPE_BUSINESS||this.customer.company?.trim().length},salutationRepository(){return this.repositoryFactory.create("salutation")},salutationCriteria(){let t=new i(1,1);return t.addFilter(i.equals("salutationKey","not_specified")),t},...c(a)},watch:{customerId(){this.createdComponent()}},created(){this.createdComponent()},methods:{async loadCustomer(){let t=await this.getDefaultSalutation();Shopware.ExtensionAPI.publishData({id:"sw-customer-detail__customer",path:"customer",scope:this}),this.isLoading=!0,this.customerRepository.get(this.customerId,Shopware.Context.api,this.defaultCriteria).then(e=>{this.customer=e,this.customer?.salutationId||(this.customer.salutationId=t),this.customer.addresses?.map(e=>(e.salutationId||(e.salutationId=t),e)),this.isLoading=!1})},async createdComponent(){await this.loadCustomer()},saveFinish(){this.isSaveSuccessful=!1,this.editMode=!1,this.createdComponent(),this.isLoading=!1},validateEmail(){let{id:t,email:e,boundSalesChannelId:s}=this.customer;return this.customerValidationService.checkCustomerEmail({id:t,email:e,boundSalesChannelId:s}).then(t=>(this.errorEmailCustomer&&Shopware.State.dispatch("error/addApiError",{expression:`customer.${this.customer.id}.email`,error:null}),t)).catch(t=>{this.emailIsValid=!1,Shopware.State.dispatch("error/addApiError",{expression:`customer.${this.customer.id}.email`,error:new r(t.response.data.errors[0])})})},async onSave(){if(this.isLoading=!0,!this.editMode)return!1;let t=!1;if(this.customer.email&&this.emailHasChanged){let e=await this.validateEmail();e&&e.isValid||(t=!0)}return(this.validCompanyField||(this.createErrorMessageForCompanyField(),t=!0),await this.validPassword(this.customer)||(t=!0),t)?(this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,!1):(this.isSaveSuccessful=!1,this.customer.birthday||(this.customer.birthday=null),this.customer.passwordNew&&(this.customer.password=this.customer.passwordNew),this.customer.accountType===o.Z.ACCOUNT_TYPE_PRIVATE&&(this.customer.vatIds=[]),this.customerRepository.save(this.customer).then(()=>{this.isSaveSuccessful=!0,this.createNotificationSuccess({message:this.$tc("sw-customer.detail.messageSaveSuccess",0,{name:`${this.customer.firstName} ${this.customer.lastName}`})})}).catch(t=>{throw this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,t}))},async onAbortButtonClick(){this.discardChanges(),this.editMode=!1,await this.loadCustomer()},onActivateCustomerEditMode(){this.editMode=!0},abortOnLanguageChange(){return this.customerRepository.hasChanges(this.customer)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(t){Shopware.State.commit("context/setApiLanguageId",t),this.createdComponent()},async validPassword(t){let{passwordNew:e,passwordConfirm:s}=t;return!e&&!s||e===s||(Shopware.State.dispatch("error/addApiError",{expression:`customer.${this.customer.id}.passwordConfirm`,error:new r({detail:this.$tc("sw-customer.error.passwordDoNotMatch"),code:"password_not_match"})}),!1)},acceptCustomerGroupRegistration(){this.customerGroupRegistrationService.accept(this.customer.id).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-customer.customerGroupRegistration.acceptMessage")})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-customer.customerGroupRegistration.errorMessage")})}).finally(()=>{this.createdComponent()})},declineCustomerGroupRegistration(){this.customerGroupRegistrationService.decline(this.customer.id).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-customer.customerGroupRegistration.declineMessage")})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-customer.customerGroupRegistration.errorMessage")})}).finally(()=>{this.createdComponent()})},createErrorMessageForCompanyField(){this.isLoading=!1,Shopware.State.dispatch("error/addApiError",{expression:`customer.${this.customer.id}.company`,error:new r({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})})},async getDefaultSalutation(){let t=await this.salutationRepository.searchIds(this.salutationCriteria);return t.data?.[0]}}}},662136:function(t,e,s){var a=s(991886);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,s(745346).Z)("299ecb6a",a,!0,{})},37698:function(t){"use strict";t.exports=JSON.parse('{"sw.customer.detail.base":{"customer":["salutationId","firstName","lastName","email","groupId","salesChannelId","defaultPaymentMethodId","customerNumber","password","vatIds","company","passwordNew","passwordConfirm"]}}')}}]);