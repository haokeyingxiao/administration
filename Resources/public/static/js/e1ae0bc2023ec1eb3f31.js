(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[21349],{458757:function(){},221349:function(i,s,e){"use strict";e.r(s),e.d(s,{default:function(){return n}}),e(268378);var n={template:'\n{% block sw_cms_preview_image_gallery %}\n<div class="sw-cms-preview-gallery">\n    <div class="sw-cms-preview-gallery-preview">\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_mountain_small.jpg\')"\n            alt=""\n        >\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n            alt=""\n        >\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_plant_small.jpg\')"\n            alt=""\n        >\n    </div>\n\n    <sw-cms-preview-image-slider />\n</div>\n{% endblock %}\n',computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},268378:function(i,s,e){var n=e(458757);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[i.id,n,""]]),n.locals&&(i.exports=n.locals),e(745346).Z("5e5aa0f4",n,!0,{})}}]);