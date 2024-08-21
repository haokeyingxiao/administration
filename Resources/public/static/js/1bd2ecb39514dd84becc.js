"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[84669],{184669:function(s,n,e){e.r(n),e.d(n,{default:function(){return i}});let{Mixin:t}=Shopware;var i={template:'\n{% block sw_settings_store_index %}\n<sw-page class="sw-settings-store">\n\n    \n    {% block sw_settings_store_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_store_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_store_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_store_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-store.general.textHeadline\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_store_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_store_actions_save %}\n        <sw-button-process\n            class="sw-store-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click="onSave()"\n        >\n            {{ $tc(\'sw-settings-store.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_store_content %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <sw-system-config\n                v-show="!isLoading"\n                ref="systemConfig"\n                domain="core.store"\n                @loading-changed="onLoadingChanged"\n            />\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,mixins:[t.getByName("notification")],data(){return{isLoading:!1,isSaveSuccessful:!1}},saveFinish(){this.isSaveSuccessful=!1},metaInfo(){return{title:this.$createTitle()}},methods:{saveFinish(){this.isSaveSuccessful=!1},onSave(){this.isSaveSuccessful=!1,this.isLoading=!0,this.trimHost(),this.$refs.systemConfig.saveAll().then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0}).catch(s=>{this.isLoading=!1,this.createNotificationError({message:s})})},trimHost(){let s=this.$refs.systemConfig.actualConfigData;s.null?.["core.store.licenseHost"]&&(s.null["core.store.licenseHost"]=s.null["core.store.licenseHost"].trim())},onLoadingChanged(s){this.isLoading=s}}}}}]);