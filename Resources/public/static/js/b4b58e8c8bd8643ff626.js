(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[48073],{316250:function(){},648073:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}}),i(660078);var t=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_cms_mapping_field %}\n<div class="sw-cms-mapping-field">\n\n    \n    {% block sw_cms_mapping_field_info %}\n    <div class="sw-cms-mapping-field__info">\n\n        \n        {% block sw_cms_mapping_field_label %}\n        <div class="sw-cms-mapping-field__label">\n            {{ label }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_mapping_field_mapping %}\n        <template v-if="allowedMappingTypes.length">\n            \n            {% block sw_cms_mapping_field_mapping_selection %}\n            <sw-context-button\n                v-if="!isMapped"\n                class="sw-cms-mapping-field__selection"\n                :menu-width="340"\n            >\n                \n                {% block sw_cms_mapping_field_mapping_selection_action %}\n                <template #button>\n                    <div class="sw-cms-mapping-field__action">\n                        <sw-icon\n                            name="regular-external-link"\n                            size="16"\n                        />\n                        <span class="sw-cms-mapping-field__action-label">\n                            {{ $tc(\'sw-cms.detail.label.buttonMappingAction\') }}\n                        </span>\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_cms_mapping_field_mapping_selection_options %}\n                <div class="sw-cms-mapping-field__options">\n                    <sw-context-menu-item\n                        v-for="(prop, index) in allowedMappingTypes"\n                        :key="index"\n                        @click="onMappingSelect(prop)"\n                    >\n                        {{ prop }}\n                    </sw-context-menu-item>\n                </div>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n\n            \n            {% block sw_cms_mapping_field_mapping_remove_action %}\n            <div\n                v-else\n                class="sw-cms-mapping-field__action-remove"\n                role="button"\n                tabindex="0"\n                @click="onMappingRemove"\n                @keydown.enter="onMappingRemove"\n            >\n                <sw-icon name="regular-times" />\n                <span class="sw-cms-mapping-field__action-label">\n                    {{ $tc(\'sw-cms.detail.label.buttonMappingRemoveAction\') }}\n                </span>\n            </div>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_mapping_field_content %}\n    <div\n        v-if="!isMapped"\n        class="sw-cms-mapping-field__form-field"\n    >\n        <slot>\n        {% block sw_cms_mapping_field_slot_default %}{% endblock %}</slot>\n    </div>\n    {% endblock %}\n\n    <template v-else>\n        \n        {% block sw_cms_mapping_field_mapping_value %}\n        <div class="sw-cms-mapping-field__mapping-value">\n            {{ $tc(\'sw-cms.detail.label.mappingPreview\') }} <b>{{ config.value }}</b>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_mapping_field_preview %}\n        <div\n            v-if="hasPreview"\n            class="sw-cms-mapping-field__preview"\n        >\n            <slot\n                v-if="demoValue !== null"\n                name="preview"\n                :demo-value="demoValue"\n            ></slot>\n\n            <sw-alert\n                v-else\n                variant="info"\n                class="sw-cms-mapping-field__empty-demo"\n            >\n                {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n            </sw-alert>\n        </div>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["cmsService"],props:{config:{type:Object,required:!0,default(){return{source:"static",value:null}}},valueTypes:{type:[String,Array],required:!1,default:"string"},entity:{type:String,required:!1,default:null},label:{type:String,required:!1,default:""}},data(){return{mappingTypes:{},allowedMappingTypes:[],demoValue:null}},computed:{isMapped(){return"mapped"===this.config.source},hasPreview(){return this.isCompatEnabled("INSTANCE_SCOPED_SLOTS")?void 0!==this.$scopedSlots.preview:void 0!==this.$slots.preview},cmsPageState(){return Shopware.Store.get("cmsPage")}},watch:{cmsPageState:{deep:!0,handler(){this.updateMappingTypes(),this.updateDemoValue()}}},created(){this.createdComponent()},methods:{createdComponent(){this.updateMappingTypes(),this.updateDemoValue()},updateMappingTypes(){this.mappingTypes=this.cmsPageState.currentMappingTypes,this.getAllowedMappingTypes(),"mapped"===this.config.source&&this.config.value.split(".")[0]!==this.cmsPageState.currentMappingEntity&&this.onMappingRemove()},updateDemoValue(){"mapped"===this.config.source&&(this.demoValue=this.getDemoValue(this.config.value))},onMappingSelect(e){this.config.source="mapped",this.config.value=e,this.demoValue=this.getDemoValue(e)},onMappingRemove(){this.config.source="static",this.config.value=this.config.type===Array?[]:null,this.demoValue=null},getAllowedMappingTypes(){let e=[];if("entity"===this.valueTypes){let n=this.mappingTypes;null!==this.entity&&n.entity&&n.entity[this.entity]&&(e=n.entity[this.entity])}else{let n=this.mappingTypes;Object.keys(n).forEach(i=>{(i===this.valueTypes||this.valueTypes.includes(i))&&(e=[...e,...n[i]]).sort()})}this.allowedMappingTypes=e},getDemoValue(e){return this.cmsService.getPropertyByMappingPath(this.cmsPageState.currentDemoEntity,e)}}})},660078:function(e,n,i){var t=i(316250);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),(0,i(745346).Z)("48456f25",t,!0,{})}}]);