(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[41207],{403997:function(){},241207:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return t}}),o(691617);var t={template:'\n{% block sw_category_entry_point_overwrite_modal %}\n<sw-confirm-modal\n    class="sw-category-entry-point-overwrite-modal"\n    @cancel="onCancel"\n    @close="onCancel"\n    @confirm="onConfirm"\n>\n\n    <p class="sw-confirm-modal__text">\n        {{ $tc(\'sw-category.entry-point-overwrite-modal.textBefore\', salesChannels.length) }}\n    </p>\n\n    <ul>\n        <li\n            v-for="salesChannel in salesChannels"\n            :key="salesChannel.translated.name"\n        >\n            {{ salesChannel.translated.name }}\n        </li>\n    </ul>\n\n    <p class="sw-confirm-modal__text">\n        {{ $tc(\'sw-category.entry-point-overwrite-modal.textAfter\', salesChannels.length) }}\n    </p>\n</sw-confirm-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["cancel","confirm"],props:{salesChannels:{type:Array,required:!1,default:()=>[]}},methods:{onCancel(){this.$emit("cancel")},onConfirm(){this.$emit("confirm")}}}},691617:function(n,e,o){var t=o(403997);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),(0,o(745346).Z)("a25457a2",t,!0,{})}}]);