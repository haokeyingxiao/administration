"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[13031],{613031:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var n={namespaced:!0,state(){return{salesChannelCollection:null,seoUrlCollection:null,originalSeoUrls:[],defaultSeoUrl:null,currentSeoUrl:null}},mutations:{setSeoUrlCollection(e,t){e.seoUrlCollection=t},setOriginalSeoUrls(e,t){e.originalSeoUrls=t},setCurrentSeoUrl(e,t){e.currentSeoUrl=t},setDefaultSeoUrl(e,t){e.defaultSeoUrl=t},setSalesChannelCollection(e,t){e.salesChannelCollection=t}},getters:{isLoading:e=>e.loading,getNewOrModifiedUrls:e=>()=>{let t=[];return e.seoUrlCollection.forEach(l=>{if(null===l.seoPathInfo)return;let n=e.originalSeoUrls.find(e=>e.id===l.id);(!n||n.seoPathInfo!==l.seoPathInfo)&&(n||l.seoPathInfo)&&t.push(l)}),t}}};let r=Shopware.Data.Criteria,o=Shopware.Data.EntityCollection;var s={template:'\n{% block sw_seo_url %}\n<div class="sw-seo-url">\n    <sw-card\n        class="sw-seo-url__card"\n        position-identifier="sw-seo-url"\n        :title="$tc(\'sw-seo-url.titleCard\')"\n        :is-loading="isLoading"\n    >\n        \n        {% block sw_seo_url_card %}\n        <template v-if="showEmptySeoUrlError">\n            {{ $tc(\'sw-seo-url.textEmptySeoUrls\') }}\n        </template>\n\n        <template v-else>\n            \n            {% block sw_seo_url_card_seo_path %}\n            <sw-inherit-wrapper\n                v-model:value="currentSeoUrl.seoPathInfo"\n                :has-parent="currentSalesChannelId !== null && !isHeadlessSalesChannel && hasDefaultTemplate"\n                :inherited-value="(currentSeoUrl.salesChannelId !== null && !isHeadlessSalesChannel) ? defaultSeoUrl.seoPathInfo : null"\n            >\n\n                <template #content="props">\n                    \n                    {% block sw_seo_url_card_seo_path_edit %}\n                    <sw-text-field\n                        :map-inheritance="props"\n                        :value="props.currentValue"\n                        :disabled="props.isInherited || isHeadlessSalesChannel || !allowInput"\n                        :disable-inheritance-toggle="isHeadlessSalesChannel"\n                        :label="$tc(\'sw-seo-url.labelSeoPathInfo\')"\n                        :help-text="seoUrlHelptext"\n                        @update:value="props.updateCurrentValue"\n                    />\n                    {% endblock %}\n                </template>\n\n            </sw-inherit-wrapper>\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_seo_url_card_toolbar %}\n        <template\n            v-if="!showEmptySeoUrlError"\n            #toolbar\n        >\n            <sw-sales-channel-switch\n                ref="salesChannelSwitch"\n                :disabled="disabled || undefined"\n                :label="$tc(\'sw-seo-url.labelSalesChannelSelect\')"\n                @change-sales-channel-id="onSalesChannelChanged"\n            />\n        </template>\n        {% endblock %}\n\n        <div\n            v-if="hasAdditionalSeoSlot"\n            class="sw-seo-url__card-seo-additional"\n        >\n            <slot\n                name="seo-additional"\n                v-bind="{currentSalesChannelId}"\n            >\n                \n                {% block sw_seo_url_additional %}{% endblock %}\n            </slot>\n        </div>\n\n        {% endblock %}\n    </sw-card>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["on-change-sales-channel"],mixins:[],props:{salesChannelId:{type:String,required:!1,default:null},urls:{type:Array,required:!1,default(){return[]}},isLoading:{type:Boolean,required:!1,default:!1},hasDefaultTemplate:{type:Boolean,required:!1,default:!0},disabled:{type:Boolean,required:!1,default:!1},resultLimit:{type:Number,required:!1,default:25}},data(){return{currentSalesChannelId:this.salesChannelId,showEmptySeoUrlError:!1}},computed:{seoUrlCollection(){return Shopware.State.get("swSeoUrl").seoUrlCollection},currentSeoUrl(){return Shopware.State.get("swSeoUrl")?Shopware.State.get("swSeoUrl").currentSeoUrl:{}},defaultSeoUrl(){return Shopware.State.get("swSeoUrl").defaultSeoUrl},seoUrlRepository(){return this.repositoryFactory.create("seo_url")},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},isHeadlessSalesChannel(){if(!Shopware.State.get("swSeoUrl")||null===Shopware.State.get("swSeoUrl").salesChannelCollection)return!0;let e=Shopware.State.get("swSeoUrl").salesChannelCollection.find(e=>e.id===this.currentSalesChannelId);return null!==this.currentSalesChannelId&&e?.typeId==="f183ee5650cf4bdb8a774337575067a6"},seoUrlHelptext(){return this.isHeadlessSalesChannel?this.$tc("sw-seo-url.textSeoUrlsDisallowedForHeadless"):null},hasAdditionalSeoSlot(){return this.$slots.hasOwnProperty("seo-additional")},allowInput(){return this.hasDefaultTemplate||null!==this.currentSalesChannelId}},watch:{urls(){this.initSeoUrlCollection(),this.refreshCurrentSeoUrl()}},beforeCreate(){Shopware.State.list().includes("swSeoUrl")||Shopware.State.registerModule("swSeoUrl",n)},created(){this.isCompatEnabled("INSTANCE_EVENT_EMITTER")?this.$root.$on("seo-url-save-finish",this.clearDefaultSeoUrls):Shopware.Utils.EventBus.on("sw-product-detail-save-finish",this.clearDefaultSeoUrls),this.createdComponent()},beforeUnmount(){this.isCompatEnabled("INSTANCE_EVENT_EMITTER")?this.$root.$off("seo-url-save-finish",this.clearDefaultSeoUrls):Shopware.Utils.EventBus.off("sw-product-detail-save-finish",this.clearDefaultSeoUrls),Shopware.State.unregisterModule("swSeoUrl")},methods:{createdComponent(){this.initSalesChannelCollection(),this.initSeoUrlCollection(),this.showEmptySeoUrlError||this.refreshCurrentSeoUrl()},initSalesChannelCollection(){let e=new r(1,this.resultLimit);e.addAssociation("type"),this.salesChannelRepository.search(e).then(e=>{Shopware.State.commit("swSeoUrl/setSalesChannelCollection",e)})},initSeoUrlCollection(){this.showEmptySeoUrlError=!1;let e=new o(this.seoUrlRepository.route,this.seoUrlRepository.schema.entity,Shopware.Context.api,new r(1,this.resultLimit)),t=this.urls.find(e=>null===e.salesChannelId);void 0===t&&(this.hasDefaultTemplate||this.urls.length<=0)&&(this.showEmptySeoUrlError=!0);let l=this.seoUrlRepository.create();Object.assign(l,t),e.add(l),Shopware.State.commit("swSeoUrl/setDefaultSeoUrl",l),this.urls.forEach(t=>{let l=this.seoUrlRepository.create();Object.assign(l,t),e.add(l)}),Shopware.State.get("swSeoUrl").defaultSeoUrl||(this.showEmptySeoUrlError=!0),Shopware.State.commit("swSeoUrl/setSeoUrlCollection",e),Shopware.State.commit("swSeoUrl/setOriginalSeoUrls",this.urls),this.clearDefaultSeoUrls()},clearDefaultSeoUrls(){this.seoUrlCollection.forEach(e=>{e.id!==this.defaultSeoUrl.id&&e.seoPathInfo===this.defaultSeoUrl.seoPathInfo&&(e.seoPathInfo=null)})},refreshCurrentSeoUrl(){let e=Shopware.Context.api.languageId,t=this.seoUrlCollection.find(t=>t.languageId===e&&t.salesChannelId===this.currentSalesChannelId);if(!t){let t=this.seoUrlRepository.create(),l=this.seoUrlCollection.find(e=>e.pathInfo&&e.routeName&&e.foreignKey)||{};t.foreignKey=this.defaultSeoUrl?.foreignKey??l.foreignKey,t.isCanonical=!0,t.languageId=e,t.salesChannelId=this.currentSalesChannelId,t.routeName=this.defaultSeoUrl?.routeName??l.routeName,t.pathInfo=this.defaultSeoUrl?.pathInfo??l.pathInfo,t.isModified=!0,this.seoUrlCollection.add(t),Shopware.State.commit("swSeoUrl/setCurrentSeoUrl",t);return}Shopware.State.commit("swSeoUrl/setCurrentSeoUrl",t)},onSalesChannelChanged(e){this.currentSalesChannelId=e,this.$emit("on-change-sales-channel",e),this.refreshCurrentSeoUrl()}}}}}]);