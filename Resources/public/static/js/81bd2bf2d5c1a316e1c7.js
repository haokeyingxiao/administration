(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[28219],{315025:function(){},228219:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}}),i(239867);var o={template:'\n{% block sw_product_variants_configurator_restrictions %}\n<div class="sw-product-variants-configurator-restrictions">\n\n    \n    {% block sw_product_variants_configurator_restrictions_search %}\n    <div class="sw-product-variants-configurator-restrictions__search">\n        \n        {% block sw_product_variants_configurator_restrictions_search_field %}\n        <sw-simple-search-field\n            v-model:value="term"\n            size="small"\n            variant="form"\n            :placeholder="$tc(\'sw-product.variations.configuratorModal.searchRestrictions\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_variants_configurator_restrictions_buttons %}\n        <sw-button\n            variant="ghost"\n            size="small"\n            @click="addEmptyRestrictionCombination"\n        >\n            {{ $tc(\'sw-product.variations.configuratorModal.addNewRestriction\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_configurator_restrictions_grid_wrapper %}\n    <div class="sw-product-variants-configurator-restrictions__grid-wrapper">\n        \n        {% block sw_product_variants_configurator_restrictions_data_grid %}\n        <sw-data-grid\n            v-if="product.variantRestrictions"\n            ref="swDataGrid"\n            :data-source="filteredRestrictions"\n            :columns="restrictionColumns"\n            :show-selection="false"\n            :compact-mode="false"\n            full-page\n        >\n\n            \n            {% block sw_product_variants_configurator_restrictions_data_grid_column_id %}\n            <template\n                #column-id="{ item, isInlineEdit, compact }"\n            >\n                <template\n                    v-for="restriction in getRestrictionsWithNaming(item.id).values"\n                    :key="restriction.id"\n                >\n                    <span\n                        class="sw-product-variants-configurator-restrictions__group-name"\n                    >\n                        {{ restriction.group }}:\n                    </span>\n                    <sw-label\n                        v-for="option in restriction.options"\n                        :key="option.id"\n                        ghost\n                    >\n                        {{ option }}\n                    </sw-label>\n                </template>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_configurator_restrictions_data_grid_actions %}\n            <template\n                #actions="{ item }"\n            >\n                \n                {% block sw_product_variants_configurator_restrictions_data_grid_actions_items %}\n                <sw-context-menu-item @click="editRestrictionCombination(item)">\n                    {{ $tc(\'sw-product.variations.configuratorModal.editRestriction\') }}\n                </sw-context-menu-item>\n\n                <sw-context-menu-item\n                    variant="danger"\n                    @click="deleteRestrictionCombination(item)"\n                >\n                    {{ $tc(\'sw-product.variations.configuratorModal.deleteRestriction\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </sw-data-grid>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_configurator_restrictions_modal %}\n    <sw-modal\n        v-if="restrictionModalIsOpen"\n        :title="$tc(\'sw-product.variations.configuratorModal.singleRestrictionAddTitle\')"\n        class="sw-product-variants-configurator-restrictions__modal"\n        @modal-close="cancelAddRestriction"\n    >\n\n        \n        {% block sw_product_variants_configurator_restrictions_modal_main %}\n        <div class="sw-product-variants-configurator-restrictions__modal-main">\n            \n            {% block sw_product_variants_configurator_restrictions_modal_main_restriction_selection %}\n            <sw-product-restriction-selection\n                v-for="(restriction, index) in actualRestriction.values"\n                :key="restriction.id"\n                :groups-with-options="groupsWithOptions"\n                :restriction="restriction"\n                @restriction-delete="deleteRestriction"\n            >\n\n                <template #contentAfter>\n                    <p\n                        v-if="index < actualRestrictionValueLength - 1"\n                        class="sw-product-variants-configurator-restrictions__seperator"\n                    >\n                        {{ $tc(\'sw-product.variations.configuratorModal.singleRestrictionSeperation\') }}\n                    </p>\n                </template>\n            </sw-product-restriction-selection>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_configurator_restrictions_modal_main_button_new_restriction %}\n            <sw-button\n                class="sw-product-variants-configurator-restrictions__button-new-restriction"\n                @click="addEmptyRestriction"\n            >\n                {{ $tc(\'sw-product.variations.configuratorModal.singleRestrictionSeperation\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_configurator_restrictions_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_product_variants_configurator_restrictions_modal_footer_cancel %}\n            <sw-button\n                size="small"\n                @click="cancelAddRestriction"\n            >\n                {{ $tc(\'sw-product.variations.configuratorModal.cancel\') }}\n            </sw-button>\n            {% endblock %}\n            \n            {% block sw_product_variants_configurator_restrictions_modal_footer_save_add_restriction %}\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="saveAddRestriction"\n            >\n                {{ $tc(\'sw-product.variations.configuratorModal.save\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_configurator_restrictions_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data(){return{term:"",restrictionModalIsOpen:!1,isLoading:!0,groupsWithOptions:[],actualRestriction:{}}},computed:{restrictionColumns(){return[{property:"id",label:"sw-product.variations.configuratorModal.restrictedCombinations",rawData:!0}]},actualRestrictionValueLength(){return this.actualRestriction.values.length},filteredRestrictions(){if(!Array.isArray(this.product.variantRestrictions))return[];if(this.term.length<=0)return this.product.variantRestrictions;let t=this.product.variantRestrictions.map(t=>this.getRestrictionsWithNaming(t.id)).reduce((t,n)=>{let i=!1;return n.values.forEach(t=>{t.group.toLowerCase().includes(this.term.toLowerCase())&&(i=!0),t.options.find(t=>!!t.toLowerCase().includes(this.term.toLowerCase())&&(i=!0,!0))}),i&&t.push(n.id),t},[]);return this.product.variantRestrictions.filter(n=>t.indexOf(n.id)>=0)}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.filterEmptyValues(),this.groupsWithOptions=this.selectedGroups.map(t=>({group:t,options:this.getOptionsForGroupId(t.id)})),this.isLoading=!1},getOptionsForGroupId(t){return this.product.configuratorSettings.filter(n=>!n.isDeleted&&n.option.groupId===t)},getRestrictionsWithNaming(t){let n=this.product.variantRestrictions.find(n=>n.id===t);return{id:n.id,values:n.values.map(t=>{let n=this.selectedGroups.find(n=>n.id===t.group);if(!n)return{group:"",options:[]};let i=t.options.reduce((t,n)=>{let i=n.optionId?n.optionId:n,o=this.product.configuratorSettings.find(t=>i===t.optionId);return o?.option&&t.push(o.option.translated.name),t},[]);return{group:n.translated.name,options:i}})}},filterEmptyValues(){return!!Array.isArray(this.product.variantRestrictions)&&(this.product.variantRestrictions=this.product.variantRestrictions.filter(t=>(t.values=t.values.filter(t=>(t.options=t.options.filter(t=>this.product.configuratorSettings.find(n=>t===n.optionId)),t.options.length>0)),t.values.length>0)),!0)},addEmptyRestrictionCombination(){let t=String(new Date().valueOf()).split("").reverse().join("");this.actualRestriction={id:t,values:[]},this.addEmptyRestriction(),this.restrictionModalIsOpen=!0},addEmptyRestriction(){let t=String(new Date().valueOf()).split("").reverse().join(""),n=this.groupsWithOptions[0].group;this.actualRestriction.values.push({id:t,group:n.id,options:[]})},cancelAddRestriction(){this.actualRestriction={},this.restrictionModalIsOpen=!1},saveAddRestriction(){Array.isArray(this.product.variantRestrictions)||(this.product.variantRestrictions=[]),this.product.variantRestrictions.some(t=>t.id===this.actualRestriction.id)||this.product.variantRestrictions.push(this.actualRestriction),this.actualRestriction={},this.restrictionModalIsOpen=!1},editRestrictionCombination(t){this.actualRestriction=t,this.restrictionModalIsOpen=!0},deleteRestrictionCombination(t){this.product.variantRestrictions=this.product.variantRestrictions.filter(n=>n.id!==t.id)},deleteRestriction(t){this.actualRestriction.values=this.actualRestriction.values.filter(n=>n!==t)}}}},239867:function(t,n,i){var o=i(315025);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,i(745346).Z)("12436098",o,!0,{})}}]);