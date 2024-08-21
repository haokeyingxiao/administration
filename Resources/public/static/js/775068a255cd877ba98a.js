(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[25573],{39457:function(){},725573:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}}),t(276135);var d={template:'\n{% block sw_customer_default_addresses %}\n<sw-container\n    class="sw-customer-default-addresses"\n    columns="repeat(auto-fit, minmax(250px, 1fr))"\n>\n\n    \n    {% block sw_customer_default_addresses_shipping %}\n    <sw-card-section\n        v-if="customer.defaultShippingAddress.id"\n        divider="right"\n    >\n        \n        {% block sw_customer_default_addresses_shipping_postal %}\n        <sw-address\n            :address="customer.defaultShippingAddress"\n            :headline="$tc(\'sw-customer.detailBase.titleDefaultShippingAddress\')"\n            :show-edit-button="customerEditMode"\n            :edit-link="defaultShippingAddressLink"\n            :formatting-address="formattingShippingAddress"\n        />\n        {% endblock %}\n    </sw-card-section>\n    {% endblock %}\n\n    \n    {% block sw_customer_default_addresses_billing %}\n    <sw-card-section v-if="customer.defaultBillingAddress.id">\n        \n        {% block sw_customer_default_addresses_billing_postal %}\n        <sw-address\n            :address="customer.defaultBillingAddress"\n            :headline="$tc(\'sw-customer.detailBase.titleDefaultBillingAddress\')"\n            :show-edit-button="customerEditMode"\n            :edit-link="defaultBillingAddressLink"\n            :formatting-address="formattingBillingAddress"\n        />\n        {% endblock %}\n    </sw-card-section>\n    {% endblock %}\n\n</sw-container>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["customSnippetApiService"],props:{customer:{type:Object,required:!0},customerEditMode:{type:Boolean,required:!1,default:!1}},data(){return{formattingShippingAddress:"",formattingBillingAddress:""}},computed:{defaultShippingAddressLink(){return{name:"sw.customer.detail.addresses",params:{id:this.customer.id},query:{detailId:this.customer.defaultShippingAddress.id,edit:this.customerEditMode}}},defaultBillingAddressLink(){return{name:"sw.customer.detail.addresses",params:{id:this.customer.id},query:{detailId:this.customer.defaultBillingAddress.id,edit:this.customerEditMode}}}},created(){this.createdComponent()},watch:{customer(){this.createdComponent()}},methods:{createdComponent(){this.renderFormattingAddress()},renderFormattingAddress(){this.customSnippetApiService.render(this.customer.defaultShippingAddress,this.customer.defaultShippingAddress.country?.addressFormat).then(e=>{this.formattingShippingAddress=e.rendered}),this.customSnippetApiService.render(this.customer.defaultBillingAddress,this.customer.defaultBillingAddress.country?.addressFormat).then(e=>{this.formattingBillingAddress=e.rendered})}}}},276135:function(e,s,t){var d=t(39457);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals),(0,t(745346).Z)("d394a16a",d,!0,{})}}]);