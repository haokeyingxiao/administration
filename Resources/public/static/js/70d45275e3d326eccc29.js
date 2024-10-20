(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[45018],{63234:function(){},545018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n(559565);let{State:i,Context:a}=Shopware;var o=Shopware.Component.wrapComponentConfig({template:'<sw-page\n    class="sw-extension-app-module-page"\n    :show-smart-bar="showSmartBar"\n>\n    <template\n        v-if="!suspend"\n        #smart-bar-header\n    >\n        <h2>{{ heading }}</h2>\n    </template>\n\n    <template #content>\n        <template v-if="!suspend && signedIframeSrc">\n            <iframe\n                v-show="appLoaded"\n                id="app-content"\n                class="sw-extension-app-module-page__app-content"\n                referrerpolicy="origin-when-cross-origin"\n                :src="signedIframeSrc"\n                :title="heading"\n            ></iframe>\n\n            <template v-if="!appLoaded">\n                <template v-if="timedOut">\n                    <sw-extension-app-module-error-page />\n                </template>\n\n                <template v-else>\n                    <sw-loader />\n                </template>\n            </template>\n        </template>\n    </template>\n</sw-page>\n',compatConfig:Shopware.compatConfig,inject:["acl","extensionSdkService"],props:{appName:{type:String,required:!0},moduleName:{type:String,required:!1,default:null}},data(){return{appLoaded:!1,timedOut:!1,timedOutTimeout:null,signedIframeSrc:void 0}},computed:{currentLocale(){return i.get("session").currentLocale},fallbackLocale(){return a.app.fallbackLocale},appDefinition(){return i.get("shopwareApps").apps.find(e=>e.name===this.appName)??null},moduleDefinition(){return this.appDefinition?this.moduleName?this.appDefinition.modules.find(e=>e.name===this.moduleName)??null:this.appDefinition.mainModule??null:null},showSmartBar(){let{hiddenSmartBars:e}=i.get("extensionSdkModules");return this.moduleName?!e.includes(this.moduleName):(this.appDefinition?.modules??[]).some(t=>!e.includes(t.name))},suspend(){return!this.appDefinition||!this.moduleDefinition},heading(){if(!this.appDefinition)return null;let e=this.translate(this.appDefinition.label);return this.moduleDefinition&&this.moduleDefinition.label?[e,this.translate(this.moduleDefinition.label)].filter(e=>!!e).join(" - "):e},entryPoint(){return this.suspend?null:this.moduleDefinition?.source??null},origin(){if(!this.entryPoint)return null;try{return new URL(this.entryPoint).origin}catch(e){return null}},loadedMessage(){return"sw-app-loaded"}},watch:{entryPoint(){this.appLoaded=!1,this.timedOut=!1},appLoaded:{immediate:!0,handler(e){null!==this.timedOutTimeout&&clearTimeout(this.timedOutTimeout),this.timedOutTimeout=null,e||(this.timedOutTimeout=window.setTimeout(()=>{this.appLoaded||(this.timedOut=!0)},5e3))}},moduleDefinition:{immediate:!0,deep:!0,handler(){let e=this.moduleDefinition?.source;if(!e)return;let t=new URL(e),n=t.origin+t.pathname;this.extensionSdkService.signIframeSrc(this.appName,n).then(e=>{let t=e?.uri;t&&(this.signedIframeSrc=t)}).catch(()=>{})}}},mounted(){window.addEventListener("message",this.onContentLoaded)},beforeUnmount(){window.removeEventListener("message",this.onContentLoaded)},created(){this.createdComponent()},methods:{createdComponent(){this.acl.can(`app.${this.appName}`)||this.$router.push({name:"sw.privilege.error.index"})},translate(e){return this.currentLocale&&e[this.currentLocale]?e[this.currentLocale]:this.fallbackLocale&&e[this.fallbackLocale]?e[this.fallbackLocale]:null},onContentLoaded(e){e.origin===this.origin&&e.data===this.loadedMessage&&(this.appLoaded=!0)}}})},559565:function(e,t,n){var i=n(63234);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,n(745346).Z)("30225ebc",i,!0,{})}}]);