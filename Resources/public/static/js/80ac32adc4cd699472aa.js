"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[32799],{932799:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});let{Component:o,Mixin:l,Context:i}=Shopware,{ShopwareError:a}=Shopware.Classes,{EntityCollection:s,Criteria:r}=Shopware.Data,{mapState:c}=o.getComponentHelper();var g={template:'\n{% block sw_flow_tag_modal %}\n<sw-modal\n    class="sw-flow-tag-modal"\n    :title="tagTitle"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_tag_modal_content %}\n    <div class="sw-flow-tag-modal__content">\n        \n        {% block sw_flow_tag_modal_to_field %}\n        <sw-single-select\n            v-model:value="entity"\n            name="sw-field--entity"\n            class="sw-flow-tag-modal__to-field"\n            required\n            show-clearable-button\n            :label="$tc(\'sw-flow.modals.tag.labelToField\')"\n            :placeholder="$tc(\'sw-flow.modals.tag.placeholderToField\')"\n            :error="entityError"\n            :options="entityOptions"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_tag_modal_tags_field %}\n        <sw-entity-tag-select\n            v-model:entityCollection="tagCollection"\n            name="sw-field--tagCollection"\n            class="sw-flow-tag-modal__tags-field"\n            required\n            :label="$tc(\'sw-flow.modals.tag.labelTagsField\')"\n            :placeholder="$tc(\'sw-flow.modals.tag.placeholderTagsField\')"\n            :error="tagError"\n            @item-add="onAddTag"\n            @item-remove="onRemoveTag"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_tag_modal_content_custom %}\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_flow_tag_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-tag-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_tag_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-tag-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onSaveTag"\n        >\n            {{ isNewTag ? $tc(\'sw-flow.modals.buttonAddAction\') : $tc(\'sw-flow.modals.buttonSaveAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl","repositoryFactory","flowBuilderService"],emits:["process-finish","modal-close"],mixins:[l.getByName("placeholder"),l.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data(){return{isLoading:!1,entity:null,entityOptions:[],tagCollection:null,tagError:null,entityError:null}},computed:{tagCriteria(){let t=new r(1,25),{config:e}=this.sequence,n=Object.keys(e.tagIds);return n.length&&t.addFilter(r.equalsAny("id",n)),t},isNewTag(){return!this.sequence?.id},tagRepository(){return this.repositoryFactory.create("tag")},tagTitle(){return this.action?this.action.match(/add.*tag/)?this.$tc("sw-flow.modals.tag.labelAddTag"):this.action.match(/remove.*tag/)?this.$tc("sw-flow.modals.tag.labelRemoveTag"):"":""},...c("swFlowState",["triggerEvent","triggerActions"])},watch:{entity(t){t&&this.entityError&&(this.entityError=null)},tagCollection(t){t&&this.tagError&&(this.tagError=null)}},created(){this.createdComponent()},methods:{createdComponent(){this.getEntityOptions(),this.tagCollection=this.createTagCollection();let{config:t,id:e}=this.sequence;t?.entity&&(this.entity=t?.entity),e&&t?.tagIds&&this.getTagCollection()},getTagCollection(){return this.tagRepository.search(this.tagCriteria).then(t=>{this.tagCollection=t}).catch(()=>{this.tagCollection=[]})},createTagCollection(){return new s(this.tagRepository.route,this.tagRepository.entityName,i.api)},onAddTag(t){this.tagCollection.add(t)},onRemoveTag(t){this.tagCollection.remove(t)},getEntityOptions(){if(!this.triggerEvent){this.entityOptions=[];return}let t=this.triggerEvent.aware??[],e=this.flowBuilderService.getAvailableEntities(this.action,this.triggerActions,t,["tags"]);e.length&&(this.entity=e[0].value),this.entityOptions=e},getConfig(){let t={};return this.tagCollection.forEach(e=>{Object.assign(t,{[e.id]:e.name})}),{entity:this.entity,tagIds:t}},fieldError(t){return t&&t.length?null:new a({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},onSaveTag(){if(this.tagError=this.fieldError(this.tagCollection),this.entityError=this.fieldError(this.entity),this.tagError||this.entityError)return;let t=this.getConfig(),e={...this.sequence,config:t};this.$emit("process-finish",e),this.onClose()},onClose(){this.tagError=null,this.$emit("modal-close")}}}}}]);