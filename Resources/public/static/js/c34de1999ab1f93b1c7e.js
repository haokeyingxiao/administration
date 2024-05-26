"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[36174],{515334:function(o,e,t){t.r(e),t.d(e,{default:function(){return l}});let{Component:r}=Shopware,{Criteria:n}=Shopware.Data,{mapState:s}=r.getComponentHelper(),{ShopwareError:c}=Shopware.Classes;var l={template:'\n{% block sw_flow_change_customer_group_modal %}\n<sw-modal\n    class="sw-flow-change-customer-group-modal"\n    :title="$tc(\'sw-flow.modals.customerGroup.titleChangeCustomerGroup\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_change_customer_group_modal_select %}\n    <sw-entity-single-select\n        v-model:value="customerGroupId"\n        name="sw-field--customerGroupId"\n        required\n        class="sw-flow-change-customer-group-modal__type-select"\n        entity="customer_group"\n        label-property="translated.name"\n        value-property="id"\n        :criteria="customerGroupCriteria"\n        :label="$tc(\'sw-flow.modals.customerGroup.labelCustomerGroup\')"\n        :placeholder="$tc(\'sw-flow.modals.customerGroup.placeholderCustomerGroup\')"\n        :error="fieldError"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_change_customer_group_modal_content_custom %}\n    {% endblock %}\n\n    \n    {% block sw_flow_change_customer_group_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_change_customer_group_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-change-customer-group-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_change_customer_group_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-change-customer-group-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],props:{sequence:{type:Object,required:!0}},data(){return{customerGroupId:"",fieldError:null}},computed:{customerGroupRepository(){return this.repositoryFactory.create("customer_group")},customerGroupCriteria(){let o=new n(1,100);return o.addSorting(n.sort("name","ASC")),o},...s("swFlowState",["customerGroups"])},watch:{customerGroupId(o){o&&this.fieldError&&(this.fieldError=null)}},created(){this.createdComponent()},methods:{createdComponent(){this.customerGroupId=this.sequence?.config?.customerGroupId||"",this.customerGroups.length||this.customerGroupRepository.search(this.customerGroupCriteria).then(o=>{Shopware.State.commit("swFlowState/setCustomerGroups",o)})},onClose(){this.$emit("modal-close")},onAddAction(){if(!this.customerGroupId){this.fieldError=new c({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"});return}let o={...this.sequence,config:{customerGroupId:this.customerGroupId}};this.$emit("process-finish",o)}}}}}]);