"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[55324],{855324:function(e,n,s){s.r(n),s.d(n,{default:function(){return t}});var t={template:'\n{% block sw_settings_search_view_live_search %}\n<div class="sw-settings-search__view-live-search">\n    <sw-settings-search-search-index\n        v-if="!storefrontEsEnable"\n        :is-loading="isLoading"\n        v-on="$listeners"\n    />\n\n    \n    {% block sw_settings_search_view_live_search_content_card %}\n    <sw-settings-search-live-search\n        v-bind="$props"\n        v-on="$listeners"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{currentSalesChannelId:{type:String,required:!1,default:null},searchTerms:{type:String,required:!1,default:null},searchResults:{type:Object,required:!1,default(){return null}},isLoading:{type:Boolean,required:!1,default:!1}},computed:{storefrontEsEnable(){return Shopware.Context.app.storefrontEsEnable??!1}}}}}]);