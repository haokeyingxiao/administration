"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[85466],{385466:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});let{Mixin:i}=Shopware;var a={template:'\n{% block sw_cms_element_image_content %}\n<img\n    :src="mediaUrl"\n    :style="{ maxHeight: \'90px\' }"\n    alt=""\n>\n{% endblock %}\n',mixins:[i.getByName("cms-element")],computed:{isProductPage(){return this.cmsPageState?.currentPage?.type==="product_detail"},styles(){let{displayMode:e,minHeight:t,verticalAlign:n}=this.element.config;return{"max-width":"180px","min-height":"cover"===e.value&&t.value&&0!==t.value?t.value:"40px","align-self":n.value||null}}},methods:{createdComponent(){this.initElementConfig("manufacturer-logo"),this.initElementData("manufacturer-logo"),!this.isProductPage||this.element?.translated?.config?.media||this.element?.data?.media||(this.element.config.media.source="mapped",this.element.config.media.value="product.manufacturer.media")}}}}}]);