(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[89915],{988668:function(){},789915:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}}),i(516690);let{Criteria:e}=Shopware.Data,{ShopwareError:s}=Shopware.Classes;var o={template:'\n{% block sw_settings_listing_index %}\n<sw-page class="sw-settings-listing-index">\n\n    \n    {% block sw_settings_listing_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n\n    \n    {% block sw_settings_listing_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_listing_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_listing_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-listing.general.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_smart_bar_header_amount %}{% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_listing_actions_save %}\n        <sw-button-process\n            class="sw-settings-listing__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-listing.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_content %}\n    <template #content>\n\n        \n        {% block sw_settings_listing_content_card_view %}\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n                \n                {% block sw_settings_listing_content_card_view_default_sales_channel %}\n                <sw-card\n                    class="sw-settings-listing__sales-channel-card"\n                    position-identifier="sw-settings-listing-sales-channel"\n                    :title="$tc(\'sw-settings-listing.index.defaultSalesChannel.title\')"\n                >\n                    <sw-settings-listing-default-sales-channel\n                        ref="defaultSalesChannelCard"\n                        :is-loading="isLoading"\n                    />\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_listing_content_card_view_system_config %}\n                <sw-system-config\n                    ref="systemConfig"\n                    sales-channel-switchable\n                    domain="core.listing"\n                    @loading-changed="onLoadingChanged"\n                >\n\n                    <template #afterElements="{ config, index, isNotDefaultSalesChannel, inheritance }">\n                        \n                        {% block sw_settings_listing_content_card_view_system_config_default_sorting_select %}\n                        <sw-inherit-wrapper\n                            v-if="config && index === 0"\n                            v-model:value="config[\'core.listing.defaultSorting\']"\n                            :label="$tc(\'sw-settings-listing.general.labelDefaultSorting\')"\n                            :has-parent="isNotDefaultSalesChannel"\n                            :inherited-value="inheritance[\'core.listing.defaultSorting\']"\n                            required\n                        >\n                            <template #content="{ isInherited, currentValue, updateCurrentValue }">\n                                <sw-single-select\n                                    class="sw-settings-listing-index__default-sorting-select"\n                                    :placeholder="$tc(\'sw-settings-listing.general.placeholderDefaultSorting\')"\n                                    :disabled="isInherited"\n                                    :value="currentValue"\n                                    :options="productSortingOptions"\n                                    :error="hasDefaultSortingError ? salesChannelDefaultSortingError : null"\n                                    label-property="label"\n                                    value-property="id"\n                                    @update:value="updateCurrentValue"\n                                />\n                            </template>\n                        </sw-inherit-wrapper>\n                        {% endblock %}\n                    </template>\n\n                </sw-system-config>\n                {% endblock %}\n\n                \n                {% block sw_settings_listing_content_card_view_options_card %}\n                <sw-card\n                    class="sw-settings-listing-index__sorting-options-card"\n                    position-identifier="sw-settings-listing-sorting-options"\n                    :title="$tc(\'sw-settings-listing.index.productSorting.title\')"\n                    :is-loading="isProductSortingOptionsCardLoading"\n                >\n\n                    \n                    {% block sw_settings_listing_content_card_view_options_card_toolbar %}\n                    <template #toolbar>\n\n                        \n                        {% block sw_settings_listing_content_card_view_options_card_toolbar_container %}\n                        <sw-container\n                            columns="1fr auto"\n                            gap="0 10px"\n                            align="start"\n                        >\n\n                            \n                            {% block sw_settings_listing_content_card_view_options_card_toolbar_search_field %}\n                            <sw-simple-search-field\n                                v-model:value="productSortingOptionsSearchTerm"\n                                variant="form"\n                                size="small"\n                                class="sw-settings-listing-index__sorting-options-search-field"\n                                @search-term-change="onSearchProductSortingOptions"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_listing_content_card_view_options_card_toolbar_add_product_option %}\n                            <sw-button\n                                variant="ghost"\n                                size="small"\n                                @click="onAddNewProductSortingOption"\n                            >\n                                {{ $tc(\'sw-settings-listing.index.productSorting.addButton\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </sw-container>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_listing_content_card_view_options_card_grid %}\n                    <sw-data-grid\n                        v-if="productSortingOptions.length > 0"\n                        :compact-mode="false"\n                        :columns="productSortingOptionColumns"\n                        :data-source="productSortingOptions"\n                        allow-inline-edit\n                        plain-appearance\n                        :show-selection="false"\n                        :is-record-editable="item => !item.locked"\n                        @inline-edit-save="onSaveProductSortingOptionInlineEdit"\n                    >\n\n                        \n                        {% block sw_settings_listing_content_card_view_options_card_grid_column_criteria %}\n                        <template #column-criteria="{item}">\n\n                            \n                            {% block sw_settings_listing_content_card_view_options_card_grid_column_criteria_text %}\n                            <span\n                                class="is--truncate"\n                                :title="formatProductSortingOptionField(item.fields)"\n                            >\n                                {{ formatProductSortingOptionField(item.fields) }}\n                            </span>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_listing_content_card_view_options_card_grid_column_actions %}\n                        <template #actions="{item}">\n\n                            \n                            {% block sw_settings_listing_content_card_view_options_card_grid_column_actions_edit %}\n                            <sw-context-menu-item\n                                :disabled="item.locked"\n                                @click="onEditProductSortingOption(item.id)"\n                            >\n                                {{ $tc(\'global.default.edit\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_listing_content_card_view_options_card_grid_column_actions_delete %}\n                            <sw-context-menu-item\n                                variant="danger"\n                                :disabled="item.locked || isItemDefaultSorting(item.id)"\n                                @click="toBeDeletedProductSortingOption = item"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_listing_content_card_view_options_card_grid_pagination %}\n                        <template #pagination>\n                            <sw-pagination\n                                :page="sortingOptionsGridPage"\n                                :total="sortingOptionsGridTotal"\n                                :limit="sortingOptionsGridLimit"\n                                :steps="[10]"\n                                @page-change="onPageChange"\n                            />\n                        </template>\n                        {% endblock %}\n                    </sw-data-grid>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_listing_content_card_view_options_card_empty_state %}\n                    <sw-empty-state\n                        v-else\n                        class="sw-settings-listing-index__sorting-options-empty-state"\n                        :title="$tc(\'sw-settings-listing.index.productSorting.emptyState.title\')"\n                        :subline="$tc(\'sw-settings-listing.index.productSorting.emptyState.subline\')"\n                        :absolute="false"\n                    >\n\n                        \n                        {% block sw_settings_listing_content_card_view_options_card_empty_state_icon %}\n                        <template #icon>\n                            <img\n                                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                                :alt="$tc(\'sw-settings-listing.index.productSorting.emptyState.title\')"\n                            >\n                        </template>\n                        {% endblock %}\n                    </sw-empty-state>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n            </div>\n        </sw-card-view>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_content_card_view_options_delete_modal %}\n        <sw-settings-listing-delete-modal\n            v-if="toBeDeletedProductSortingOption"\n            :title="$tc(\'sw-settings-listing.index.deleteModal.title\')"\n            :description="$t(\'sw-settings-listing.index.deleteModal.description\', {\n                \'sortingOptionName\': toBeDeletedProductSortingOption.label\n            })"\n            @cancel="toBeDeletedProductSortingOption = null"\n            @delete="onDeleteProductSorting(toBeDeletedProductSortingOption)"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","systemConfigApiService"],mixins:["notification","sw-inline-snippet"],data(){return{isLoading:!1,isSaveSuccessful:!1,productSortingOptions:[],sortingOptionsGridLimit:10,sortingOptionsGridPage:1,modalVisible:!1,toBeDeletedProductSortingOption:null,productSortingOptionsSearchTerm:null,isProductSortingOptionsCardLoading:!1,isDefaultSalesChannelLoading:!1,customFields:[],hasDefaultSortingError:!1}},computed:{productSortingOptionRepository(){return this.repositoryFactory.create("product_sorting")},customFieldRepository(){return this.repositoryFactory.create("custom_field")},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},systemConfigRepository(){return this.repositoryFactory.create("system_config")},productSortingsOptionsCriteria(){let t=new e(this.sortingOptionsGridPage,this.sortingOptionsGridLimit);return t.addSorting(e.sort("priority","DESC")),t.addFilter(e.equals("locked",!1)),t},productSortingOptionsSearchCriteria(){let t=new e(1,25);return t.addSorting(e.sort("priority","DESC")),t.addFilter(e.equals("locked",!1)),t.addFilter(e.contains("label",this.productSortingOptionsSearchTerm)),t},sortingOptionsGridTotal(){return this.productSortingOptions.total},customFieldCriteria(){return new e(1,25)},productSortingOptionColumns(){return[{property:"label",routerLink:"sw.settings.listing.edit",label:this.$tc("sw-settings-listing.index.productSorting.grid.header.name")},{property:"criteria",label:this.$tc("sw-settings-listing.index.productSorting.grid.header.criteria"),multiLine:!0},{property:"priority",inlineEdit:"number",label:this.$tc("sw-settings-listing.index.productSorting.grid.header.priority")}]},assetFilter(){return Shopware.Filter.getByName("asset")},salesChannelDefaultSortingError(){return new s({code:this.$refs.systemConfig.isNotDefaultSalesChannel?"PARENT_MUST_NOT_BE_EMPTY":"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})}},created(){this.createdComponent()},methods:{saveFinish(){this.isSaveSuccessful=!1},createdComponent(){this.fetchProductSortingOptions(),this.fetchCustomFields()},fetchProductSortingOptions(){this.isProductSortingOptionsCardLoading=!0,this.productSortingOptionRepository.search(this.productSortingsOptionsCriteria).then(t=>{this.productSortingOptions=t,this.isProductSortingOptionsCardLoading=!1})},fetchCustomFields(){this.customFieldRepository.search(this.customFieldCriteria).then(t=>{this.customFields=t})},async onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.hasDefaultSortingError=!1,new Promise((t,n)=>{this.$refs.systemConfig.actualConfigData.null["core.listing.defaultSorting"]||(this.hasDefaultSortingError=!0,n()),t()}).then(async()=>{let t=this.$refs.systemConfig.saveAll();return this.setDefaultSortingActive(),Promise.all([t,this.saveProductSortingOptions(),this.$refs.defaultSalesChannelCard.saveSalesChannelVisibilityConfig()])}).then(()=>{this.isSaveSuccessful=!0,this.createNotificationSuccess({message:this.$tc("sw-settings-listing.general.messageSaveSuccess")})}).catch(t=>{let n={message:t?.response.data?.errors[0]?.detail||"Unknown error"};this.createNotificationError({message:this.$tc("sw-settings-listing.general.messageSaveError",n)})}).finally(()=>{this.isLoading=!1})},saveProductSortingOptions(){return this.productSortingOptionRepository.saveAll(this.productSortingOptions)},onDeleteProductSorting(t){let n=new e;n.addFilter(e.equals("configurationKey","core.listing.defaultSorting")),n.addFilter(e.equals("configurationValue",t.id)),this.systemConfigRepository.search(n).then(t=>{let n={};t.forEach(t=>{n[t.salesChannelId]={"core.listing.defaultSorting":null}}),this.systemConfigApiService.batchSave(n)}),Object.keys(this.$refs.systemConfig.actualConfigData).forEach(n=>{let i=this.$refs.systemConfig.actualConfigData[n];i&&i["core.listing.defaultSorting"]===t.id&&(i["core.listing.defaultSorting"]=null)}),this.toBeDeletedProductSortingOption=null,this.productSortingOptionRepository.delete(t.id).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-listing.index.productSorting.messageDeleteError")})}).finally(()=>{this.fetchProductSortingOptions(),this.checkForPagination()})},checkForPagination(){if(1!==this.sortingOptionsGridPage){let t=this.productSortingOptions.total-1;this.sortingOptionsGridPage*this.sortingOptionsGridLimit>=t&&this.onPageChange({page:this.sortingOptionsGridPage-1,limit:this.sortingOptionsGridLimit})}},onPageChange({page:t=1,limit:n=10}){this.sortingOptionsGridPage=t,this.sortingOptionsGridLimit=n,this.fetchProductSortingOptions()},onEditProductSortingOption(t){this.$router.push({name:"sw.settings.listing.edit",params:{id:t}})},formatProductSortingOptionField(t){return Array.isArray(t)?t.map(t=>this.isItemACustomField(t.field)?this.getCustomFieldLabelByCriteriaName(t.field):this.$tc(`sw-settings-listing.general.productSortingCriteriaGrid.options.label.${t.field}`)).join(", "):""},getCustomFieldLabelByCriteriaName(t){let n=this.stripCustomFieldPath(t),i=this.getCustomFieldByName(n),e=this.getInlineSnippet(i.config.label);return null===e?n:e},getCustomFieldByName(t){return this.customFields.find(n=>n.name===t)},onAddNewProductSortingOption(){this.$router.push({name:"sw.settings.listing.create"})},onSearchProductSortingOptions(){if(!this.productSortingOptionsSearchTerm){this.fetchProductSortingOptions();return}this.productSortingOptionRepository.search(this.productSortingOptionsSearchCriteria).then(t=>{this.productSortingOptions=t})},onSaveProductSortingOptionInlineEdit(t){let n=this.productSortingOptions.findIndex(n=>n.id===t.id);this.productSortingOptions[n]=t,this.onSave().then(()=>{this.fetchProductSortingOptions()})},isItemACustomField(t){let n=this.stripCustomFieldPath(t);return this.customFields.some(t=>t.name===n)},getCustomFieldById(t){return this.customFields.find(n=>n.id===t).name},stripCustomFieldPath(t){return t.replace(/customFields\./,"")},isProductSortingEditable(t){return!t.locked},onChangeLanguage(){this.fetchProductSortingOptions()},setDefaultSortingActive(){let t=this.$refs.systemConfig.actualConfigData.null["core.listing.defaultSorting"];t&&Object.entries(this.productSortingOptions).forEach(([,n])=>{n.id===t&&(n.active=!0)})},isItemDefaultSorting(t){return this.$refs.systemConfig.actualConfigData.null?t===this.$refs.systemConfig.actualConfigData.null["core.listing.defaultSorting"]:null},onLoadingChanged(t){this.isLoading=t}}}},516690:function(t,n,i){var e=i(988668);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals),(0,i(745346).Z)("2c3b280f",e,!0,{})}}]);