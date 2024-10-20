"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[11378],{411378:function(e,t,o){o.r(t),o.d(t,{default:function(){return n}});let{State:i,Data:a,Service:s}=Shopware,{Criteria:r}=a;var n={template:'\n{% block sw_order_create_create_initial %}\n<div class="sw-order-create-initial">\n    <sw-order-create-initial-modal\n        @modal-close="onCloseCreateModal"\n        @order-preview="onPreviewOrder"\n    />\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],computed:{customerRepository(){return s("repositoryFactory").create("customer")},customerCriteria(){let e=new r(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags"),this.feature.isActive("v6.7.0.0")||e.addAssociation("defaultPaymentMethod"),e}},created(){this.createdComponent()},methods:{async createdComponent(){let e=this.$route.query?.customerId;if(!e)return;let t=await this.customerRepository.get(e,Shopware.Context.api,this.customerCriteria);t&&i.commit("swOrder/setCustomer",t)},onCloseCreateModal(){this.$nextTick(()=>{this.$router.push({name:"sw.order.index"})})},onPreviewOrder(){this.$nextTick(()=>{this.$router.push({name:"sw.order.create.general"})})}}}}}]);