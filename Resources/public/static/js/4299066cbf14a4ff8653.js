"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[88220],{88220:function(e,o,n){n.r(o),n.d(o,{default:function(){return s}});let{Mixin:t}=Shopware,{mapPropertyErrors:i}=Shopware.Component.getComponentHelper();var s={template:'\n{% block sw_promotion_v2_detail_base %}\n<div class="sw-promotion-v2-detail-base">\n\n    \n    {% block sw_promotion_v2_detail_base_general_card %}\n    <sw-card\n        v-if="promotion"\n        position-identifier="sw-promotion-detail-base-general"\n        class="sw-promotion-v2-detail-base__card-general"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-promotion-v2.detail.base.general.cardTitle\')"\n    >\n\n        \n        {% block sw_promotion_v2_detail_base_general_name %}\n        <sw-container\n            columns="2fr 1fr"\n            gap="0 32px"\n        >\n            <sw-text-field\n                v-model:value="promotion.name"\n                class="sw-promotion-v2-detail-base__field-name"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.nameLabel\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                required\n                :error="promotionNameError"\n                :placeholder="placeholder(promotion, \'name\', $tc(\'sw-promotion-v2.detail.base.general.namePlaceholder\'))"\n            />\n\n            <sw-number-field\n                v-model:value="promotion.priority"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.priorityLabel\')"\n            />\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_general_valid_container %}\n        <sw-container\n            columns="1fr 1fr"\n            gap="0 32px"\n        >\n\n            \n            {% block sw_promotion_v2_detail_base_general_valid_from %}\n            <sw-datepicker\n                v-model:value="promotion.validFrom"\n                class="sw-promotion-v2-detail-base__field-valid-from"\n                date-type="datetime"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.validFromLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.general.validFromPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_base_general_valid_until %}\n            <sw-datepicker\n                v-model:value="promotion.validUntil"\n                class="sw-promotion-v2-detail-base__field-valid-until"\n                date-type="datetime"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.validUntilLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.general.validUntilPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :error="promotionValidUntilError"\n            />\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_general_max_uses %}\n        <sw-container\n            columns="1fr 1fr"\n            gap="0 32px"\n        >\n\n            \n            {% block sw_promotion_v2_detail_base_general_max_uses_global %}\n            <sw-number-field\n                v-model:value="promotion.maxRedemptionsGlobal"\n                class="sw-promotion-v2-detail-base__field-max-uses-global"\n                number-type="int"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.maxUsesGlobalLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.general.maxUsesGlobalPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                allow-empty\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_base_general_max_uses_customer %}\n            <sw-number-field\n                v-model:value="promotion.maxRedemptionsPerCustomer"\n                class="sw-promotion-v2-detail-base__field-max-uses-per-customer"\n                number-type="int"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.maxUsesPerCustomerLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.general.maxUsesPerCustomerPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                allow-empty\n            />\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_general_active %}\n        <sw-switch-field\n            v-model:value="promotion.active"\n            class="sw-promotion-v2-detail-base__field-active"\n            :label="$tc(\'sw-promotion-v2.detail.base.general.activeLabel\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n            bordered\n        />\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_base_codes_card %}\n    <sw-card\n        v-if="promotion && !isCreateMode"\n        class="sw-promotion-v2-detail-base__card-codes"\n        position-identifier="sw-promotion-detail-base-codes"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-promotion-v2.detail.base.codes.cardTitle\')"\n    >\n\n        \n        {% block sw_promotion_v2_detail_base_codes_select %}\n        <sw-select-field\n            class="sw-promotion-v2-detail-base__field-code-type"\n            :label="$tc(\'sw-promotion-v2.detail.base.codes.codeTypeLabel\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n            :value="selectedCodeType"\n            @update:value="onChangeCodeType"\n        >\n\n            \n            {% block sw_promotion_v2_detail_base_codes_select_options %}\n            <option\n                v-for="option in codeTypeOptions"\n                :key="option.value"\n                :value="option.value"\n                :selected="option.value === selectedCodeType"\n            >\n                {{ option.label }}\n            </option>\n            {% endblock %}\n\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_codes_type_fixed %}\n        <template v-if="selectedCodeType === CODE_TYPES.FIXED">\n\n            \n            {% block sw_promotion_v2_detail_base_codes_type_fixed_code %}\n            <sw-text-field\n                v-model:value="promotion.code"\n                class="sw-promotion-v2-detail-base__fixed-field-code"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :label="$tc(\'sw-promotion-v2.detail.base.codes.fixed.codeLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.codes.fixed.codePlaceholder\')"\n                copyable\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_base_codes_type_fixed_generate %}\n            <sw-button-process\n                class="sw-promotion-v2-detail-base__fixed-generate-button"\n                :is-loading="isGenerating"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :process-success="isGenerateSuccessful"\n                @update:process-success="generateFinish"\n                @click.prevent="onGenerateCodeFixed"\n            >\n                {{ $tc(\'sw-promotion-v2.detail.base.codes.fixed.generateButton\') }}\n            </sw-button-process>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_codes_type_individual %}\n        <template v-else-if="selectedCodeType === CODE_TYPES.INDIVIDUAL">\n\n            \n            {% block sw_promotion_v2_detail_base_codes_type_individual_codes_behavior %}\n            <sw-promotion-v2-individual-codes-behavior\n                :promotion="promotion"\n                @generate-finish="$emit(\'generate-individual-codes-finish\')"\n                @delete-finish="$emit(\'delete-individual-codes-finish\')"\n            />\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_promotion_detail_custom_field_sets %}\n    <sw-card\n        v-if="showCustomFields"\n        position-identifier="sw-promotion-detail-base-custom-field-sets"\n        :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n        :is-loading="isLoading"\n    >\n        <sw-custom-field-set-renderer\n            :entity="promotion"\n            :disabled="!acl.can(\'promotion.editor\')"\n            :sets="customFieldSets"\n        />\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl","promotionCodeApiService","customFieldDataProviderService"],emits:["generate-individual-codes-finish","delete-individual-codes-finish","clean-up-codes"],mixins:[t.getByName("placeholder")],props:{promotion:{type:Object,required:!1,default(){return null}},isLoading:{type:Boolean,required:!1,default:!1},isCreateMode:{type:Boolean,required:!0}},data(){return{selectedCodeType:"0",isGenerating:!1,isGenerateSuccessful:!1,codeSortProperty:"code",codeSortDirection:"ASC",CODE_TYPES:Object.freeze({NONE:"0",FIXED:"1",INDIVIDUAL:"2"}),customFieldSets:null}},computed:{codeTypeOptions(){return Object.entries(this.CODE_TYPES).map(e=>Object.create({label:this.$tc(`sw-promotion-v2.detail.base.codes.${e[0].toLowerCase()}.description`),value:e[1]}))},...i("promotion",["name","validUntil"]),showCustomFields(){return this.customFieldSets&&this.customFieldSets.length>0}},watch:{promotion(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(this.promotion){if(this.loadCustomFieldSets(),this.promotion.useCodes&&this.promotion.useIndividualCodes){this.setNewCodeType(this.CODE_TYPES.INDIVIDUAL),this.initialSort();return}this.setNewCodeType(this.promotion.useCodes?this.CODE_TYPES.FIXED:this.CODE_TYPES.NONE)}},initialSort(){this.promotion.individualCodes.sort((e,o)=>{let n=e[this.codeSortProperty],t=o[this.codeSortProperty],i=null;return("string"==typeof n&&"string"==typeof t&&(i=n.toUpperCase()>t.toUpperCase()),"number"==typeof n&&"number"==typeof t&&(i=n-t>0),null!==i)?"DESC"===this.codeSortDirection?i?-1:1:i?1:-1:0})},onChangeCodeType(e){let o=e!==this.CODE_TYPES.INDIVIDUAL&&null!==this.promotion.individualCodes&&this.promotion.individualCodes.length>0,n=e!==this.CODE_TYPES.FIXED&&null!==this.promotion.code&&this.promotion.code.length>0;this.$emit("clean-up-codes",o,n),this.setNewCodeType(e)},setNewCodeType(e){this.promotion.useCodes=e!==this.CODE_TYPES.NONE,this.promotion.useIndividualCodes=e===this.CODE_TYPES.INDIVIDUAL,this.selectedCodeType=e},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("promotion").then(e=>{this.customFieldSets=e})},onGenerateCodeFixed(){this.isGenerating=!0,this.promotionCodeApiService.generateCodeFixed().then(e=>{this.promotion.code=e,this.isGenerateSuccessful=!0}).finally(()=>{this.isGenerating=!1})},generateFinish(){this.isGenerateSuccessful=!1}}}}}]);