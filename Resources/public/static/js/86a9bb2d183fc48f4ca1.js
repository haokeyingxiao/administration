(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[3468],{799647:function(){},903468:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return r}}),i(413524);let{Component:a,Mixin:n}=Shopware,{Criteria:s}=Shopware.Data;var r=a.wrapComponentConfig({template:'\n{% block sw_settings_tax_provider %}\n<sw-page class="sw-settings-tax-tax-provider-detail">\n    <template #smart-bar-header>\n        <h2 v-if="label">\n            {{ label }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-tax.taxProviderDetail.textHeadline\') }}\n        </h2>\n    </template>\n\n    <template #smart-bar-actions>\n        <sw-button\n            v-tooltip.bottom="{ message: \'ESC\', appearance: \'light\' }"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n\n        <sw-button-process\n            v-model:processSuccess="isSaveSuccessful"\n            class="sw-settings-tax-tax-provider-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="isLoading || !allowSave || undefined"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n    </template>\n\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                <sw-alert\n                    class="sw-settings-tax-tax-provider-detail-info"\n                    :title="$tc(\'sw-settings-tax.taxProviderDetail.infoTitle\')"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-settings-tax.taxProviderDetail.infoText\') }}\n                </sw-alert>\n\n                <sw-card\n                    position-identifier="sw-settings-tax-tax-provider-detail-settings"\n                    :title="$tc(\'sw-settings-tax.taxProviderDetail.cardTitleSettings\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-container\n                        columns="5fr 1fr"\n                        gap="0px 30px"\n                    >\n                        <sw-number-field\n                            v-model:value="taxProvider.priority"\n                            class="sw-settings-tax-tax-provider-detail__field-priority"\n                            :disabled="true"\n                            :label="$tc(\'sw-settings-tax.taxProviderDetail.labelPriority\')"\n                        />\n\n                        <sw-switch-field\n                            v-model:value="taxProvider.active"\n                            class="sw-settings-tax-tax-provider-detail__field-active"\n                            :disabled="!acl.can(\'tax.editor\') || undefined"\n                            :label="$tc(\'sw-settings-tax.taxProviderDetail.labelActive\')"\n                        />\n                    </sw-container>\n                </sw-card>\n\n                <sw-card\n                    position-identifier="sw-settings-tax-tax-provider-detail-availability"\n                    :title="$tc(\'sw-settings-tax.taxProviderDetail.cardTitleAvailability\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-select-rule-create\n                        v-if="!isLoading"\n                        class="sw-settings-tax-tax-provider-detail__field-availability-rule"\n                        :disabled="!acl.can(\'tax.editor\') || undefined"\n                        :rule-id="taxProvider.availabilityRuleId"\n                        :rule-filter="ruleFilter"\n                        :placeholder="$tc(\'sw-settings-tax.taxProviderDetail.placeholderAvailabilityRule\')"\n                        rule-aware-group-key="taxProvider"\n                        @save-rule="onSaveRule"\n                        @dismiss-rule="onDismissRule"\n                    />\n                </sw-card>\n\n                <sw-extension-component-section\n                    v-if="hasIdentifier"\n                    :position-identifier="positionIdentifier"\n                />\n            </template>\n        </sw-card-view>\n    </template>\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],mixins:[n.getByName("notification")],props:{taxProviderId:{type:String,required:!1,default:""}},data(){return{taxProvider:void 0,isLoading:!1,isSaveSuccessful:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{label(){return this.taxProvider?.translated?.name||""},taxProviderRepository(){return this.repositoryFactory.create("tax_provider")},allowSave(){return this.acl.can("tax.editor")},ruleFilter(){let t=new s(1,25);return t.addFilter(s.multi("OR",[s.contains("rule.moduleTypes.types","tax_provider"),s.equals("rule.moduleTypes",null)])),t.addSorting(s.sort("name","ASC",!1)),t},hasIdentifier(){return!!this.taxProvider?.identifier},positionIdentifier(){if(!this.hasIdentifier)return"";let t=this.taxProvider?.identifier||"";return`sw-settings-tax-tax-provider-detail-custom-${t}`}},created(){this.createdComponent()},methods:{createdComponent(){this.loadTaxProvider()},loadTaxProvider(){return(this.isLoading=!0,this.taxProviderId)?this.taxProviderRepository.get(this.taxProviderId).then(t=>{this.taxProvider=t,this.isLoading=!1}):(this.isLoading=!1,Promise.resolve())},onSave(){return(this.isSaveSuccessful=!1,this.isLoading=!0,this.taxProvider)?this.taxProviderRepository.save(this.taxProvider).then(()=>(this.isSaveSuccessful=!0,this.loadTaxProvider())).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-tax.detail.messageSaveError")}),this.isLoading=!1}):Promise.resolve()},onCancel(){this.$router.push({name:"sw.settings.tax.index"})},onSaveRule(t){this.taxProvider&&(this.taxProvider.availabilityRuleId=t)},onDismissRule(){this.taxProvider&&(this.taxProvider.availabilityRuleId=void 0)}}})},413524:function(t,e,i){var a=i(799647);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(745346).Z)("059796af",a,!0,{})}}]);