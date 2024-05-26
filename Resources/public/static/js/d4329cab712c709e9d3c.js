(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[49556],{106775:function(){},849556:function(e,s,d){"use strict";d.r(s),d.d(s,{default:function(){return o}}),d(823449);let{Mixin:t,State:r,Service:a}=Shopware,{Criteria:n}=Shopware.Data;var o={template:'\n{% block sw_order_create_address_modal %}\n<sw-modal\n    :title="editAddressModalTitle"\n    class="sw-order-create-address-modal"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_order_create_address_modal_content %}\n    \n    {% block sw_order_create_address_form_modal %}\n    <sw-modal\n        v-if="showAddressFormModal"\n        :title="getAddressFormModalTitle()"\n        @modal-close="onCloseAddressModal"\n    >\n        \n        {% block sw_order_create_address_form_modal_content %}\n        <sw-customer-address-form\n            :address="currentAddress"\n            :customer="activeCustomer"\n            :disabled="isLoading"\n        >\n            <sw-customer-address-form-options\n                :address="currentAddress"\n                :customer="activeCustomer"\n                :custom-field-sets="[]"\n                @default-address-change="onChangeDefaultAddress"\n            />\n        </sw-customer-address-form>\n        {% endblock %}\n\n        \n        {% block sw_order_create_address_form_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_order_create_address_form_modal_cancel_button %}\n            <sw-button\n                size="small"\n                @click="onCloseAddressModal"\n            >\n                {{ $tc(\'sw-customer.detailAddresses.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_order_create_address_form_modal_apply_button %}\n            <sw-button\n                :is-loading="isLoading"\n                variant="primary"\n                size="small"\n                @click="onSubmitAddressForm"\n            >\n                {{ $tc(\'sw-customer.detailAddresses.buttonSaveAndSelect\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n    <sw-card\n        :is-loading="isLoading"\n        :large="true"\n        position-identifier="sw-order-create-address-modal"\n        class="sw-order-create-address-modal__card-filter"\n    >\n        \n        {% block sw_order_create_address_modal_toolbar %}\n        <template #toolbar>\n            <sw-card-filter\n                :placeholder="$tc(\'sw-order.addressSelection.searchAddressToolbarPlaceholder\')"\n                @sw-card-filter-term-change="onSearchAddress"\n            >\n                \n                {% block sw_order_create_address_modal_add_button %}\n                <template #filter>\n                    <sw-button\n                        class="sw-order-create-address-modal__add-btn"\n                        size="small"\n                        @click="onAddNewAddress"\n                    >\n                        <sw-icon\n                            name="regular-plus-circle-s"\n                            small\n                        />\n                        {{ $tc(\'sw-customer.detailAddresses.buttonAddAddress\') }}\n                    </sw-button>\n                </template>\n                {% endblock %}\n            </sw-card-filter>\n        </template>\n        {% endblock %}\n        \n        {% block sw_order_create_address_modal_empty_state %}\n        <template #grid>\n            <div\n                v-if="!isLoading && !addresses.length"\n                class="sw-order-create-address-modal__card is--empty"\n            >\n                <sw-empty-state\n                    :title="$tc(\'sw-order.addressSelection.emptySearchResults\')"\n                    :icon="\'regular-book-user\'"\n                >\n                    \n                    {% block sw_order_create_address_modal_empty_state_content %}\n                    <span></span>\n                    {% endblock %}\n                </sw-empty-state>\n            </div>\n            <div\n                v-for="(address, index) in addresses"\n                :key="address.id"\n                :class="{ \'is--selected\': isCurrentSelected(address.id)}"\n                class="sw-order-create-address-modal__card"\n            >\n                <div class="sw-order-create-address-modal__card-body">\n                    <span\n                        v-if="isCurrentSelected(address.id)"\n                        class="sw-order-create-address-modal__card-label"\n                    >\n                        {{ $tc(\'sw-order.addressSelection.currentlySelected\') }}<br><br>\n                    </span>\n                    <sw-address :address="address" />\n                    <a\n                        class="sw-order-create-address-modal__edit-btn"\n                        role="button"\n                        tabindex="0"\n                        @click="onEditAddress(address)"\n                        @keydown.enter="onEditAddress(address)"\n                    >\n                        {{ $tc(\'sw-customer.detailBase.buttonTitleEditAddress\') }}\n                    </a>\n                </div>\n                <div class="sw-order-create-address-modal__select-btn">\n                    <sw-button\n                        v-if="!isCurrentSelected(address.id)"\n                        @click="onSelectExistingAddress(address)"\n                    >\n                        {{ $tc(\'sw-customer.detailAddresses.buttonSelect\') }}\n                    </sw-button>\n                </div>\n            </div>\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_address_modal_actions %}\n    <template #modal-footer>\n        \n        {% block sw_order_create_address_modal_cancel_button %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-customer.detailAddresses.buttonClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',mixins:[t.getByName("notification"),t.getByName("placeholder")],props:{customer:{type:Object,required:!0},address:{type:Object,required:!0},addAddressModalTitle:{type:String,required:!0},editAddressModalTitle:{type:String,required:!0},cart:{type:Object,required:!0}},data(){return{addresses:[],selectedAddressId:null,activeCustomer:this.customer,isLoading:!1,term:null,showAddressFormModal:!1,defaultAddressIdMapping:{"billing-address":"defaultBillingAddressId","shipping-address":"defaultShippingAddressId"},currentAddress:null}},computed:{addressCriteria(){let e=new n(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),this.term&&e.setTerm(this.term),e},customerRepository(){return a("repositoryFactory").create("customer")},addressRepository(){return a("repositoryFactory").create(this.activeCustomer.addresses.entity,this.activeCustomer.addresses.source)},isValidCompanyField(){return null!==this.customer.company&&!!this.currentAddress.company?.trim().length}},created(){this.createdComponent()},methods:{async createdComponent(){await this.getCustomerAddresses()},async getCustomerAddresses(){this.isLoading=!0;try{this.addresses=await this.addressRepository.search(this.addressCriteria),this.selectedAddressId=this.activeCustomer[this.address.contextId]||this.activeCustomer[this.address.contextDataDefaultId],await Shopware.State.dispatch("error/resetApiErrors")}catch{this.createNotificationError({message:this.$tc("sw-order.create.messageFetchCustomerAddressesError")})}finally{this.isLoading=!1}},onNewActiveItem(){this.selectedAddressId=null},isCurrentSelected(e){return this.selectedAddressId===e},async onSearchAddress(e){this.term=e,await this.getCustomerAddresses()},async onSelectExistingAddress(e){this.selectedAddressId=e.id,await this.onSave()},findSelectedAddress(){return this.addresses.find(e=>e.id===this.selectedAddressId)},async updateOrderContext(){let e=this.findSelectedAddress(),s={[this.address.contextId]:e.id,[this.address.contextDataKey]:e,[this.address.contextDataDefaultId]:e[this.address.contextDataDefaultId]};await r.dispatch("swOrder/updateOrderContext",{context:s,salesChannelId:this.activeCustomer.salesChannelId,contextToken:this.cart.token}),this.$emit("set-customer-address",{contextId:this.address.contextId,contextDataKey:this.address.contextDataKey,data:e})},async saveCurrentCustomer(){return this.hasOwnProperty("defaultShippingAddressId")&&(this.activeCustomer.defaultShippingAddressId=this.defaultShippingAddressId),this.hasOwnProperty("defaultBillingAddressId")&&(this.activeCustomer.defaultBillingAddressId=this.defaultBillingAddressId),this.customerRepository.save(this.activeCustomer)},async saveCurrentAddress(){if(this.selectedAddressId=this.currentAddress.id,this.currentAddress.isNew()&&this.addresses.push(this.currentAddress),!this.isValidCompanyField){let e=new Shopware.Classes.ShopwareError({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"});return await Shopware.State.dispatch("error/addApiError",{expression:`customer_address.${this.currentAddress.id}.company`,error:e}),Promise.reject(e)}return this.addressRepository.save(this.currentAddress)},closeModal(){this.$emit("close-modal")},onCancel(){this.closeModal()},async onSave(){this.isLoading=!0;try{await this.updateOrderContext(),this.closeModal()}catch{this.createNotificationError({message:this.$tc("sw-order.detail.messageSaveError")})}finally{this.isLoading=!1}},onCloseAddressModal(){this.showAddressFormModal=!1},onAddNewAddress(){this.createNewCustomerAddress(),this.showAddressFormModal=!0},onEditAddress(e){this.currentAddress=e,this.showAddressFormModal=!0},onChangeDefaultAddress(e){e.value&&(this[this.defaultAddressIdMapping[e.name]]=e.id)},async onSubmitAddressForm(){try{if(this.isLoading=!0,null===this.currentAddress)return;await this.saveCurrentAddress(),await this.saveCurrentCustomer(),await this.updateOrderContext(),await this.getCustomerAddresses(),this.currentAddress=null,this.showAddressFormModal=!1}catch{this.createNotificationError({message:this.$tc("sw-order.detail.messageSaveError")})}finally{this.isLoading=!1}},getAddressFormModalTitle(){return!this.currentAddress||this.currentAddress.isNew()?this.addAddressModalTitle:this.editAddressModalTitle},createNewCustomerAddress(){let e=this.addressRepository.create();e.customerId=this.activeCustomer.id,this.currentAddress=e}}}},823449:function(e,s,d){var t=d(106775);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),d(745346).Z("b878706c",t,!0,{})}}]);