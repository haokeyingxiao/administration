(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[94975],{959270:function(){},994975:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(903349);let{Mixin:s}=Shopware;var i=Shopware.Component.wrapComponentConfig({template:'<sw-meteor-page\n    class="sw-extension-config"\n    :from-link="fromLink"\n>\n    <template #smart-bar-icon>\n        <sw-extension-icon\n            class="sw-extension-config__extension-icon"\n            :src="image"\n            :alt="$tc(\'sw-extension-store.component.sw-extension-config.imageDescription\', 0, { extensionName: extensionLabel})"\n        />\n    </template>\n\n    <template #smart-bar-header>\n        {{ extensionLabel }}\n    </template>\n\n    <template\n        v-if="extension"\n        #smart-bar-header-meta\n    >\n        <span v-if="extension.producerWebsite && extension.producerName">\n            {{ $tc(\'sw-extension-store.component.sw-extension-config.labelBy\') }}\n\n            <sw-external-link\n                small\n                :href="extension.producerWebsite"\n                class="sw-extension-config__producer-link"\n            >\n                {{ extension.producerName }}\n            </sw-external-link>\n        </span>\n\n        <span v-else-if="extension.producerName">\n            {{ $tc(\'sw-extension-store.component.sw-extension-config.labelBy\') }} {{ extension.producerName }}\n        </span>\n    </template>\n\n    <template #smart-bar-actions>\n        <sw-button\n            variant="primary"\n            class="sw-extension-config__save-action"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n    </template>\n\n    <template #default>\n        <sw-system-config\n            ref="systemConfig"\n            :domain="domain"\n            sales-channel-switchable\n            :sales-channel-id="salesChannelId"\n        />\n    </template>\n</sw-meteor-page>\n',beforeRouteEnter(e,n,t){t(e=>{e.fromLink=n})},inject:["shopwareExtensionService"],mixins:[s.getByName("notification")],props:{namespace:{type:String,required:!0}},data(){return{salesChannelId:null,extension:null,fromLink:null}},computed:{domain(){return`${this.namespace}.config`},myExtensions(){return Shopware.State.get("shopwareExtensions").myExtensions.data},defaultThemeAsset(){return Shopware.Filter.getByName("asset")("administration/static/img/theme/default_theme_preview.jpg")},image(){return this.extension?.icon?this.extension.icon:this.extension?.iconRaw?`data:image/png;base64, ${this.extension.iconRaw}`:this.defaultThemeAsset},extensionLabel(){return this.extension?.label??this.namespace}},created(){this.createdComponent()},methods:{async createdComponent(){this.myExtensions.length||await this.shopwareExtensionService.updateExtensionData(),this.refreshExtension()},refreshExtension(){this.extension=this.myExtensions.find(e=>e.name===this.namespace)??null},async onSave(){try{await this.$refs.systemConfig.saveAll(),this.createNotificationSuccess({message:this.$tc("sw-extension-store.component.sw-extension-config.messageSaveSuccess")})}catch(e){this.createNotificationError({message:e})}}}})},903349:function(e,n,t){var s=t(959270);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(745346).Z("bb49e486",s,!0,{})}}]);