(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67340],{75338:function(){},767340:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return g}}),o(159192);let{Component:n,State:a,Context:s,Utils:i}=Shopware,{Criteria:c}=Shopware.Data,{mapState:d,mapGetters:r}=n.getComponentHelper(),{cloneDeep:l,merge:u,get:p}=i.object;var g={template:'\n{% block sw_product_detail_layout %}\n<div v-if="isLoading">\n    <sw-skeleton variant="detail-bold" />\n    <sw-skeleton />\n</div>\n\n<div\n    v-else\n    class="sw-product-detail-layout"\n>\n    \n    {% block sw_product_detail_layout_assignment %}\n    <sw-card\n        position-identifier="sw-product-detail-layout-assignment"\n        :title="$tc(\'sw-product.layout.title\')"\n        :subtitle="$tc(\'sw-product.layout.subtitle\')"\n    >\n\n        \n        {% block sw_product_detail_layout_content %}\n        <sw-product-layout-assignment\n            :cms-page="currentPage"\n            @modal-layout-open="onOpenLayoutModal"\n            @button-edit-click="onOpenInPageBuilder"\n            @button-delete-click="onResetLayout"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_detail_layout_modal %}\n        <sw-cms-layout-modal\n            v-if="showLayoutModal"\n            :headline="$tc(\'sw-product.layoutAssignment.subtitle\')"\n            :pre-selection="currentPage"\n            :cms-page-types="[\'product_detail\']"\n            @modal-layout-select="onSelectLayout"\n            @modal-close="onCloseLayoutModal"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_layout_cms_config %}\n    <template v-if="acl.can(\'product.editor\') && currentPage">\n        \n        {% block sw_product_detail_layout_cms_config_form %}\n        <sw-cms-page-form\n            v-if="showCmsForm"\n            :page="currentPage"\n            :element-update="elementUpdate"\n        />\n\n        <sw-card\n            v-else\n            class="sw-product-detail-layout__no-config"\n            position-identifier="sw-product-detail-layout-no-config"\n            :is-loading="isConfigLoading"\n        >\n            <p>{{ $tc(\'sw-product.layout.textNoConfig\') }}</p>\n        </sw-card>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_layout_cms_content_info %}\n        <sw-card\n            hero\n            position-identifier="sw-product-detail-layout-cms-info"\n        >\n            <p class="sw-product-detail-layout__content-info">\n                {{ $tc(\'sw-product.layout.textContentInfo\') }}\n            </p>\n        </sw-card>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","cmsService","feature","acl"],data(){return{showLayoutModal:!1,isConfigLoading:!1}},computed:{cmsPageRepository(){return this.repositoryFactory.create("cms_page")},cmsPageId(){return p(this.product,"cmsPageId",null)},showCmsForm(){return(!this.isLoading||!this.isConfigLoading)&&!this.currentPage.locked},...d("swProductDetail",["product"]),...r("swProductDetail",["isLoading"]),cmsPageCriteria(){let t=new c(1,25);return t.addAssociation("previewMedia"),t.addAssociation("sections"),t.getAssociation("sections").addSorting(c.sort("position")),t.addAssociation("sections.blocks"),t.getAssociation("sections.blocks").addSorting(c.sort("position","ASC")).addAssociation("slots"),t},languageId(){return Shopware.Context.api.languageId},currentPage(){return Shopware.Store.get("cmsPage").currentPage},cmsPageState(){return Shopware.Store.get("cmsPage")}},watch:{cmsPageId(){this.cmsPageState.resetCmsPageState(),this.handleGetCmsPage()},product:{deep:!0,handler(t){t&&this.updateCmsPageDataMapping()}},languageId(){this.cmsPageState.resetCmsPageState(),this.handleGetCmsPage()}},created(){this.createdComponent()},methods:{createdComponent(){(this.currentPage?.sections??[]).length||this.handleGetCmsPage()},onOpenLayoutModal(){this.acl.can("product.editor")&&(this.showLayoutModal=!0)},onCloseLayoutModal(){this.showLayoutModal=!1},onOpenInPageBuilder(){this.currentPage?this.$router.push({name:"sw.cms.detail",params:{id:this.currentPage.id}}):this.$router.push({name:"sw.cms.create"})},onSelectLayout(t){this.product&&(this.product.cmsPageId=t,this.product.slotConfig=null,a.commit("swProductDetail/setProduct",this.product))},handleGetCmsPage(){this.cmsPageId&&(this.isConfigLoading=!0,this.cmsPageRepository.get(this.cmsPageId,s.api,this.cmsPageCriteria).then(t=>{this.product.slotConfig&&t&&t.sections.forEach(t=>{t.blocks.forEach(t=>{t.slots.forEach(t=>{this.product.slotConfig[t.id]&&(t.config=t.config||{},u(t.config,l(this.product.slotConfig[t.id])))})})}),this.cmsPageState.setCurrentPage(t),this.updateCmsPageDataMapping(),this.isConfigLoading=!1}))},updateCmsPageDataMapping(){this.cmsPageState.setCurrentMappingEntity("product"),this.cmsPageState.setCurrentMappingTypes(this.cmsService.getEntityMappingTypes("product")),this.cmsPageState.setCurrentDemoEntity(this.product)},onResetLayout(){this.onSelectLayout(null)},elementUpdate(t){let e=this.product.slotConfig[t.id]?.content;e&&e.value&&(e.value=t.config.content.value)}}}},159192:function(t,e,o){var n=o(75338);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,o(745346).Z)("065e3cec",n,!0,{})}}]);