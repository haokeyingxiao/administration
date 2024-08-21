(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[80081],{228671:function(){},80081:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(155717);var i={template:'\n{% block sw_media_grid %}\n<div class="sw-media-grid">\n    <slot name="content">\n        \n        {% block sw_media_grid_slot_content %}\n        <div\n            class="sw-media-grid__content"\n            :class="presentationClass"\n        >\n            <slot>\n            \n            {% block sw_media_grid_default_slot %}{% endblock %}\n            </slot>\n        </div>\n        {% endblock %}\n    </slot>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["media-grid-selection-clear"],props:{presentation:{required:!1,type:String,default:"medium-preview",validator(e){return["small-preview","medium-preview","large-preview","list-preview"].includes(e)}}},computed:{mediaColumnDefinitions(){return{"grid-template-columns":`repeat(auto-fit, ${this.gridColumnWidth}px)`}},presentationClass(){return`sw-media-grid__presentation--${this.presentation}`},nonDeselectingComponents(){return["sw-media-sidebar","sw-context-menu","sw-media-index__load-more","sw-media-index__options-container","sw-modal"]}},created(){this.createdComponent()},beforeUnmount(){this.beforeDestroyComponent()},methods:{createdComponent(){window.addEventListener("click",this.clearSelectionOnClickOutside,!1)},beforeDestroyComponent(){window.removeEventListener("click",this.clearSelectionOnClickOutside)},clearSelectionOnClickOutside(e){this.isEmittedFromChildren(e.target)||this.originatesFromExcludedComponent(e)||this.emitSelectionCleared(e)},originatesFromExcludedComponent(e){let n=e.composedPath().reduce((e,n)=>n.classList?e.concat(Array.from(n.classList)):e,[]);return this.nonDeselectingComponents.some(e=>n.includes(e))},isEmittedFromChildren(e){return this.$children.some(n=>n.$el===e||n.$el.contains(e))},emitSelectionCleared(e){this.$emit("media-grid-selection-clear",{originalDomEvent:e})}}}},155717:function(e,n,t){var i=t(228671);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,t(745346).Z)("61ee3447",i,!0,{})}}]);