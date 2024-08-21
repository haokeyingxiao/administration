(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[11395],{135221:function(){},511395:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o}}),e(739003);var o={template:'\n{% block sw_product_restriction_selection %}\n<div class="sw-product-restriction-selection">\n    \n    {% block sw_product_restriction_selection_container %}\n    <sw-container\n        columns="minmax(270px, 350px) 1fr"\n        gap="0"\n        class="sw-product-restriction-selection__container"\n    >\n\n        \n        {% block sw_product_restriction_selection_select_group_wrapper %}\n        <div class="sw-product-restriction-selection__select-group-wrapper">\n            \n            {% block sw_product_restriction_selection_select_group %}\n            <sw-select-field\n                v-model:value="selectedGroup"\n                class="sw-product-restriction-selection__select-group"\n            >\n                <option\n                    v-for="item in availableGroups"\n                    :key="item.id"\n                    :value="item.group.id"\n                >\n                    {{ item.group.translated.name }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n\n            \n            {% block sw_product_restriction_selection_is_from %}\n            <div class="sw-product-restriction-selection__isFrom">\n                <span>{{ $tc(\'sw-product.variations.configuratorModal.isOneFrom\') }}</span>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_restriction_selection_select_option_wrapper %}\n        <sw-container\n            columns="1fr minmax(40px, 40px)"\n            gap="0"\n            class="sw-product-restriction-selection__select-option-wrapper"\n        >\n\n            \n            {% block sw_product_restriction_selection_multi_select %}\n            <sw-multi-select\n                v-if="!optionLoading"\n                v-model:value="selectedOptions"\n                :options="options"\n                value-property="optionId"\n            >\n\n                <template\n                    #selection-label-property="{ item }"\n                >\n                    {{ item.option.translated.name }}\n                </template>\n                <template\n                    #result-label-property="{ item }"\n                >\n                    {{ item.option.translated.name }}\n                </template>\n            </sw-multi-select>\n            {% endblock %}\n\n            \n            {% block sw_product_restriction_selection_context_button %}\n            <sw-context-button>\n                \n                {% block sw_product_restriction_selection_context_button_items %}\n                <sw-context-menu-item\n                    variant="danger"\n                    @click="deleteRestriction"\n                >\n                    {{ $tc(\'sw-product.variations.configuratorModal.deleteCombination\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_product_restriction_selection_content_after %}\n    <slot name="contentAfter"></slot>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["restriction-delete"],props:{groupsWithOptions:{type:Array,required:!0},restriction:{type:Object,required:!0}},data(){return{optionLoading:!0,selectedGroup:"",optionStore:{},selectedOptionStore:{},options:{},selectedOptions:[]}},computed:{availableGroups(){return this.groupsWithOptions}},watch:{selectedGroup(){this.optionLoading=!0;let t=this.groupsWithOptions.find(t=>t.group.id===this.selectedGroup).options,n=t.reduce((t,n)=>{let e=this.restriction.options.indexOf(n.optionId);return e>=0&&t.push(this.restriction.options[e]),t},[]);this.options=t,this.selectedOptions=n,this.restriction.group=this.selectedGroup,this.optionLoading=!1},selectedOptions(){let t=null!==this.selectedOptions?this.selectedOptions:[];this.restriction.options=t}},mounted(){this.mountedComponent()},methods:{mountedComponent(){(this.groupsWithOptions||!(this.groupsWithOptions.length<=0))&&(this.selectedGroup=this.restriction.group)},deleteRestriction(){this.$emit("restriction-delete",this.restriction)}}}},739003:function(t,n,e){var o=e(135221);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,e(745346).Z)("382a778c",o,!0,{})}}]);