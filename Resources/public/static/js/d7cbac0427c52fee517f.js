(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[38092],{382907:function(){},138092:function(n,i,s){"use strict";s.r(i),s.d(i,{default:function(){return t}}),s(190060);var t={template:'\n{% block sw_first_run_wizard_finish %}\n<div class="sw-first-run-wizard-finish">\n\n    <span class="sw-first-run-wizard-finish__bubble">\n        <sw-icon\n            class="sw-first-run-wizard-finish__icon"\n            name="regular-checkmark-xs"\n            size="24px"\n            small\n        />\n    </span>\n    <h3 class="headline">\n        {{ $tc(\'sw-first-run-wizard.finish.headlineAllDone\') }}\n    </h3>\n    <p class="message">\n        {{ successMessage }}\n    </p>\n\n    <h3 class="headline-useful-links">\n        {{ $tc(\'sw-first-run-wizard.finish.headlineUsefulLinks\') }}\n    </h3>\n    <sw-container\n        columns="1fr 1fr 1fr"\n        class="list-useful-links"\n    >\n        <a\n            :href="$tc(\'sw-first-run-wizard.finish.documentationUrl\')"\n            class="external-link"\n            target="_blank"\n            rel="noopener"\n        >\n            {{ $tc(\'sw-first-run-wizard.finish.documentationLabel\') }}\n        </a>\n        <a\n            :href="$tc(\'sw-first-run-wizard.finish.forumUrl\')"\n            class="external-link"\n            target="_blank"\n            rel="noopener"\n        >\n            {{ $tc(\'sw-first-run-wizard.finish.forumLabel\') }}\n        </a>\n        <a\n            :href="$tc(\'sw-first-run-wizard.finish.roadmapUrl\')"\n            class="external-link"\n            target="_blank"\n            rel="noopener"\n        >\n            {{ $tc(\'sw-first-run-wizard.finish.roadmapLabel\') }}\n        </a>\n    </sw-container>\n\n    <div\n        v-if="restarting"\n        class="restart-progress"\n    >\n        <sw-loader size="48px" />\n        <p\n            class="sw-loader-info-text"\n            v-html="$tc(\'sw-first-run-wizard.finish.loadingMessage\')"\n        ></p>\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["firstRunWizardService"],emits:["frw-set-title","buttons-update","frw-finish"],data(){return{licenceDomains:[],licensed:!1,restarting:!1}},computed:{edition(){let n=this.licenceDomains.find(n=>n.active);return n?n.edition:""},successMessage(){if(!this.licensed)return this.$tc("sw-first-run-wizard.finish.messageNotLicensed");let{edition:n}=this;return this.$tc("sw-first-run-wizard.finish.message",{},{edition:n})},buttonConfig(){let n=Shopware.State.get("context").app.config.settings.disableExtensionManagement;return[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:`sw.first.run.wizard.index.${n?"shopware.account":"store"}`,disabled:!1},{key:"finish",label:this.$tc("sw-first-run-wizard.general.buttonFinish"),position:"right",variant:"primary",action:this.onFinish.bind(this),disabled:!1}]}},watch:{buttonConfig:{handler(){this.updateButtons()},deep:!0}},created(){this.createdComponent(),this.setTitle()},methods:{createdComponent(){this.updateButtons(),this.firstRunWizardService.getLicenseDomains().then(n=>{let{items:i}=n;i&&!(i.length<1)&&(this.licenceDomains=i,this.licensed=!0)}).catch(()=>{this.licensed=!1})},setTitle(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.finish.modalTitle"))},updateButtons(){this.$emit("buttons-update",this.buttonConfig)},onFinish(){this.restarting=!0,this.$emit("frw-finish",!0)}}}},190060:function(n,i,s){var t=s(382907);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),(0,s(745346).Z)("def6e75e",t,!0,{})}}]);