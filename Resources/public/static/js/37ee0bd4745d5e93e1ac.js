"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[86396],{886396:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});let{Component:a}=Shopware,{mapState:r,mapGetters:o}=a.getComponentHelper();var i={template:'\n{% block sw_product_detail_seo %}\n<div v-if="isLoading">\n    <sw-skeleton variant="detail-bold" />\n    <sw-skeleton />\n</div>\n\n<div v-else>\n    \n    {% block sw_product_detail_seo_general %}\n    <sw-card\n        position-identifier="sw-product-detail-seo"\n        :title="$tc(\'sw-product.seo.cardTitleSeo\')"\n    >\n        \n        {% block sw_product_detail_seo_general_content %}\n        <sw-product-seo-form\n            ref="seoForm"\n            :allow-edit="acl.can(\'product.editor\')"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_seo_urls %}\n    <sw-seo-url\n        v-if="product.seoUrls"\n        :has-default-template="false"\n        :disabled="!acl.can(\'product.editor\')"\n        :urls="product.seoUrls"\n        @on-change-sales-channel="onChangeSalesChannel"\n    >\n        \n        {% block sw_product_detail_seo_urls_content %}\n        <template #seo-additional="props">\n            \n            {% block sw_product_detail_seo_urls_content_seo_additional %}\n            <sw-inherit-wrapper\n                v-if="product.mainCategories"\n                v-model:value="productMainCategory"\n                :has-parent="!!parentProduct.id && !!props.currentSalesChannelId && product.categories.length === 0"\n                :label="$tc(\'sw-seo-url.labelMainCategory\')"\n                :inherited-value="parentMainCategory"\n            >\n\n                <template #content="{ currentValue, isInherited }">\n                    \n                    {% block sw_product_detail_seo_urls_content_seo_additional_edit %}\n                    <sw-seo-main-category\n                        :current-sales-channel-id="props.currentSalesChannelId"\n                        :categories="categories"\n                        :main-categories="isInherited ? parentProduct.mainCategories : product.mainCategories"\n                        :overwrite-label="true"\n                        :allow-edit="acl.can(\'product.editor\') && !isInherited"\n                        @main-category-add="onAddMainCategory"\n                    />\n                    {% endblock %}\n                </template>\n\n            </sw-inherit-wrapper>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-seo-url>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["feature","acl"],data(){return{currentSalesChannelId:void 0}},computed:{...r("swProductDetail",["product","parentProduct"]),...o("swProductDetail",["isLoading"]),categories(){return this.product.categories.length>0?this.product.categories:this.parentProduct.categories??[]},parentMainCategory(){return this.parentProduct.mainCategories&&this.currentSalesChannelId?this.parentProduct.mainCategories.find(e=>e.salesChannelId===this.currentSalesChannelId):null},productMainCategory:{get(){return this.product.mainCategories.find(e=>e.salesChannelId===this.currentSalesChannelId)},set(e){if(this.product.mainCategories&&!e){this.product.mainCategories=this.product.mainCategories.filter(e=>e.salesChannelId!==this.currentSalesChannelId);return}this.product.mainCategories.push(e)}}},methods:{onAddMainCategory(e){this.product.mainCategories&&this.product.mainCategories.push(e)},onChangeSalesChannel(e){this.currentSalesChannelId=e}}}}}]);