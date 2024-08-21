(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[70154],{125233:function(){},270154:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}}),s(924363);var n={template:'\n{% block sw_custom_field_set_renderer_card_form_renderer %}\n<div class="sw-custom-field-set-renderer-card-form-renderer">\n    <template\n        v-for="customField in set.customFields"\n        :key="customField.id"\n    >\n        <sw-container\n            columns="240px 1fr"\n            gap="32px"\n        >\n            \n            {% block sw_custom_field_set_renderer_card_form_renderer_change_field %}\n            <sw-checkbox-field\n                class="sw-bulk-edit-custom-fields__change"\n                :label="$tc(\'sw-bulk-edit.product.customFields.changeLabel\', 0, {name: getInlineSnippet(customField.config.label)})"\n                @update:value="toggleItemCheck($event, customField)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_custom_field_set_renderer_card_form_renderer_custom_field %}\n            <sw-inherit-wrapper\n                v-if="entity && customField.config"\n                v-model:value="entity.customFields[customField.name]"\n                v-bind="getInheritWrapperBind(customField)"\n                :class="\'sw-form-field-renderer-field__\' + customField.name"\n                :has-parent="hasParent"\n                :required="customField.config.validation === \'required\'"\n                :inherited-value="getInheritedCustomField(customField.name)"\n                @update:value="updateCustomField(customField)"\n            >\n                <template #content="props">\n                    <sw-form-field-renderer\n                        v-bind="getBind(customField, props)"\n                        :key="props.isInherited"\n                        :class="\'sw-form-field-renderer-input-field__\' + customField.name"\n                        :disabled="disabled || props.isInherited"\n                        :value="props.currentValue"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n            {% endblock %}\n        </sw-container>\n    </template>\n</div>\n{% endblock %}\n',emits:["change"],props:{entity:{type:Object,required:!1,default:()=>({customFields:{}})}},data(){return{selectedCustomFields:{}}},watch:{selectedCustomFields:{handler(e){this.$emit("change",e)},deep:!0}},methods:{initializeCustomFields(){this.entity.customFields||(this.entity.customFields={}),this.$super("initializeCustomFields")},toggleItemCheck(e,t){e?this.isCompatEnabled("INSTANCE_SET")?this.$set(this.selectedCustomFields,t.name,this.entity.customFields[t.name]):this.selectedCustomFields[t.name]=this.entity.customFields[t.name]:this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.selectedCustomFields,t.name):delete this.selectedCustomFields[t.name]},updateCustomField(e){this.entity.customFields.hasOwnProperty(e.name)&&this.selectedCustomFields.hasOwnProperty(e.name)&&(this.isCompatEnabled("INSTANCE_SET")?this.$set(this.selectedCustomFields,e.name,this.entity.customFields[e.name]):this.selectedCustomFields[e.name]=this.entity.customFields[e.name])}}}},924363:function(e,t,s){var n=s(125233);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(745346).Z)("3e766f04",n,!0,{})}}]);