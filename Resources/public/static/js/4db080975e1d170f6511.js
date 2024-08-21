(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[58940],{584878:function(){},258940:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}}),n(307591);var l={template:'\n{% block sw_custom_field_type_base_content %}\n{% parent() %}\n\n\n{% block sw_custom_field_type_select_multi %}\n<sw-switch-field\n    v-model:value="multiSelectSwitch"\n    class="sw-custom-field-detail__switch"\n    :disabled="multiSelectSwitchDisabled"\n    :label="$tc(\'sw-settings-custom-field.customField.detail.labelMultiSelect\')"\n    @update:value="onChangeMultiSelectSwitch"\n/>\n{% endblock %}\n\n\n{% block sw_custom_field_type_select_options %}\n<div\n    v-for="(option, index) in currentCustomField.config.options"\n    :key="index"\n>\n    \n    {% block sw_custom_field_type_select_options_label %}\n    <span>\n        {{ $tc(\'sw-settings-custom-field.customField.detail.labelOption\', 0, { count: (index+1) }) }}\n    </span>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_type_select_options_delete %}\n    <sw-button\n        class="sw-custom-field-type-select__delete-option-button"\n        size="small"\n        @click="onDeleteOption(index)"\n    >\n        {{ $tc(\'sw-settings-custom-field.customField.detail.labelDeleteOption\') }}\n    </sw-button>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_type_select_options_container %}\n    <sw-container\n        class="sw-custom-field-type-select__option-container"\n        columns="1fr 1fr"\n        gap="20px"\n    >\n        \n        {% block sw_custom_field_type_select_options_container_technical_name %}\n        <sw-text-field\n            v-model:value="option.value"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelTechnicalName\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_custom_field_type_select_options_container_labels %}\n        <div>\n            <sw-text-field\n                v-for="locale in locales"\n                :key="locale"\n                v-model:value="option.label[locale]"\n                class="sw-custom-field-type-select__option-label"\n                :label="getLabel(locale)"\n            />\n        </div>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n\n\n{% block sw_custom_field_type_select_add_option %}\n<sw-button\n    v-if="isOptionAddable"\n    size="small"\n    class="sw-custom-field-type-select__button-add"\n    @click="onClickAddOption"\n>\n    {{ $tc(\'sw-settings-custom-field.customField.detail.buttonAddOption\') }}\n</sw-button>\n    {% endblock %}\n{% endblock %}\n',data(){return{multiSelectSwitch:!1,multiSelectSwitchDisabled:!1,propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel"),placeholder:this.$tc("sw-settings-custom-field.customField.detail.labelPlaceholder"),helpText:this.$tc("sw-settings-custom-field.customField.detail.labelHelpText")}}},created(){this.createdComponent()},computed:{isOptionAddable(){return this.currentCustomField.config.hasOwnProperty("options")}},methods:{createdComponent(){this.currentCustomField.config.hasOwnProperty("options")||(this.$set(this.currentCustomField.config,"options",[]),this.addOption(),this.addOption()),this.currentCustomField.config.hasOwnProperty("componentName")||(this.currentCustomField.config.componentName="sw-single-select"),this.$set(this.currentCustomField.config,"options",this.currentCustomField.config.options.map(t=>(Array.isArray(t.label)&&(t.label={}),t))),this.multiSelectSwitch="sw-multi-select"===this.currentCustomField.config.componentName},addOption(){this.currentCustomField.config.options.push({value:"",label:{}})},onClickAddOption(){this.addOption()},getLabel(t){let e=this.$tc("sw-settings-custom-field.customField.detail.labelLabel"),n=this.$tc(`locale.${t}`);return`${e} (${n})`},onDeleteOption(t){this.currentCustomField.config.options.splice(t,1)},onChangeMultiSelectSwitch(t){if(t){this.currentCustomField.config.componentName="sw-multi-select";return}this.currentCustomField.config.componentName="sw-single-select"}}}},307591:function(t,e,n){var l=n(584878);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.id,l,""]]),l.locals&&(t.exports=l.locals),(0,n(745346).Z)("415c4b72",l,!0,{})}}]);