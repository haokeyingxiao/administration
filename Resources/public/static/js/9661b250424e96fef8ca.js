(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[76885],{422351:function(){},476885:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return c}}),o(315499);let{Store:t}=Shopware;var c={template:'\n{% block sw_cms_block_gallery_buybox %}\n<div\n    class="sw-cms-block-gallery-buybox"\n    :class="currentDeviceViewClass"\n>\n    <slot name="left">\n        \n        {% block sw_cms_block_gallery_buybox_slot_left %}{% endblock %}\n    </slot>\n    <slot name="right">\n        \n        {% block sw_cms_block_gallery_buybox_slot_right %}{% endblock %}\n    </slot>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,computed:{currentDeviceView(){return t.get("cmsPage").currentCmsDeviceView},currentDeviceViewClass(){return`is--${this.currentDeviceView}`}}}},315499:function(e,n,o){var t=o(422351);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),(0,o(745346).Z)("46d9c51a",t,!0,{})}}]);