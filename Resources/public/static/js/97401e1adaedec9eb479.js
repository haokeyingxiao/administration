(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[50135],{131256:function(){},550135:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}}),n(717319);let{Component:t,Mixin:a}=Shopware;var o=t.wrapComponentConfig({template:'\n{% block sw_order_create_general_info %}\n<div>\n\n    \n    {% block sw_order_create_general_info_summary %}\n    <div class="sw-order-create-general-info__summary">\n\n        \n        {% block sw_order_create_general_info_summary_main %}\n        <div class="sw-order-create-general-info__summary-main">\n            <div class="sw-order-create-general-info__summary-main-header">\n                {{ summaryMainHeader }}\n            </div>\n            <div class="sw-order-create-general-info__summary-main-total">\n                {{ currencyFilter(cart.price.totalPrice, context.currency.isoCode, context.currency.totalRounding.decimals) }}\n            </div>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_create_general_info_summary_sub %}\n        <div class="sw-order-create-general-info__summary-sub">\n            <div class="sw-order-create-general-info__summary-sub-description">\n                {{ $tc(\'sw-order.generalTab.info.summary.with\') }}\n                {{ context.shippingMethod.translated.name }}\n                {{ $tc(\'sw-order.generalTab.info.summary.and\') }}\n                {{ context.paymentMethod.translated.distinguishableName }}\n            </div>\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_create_general_info_order_states %}\n    <div class="sw-order-create-general-info__order-states">\n\n        \n        {% block sw_order_create_general_info_order_state_payment %}\n        <div class="sw-order-create-general-info__order-state">\n            <sw-order-state-select-v2\n                class="sw-order-create-general-info__order-state-payment"\n                state-type="order_transaction"\n                rounded-style\n                :placeholder="$tc(\'sw-order.stateCard.draftPlaceholder\')"\n                :label="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n                disabled\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_create_general_info_order_state_delivery %}\n        <div class="sw-order-create-general-info__order-state">\n            <sw-order-state-select-v2\n                class="sw-order-create-general-info__order-state-delivery"\n                state-type="order_delivery"\n                rounded-style\n                :placeholder="$tc(\'sw-order.stateCard.draftPlaceholder\')"\n                :label="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n                disabled\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_create_general_info_order_state_order %}\n        <div class="sw-order-create-general-info__order-state">\n            <sw-order-state-select-v2\n                class="sw-order-create-general-info__order-state-order"\n                rounded-style\n                state-type="order"\n                :placeholder="$tc(\'sw-order.stateCard.draftPlaceholder\')"\n                :label="$tc(\'sw-order.stateCard.headlineOrderState\')"\n                disabled\n            />\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_create_general_info_order_tags %}\n    <sw-entity-tag-select\n        class="sw-order-create-general-info__order-tags"\n        size="small"\n        :entity-collection="[]"\n        disabled\n        :placeholder="$tc(\'sw-order.generalTab.tagSelect.placeholder\')"\n        always-show-placeholder\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl"],mixins:[a.getByName("notification")],props:{cart:{type:Object,required:!0},context:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},computed:{summaryMainHeader(){return this.context.customer?`${this.context.customer.firstName} ${this.context.customer.lastName} (${this.context.customer.email})`:""},paymentMethodName(){return this.context.paymentMethod?.translated?.distinguishableName??""},shippingMethodName(){return this.context.shippingMethod.translated?.name??""},currencyFilter(){return Shopware.Filter.getByName("currency")}}})},717319:function(e,r,n){var t=n(131256);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),(0,n(745346).Z)("5add0b24",t,!0,{})}}]);