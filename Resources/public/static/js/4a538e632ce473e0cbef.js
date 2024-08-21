(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[75049],{869812:function(){},275049:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}}),t(43516);let{Filter:i,Store:l}=Shopware;var o={template:'\n{% block sw_cms_block %}\n<div\n    class="sw-cms-block"\n    :class="customBlockClass"\n    :style="blockStyles"\n>\n    <sw-cms-visibility-toggle\n        v-if="isVisible"\n        :text="toggleButtonText"\n        :is-collapsed="isCollapsed"\n        :class="expandedClass"\n        @toggle="toggleVisibility"\n    />\n    \n    {% block sw_cms_block_content %}\n    <div\n        v-if="!isCollapsed || !isVisible"\n        class="sw-cms-block__content"\n        :class="expandedClass"\n        :style="blockPadding"\n    >\n        <slot>\n        \n        {% block sw_cms_block_slot_default %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_block_overlay %}\n    <div\n        v-if="!disabled"\n        class="sw-cms-block__config-overlay"\n        :class="overlayClasses"\n        role="button"\n        tabindex="0"\n        @click="onBlockOverlayClick"\n        @keydown.enter="onBlockOverlayClick"\n    ></div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["cmsService"],emits:["block-overlay-click"],props:{block:{type:Object,required:!0,default(){return{}}},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},hasWarnings:{type:Boolean,required:!1,default:!1},hasErrors:{type:Boolean,required:!1,default:!1}},data(){return{backgroundUrl:null,isCollapsed:!0}},computed:{customBlockClass(){let s={"has--warning":!this.hasErrors&&this.hasWarnings,"has--error":this.hasErrors};return this.block.cssClass?this.block?.cssClass?.split(" ").reduce((s,e)=>(s[e]=!0,s),s):s},blockStyles(){let s=null;return this.block.backgroundMedia&&(s=this.block.backgroundMedia.id?`url("${this.block.backgroundMedia.url}")`:`url('${this.assetFilter(this.block.backgroundMedia.url)}')`),{"background-color":this.block.backgroundColor||"transparent","background-image":s,"background-size":this.block.backgroundMediaMode}},blockPadding(){return{"padding-top":this.block.marginTop||"0px","padding-bottom":this.block.marginBottom||"0px","padding-left":this.block.marginLeft||"0px","padding-right":this.block.marginRight||"0px"}},overlayClasses(){return{"is--active":this.active}},toolbarClasses(){return{"is--active":this.active}},assetFilter(){return i.getByName("asset")},isVisible(){let s=l.get("cmsPageState").currentCmsDeviceView;return"desktop"===s&&!this.block.visibility.desktop||"tablet-landscape"===s&&!this.block.visibility.tablet||"mobile"===s&&!this.block.visibility.mobile},toggleButtonText(){return this.$tc("sw-cms.sidebar.contentMenu.visibilityBlockTextButton",!this.isCollapsed)},expandedClass(){return{"is--expanded":this.isVisible&&!this.isCollapsed}}},created(){this.createdComponent()},methods:{createdComponent(){this.block.backgroundMediaMode||(this.block.backgroundMediaMode="cover")},onBlockOverlayClick(){this.block.locked||this.$emit("block-overlay-click")},toggleVisibility(){this.isCollapsed=!this.isCollapsed}}}},43516:function(s,e,t){var i=t(869812);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[s.id,i,""]]),i.locals&&(s.exports=i.locals),(0,t(745346).Z)("df148188",i,!0,{})}}]);