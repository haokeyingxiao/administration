(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[348],{282738:function(){},600348:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return n}}),o(42154);var n=Shopware.Component.wrapComponentConfig({template:'<div class="sw-help-center">\n    <button\n        class="sw-help-center__button"\n        :aria-label="$tc(\'help-center.sidebar.ariaLabelButtonOpen\')"\n        @click="openHelpSidebar"\n    >\n        <sw-icon\n            name="regular-question-circle"\n            size="20px"\n        />\n\n        <div class="sw-help-center__badge">\n            <sw-extension-component-section\n                position-identifier="sw-help-center__badge"\n            />\n        </div>\n    </button>\n\n    <sw-help-sidebar\n        v-if="showHelpSidebar"\n        ref="helpSidebar"\n    />\n\n    <sw-shortcut-overview\n        ref="shortcutModal"\n        @shortcut-open="openShortcutModal"\n        @shortcut-close="closeShortcutModal"\n    />\n</div>\n',compatConfig:Shopware.compatConfig,computed:{showHelpSidebar(){return Shopware.State.get("adminHelpCenter").showHelpSidebar},showShortcutModal(){return Shopware.State.get("adminHelpCenter").showShortcutModal}},watch:{showShortcutModal(e){let t=this.$refs.shortcutModal;if(t){if(!1===e){this.setFocusToSidebar();return}t.onOpenShortcutOverviewModal()}}},methods:{openHelpSidebar(){Shopware.State.commit("adminHelpCenter/setShowHelpSidebar",!0)},openShortcutModal(){Shopware.State.commit("adminHelpCenter/setShowShortcutModal",!0)},closeShortcutModal(){Shopware.State.commit("adminHelpCenter/setShowShortcutModal",!1)},setFocusToSidebar(){let e=this.$refs.helpSidebar;e&&e.setFocusToSidebar()}}})},42154:function(e,t,o){var n=o(282738);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,o(745346).Z)("194e16ab",n,!0,{})}}]);