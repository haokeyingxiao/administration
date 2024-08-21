(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[5694],{827535:function(){},705694:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return r}}),i(429989);let{Component:l,Mixin:n,Service:o}=Shopware,{Criteria:s}=Shopware.Data,{mapState:d}=l.getComponentHelper(),{ShopwareError:c}=Shopware.Classes;var r={template:'\n{% block sw_flow_set_entity_custom_field_modal %}\n<sw-modal\n    class="sw-flow-set-entity-custom-field-modal"\n    :title="$tc(\'sw-flow.modals.setEntityCustomField.title\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_set_entity_custom_field_modal_content %}\n    <div class="sw-flow-set-entity-custom-field-modal__content">\n        \n        {% block sw_flow_tag_modal_to_field %}\n        <sw-single-select\n            v-model:value="entity"\n            name="sw-field--entity"\n            class="sw-flow-set-entity-custom-field-modal__entity-field"\n            required\n            show-clearable-button\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.labelToField\')"\n            :placeholder="$tc(\'sw-flow.modals.setEntityCustomField.placeholderToField\')"\n            :error="entityError"\n            :options="entityOptions"\n            @update:value="onEntityChange()"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_category %}\n        <sw-entity-single-select\n            v-model:value="customFieldSetId"\n            name="sw-field--customFieldSetId"\n            class="sw-flow-set-entity-custom-field-modal__custom-field-set"\n            entity="custom_field_set"\n            required\n            :label-property="labelProperty"\n            :disabled="!entity"\n            :criteria="customFieldSetCriteria"\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.customFieldSet\')"\n            :placeholder="$tc(\'sw-flow.modals.setEntityCustomField.customFieldSetPlaceHolder\')"\n            :error="customFieldSetError"\n            @update:value="(id, customFieldSet) => onCustomFieldSetChange(id, customFieldSet)"\n        >\n            <template #selection-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n\n            <template #result-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n        </sw-entity-single-select>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_field_name %}\n        <sw-entity-single-select\n            v-model:value="customFieldId"\n            name="sw-field--customFieldId"\n            class="sw-flow-set-entity-custom-field-modal__custom-field"\n            entity="custom_field"\n            required\n            :label-property="labelProperty"\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.customField\')"\n            :disabled="!customFieldSetId"\n            :criteria="customFieldCriteria"\n            :placeholder="$tc(\'sw-flow.modals.setEntityCustomField.customFieldPlaceHolder\')"\n            :error="customFieldError"\n            @update:value="(id, customField) => onCustomFieldChange(id, customField)"\n        >\n            <template #selection-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n\n            <template #result-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n        </sw-entity-single-select>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_field_value_options %}\n        <sw-single-select\n            v-if="customFieldId"\n            v-model:value="fieldOptionSelected"\n            name="sw-field--fieldOptionSelected"\n            class="sw-flow-set-entity-custom-field-modal__custom-field-value-options"\n            :options="fieldOptions"\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.customFieldOption\')"\n            :highlight-search-term="false"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_field_value %}\n        <sw-form-field-renderer\n            v-if="showFieldValue"\n            v-model:value="customFieldValue"\n            name="sw-field--customFieldValue"\n            class="sw-flow-set-entity-custom-field-modal__custom-field-value"\n            :config="renderedFieldConfig"\n            bordered\n        >\n            <template #label>\n                {{ $tc(\'sw-flow.modals.setEntityCustomField.prefixFieldName\') }}\n                {{ getInlineSnippet(customField.config.label) || customField.name }}\n            </template>\n        </sw-form-field-renderer>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_set_entity_custom_field_modal_custom %}\n    {% endblock %}\n\n    \n    {% block sw_flow_set_entity_custom_field_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_set_entity_custom_field_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-set-entity-custom-field-modal__cancel-button"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-set-entity-custom-field-modal__save-button"\n            variant="primary"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["modal-close","process-finish"],mixins:[n.getByName("sw-inline-snippet"),n.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data(){return{customFieldSetId:null,customFieldId:null,customFieldValue:null,customFieldSetError:null,customFieldError:null,config:{},renderedFieldConfig:{},fieldOptions:[],fieldOptionSelected:"upsert",customField:{config:{label:""}},entity:null,entityError:null,entityOptions:[]}},computed:{customFieldRepository(){return this.repositoryFactory.create("custom_field")},customFieldCriteria(){let e=new s(1,25);return e.addFilter(s.equals("customFieldSetId",this.customFieldSetId)),e},customFieldSetCriteria(){if(!this.entity)return null;let e=new s(1,25);return e.addFilter(s.equals("relations.entityName",this.convertToEntityTechnicalName(this.entity))),e},showFieldValue(){return this.customFieldId&&"clear"!==this.fieldOptionSelected},defaultFieldOptions(){return[{value:"upsert",label:`${this.$tc("sw-flow.modals.setEntityCustomField.options.overwrite")}`},{value:"create",label:`${this.$tc("sw-flow.modals.setEntityCustomField.options.notOverwrite")}`},{value:"clear",label:`${this.$tc("sw-flow.modals.setEntityCustomField.options.clear")}`}]},multipleFieldOptions(){return[...this.defaultFieldOptions,{value:"add",label:`${this.$tc("global.default.add")}`},{value:"remove",label:`${this.$tc("global.default.remove")}`}]},labelProperty(){return`config.label.${Shopware.State.get("session").currentLocale}`},...d("swFlowState",["triggerEvent","customFieldSets","customFields","triggerActions"])},watch:{entity(e){e&&this.entityError&&(this.entityError=null)},renderedFieldConfig(e){"colorpicker"!==e.customFieldType||this.renderedFieldConfig.zIndex||(this.renderedFieldConfig={...this.renderedFieldConfig,zIndex:1001}),this.fieldOptions=this.getFieldOptions(this.renderedFieldConfig)},customFieldSetId(e){e&&this.customFieldSetError&&(this.customFieldSetError=null)},customFieldId(e){e&&this.customFieldError&&(this.customFieldError=null)}},created(){this.createdComponent()},methods:{createdComponent(){this.getEntityOptions(),this.sequence.config&&(this.entity=this.sequence.config.entity,this.customFieldSetId=this.sequence.config.customFieldSetId,this.customFieldSetLabel=this.sequence.config.customFieldSetLabel,this.customFieldId=this.sequence.config.customFieldId,this.customFieldLabel=this.sequence.config.customFieldLabel,this.customFieldValue=this.sequence.config.customFieldValue,this.getCustomFieldRendered())},getCustomFieldRendered(){this.customFieldRepository.get(this.customFieldId).then(e=>{this.customField=e,this.renderedFieldConfig=this.validateOptionSelectFieldLabel(e.config)}).catch(()=>{this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})}).finally(()=>{this.fieldOptionSelected=this.sequence.config.option})},onEntityChange(){this.customFieldSetId=null},onCustomFieldSetChange(e,t){t&&(Shopware.State.commit("swFlowState/setCustomFieldSets",[...this.customFieldSets,t]),this.customFieldId=null,this.customFieldValue=null,this.renderedFieldConfig={})},onCustomFieldChange(e,t){t&&(this.customField=t,Shopware.State.commit("swFlowState/setCustomFields",[...this.customFields,t]),this.customFieldValue=null,this.renderedFieldConfig=this.validateOptionSelectFieldLabel(t.config),"sw-entity-multi-id-select"===this.renderedFieldConfig.componentName&&(this.customFieldValue=[]))},validateOptionSelectFieldLabel(e){return e.options&&e.options.forEach(e=>{e.label=this.getInlineSnippet(e.label)||e.value}),e},onClose(){this.customFieldSetError=null,this.customFieldError=null,this.$emit("modal-close")},onAddAction(){if(this.entityError=this.fieldError(this.entity),this.customFieldSetError=this.entity?this.fieldError(this.customFieldSetId):null,this.customFieldError=this.customFieldSetId?this.fieldError(this.customFieldId):null,this.customFieldSetError||this.customFieldError||this.entityError)return;let e={...this.sequence,config:{entity:this.entity,customFieldSetId:this.customFieldSetId,customFieldId:this.customFieldId,customFieldValue:this.customFieldValue,option:this.fieldOptionSelected,optionLabel:this.fieldOptions.find(e=>e.value===this.fieldOptionSelected)?.label}};this.$emit("process-finish",e)},fieldError(e){return e&&e.length?null:new c({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},getFieldOptions(e){switch(e.componentName){case"sw-entity-multi-id-select":case"sw-multi-select":return this.multipleFieldOptions;default:return this.defaultFieldOptions}},getEntityOptions(){if(!this.triggerEvent){this.entityOptions=[];return}let e=this.triggerEvent.aware??[],t=o("flowBuilderService").getAvailableEntities(this.action,this.triggerActions,e,["customFields"]);t.length&&(this.entity=t[0].value),this.entityOptions=t},convertToEntityTechnicalName(e){return e.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`)}}}},429989:function(e,t,i){var l=i(827535);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),(0,i(745346).Z)("257fe29a",l,!0,{})}}]);