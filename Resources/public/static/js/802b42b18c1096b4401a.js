(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[61637],{83977:function(){},61637:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var n=t(699903);t(243462);let a=Shopware.Utils.object;var i=Shopware.Component.wrapComponentConfig({template:'<div>\n    <sw-card\n        class="sw-generic-cms-page-assignment"\n        position-identifier="sw-generic-cms-page-assignment"\n        :title="$tc(\'sw-category.base.cms.title\')"\n        :is-loading="isLoading"\n    >\n        <div class="sw-generic-cms-page-assignment__base-layout">\n            <sw-cms-list-item\n                active\n                :page="cmsPage"\n                @on-item-click="openLayoutModal"\n            />\n\n            <div class="sw-generic-cms-page-assignment__page-selection">\n                <div class="sw-generic-cms-page-assignment__page-selection-info">\n                    <div\n                        class="sw-generic-cms-page-assignment__page-selection-headline"\n                        :class="{ \'is--empty\': !cmsPage }"\n                    >\n                        {{ cmsPage ? cmsPage.name : $tc(\'sw-category.base.cms.defaultTitle\') }}\n                    </div>\n                    <div\n                        class="sw-generic-cms-page-assignment__page-selection-subheadline"\n                        :class="{ \'is--empty\': !cmsPage }"\n                    >\n                        {{ pageTypeTitle }}\n                    </div>\n                </div>\n\n                <div\n                    v-if="cmsPage"\n                    class="sw-generic-cms-page-assignment__page-selection-actions"\n                >\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__change-layout-action"\n                        size="small"\n                        @click="openLayoutModal"\n                    >\n                        {{ $tc(\'sw-category.base.cms.changeLayout\') }}\n                    </sw-button>\n\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__open-in-pagebuilder"\n                        size="small"\n                        @click="openInCmsEditor"\n                    >\n                        {{ $tc(\'sw-category.base.cms.editInPagebuilder\') }}\n                    </sw-button>\n\n                    <sw-button\n                        size="small"\n                        class="sw-generic-cms-page-assignment__layout-reset"\n                        square\n                        @click="onLayoutSelect(null)"\n                    >\n                        <sw-icon\n                            name="regular-trash"\n                            small\n                        />\n                    </sw-button>\n                </div>\n\n                <div\n                    v-else\n                    class="sw-generic-cms-page-assignment__page-selection-actions"\n                >\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__change-layout-action"\n                        size="small"\n                        @click="openLayoutModal"\n                    >\n                        {{ $tc(\'sw-category.base.cms.changeLayoutEmpty\') }}\n                    </sw-button>\n\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__create-layout"\n                        size="small"\n                        @click="createNewLayout"\n                    >\n                        {{ $tc(\'sw-category.base.cms.editInPagebuilderEmpty\') }}\n                    </sw-button>\n                </div>\n            </div>\n        </div>\n    </sw-card>\n\n    <sw-cms-page-form\n        v-if="cmsPage"\n        :page="cmsPage"\n    />\n\n    <sw-cms-layout-modal\n        v-if="showLayoutSelection"\n        :cms-page-types="allowedPageTypes"\n        :pre-selection="cmsPage"\n        @modal-layout-select="onLayoutSelect"\n        @modal-close="closeLayoutModal"\n    />\n</div>\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","cmsPageTypeService"],props:{cmsPageId:{type:String,required:!1,default:null},slotOverrides:{type:Object,required:!1,default:null},allowedPageTypes:{type:Array,required:!1,default:()=>[]}},data(){return{cmsPage:null,showLayoutSelection:!1,isLoading:!1}},computed:{cmsPageRepository(){return this.repositoryFactory.create("cms_page")},changesetGenerator(){return new Shopware.Data.ChangesetGenerator},cmsPageCriteria(){let e=new n.Z(1,1);return e.addAssociation("previewMedia").getAssociation("sections").addSorting(n.Z.sort("position")).getAssociation("blocks").addSorting(n.Z.sort("position","ASC")).addAssociation("slots"),e},pageTypeTitle(e){let s=this.$tc("sw-category.base.cms.defaultDesc");if(!e)return s;let t=this.cmsPageTypeService.getType(this.cmsPage?.type);return t?this.$tc(t.title):s}},watch:{cmsPageId(){this.getCmsPage()},cmsPage:{handler(e,s){s&&this.emitCmsPageOverrides()},deep:!0}},created(){this.getCmsPage()},methods:{openLayoutModal(){this.showLayoutSelection=!0},closeLayoutModal(){this.showLayoutSelection=!1},onLayoutSelect(e){this.$emit("update:cms-page-id",e)},openInCmsEditor(){this.cmsPageId&&this.$router.push({name:"sw.cms.detail",params:{id:this.cmsPageId}})},createNewLayout(){this.$emit("create-layout")},applySlotOverrides(e){return this.slotOverrides&&e.sections?.forEach(e=>{e.blocks?.forEach(e=>{e.slots?.forEach(e=>{let s=this.slotOverrides[e.id];s&&a.merge(e.config,a.cloneDeep(s))})})}),e},async getCmsPage(){if(null===this.cmsPageId){this.cmsPage=null;return}this.isLoading=!0;let e=this.cmsPageCriteria;e.setIds([this.cmsPageId]);let s=await this.cmsPageRepository.search(e),t=this.applySlotOverrides(s[0]);Shopware.Store.get("cmsPageState").setCurrentPage(t),this.cmsPage=t,this.isLoading=!1},deleteSpecificKeys(e){e&&e.forEach(e=>{e.blocks&&e.blocks.forEach(e=>{e.slots&&e.slots.forEach(e=>{e.config&&Object.values(e.config).forEach(e=>{e&&(e.entity&&delete e.entity,e.hasOwnProperty("required")&&delete e.required,e.type&&delete e.type)})})})})},emitCmsPageOverrides(){if(null===this.cmsPage)return;this.cmsPage.sections&&this.deleteSpecificKeys(this.cmsPage.sections);let{changes:e}=this.changesetGenerator.generate(this.cmsPage),s={};e&&(Array.isArray(e.sections)&&e.sections.forEach(e=>{Array.isArray(e.blocks)&&e.blocks.forEach(e=>{Array.isArray(e.slots)&&e.slots.forEach(e=>{s[e.id]=e.config})})}),this.$emit("update:slot-overrides",s))}}})},243462:function(e,s,t){var n=t(83977);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,t(745346).Z)("259f2de4",n,!0,{})}}]);