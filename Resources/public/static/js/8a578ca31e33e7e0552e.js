"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27942],{827942:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});let{Mixin:s,Context:n,Defaults:o}=Shopware,{Criteria:l}=Shopware.Data;var i={template:'\n{% block sw_sales_channel_detail %}\n<sw-page class="sw-sales-channel-detail">\n    \n    {% block sw_sales_channel_detail_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_sales_channel_detail_header_headline %}\n        <h2>{{ placeholder(salesChannel, \'name\', $tc(\'sw-sales-channel.detail.textHeadline\')) }}</h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_sales_channel_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-sales-channel-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!allowSaving || isLoading || productComparison.invalidFileName"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-sales-channel.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_sales_channel_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(salesChannel, \'name\', $tc(\'sw-sales-channel.detail.textHeadline\'))"\n            />\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_content_tabs %}\n            <sw-tabs\n                class="sw-sales-channel-detail-__tabs"\n                position-identifier="sw-sales-channel-detail"\n            >\n                {%  block sw_sales_channel_detail_content_tab_general %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.sales.channel.detail.base\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabBase\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabBase\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_detail_content_tab_products %}\n                <sw-tabs-item\n                    v-if="isHeadless || isStoreFront"\n                    :route="{ name: \'sw.sales.channel.detail.products\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabProducts\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabProducts\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_detail_content_tab_theme %}{% endblock %}\n\n                {%  block sw_sales_channel_detail_content_tab_product_comparison %}\n                <sw-tabs-item\n                    v-if="isProductComparison && !isLoading"\n                    :route="{ name: \'sw.sales.channel.detail.productComparison\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabProductComparison\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabProductComparison\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                {%  block sw_sales_channel_detail_content_tab_analytics %}\n                <sw-tabs-item\n                    v-if="isStoreFront"\n                    :route="{ name: \'sw.sales.channel.detail.analytics\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabAnalytics\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabAnalytics\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                <router-view\n                    :key="$route.params.id"\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        :sales-channel="salesChannel"\n                        :product-export="productExport"\n                        :storefront-sales-channel-criteria="storefrontSalesChannelCriteria"\n                        :custom-field-sets="customFieldSets"\n                        :is-loading="isLoading"\n                        :product-comparison-access-url="productComparison.productComparisonAccessUrl"\n                        :template-options="productComparison.templateOptions"\n                        :show-template-modal="productComparison.showTemplateModal"\n                        :template-name="productComparison.templateName"\n                        @template-selected="onTemplateSelected"\n                        @access-key-changed="generateAccessUrl"\n                        @domain-changed="generateAccessUrl"\n                        @invalid-file-name="setInvalidFileName(true)"\n                        @valid-file-name="setInvalidFileName(false)"\n                        @template-modal-close="onTemplateModalClose"\n                        @template-modal-confirm="onTemplateModalConfirm"\n                    />\n                </router-view>\n            </template>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n    <template #sidebar>\n        \n        {% block sw_sales_channel_detail_sidebar %}\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","exportTemplateService","acl","feature"],mixins:[s.getByName("notification"),s.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":"onSave"},data(){return{salesChannel:null,isLoading:!1,customFieldSets:[],isSaveSuccessful:!1,productComparison:{newProductExport:null,productComparisonAccessUrl:null,invalidFileName:!1,templateOptions:[],templates:null,templateName:null,showTemplateModal:!1,selectedTemplate:null}}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.salesChannel,"name")},productExport(){return this.salesChannel&&this.salesChannel.productExports.first()?this.salesChannel.productExports.first():(this.productComparison.newProductExport||(this.productComparison.newProductExport=this.productExportRepository.create(),this.productComparison.newProductExport.interval=0,this.productComparison.newProductExport.generateByCronjob=!1),this.productComparison.newProductExport)},isStoreFront(){return this.salesChannel?this.salesChannel.typeId===o.storefrontSalesChannelTypeId:this.$route.params.typeId===o.storefrontSalesChannelTypeId},isProductComparison(){return this.salesChannel?this.salesChannel.typeId===o.productComparisonTypeId:this.$route.params.typeId===o.productComparisonTypeId},isHeadless(){return this.salesChannel?this.salesChannel.typeId===o.apiSalesChannelTypeId:this.$route.params.typeId===o.apiSalesChannelTypeId},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},salesChannelAnalyticsRepository(){return this.repositoryFactory.create("sales_channel_analytics")},customFieldRepository(){return this.repositoryFactory.create("custom_field_set")},productExportRepository(){return this.repositoryFactory.create("product_export")},storefrontSalesChannelCriteria(){return new l(1,25).addFilter(l.equals("typeId",o.storefrontSalesChannelTypeId))},tooltipSave(){if(!this.allowSaving)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSaving,showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},allowSaving(){return this.acl.can("sales_channel.editor")}},watch:{"$route.params.id"(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-sales-channel-detail__salesChannel",path:"salesChannel",scope:this}),this.loadEntityData(),this.loadProductExportTemplates()},loadEntityData(){this.$route.params.id&&!this.$route.params.typeId&&(this.salesChannel&&(this.salesChannel=null),this.loadSalesChannel(),this.loadCustomFieldSets())},loadSalesChannel(){this.isLoading=!0,this.salesChannelRepository.get(this.$route.params.id,n.api,this.getLoadSalesChannelCriteria()).then(e=>{this.salesChannel=e,this.salesChannel.maintenanceIpWhitelist||(this.salesChannel.maintenanceIpWhitelist=[]),this.generateAccessUrl(),this.isLoading=!1})},getLoadSalesChannelCriteria(){let e=new l(1,25);return e.addAssociation("paymentMethods"),e.addAssociation("shippingMethods"),e.addAssociation("countries"),e.getAssociation("currencies").addSorting(l.sort("name","ASC")),e.addAssociation("domains"),e.getAssociation("languages").addSorting(l.sort("name","ASC")),e.addAssociation("analytics"),e.addAssociation("productExports"),e.addAssociation("productExports.salesChannelDomain.salesChannel"),e.getAssociation("domains.language").addSorting(l.sort("name","ASC")),e.getAssociation("domains.snippetSet").addSorting(l.sort("name","ASC")),e.addAssociation("domains.currency"),e.addAssociation("domains.productExports"),e},onTemplateSelected(e){null!==this.productComparison.templates&&void 0!==this.productComparison.templates[e]&&(this.productComparison.selectedTemplate=this.productComparison.templates[e],Object.keys(this.productComparison.selectedTemplate).some(e=>this.productExport[e]!==this.productComparison.selectedTemplate[e])&&(this.productComparison.showTemplateModal=!0))},onTemplateModalClose(){this.productComparison.selectedTemplate=null,this.productComparison.templateName=null,this.productComparison.showTemplateModal=!1},onTemplateModalConfirm(){Object.keys(this.productComparison.selectedTemplate).forEach(e=>{this.productExport[e]=this.productComparison.selectedTemplate[e]}),this.onTemplateModalClose(),this.createNotificationInfo({message:this.$tc("sw-sales-channel.detail.productComparison.templates.message.template-applied-message")})},loadCustomFieldSets(){let e=new l(1,100);e.addFilter(l.equals("relations.entityName","sales_channel")),e.getAssociation("customFields").addSorting(l.sort("config.customFieldPosition","ASC",!0)),this.customFieldRepository.search(e,n.api).then(e=>{this.customFieldSets=e})},generateAccessUrl(){if(!this.productExport.salesChannelDomain){this.productComparison.productComparisonAccessUrl="";return}let e=this.productExport.salesChannelDomain.url.replace(/\/+$/g,"");this.productComparison.productComparisonAccessUrl=`${e}/store-api/product-export/${this.productExport.accessKey}/${this.productExport.fileName}`},loadProductExportTemplates(){this.productComparison.templateOptions=Object.values(this.exportTemplateService.getProductExportTemplateRegistry()),this.productComparison.templates=this.exportTemplateService.getProductExportTemplateRegistry()},saveFinish(){this.isSaveSuccessful=!1},setInvalidFileName(e){this.productComparison.invalidFileName=e},async onSave(){this.isLoading=!0,this.isSaveSuccessful=!1,this.isProductComparison&&!this.salesChannel.productExports.length&&this.salesChannel.productExports.add(this.productExport);let e=this.updateAnalytics();try{await this.salesChannelRepository.save(this.salesChannel,n.api),e&&!this.salesChannel?.analytics?.trackingId&&await this.salesChannelAnalyticsRepository.delete(e,n.api),this.isLoading=!1,this.isSaveSuccessful=!0,this.isCompatEnabled("INSTANCE_EVENT_EMITTER")?this.$root.$emit("sales-channel-change"):Shopware.Utils.EventBus.emit("sw-sales-channel-detail-sales-channel-change"),this.loadEntityData()}catch(e){this.isLoading=!1,this.createNotificationError({message:this.$tc("sw-sales-channel.detail.messageSaveError",0,{name:this.salesChannel.name||this.placeholder(this.salesChannel,"name")})})}},updateAnalytics(){let e=this.salesChannel.analyticsId;return e&&!this.salesChannel?.analytics?.trackingId&&(this.salesChannel.analyticsId=null,delete this.salesChannel.analytics),e},abortOnLanguageChange(){return this.salesChannelRepository.hasChanges(this.salesChannel)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()}}}}}]);