(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[29819],{377043:function(e,t,p){var i=p(121078),n=p(267206),o=p(105976),r=p(345652),a=p(229246),s=p(610928),m=o(function(e){var t=s(e);return a(t)&&(t=void 0),r(i(e,1,a,!0),n(t,2))});e.exports=m},703574:function(){},829819:function(e,t,p){"use strict";p.r(t),p.d(t,{default:function(){return o}});var i=p(377043),n=p.n(i);p(173775);var o={template:'\n{% block sw_import_export_new_profile_wizard_mapping_page %}\n<div class="sw-import-export-new-profile-wizard-mapping-page">\n    \n    {% block sw_import_export_new_profile_wizard_mapping_page_text %}\n    <p class="sw-import-export-new-profile-wizard-mapping-page__text">\n        <template v-if="automatedCount < 1">\n            {{ $tc(\'sw-import-export.profile.mappingDescription\') }}\n        </template>\n        <template v-else>\n            {{ $tc(\'sw-import-export.profile.mappingAutomatedDescription\', 0, { automatedCount }) }}\n        </template>\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_import_export_new_profile_wizard_mapping_page_mapping %}\n    <sw-import-export-edit-profile-modal-mapping\n        class="sw-import-export-new-profile-wizard-mapping-page__mapping"\n        :profile="profile"\n        :system-required-fields="systemRequiredFields"\n        @update-mapping="updateMapping"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["next-allow"],props:{profile:{type:Object,required:!0},systemRequiredFields:{type:Object,required:!0}},data(){return{automatedCount:0}},created(){this.createdComponent()},methods:{createdComponent(){this.automatedCount=this.countAutomatedValues(),this.mergeMappings(),this.$emit("next-allow")},mergeMappings(){let e=Object.entries(this.systemRequiredFields).map(e=>{let[t,p]=e;return{key:t,mappedKey:p}}),t=n()(this.profile.mapping,e,"key");t.sort((e,t)=>e.position-t.position),this.profile.mapping=t.map((e,t)=>(e.position||(e.position=t),e))},updateMapping(e){this.profile.mapping=e},countAutomatedValues(){return this.profile.mapping.reduce((e,t)=>(void 0!==t.key&&null!==t.key&&""!==t.key&&(e+=1),e),0)}}}},173775:function(e,t,p){var i=p(703574);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,p(745346).Z)("13258f79",i,!0,{})}}]);