(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[2827],{482609:function(){},602827:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}}),i(442894);let{Filter:s}=Shopware;var n=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_cms_list_item %}\n<div\n    class="sw-cms-list-item"\n    :class="componentClasses"\n    :title="page && page.translated.name"\n>\n\n    \n    {% block sw_cms_list_item_options %}\n    <slot name="contextMenu"></slot>\n    {% endblock %}\n\n    \n    {% block sw_cms_list_item_image %}\n    <div\n        v-if="page"\n        class="sw-cms-list-item__image"\n        :style="previewMedia"\n        role="button"\n        tabindex="0"\n        @click="onItemClick(page)"\n        @keydown.enter="onItemClick(page)"\n    >\n        <div v-if="isDefault">\n            <span\n                v-if="page.type === \'product_list\'"\n                class="sw-cms-list-item__is-default"\n            >{{ $tc(\'sw-cms.components.cmsListItem.defaultLayoutProductList\') }}</span>\n            <span\n                v-else-if="page.type === \'product_detail\'"\n                class="sw-cms-list-item__is-default"\n            >{{ $tc(\'sw-cms.components.cmsListItem.defaultLayoutProductDetail\') }}</span>\n        </div>\n    </div>\n    <div\n        v-else\n        class="sw-cms-list-item__image is--empty"\n    >\n        {{ $tc(\'sw-cms.components.cmsListItem.emptyText\') }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_list_item_info %}\n    <div class="sw-cms-list-item__info">\n        <div\n            v-if="page"\n            class="sw-cms-list-item__status"\n            :class="statusClasses"\n        ></div>\n        <div\n            v-if="page"\n            class="sw-cms-list-item__title"\n            role="button"\n            tabindex="0"\n            @click="onElementClick"\n            @keydown.enter="onElementClick"\n        >\n            {{ page.translated.name }}\n        </div>\n        <sw-icon\n            v-if="page && page.locked"\n            class="sw-cms-list-item__locked"\n            name="solid-lock"\n            small\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],emits:["preview-image-change","on-item-click","element-click","item-click","cms-page-delete"],props:{page:{type:Object,required:!1,default:null},active:{type:Boolean,required:!1,default:!1},isDefault:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},computed:{previewMedia(){if(this.page.previewMedia?.id&&this.page.previewMedia?.url)return{"background-image":`url(${this.page.previewMedia.url})`,"background-size":"cover"};if(this.page.locked&&"page"!==this.page.type)return{"background-image":this.defaultLayoutAsset};let e=this.defaultItemLayoutAssetBackground;return e?{"background-image":e,"background-size":"cover"}:null},defaultLayoutAsset(){return`url(${this.assetFilter(`administration/static/img/cms/default_preview_${this.page.type}.jpg`)})`},defaultItemLayoutAssetBackground(){return this.page.sections.length<1?null:`url(${this.assetFilter(`administration/static/img/cms/preview_${this.page.type}_${this.page.sections[0].type}.png`)})`},componentClasses(){return{"is--active":this.active,"is--disabled":this.disabled}},statusClasses(){return{"is--active":this.active||this.isDefault}},assetFilter(){return s.getByName("asset")}},methods:{onChangePreviewImage(e){this.$emit("preview-image-change",e)},onElementClick(){this.disabled||(this.$emit("on-item-click",this.page),this.$emit("element-click",this.page))},onItemClick(e){this.disabled||this.$emit("item-click",e)},onRemovePreviewImage(e){e.previewMediaId=void 0,e.save(),e.previewMedia=void 0},onDelete(e){this.$emit("cms-page-delete",e)}}})},442894:function(e,t,i){var s=i(482609);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(745346).Z)("498e182c",s,!0,{})}}]);