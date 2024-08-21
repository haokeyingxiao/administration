(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[64330],{552488:function(){},464330:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l}}),i(866861);var l={template:'\n{% block sw_bulk_edit_change_type_field_renderer %}\n<div class="sw-bulk-edit-change-field-renderer">\n    <template\n        v-for="(formField, index) in formFields"\n        :key="`formField-${index}`"\n    >\n        \n        {% block sw_bulk_edit_change_type_field_renderer_container %}\n        <sw-container\n            v-if="formField && bulkEditData[formField.name]"\n            columns="240px 1fr"\n            gap="32px"\n            :class="`sw-bulk-edit-change-field__container sw-bulk-edit-change-field-${formField.name}`"\n        >\n            \n            {% block sw_bulk_edit_change_type_field_renderer_change_field %}\n            <div class="sw-bulk-edit-change-field-renderer__change-field">\n                \n                {% block sw_bulk_edit_change_type_field_renderer_change_field_title %}\n                <sw-checkbox-field\n                    v-model:value="bulkEditData[formField.name].isChanged"\n                    class="sw-bulk-edit-change-field__change"\n                    :label="!formField.config.changeLabel ? $tc(\'sw-bulk-edit.general.defaultChangeLabel\') : formField.config.changeLabel"\n                    :help-text="formField.labelHelpText"\n                    :disabled="!!bulkEditData[formField.name].disabled"\n                    @update:value="onChangeToggle($event, formField.name)"\n                />\n                {% endblock %}\n\n                \n                {% block sw_bulk_edit_change_type_field_renderer_change_field_subtitle %}\n                <span v-if="formField.config.changeSubLabel">\n                    {{ formField.config.changeSubLabel }}\n                </span>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_bulk_edit_change_type_field_renderer_change_form_value_field %}\n            <sw-bulk-edit-change-type\n                v-if="showSelectBoxType(formField)"\n                v-model:value="bulkEditData[formField.name].type"\n                :allow-overwrite="getConfigValue(formField, \'allowOverwrite\')"\n                :allow-clear="getConfigValue(formField, \'allowClear\')"\n                :allow-add="getConfigValue(formField, \'allowAdd\')"\n                :allow-remove="getConfigValue(formField, \'allowRemove\')"\n            >\n                <template #value-field="{ isDisplayingValue }">\n                    <slot\n                        name="valueFieldWithBoxType"\n                        v-bind="{formField, entity, index, isDisplayingValue }"\n                    >\n                        <template v-if="formField.canInherit && isDisplayingValue">\n                            <div class="sw-bulk-edit-change-field-renderer__inheritance-group-field is--select-box-type">\n                                <sw-inheritance-switch\n                                    :is-inherited="bulkEditData[formField.name].isInherited"\n                                    @inheritance-restore="onInheritanceRestore(formField)"\n                                    @inheritance-remove="onInheritanceRemove(formField)"\n                                />\n                                <sw-bulk-edit-form-field-renderer\n                                    v-bind="formField"\n                                    :key="`formField-${index}`"\n                                    v-model:value="entity[formField.name]"\n                                    @update:value="onChangeValue($event, formField.name)"\n                                />\n                            </div>\n                        </template>\n                        <template v-else>\n                            <sw-bulk-edit-form-field-renderer\n                                v-if="isDisplayingValue"\n                                v-bind="formField"\n                                :key="`formField-${index}`"\n                                v-model:value="entity[formField.name]"\n                                @update:value="onChangeValue($event, formField.name)"\n                            />\n                        </template>\n                    </slot>\n                </template>\n            </sw-bulk-edit-change-type>\n            {% endblock %}\n\n            \n            {% block sw_bulk_edit_change_type_field_renderer_change_form_value_field_without_change_type %}\n            <template v-if="!showSelectBoxType(formField)">\n                <slot\n                    name="valueField"\n                    v-bind="{formField, entity, index, isDisplayingValue }"\n                >\n                    <template v-if="formField.canInherit">\n                        <div class="sw-bulk-edit-change-field-renderer__inheritance-group-field">\n                            <sw-inheritance-switch\n                                :is-inherited="bulkEditData[formField.name].isInherited"\n                                @inheritance-restore="onInheritanceRestore(formField)"\n                                @inheritance-remove="onInheritanceRemove(formField)"\n                            />\n                            <sw-bulk-edit-form-field-renderer\n                                v-bind="formField"\n                                :key="`formField-${index}`"\n                                v-model:value="entity[formField.name]"\n                                @update:value="onChangeValue($event, formField.name)"\n                            />\n                        </div>\n                    </template>\n                    <template v-else>\n                        <sw-bulk-edit-form-field-renderer\n                            v-bind="formField"\n                            :key="`formField-${index}`"\n                            v-model:value="entity[formField.name]"\n                            @update:value="onChangeValue($event, formField.name)"\n                        />\n                    </template>\n                </slot>\n            </template>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],emits:["change-value","inheritance-restore","inheritance-remove"],props:{bulkEditData:{type:Object,required:!0},formFields:{type:Array,required:!0},entity:{type:Object,required:!0},disabled:{type:Boolean,default:!1}},data(){return{isDisplayingValue:!0}},methods:{hasFormFieldConfig(e){return!!e.config},getConfigValue(e,n){return this.hasFormFieldConfig(e)&&e.config[n]?e.config[n]:null},showSelectBoxType(e){return!0===this.getConfigValue(e,"allowOverwrite")||!0===this.getConfigValue(e,"allowClear")||!0===this.getConfigValue(e,"allowAdd")||!0===this.getConfigValue(e,"allowRemove")},onChangeValue(e,n,i=!0){i&&(this.entity[n]=e),this.bulkEditData[n].isInherited||(this.bulkEditData[n].value=e),this.$emit("change-value",n,e)},onChangeToggle(e,n){this.onChangeValue(e,n,!1)},onInheritanceRestore(e){this.$emit("inheritance-restore",e)},onInheritanceRemove(e){this.$emit("inheritance-remove",e)}}}},866861:function(e,n,i){var l=i(552488);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),(0,i(745346).Z)("6c628f7e",l,!0,{})}}]);