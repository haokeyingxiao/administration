(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[56790],{690599:function(){},256790:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}}),n(462358);let{Mixin:s}=Shopware,{mapPropertyErrors:a}=Shopware.Component.getComponentHelper();var i={template:'\n{% block sw_settings_tag_detail_modal %}\n<sw-modal\n    class="sw-settings-tag-detail-modal"\n    :class="{ \'is--auto-height\': initialTab === \'general\' }"\n    :title="title"\n    :is-loading="isLoading"\n    variant="full"\n    @modal-close="$emit(\'close\')"\n>\n    \n    {% block sw_settings_tag_detail_modal_tabs %}\n    <sw-tabs\n        position-identifier="sw-settings-tag-detail-modal"\n        :small="false"\n        :default-item="initialTab"\n        @new-item-active="active => initialTab = active.name"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_settings_tag_detail_modal_tabs_general %}\n            <sw-tabs-item\n                :title="$tc(\'sw-settings-tag.detail.generalTab\')"\n                :active-tab="active"\n                name="general"\n            >\n                {{ $tc(\'sw-settings-tag.detail.generalTab\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_settings_tag_detail_modal_tabs_assignments %}\n            <sw-tabs-item\n                :title="$tc(\'sw-settings-tag.detail.assignmentsTab\')"\n                :active-tab="active"\n                name="assignments"\n            >\n                {{ $tc(\'sw-settings-tag.detail.assignmentsTab\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            <template v-if="active === \'general\'">\n                \n                {% block sw_settings_tag_detail_modal_tabs_general_tab %}\n                <p class="sw-settings-tag-detail-modal__tag-name">\n                    <sw-text-field\n                        id="sw-field--tag-name"\n                        v-model:value="tag.name"\n                        name="sw-field--tag-name"\n                        :label="$tc(\'sw-settings-tag.list.columnName\')"\n                        :placeholder="$tc(\'sw-settings-tag.list.placeholderTagName\')"\n                        :error="tagNameError"\n                        maxlength="255"\n                        required\n                    />\n                </p>\n                {% endblock %}\n            </template>\n\n            <template v-if="active === \'assignments\'">\n                \n                {% block sw_settings_tag_detail_modal_tabs_assignments_tab %}\n                <sw-settings-tag-detail-assignments\n                    :tag="tag"\n                    :initial-counts="computedCounts"\n                    :to-be-added="assignmentsToBeAdded"\n                    :to-be-deleted="assignmentsToBeDeleted"\n                    :property="property"\n                    :entity="entity"\n                    @add-assignment="addAssignment"\n                    @remove-assignment="removeAssignment"\n                />\n                {% endblock %}\n            </template>\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_settings_tag_detail_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_tag_detail_modal_cancel %}\n        <sw-button\n            size="small"\n            @click="$emit(\'close\')"\n        >\n            {{ $tc(\'sw-settings-tag.list.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_tag_detail_modal_confirm %}\n        <sw-button\n            variant="primary"\n            size="small"\n            :disabled="!allowSave"\n            :is-loading="isLoading"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-tag.detail.buttonSave\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","syncService","acl"],emits:["close","finish"],mixins:[s.getByName("notification")],shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},props:{editedTag:{type:Object,required:!1,default:null},counts:{type:Object,required:!1,default(){return{}}},property:{type:String,required:!1,default:null},entity:{type:String,required:!1,default:null}},data(){return{tag:null,isLoading:!1,assignmentsToBeAdded:{},assignmentsToBeDeleted:{},initialTab:this.property&&this.entity?"assignments":"general"}},computed:{tagRepository(){return this.repositoryFactory.create("tag")},tagDefinition(){return Shopware.EntityDefinition.get("tag")},...a("tag",["name"]),title(){return this.tag.isNew()?this.$tc("sw-settings-tag.list.buttonAddTag"):this.$tc("sw-settings-tag.detail.editTitle",0,{name:this.tag.name})},allowSave(){return this.tag.isNew()?this.acl.can("tag.creator"):this.acl.can("tag.editor")},tooltipSave(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};let t=this.$device.getSystemKey();return{message:`${t} + S`,appearance:"light"}},computedCounts(){let t={...this.counts};return Object.keys(this.assignmentsToBeDeleted).forEach(e=>{t.hasOwnProperty(e)&&(t[e]-=Object.keys(this.assignmentsToBeDeleted[e]).length)}),Object.keys(this.assignmentsToBeAdded).forEach(e=>{if(!t.hasOwnProperty(e)){t[e]=Object.keys(this.assignmentsToBeAdded[e]).length;return}t[e]+=Object.keys(this.assignmentsToBeAdded[e]).length}),t}},created(){this.createdComponent()},methods:{createdComponent(){this.editedTag?(this.tag=Object.assign(this.tagRepository.create(),this.editedTag),this.tag._isNew=!1):this.tag=this.tagRepository.create(),Object.entries(this.tagDefinition.properties).forEach(([t,e])=>{"many_to_many"===e.relation&&(this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.assignmentsToBeAdded,t,{}),this.$set(this.assignmentsToBeDeleted,t,{})):(this.assignmentsToBeAdded[t]={},this.assignmentsToBeDeleted[t]={}))})},async onSave(){this.isLoading=!0;let t=[];return Object.entries(this.tagDefinition.properties).forEach(([e,n])=>{if("many_to_many"!==n.relation)return;let s=Object.keys(this.assignmentsToBeAdded[e]);0!==s.length&&s.forEach(t=>{this.tag[e].add(this.assignmentsToBeAdded[e][t])});let a=Object.keys(this.assignmentsToBeDeleted[e]);if(0===a.length)return;let i=a.map(t=>({[n.reference]:t,[n.local]:this.tag.id}));t.push({action:"delete",entity:n.mapping,payload:i})}),t.length&&await this.syncService.sync(t,{},{"single-operation":1}),this.tagRepository.save(this.tag).then(()=>{this.$emit("finish")}).catch(()=>{this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")}),this.isLoading=!1})},onCancel(){this.$emit("close")},addAssignment(t,e,n){if(this.assignmentsToBeDeleted[t].hasOwnProperty(e)){this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.assignmentsToBeDeleted[t],e):delete this.assignmentsToBeDeleted[t][e];return}this.isCompatEnabled("INSTANCE_SET")?this.$set(this.assignmentsToBeAdded[t],e,n):this.assignmentsToBeAdded[t][e]=n},removeAssignment(t,e,n){if(this.assignmentsToBeAdded[t].hasOwnProperty(e)){this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.assignmentsToBeAdded[t],e):delete this.assignmentsToBeAdded[t][e];return}this.isCompatEnabled("INSTANCE_SET")?this.$set(this.assignmentsToBeDeleted[t],e,n):this.assignmentsToBeDeleted[t][e]=n}}}},462358:function(t,e,n){var s=n(690599);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,n(745346).Z)("51bf39ab",s,!0,{})}}]);