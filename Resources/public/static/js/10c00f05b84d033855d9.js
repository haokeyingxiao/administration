(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[36594],{877033:function(){},236594:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return s}}),o(990179);var s=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_cms_add_section %}\n<div\n    class="sw-cms-stage-add-section"\n    :class="componentClasses"\n>\n\n    \n    {% block sw_cms_add_section_selection %}\n    <sw-cms-stage-section-selection\n        v-if="showSelection"\n        @section-select="onAddSection"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_add_section_button %}\n    <div\n        v-if="!forceChoose"\n        class="sw-cms-stage-add-section__button"\n        :class="{ \'is--open\': showSelection }"\n        role="button"\n        tabindex="0"\n        @click="toggleSelection"\n        @keydown.enter="toggleSelection"\n    >\n        <sw-icon\n            name="regular-plus-circle"\n            size="24"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["stage-section-add"],props:{forceChoose:{type:Boolean,required:!1,default(){return!1}},disabled:{type:Boolean,required:!1,default(){return!1}}},data(){return{showSelection:this.forceChoose}},computed:{componentClasses(){return{"is--disabled":this.disabled}}},methods:{onAddSection(n){this.$emit("stage-section-add",n),this.showSelection=!1},toggleSelection(){this.disabled||(this.showSelection=!this.showSelection)}}})},990179:function(n,e,o){var s=o(877033);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),(0,o(745346).Z)("4ba275b4",s,!0,{})}}]);