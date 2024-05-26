"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[99336],{499336:function(t,s,i){i.r(s),i.d(s,{default:function(){return o}});let{Component:e}=Shopware,{mapState:n,mapGetters:c}=e.getComponentHelper();var o={template:'\n{% block sw_product_detail_specifications %}\n<div v-if="isLoading">\n    <sw-skeleton />\n    <sw-skeleton />\n</div>\n\n<div v-else>\n    \n    {% block sw_product_detail_specifications_measures_packaging %}\n    <sw-card\n        v-show="showProductCard(\'measures_packaging\') && !productStates.includes(\'is-download\')"\n        class="sw-product-detail-specification__measures-packaging"\n        position-identifier="sw-product-detail-specifications-measures-packaging"\n        :title="$tc(\'sw-product.specifications.cardTitleMeasuresPackaging\')"\n    >\n        \n        {% block sw_product_detail_specifications_measures_packaging_content %}\n        <sw-product-packaging-form\n            :show-setting-packaging="showModeSetting"\n            :allow-edit="acl.can(\'product.editor\')"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_specifications_property %}\n    <sw-product-properties\n        v-show="showProductCard(\'properties\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_detail_specifications_essential_characteristics %}\n    <sw-card\n        v-show="showProductCard(\'essential_characteristics\')"\n        class="sw-product-detail-specification__essential-characteristics"\n        position-identifier="sw-product-detail-specifications-essential-characteristics"\n        :title="$tc(\'sw-product.specifications.cardTitleEssentialCharacteristics\')"\n    >\n        \n        {% block sw_product_detail_specifications_essential_characteristics_content %}\n        <sw-product-feature-set-form :allow-edit="acl.can(\'product.editor\')" />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_specifications_custom_products %}\n    {% endblock %}\n\n    \n    {% block sw_product_detail_specifications_custom_fields %}\n    <sw-card\n        v-show="showCustomFieldsCard"\n        class="sw-product-detail-specification__custom-fields"\n        position-identifier="sw-product-detail-specifications-custom-fields"\n        :title="$tc(\'sw-product.specifications.cardTitleCustomFields\')"\n    >\n        \n        {% block sw_product_detail_specifications_custom_fields_content %}\n        <sw-custom-field-set-renderer\n            show-custom-field-set-selection\n            :entity="product"\n            :parent-entity="parentProduct"\n            :sets="customFieldSets"\n            :disabled="!acl.can(\'product.editor\')"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl","feature","repositoryFactory"],data(){return{showMediaModal:!1}},computed:{...n("swProductDetail",["product","parentProduct","customFieldSets","loading"]),...c("swProductDetail",["isLoading","showModeSetting","showProductCard","productStates"]),customFieldsExists(){return 0>=!this.customFieldSets.length},showCustomFieldsCard(){return this.showProductCard("custom_fields")&&!this.isLoading&&this.customFieldsExists}}}}}]);