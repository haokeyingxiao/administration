(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[47985],{124214:function(){},747985:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}}),a(103221);var l={template:'\n{% block sw_sales_channel_modal_detail %}\n<div class="sw-sales-channel-modal-detail">\n\n    \n    {% block sw_sales_channel_modal_detail_header %}\n    <sw-container\n        class="sw-sales-channel-modal-detail__header"\n        columns="64px 1fr"\n        gap="24px"\n    >\n\n        \n        {% block sw_sales_channel_modal_detail_header_icon %}\n        <span class="sw-sales-channel-modal-detail__header-icon">\n            <sw-icon\n                v-if="detailType.iconName"\n                :name="detailType.iconName"\n            />\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_modal_detail_header_meta %}\n        <div class="sw-sales-channel-modal-detail__header-meta">\n            <h4 class="sw-sales-channel-modal-detail__header-name">\n                {{ detailType.translated.name }}\n            </h4>\n            <div class="sw-sales-channel-modal-detail__header-manufacturer">\n                {{ detailType.translated.manufacturer }}\n            </div>\n        </div>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_modal_detail_description %}\n    <h4 class="sw-sales-channel-modal-detail__description-long-title">\n        {{ $tc(\'sw-sales-channel.modal.titleDescription\') }}\n    </h4>\n    <div\n        v-if="detailType.translated.descriptionLong"\n        class="sw-sales-channel-modal-detail__description-long-text"\n    >\n        {{ detailType.translated.descriptionLong }}\n    </div>\n    <div\n        v-else\n        class="sw-sales-channel-modal-detail__description-long-text"\n    >\n        {{ detailType.translated.description }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_modal_detail_screenshots %}\n    <div class="sw-sales-channel-modal-detail__screenshots">\n        <sw-image-slider\n            class="sw-sales-channel-modal-detail__screenshot"\n            :images="detailType.screenshotUrls || []"\n            :canvas-width="580"\n            :canvas-height="272"\n            overflow="visible"\n            navigation-type="arrow"\n            enable-descriptions\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{detailType:{type:Object,required:!1,default:null}}}},103221:function(n,e,a){var l=a(124214);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[n.id,l,""]]),l.locals&&(n.exports=l.locals),(0,a(745346).Z)("e5fa527e",l,!0,{})}}]);