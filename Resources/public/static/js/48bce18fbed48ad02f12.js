"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[36225],{336225:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a=Shopware.Component.wrapComponentConfig({name:"sw-settings-usage-data-general",compatConfig:Shopware.compatConfig,template:'<sw-usage-data-consent-banner />\n\n<sw-extension-component-section\n    position-identifier="sw-settings-usage-data-general"\n/>\n',inject:["usageDataService"],methods:{async createdComponent(){let e=await this.usageDataService.getConsent();Shopware.State.commit("usageData/updateConsent",e)}},created(){this.createdComponent()}})}}]);