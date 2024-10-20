(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[85653],{175770:function(){},185653:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}}),e(427168);let{Mixin:s}=Shopware;var i={template:'\n{% block sw_cms_element_product_listing %}\n<div class="sw-cms-el-product-listing">\n\n    <div class="sw-cms-el-product-listing__content">\n        <sw-cms-el-product-box\n            v-for="index in demoProductCount"\n            :key="index"\n            :element="getProduct(index)"\n        />\n    </div>\n\n    <div class="sw-cms-el-product-listing__pagination">\n        <div class="sw-cms-el-product-listing__pagination-entry">\n            <sw-icon\n                name="regular-chevron-left-xxs"\n                size="20px"\n            />\n        </div>\n\n        <div class="sw-cms-el-product-listing__pagination-entry">\n            1\n        </div>\n        <div class="sw-cms-el-product-listing__pagination-entry">\n            2\n        </div>\n        <div class="sw-cms-el-product-listing__pagination-entry">\n            3\n        </div>\n\n        <div class="sw-cms-el-product-listing__pagination-entry">\n            <sw-icon\n                name="regular-chevron-right-xxs"\n                size="20px"\n            />\n        </div>\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,mixins:[s.getByName("cms-element")],computed:{currentDemoProducts(){return Shopware.Store.get("cmsPage").currentDemoProducts},demoProductCount(){return this.currentDemoProducts?.length||8},demoProductElement(){return{config:{boxLayout:{source:"static",value:this.element.config.boxLayout.value},displayMode:{source:"static",value:"standard"}},data:null}}},created(){this.createdComponent()},mounted(){this.mountedComponent()},methods:{createdComponent(){this.initElementConfig("product-listing")},mountedComponent(){let n=this.$el.closest(".sw-cms-section");this.$el?.closest?.classList?.contains&&n.classList.contains("is--sidebar")&&(this.demoProductCount=6)},getProduct(n){let t=this.currentDemoProducts?.at(n-1);return t?{...this.demoProductElement,data:{product:t}}:this.demoProductElement}}}},427168:function(n,t,e){var s=e(175770);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),(0,e(745346).Z)("2276aa10",s,!0,{})}}]);