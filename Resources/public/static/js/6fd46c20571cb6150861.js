"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[54761],{354761:function(t,e,s){s.r(e),s.d(e,{default:function(){return n}});let{Criteria:i}=Shopware.Data;var n={template:'\n{% block sw_custom_field_type_base_content %}\n\n\n{% block sw_custom_field_type_select_options %}{% endblock %}\n\n\n{% block sw_custom_field_type_select_add_option %}{% endblock %}\n\n\n{% block sw_custom_field_type_select_multi %}{% endblock %}\n\n{% parent() %}\n\n\n{% block sw_custom_field_type_entity_type %}\n<sw-single-select\n    v-model:value="currentCustomField.config.entity"\n    :disabled="!currentCustomField._isNew"\n    :help-text="$tc(\'sw-settings-custom-field.customField.detail.helpTextEntitySelect\')"\n    :label="$tc(\'sw-settings-custom-field.customField.detail.labelEntityTypeSelect\')"\n    :options="sortedEntityTypes"\n    show-clearable-button\n    @update:value="onChangeEntityType"\n/>\n{% endblock %}\n\n\n{% block sw_custom_field_type_entity_multi %}\n<sw-switch-field\n    v-model:value="multiSelectSwitch"\n    class="sw-custom-field-detail__switch"\n    :disabled="!currentCustomField._isNew"\n    :help-text="$tc(\'sw-settings-custom-field.customField.detail.helpTextMultiSelect\')"\n    :label="$tc(\'sw-settings-custom-field.customField.detail.labelMultiSelect\')"\n    @update:value="onChangeMultiSelectSwitch"\n/>\n    {% endblock %}\n\n{% endblock %}\n',inject:["repositoryFactory"],mounted(){this.customEntityRepository.search(new i,Shopware.Context.api).then(t=>{this.customEntities=t})},data(){return{customEntities:[]}},computed:{entityTypes(){let t=[{label:this.$tc("sw-settings-custom-field.customField.entity.product"),value:"product"},{label:this.$tc("sw-settings-custom-field.customField.entity.category"),value:"category"},{label:this.$tc("sw-settings-custom-field.customField.entity.shippingMethod"),value:"shipping_method"},{label:this.$tc("sw-settings-custom-field.customField.entity.paymentMethod"),value:"payment_method"},{label:this.$tc("sw-settings-custom-field.customField.entity.country"),value:"country"},{label:this.$tc("sw-settings-custom-field.customField.entity.customer"),value:"customer",config:{labelProperty:["firstName","lastName"]}},{label:this.$tc("sw-settings-custom-field.customField.entity.salesChannel"),value:"sales_channel"},{label:this.$tc("sw-settings-custom-field.customField.entity.manufacturer"),value:"product_manufacturer"},{label:this.$tc("sw-settings-custom-field.customField.entity.dynamicProductGroup"),value:"product_stream"},{label:this.$tc("sw-settings-custom-field.customField.entity.shoppingExperienceLayout"),value:"cms_page"}];return this.customFieldsAwareCustomEntities.forEach(e=>{t.push({label:this.$tc(`${e.name}.label`),value:e.name,config:{labelProperty:e.labelProperty}})}),t},customFieldsAwareCustomEntities(){return this.customEntities.filter(t=>t.customFieldsAware)},customEntityRepository(){return this.repositoryFactory.create("custom_entity")},sortedEntityTypes(){return this.entityTypes.sort((t,e)=>t.label.localeCompare(e.label))}},methods:{createdComponent(){this.currentCustomField.config.hasOwnProperty("componentName")||(this.currentCustomField.config.componentName="sw-entity-single-select"),this.multiSelectSwitch="sw-entity-multi-id-select"===this.currentCustomField.config.componentName},onChangeEntityType(t){let e=this.entityTypes.find(e=>e.value===t);this.$delete(this.currentCustomField.config,"labelProperty"),e.hasOwnProperty("config")&&e.config.hasOwnProperty("labelProperty")&&(this.currentCustomField.config.labelProperty=e.config.labelProperty)},onChangeMultiSelectSwitch(t){if(t){this.currentCustomField.config.componentName="sw-entity-multi-id-select";return}this.currentCustomField.config.componentName="sw-entity-single-select"}}}}}]);