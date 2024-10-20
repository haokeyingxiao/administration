(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[1385],{553699:function(){},1385:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}}),s(977902);var c={template:'\n{% block sw_flow_sequence %}\n<div class="sw-flow-sequence">\n    \n    {% block sw_flow_sequence_selector %}\n    <sw-flow-sequence-selector\n        v-if="isSelectorSequence"\n        :disabled="disabled"\n        :sequence="sequenceData"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition %}\n    <sw-flow-sequence-condition\n        v-if="isConditionSequence"\n        :disabled="disabled"\n        :sequence="sequenceData"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_action %}\n    <sw-flow-sequence-action\n        v-show="isActionSequence"\n        :sequence="sequenceData"\n        :disabled="disabled"\n        :is-unknown-trigger="isUnknownTrigger"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_extension %}{% endblock %}\n\n    \n    {% block sw_flow_sequence_true_block %}\n    <div\n        v-if="sequenceData.trueBlock"\n        class="sw-flow-sequence__true-block"\n        :class="trueBlockClasses"\n    >\n        <sw-flow-sequence\n            :sequence="sequenceData.trueBlock"\n            :disabled="disabled"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_false_block %}\n    <div\n        v-if="sequenceData.falseBlock"\n        class="sw-flow-sequence__false-block"\n    >\n        <sw-flow-sequence\n            :sequence="sequenceData.falseBlock"\n            :disabled="disabled"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},isUnknownTrigger:{type:Boolean,required:!1,default:!1}},computed:{sequenceData(){let e=Object.values(this.sequence);return this.sequence.id||e.length>1?this.sequence:e[0]},isSelectorSequence(){return null===this.sequenceData.actionName&&null===this.sequenceData.ruleId},isConditionSequence(){return this.sequenceData.ruleId||""===this.sequenceData.ruleId},isActionSequence(){return!this.isSelectorSequence&&!this.isConditionSequence},trueBlockClasses(){if(this.sequence.parentId||!this.isConditionSequence)return null;let e=this.sequence?.falseBlock,n=this.sequence?.trueBlock;return e&&n?(e=Object.values(e),n=Object.values(n),{"has--selector":null===e[0].actionName&&null===e[0].ruleId&&null===n[0].actionName&&null===n[0].ruleId}):null}}}},977902:function(e,n,s){var c=s(553699);c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[e.id,c,""]]),c.locals&&(e.exports=c.locals),(0,s(745346).Z)("279e281b",c,!0,{})}}]);