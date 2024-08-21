(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[71865],{856378:function(){},471865:function(n,i,s){"use strict";s.r(i),s.d(i,{default:function(){return e}}),s(732337);var e=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_plugin_card %}\n<div class="sw-plugin-card">\n    <sw-extension-icon\n        :src="plugin.iconPath"\n    />\n    <div class="sw-plugin-card__info">\n        <div class="sw-plugin-card__label">\n            {{ plugin.label }}\n        </div>\n        <div class="sw-plugin-card__manufacturer">\n            {{ plugin.manufacturer }}\n        </div>\n        <div\n            v-if="showDescription"\n            class="sw-plugin-card__short-description"\n        >\n            {{ truncateFilter(plugin.shortDescription, 140) }}\n        </div>\n\n        <div\n            v-if="pluginIsNotActive"\n            class="bottom"\n        >\n            <sw-button-process\n                variant="primary"\n                :is-loading="pluginIsLoading"\n                :disabled="pluginIsLoading"\n                :process-success="pluginIsSaveSuccessful"\n                class="button-plugin-install"\n                @click="onInstall"\n            >\n                {{ $tc(\'sw-first-run-wizard.general.buttonInstall\') }}\n            </sw-button-process>\n        </div>\n        <div\n            v-else\n            class="plugin-status"\n        >\n            <span class="plugin-installed">\n                <sw-icon\n                    name="regular-check-circle-s"\n                    size="16"\n                />\n                {{ $tc(\'sw-first-run-wizard.general.pluginInstalled\') }}\n            </span>\n        </div>\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["cacheApiService","extensionHelperService","shopwareExtensionService"],mixins:[Shopware.Mixin.getByName("sw-extension-error")],props:{plugin:{type:Object,required:!0},showDescription:{type:Boolean,default:!0,required:!1}},data(){return{pluginIsLoading:!1,pluginIsSaveSuccessful:!1}},computed:{pluginIsNotActive(){return!this.plugin.active},truncateFilter(){return Shopware.Filter.getByName("truncate")}},methods:{onInstall(){this.setupPlugin()},async setupPlugin(){this.pluginIsLoading=!0,this.pluginIsSaveSuccessful=!1;try{await this.extensionHelperService.downloadAndActivateExtension(this.plugin.name,this.plugin.type),this.pluginIsSaveSuccessful=!0,this.$emit("extension-activated")}catch(n){this.showExtensionErrors(n)}finally{this.pluginIsLoading=!1,"plugin"===this.plugin.type&&this.cacheApiService.clear(),await this.shopwareExtensionService.updateExtensionData(),this.$emit("on-plugin-installed",this.plugin.name)}}}})},732337:function(n,i,s){var e=s(856378);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals),(0,s(745346).Z)("7b026c10",e,!0,{})}}]);