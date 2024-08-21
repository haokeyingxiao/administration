"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[25965],{884018:function(e,d,t){t.r(d),t.d(d,{default:function(){return s}});let{Context:i,Utils:o,Mixin:a}=Shopware,{Criteria:r}=Shopware.Data,{mapState:n}=Shopware.Component.getComponentHelper(),{isEmpty:l}=o.types;var s={template:'\n{% block sw_bulk_edit_product_media %}\n<div class="sw-bulk-edit-product-media">\n    \n    {% block sw_bulk_edit_product_media_form %}\n    <sw-bulk-edit-product-media-form\n        :disabled="disabled || undefined"\n        @media-open="showMediaModal = true"\n    />\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_product_media_modal %}\n    <sw-media-modal-v2\n        v-if="showMediaModal"\n        :initial-folder-id="mediaDefaultFolderId"\n        :entity-context="product.getEntityName()"\n        @media-modal-selection-change="onAddMedia"\n        @modal-close="showMediaModal = false"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],mixins:[a.getByName("notification")],props:{disabled:{type:Boolean,required:!1,default:!1}},data(){return{showMediaModal:!1,mediaDefaultFolderId:null}},computed:{...n("swProductDetail",["product"]),productMediaRepository(){return this.repositoryFactory.create("product_media")},mediaDefaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},mediaDefaultFolderCriteria(){let e=new r(1,1);return e.addAssociation("folder"),e.addFilter(r.equals("entity","product")),e}},created(){this.createdComponent()},methods:{createdComponent(){this.loadMediaDefaultFolder()},loadMediaDefaultFolder(){this.getMediaDefaultFolderId().then(e=>{this.mediaDefaultFolderId=e})},getMediaDefaultFolderId(){return this.mediaDefaultFolderRepository.search(this.mediaDefaultFolderCriteria,i.api).then(e=>{let d=e.first();return null===d?null:d.folder?.id?d.folder.id:null})},onAddMedia(e){l(e)||e.forEach(e=>{this.addMedia(e).catch(({fileName:e})=>{this.createNotificationError({message:this.$tc("sw-product.mediaForm.errorMediaItemDuplicated",0,{fileName:e})})})})},addMedia(e){if(this.isExistingMedia(e))return Promise.reject(e);let d=this.productMediaRepository.create(Shopware.Context.api);return d.mediaId=e.id,d.media={url:e.url,id:e.id},this.product.media.add(d),Promise.resolve()},isExistingMedia(e){return this.product.media.some(({id:d,mediaId:t})=>d===e.id||t===e.id)}}}}}]);