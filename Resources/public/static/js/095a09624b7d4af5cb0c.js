(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[95420],{376453:function(){},495420:function(n,a,e){"use strict";e.r(a),e.d(a,{default:function(){return o}}),e(560634);var o={template:'\n{% block sw_landing_page_detail_cms %}\n<div class="sw-landing-page-detail__cms">\n\n    \n    {% block sw_landing_page_detail_cms_layout %}\n    <sw-category-layout-card\n        v-bind="{ cmsPage, isLoading }"\n        :category="landingPage"\n        :page-types="[\'landingpage\']"\n        :headline="$tc(\'sw-landing-page.base.cms.cmsLayoutModalHeadline\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_landing_page_detail_cms_form %}\n    <sw-cms-page-form\n        v-if="cmsPage"\n        :page="cmsPage"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{isLoading:{type:Boolean,required:!0}},computed:{landingPage(){return Shopware.State.get("swCategoryDetail").landingPage},cmsPage(){return Shopware.Store.get("cmsPage").currentPage}}}},560634:function(n,a,e){var o=e(376453);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals),(0,e(745346).Z)("dab70b78",o,!0,{})}}]);