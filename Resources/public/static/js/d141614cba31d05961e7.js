(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[17821],{439284:function(){},917821:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(625410);let{Criteria:a}=Shopware.Data;var i={template:'\n{% block sw_first_run_wizard_welcome %}\n<div class="sw-first-run-wizard-welcome">\n    <div class="center">\n        <img\n            class="sw-first-run-wizard__welcome-image"\n            :src="assetFilter(\'/administration/static/img/first-run-wizard/welcome.svg\')"\n            alt=""\n        >\n        <h4 class="headline-welcome">\n            {{ $tc(\'sw-first-run-wizard.welcome.headlineWelcome\') }}\n        </h4>\n        <p\n            class="text-welcome"\n            v-html="$tc(\'sw-first-run-wizard.welcome.messageWelcome\')"\n        ></p>\n    </div>\n\n    <h5\n        v-if="languagePlugins.length"\n        class="text-change-language">\n        {{ $tc(\'sw-first-run-wizard.welcome.headlineChangeLanguage\') }}\n    </h5>\n\n    <sw-loader v-if="isLoading" />\n\n    <sw-container\n        columns="1fr 1fr"\n        gap="24px 0"\n    >\n        <sw-plugin-card\n            v-for="languagePlugin in languagePlugins"\n            :key="languagePlugin.name"\n            :plugin="languagePlugin"\n            @on-plugin-installed="onPluginInstalled"\n            @extension-activated="$emit(\'extension-activated\', $event)"\n        />\n    </sw-container>\n\n    \n    {% block sw_first_run_wizard_welcome_confirm_language_switch_modal %}\n    <sw-modal\n        v-if="showConfirmLanguageSwitchModal"\n        variant="small"\n        :title="$tc(\'sw-first-run-wizard.welcome.switchLanguageModalTitle\')"\n        class="sw-first-run-wizard-confirmLanguageSwitch-modal"\n        @modal-close="onCancelSwitch"\n    >\n\n        \n        {% block sw_first_run_wizard_welcome_confirm_language_switch_modal_text %}\n        <p class="sw-first-run-wizard-welcome__modal-text">\n            {{ $tc(\'sw-first-run-wizard.welcome.switchLanguageMessage\', {}, { pluginName: latestTouchedPlugin.name }) }}\n        </p>\n        <sw-select-field\n            v-model:value="user.localeId"\n            class="sw-profile__language"\n            :label="$tc(\'sw-users-permissions.users.user-detail.labelLanguage\')"\n        >\n            <option\n                v-for="language in languages"\n                :key="language.locale.id"\n                :value="language.locale.id"\n                :selected="user.localeId === language.locale.id"\n            >\n                {{ language.customLabel }}\n            </option>\n        </sw-select-field>\n        <sw-password-field\n            v-model:value="user.pw"\n            type="password"\n            :label="$tc(\'sw-first-run-wizard.shopwareAccount.passwordPlaceholder\')"\n            @keypress.enter="onConfirmLanguageSwitch"\n        />\n        {% endblock %}\n\n        \n        {% block sw_first_run_wizard_welcome_confirm_language_switch_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_first_run_wizard_welcome_confirm_language_switch_modal_action_cancel %}\n            <sw-button\n                size="small"\n                @click="onCancelSwitch"\n            >\n                {{ $tc(\'sw-first-run-wizard.welcome.cancelLanguageSwitch\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_first_run_wizard_welcome_confirm_language_switch_modal_action_switch %}\n            <sw-button\n                size="small"\n                variant="primary"\n                @click="onConfirmLanguageSwitch"\n            >\n                {{ $tc(\'sw-first-run-wizard.welcome.confirmLanguageSwitch\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["languagePluginService","userService","loginService","repositoryFactory"],emits:["extension-activated","frw-set-title","buttons-update"],mixins:["notification"],data(){return{languages:[],languagePlugins:[],latestTouchedPlugin:null,showConfirmLanguageSwitchModal:!1,newLocaleId:null,user:{localeId:"",pw:""},userProfile:{},userPromise:null,isLoading:!1}},computed:{languageRepository(){return this.repositoryFactory.create("language")},userRepository(){return this.repositoryFactory.create("user")},languageId(){return Shopware.State.get("session").languageId},languageCriteria(){return this.getLanguageCriteria()},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{languageId(){this.createdComponent()}},beforeMount(){this.beforeMountComponent()},created(){this.createdComponent()},methods:{beforeMountComponent(){this.userPromise.then(e=>{this.user=e})},createdComponent(){this.updateButtons(),this.setTitle(),this.getLanguagePlugins();let e=new Promise(e=>{e(this.languageId)});this.userPromise=this.userService.getUser().then(e=>this.setUserData(e.data)),Promise.all([e,this.userPromise]).then(()=>{this.loadLanguages()})},setTitle(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.welcome.modalTitle"))},updateButtons(){let e=Shopware.State.get("context").app.config.settings.disableExtensionManagement,n=[{key:"next",label:this.$tc("sw-first-run-wizard.general.buttonNext"),position:"right",variant:"primary",action:`sw.first.run.wizard.index.${e?"defaults":"data-import"}`,disabled:!1}];this.$emit("buttons-update",n)},setUserData(e){return this.userProfile=e,new Promise(e=>{e(this.userRepository.get(this.userProfile.id))})},getLanguagePlugins(){if(Shopware.State.get("context").app.config.settings.disableExtensionManagement){this.languagePlugins=[];return}this.languagePluginService.getPlugins().then(e=>{this.languagePlugins=e.items})},onPluginInstalled(e){this.latestTouchedPlugin=this.getPluginByName(e),this.getLanguagePlugins(),this.isLoading=!0,this.loadLanguages().then(()=>{this.showConfirmLanguageSwitchModal=!0,this.isLoading=!1})},onPluginRemoved(e){this.latestTouchedPlugin=this.getPluginByName(e),this.getLanguagePlugins()},onConfirmLanguageSwitch(){this.loginService.verifyUserToken(this.user.pw).then(e=>{let n={...Shopware.Context.api};n.authToken.access=e,this.userRepository.save(this.user,n).then(async()=>{await Shopware.Service("localeHelper").setLocaleWithId(this.user.localeId)}).finally(()=>{this.showConfirmLanguageSwitchModal=!1})}).catch(()=>{this.createNotificationError({title:this.$tc("sw-users-permissions.users.user-detail.passwordConfirmation.notificationPasswordErrorTitle"),message:this.$tc("sw-users-permissions.users.user-detail.passwordConfirmation.notificationPasswordErrorMessage")})}).finally(()=>{this.confirmPassword=""})},onCancelSwitch(){this.showConfirmLanguageSwitchModal=!1},getPluginByName(e){return this.languagePlugins.length<1?null:this.languagePlugins.find(n=>n.name===e)},getLanguageCriteria(){let e=new a(1,null);return e.addAssociation("locale"),e.addSorting(a.sort("locale.name","ASC")),e.addSorting(a.sort("locale.territory","ASC")),e},showPluginErrorNotification(e,n){let t=this.$tc("sw-first-run-wizard.welcome.tryAgainLater");this.createNotificationError({message:`${e}
${n}
${t}`})},loadLanguages(){return this.languageRepository.search(this.languageCriteria).then(e=>(this.languages=[],e.forEach(e=>{e.customLabel=`${e.locale.translated.name} (${e.locale.translated.territory})`,this.languages.push(e)}),this.languages))}}}},625410:function(e,n,t){var a=t(439284);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,t(745346).Z)("3f5afbff",a,!0,{})}}]);