(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[83340],{618866:function(){},583340:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return s}}),i(220279);var s={template:'\n{% block sw_cms_block_image_slider_preview %}\n<div class="sw-cms-preview-image-slider">\n    <sw-icon\n        name="regular-chevron-left"\n        size="20"\n    />\n    <img\n        :src="assetFilter(\'/administration/static/img/cms/preview_mountain_small.jpg\')"\n        alt=""\n    >\n    <sw-icon\n        name="regular-chevron-right"\n        size="20"\n    />\n</div>\n{% endblock %}\n',computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},220279:function(n,e,i){var s=i(618866);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),i(745346).Z("6208ba3f",s,!0,{})}}]);