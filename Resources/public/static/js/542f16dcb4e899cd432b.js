(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[80666],{115900:function(){},780666:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}}),t(380326);let{cloneDeep:r}=Shopware.Utils.object,{Mixin:c}=Shopware,{Criteria:i}=Shopware.Data,{mapPropertyErrors:s}=Shopware.Component.getComponentHelper();var o={template:'\n{% block sw_settings_currency_detail %}\n<sw-page class="sw-settings-currency-detail">\n\n    \n    {% block sw_settings_currency_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(currency, \'name\', $tc(\'sw-settings-currency.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_currency_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_currency_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-currency.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_currency_detail_actions_save %}\n        <sw-button-process\n            v-model:processSuccess="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-currency-detail__save-action"\n            :is-loading="isLoading"\n            :disabled="isLoading || !acl.can(\'currencies.editor\') || undefined"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-currency.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_currency_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="currencyId == null"\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_currency_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_currency_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(currency, \'name\', $tc(\'sw-settings-currency.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_currency_detail_content_card %}\n                <sw-card\n                    position-identifier="sw-settings-currency-detail-content"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-currency.detail.titleCard\')"\n                >\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n\n                        \n                        {% block sw_settings_currency_detail_content_field_name %}\n                        <sw-text-field\n                            v-model:value="currency.name"\n                            name="sw-field--currency-name"\n                            required\n                            :disabled="!acl.can(\'currencies.editor\')"\n                            :label="$tc(\'sw-settings-currency.detail.labelName\')"\n                            :placeholder="placeholder(currency, \'name\', $tc(\'sw-settings-currency.detail.placeholderName\'))"\n                            :error="currencyNameError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_field_iso_code %}\n                        <sw-text-field\n                            v-model:value="currency.isoCode"\n                            name="sw-field--currency-isoCode"\n                            required\n                            :disabled="!acl.can(\'currencies.editor\')"\n                            :label="$tc(\'sw-settings-currency.detail.labelIsoCode\')"\n                            :placeholder="placeholder(currency, \'isoCode\', $tc(\'sw-settings-currency.detail.placeholderIsoCode\'))"\n                            :error="currencyIsoCodeError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_field_short_name %}\n                        <sw-text-field\n                            v-model:value="currency.shortName"\n                            name="sw-field--currency-shortName"\n                            required\n                            :disabled="!acl.can(\'currencies.editor\')"\n                            :label="$tc(\'sw-settings-currency.detail.labelShortName\')"\n                            :placeholder="placeholder(currency, \'shortName\', $tc(\'sw-settings-currency.detail.placeholderShortName\'))"\n                            :error="currencyShortNameError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_field_symbol %}\n                        <sw-text-field\n                            v-model:value="currency.symbol"\n                            name="sw-field--currency-symbol"\n                            required\n                            :disabled="!acl.can(\'currencies.editor\')"\n                            :label="$tc(\'sw-settings-currency.detail.labelSymbol\')"\n                            :placeholder="$tc(\'sw-settings-currency.detail.placeholderSymbol\')"\n                            :error="currencySymbolError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_field_factor %}\n                        <sw-number-field\n                            v-model:value="currency.factor"\n                            name="sw-field--currency-factor"\n                            required\n                            :digits="14"\n                            :label="$tc(\'sw-settings-currency.detail.labelFactor\')"\n                            :placeholder="$tc(\'sw-settings-currency.detail.placeholderFactor\')"\n                            :error="currencyFactorError"\n                            :disabled="currency.isSystemDefault || !acl.can(\'currencies.editor\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_field_tax_free_from %}\n                        <sw-number-field\n                            v-model:value="currency.taxFreeFrom"\n                            name="sw-field--currency-taxFreeFrom"\n                            :min="0"\n                            :label="$tc(\'sw-settings-currency.detail.taxFreeFrom\')"\n                            :help-text="$tc(\'sw-settings-currency.detail.taxFreeFromHelpText\', 0 , { currencyName: `${currency.name}` })"\n                            :disabled="!currency.factor"\n                        >\n                            <template #suffix>\n                                {{ currency.symbol }}\n                            </template>\n                        </sw-number-field>\n                        {% endblock %}\n\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_currency_detail_content_card_price_rounding %}\n                <sw-card\n                    position-identifier="sw-settings-currency-detail-price-rounding"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-currency.detail.titleRoundingCard\')"\n                >\n                    <sw-settings-price-rounding\n                        :item-rounding="currency.itemRounding"\n                        :total-rounding="currency.totalRounding"\n                    />\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_currency_detail_content_card_country_price_rounding %}\n                <sw-card\n                    position-identifier="sw-settings-currency-detail-country-price-rounding"\n                    :title="$tc(\'sw-settings-currency.detail.titleCountryRoundingCard\')"\n                    :is-loading="currencyCountryLoading"\n                >\n                    <template\n                        v-if="currency.id && !currency.isNew()"\n                        #toolbar\n                    >\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_toolbar %}\n                        <div class="sw-settings-currency-detail__currency-country-toolbar">\n                            \n                            {% block sw_settings_currency_detail_content_card_country_price_rounding_toolbar_filter %}\n                            <sw-card-filter\n                                :placeholder="$tc(\'sw-settings-currency.detail.searchbarPlaceholder\')"\n                                @sw-card-filter-term-change="onChangeCountrySearch"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_settings_currency_detail_content_card_country_price_rounding_toolbar_button %}\n                            <sw-button\n                                variant="ghost"\n                                class="sw-settings-currency-detail__currency-country-toolbar-button"\n                                size="small"\n                                @click="onAddCountry"\n                            >\n                                {{ $tc(\'sw-settings-currency.detail.buttonAddCountry\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n                    </template>\n                    \n                    {% block sw_settings_currency_detail_content_card_country_price_rounding_listing %}\n                    <sw-entity-listing\n                        v-if="currencyCountryRoundings && currencyCountryRoundings.length > 0"\n                        class="sw-settings-currency-detail__currency-country-list"\n                        :full-page="false"\n                        :show-selection="false"\n                        :items="currencyCountryRoundings"\n                        :columns="currencyCountryColumns"\n                        identifier="sw-settings-currency-detail-currency-country-list"\n                        :repository="currencyCountryRoundingRepository"\n                        @item-deleted="loadCurrencyCountryRoundings"\n                        @items-delete-finish="loadCurrencyCountryRoundings"\n                    >\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_listing_country_column %}\n                        <template #column-country="{ item }">\n                            <a\n                                href="#"\n                                @click="onClickEdit(item)"\n                            >\n                                {{ item.country.name }}\n                            </a>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_listing_item_interval_column %}\n                        <template #column-itemRounding.interval="{ item }">\n                            <template v-if="item.itemRounding.interval === 0.01">\n                                {{ $tc(\'sw-settings-currency.price-rounding.labelIntervalNone\') }}\n                            </template>\n                            <template v-if="item.itemRounding.interval !== 0.01">\n                                {{ item.itemRounding.interval }}\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_listing_total_interval_column %}\n                        <template #column-totalRounding.interval="{ item }">\n                            <template v-if="item.totalRounding.interval === 0.01">\n                                {{ $tc(\'sw-settings-currency.price-rounding.labelIntervalNone\') }}\n                            </template>\n                            <template v-if="item.totalRounding.interval !== 0.01">\n                                {{ item.totalRounding.interval }}\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_listing_item_net_column %}\n                        <template #column-itemRounding.roundForNet="{ item }">\n                            <sw-data-grid-column-boolean v-model:value="item.itemRounding.roundForNet" />\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_listing_total_net_column %}\n                        <template #column-totalRounding.roundForNet="{ item }">\n                            <sw-data-grid-column-boolean v-model:value="item.totalRounding.roundForNet" />\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_currency_detail_content_card_country_price_rounding_listing_more_actions %}\n                        <template #more-actions="{ item }">\n                            <sw-context-menu-item @click="onClickEdit(item)">\n                                {{ $tc(\'global.default.edit\') }}\n                            </sw-context-menu-item>\n                        </template>\n                        {% endblock %}\n\n                    </sw-entity-listing>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_currency_detail_content_card_country_price_rounding_empty %}\n                    <sw-empty-state\n                        v-else\n                        class="sw-settings-currency-detail__currency-country-empty-state"\n                        title=""\n                        :absolute="false"\n                        :subline="emptyStateText"\n                    />\n                    {% endblock %}\n                </sw-card>\n                \n                {% block sw_settings_currency_detail_content_card_country_price_rounding_modal %}\n                <sw-settings-currency-country-modal\n                    v-if="currentCurrencyCountry"\n                    :currency-country-rounding="currentCurrencyCountry"\n                    @save="onSaveCurrencyCountry"\n                    @edit-cancel="onCancelEditCountry"\n                />\n                {% endblock %}\n                {% endblock %}\n\n                \n                {% block sw_settings_currency_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-currency-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="currency"\n                        :disabled="!acl.can(\'currencies.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","feature","customFieldDataProviderService"],mixins:[c.getByName("notification"),c.getByName("placeholder")],props:{currencyId:{type:String,required:!1,default:null}},shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("currencies.editor")},method:"onSave"},ESCAPE:"onCancel"},data(){return{currency:{},isLoading:!1,currencyCountryLoading:!1,isSaveSuccessful:!1,currentCurrencyCountry:null,currencyCountryRoundings:null,searchTerm:"",customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.currency,"name")},currencyRepository(){return this.repositoryFactory.create("currency")},currencyCountryRoundingRepository(){return this.currency.countryRoundings?this.repositoryFactory.create(this.currency.countryRoundings.entity,this.currency.countryRoundings.source):null},tooltipSave(){if(!this.acl.can("currencies.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("currencies.editor"),showOnDisabledElements:!0};let n=this.$device.getSystemKey();return{message:`${n} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},...s("currency",["name","isoCode","shortName","symbol","isDefault","decimalPrecision","factor"]),currencyCountryColumns(){return[{property:"country",label:"sw-settings-currency.detail.currencyCountry.countryColumn",sortable:!0},{property:"itemRounding.decimals",label:"sw-settings-currency.detail.currencyCountry.itemDecimalsColumn",sortable:!1},{property:"itemRounding.interval",label:"sw-settings-currency.detail.currencyCountry.itemIntervalColumn",sortable:!1},{property:"itemRounding.roundForNet",label:"sw-settings-currency.detail.currencyCountry.itemNetRoundingColumn",sortable:!1,visible:!1},{property:"totalRounding.decimals",label:"sw-settings-currency.detail.currencyCountry.totalDecimalsColumn",sortable:!1},{property:"totalRounding.interval",label:"sw-settings-currency.detail.currencyCountry.totalIntervalColumn",sortable:!1},{property:"totalRounding.roundForNet",label:"sw-settings-currency.detail.currencyCountry.totalNetRoundingColumn",sortable:!1,visible:!1}]},currencyCountryRoundingCriteria(){let n=new i(1,25);return n.addAssociation("country"),this.searchTerm?n.setTerm(this.searchTerm):n.setTerm(""),n.addSorting(i.sort("country.name")),n},emptyStateText(){return this.currency.id&&this.currency.isNew()?this.$tc("sw-settings-currency.detail.emptyCountryRoundingsNewCurrency"):this.$tc("sw-settings-currency.detail.emptyCountryRoundings")},showCustomFields(){return this.customFieldSets&&this.customFieldSets.length>0}},watch:{currencyId(){this.currencyId||this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){return this.currencyId?Promise.all([this.loadEntityData(),this.loadCustomFieldSets()]):(Shopware.State.commit("context/resetLanguageToDefault"),this.isLoading=!0,this.currency=this.currencyRepository.create(),this.currency.itemRounding={decimals:2,interval:.01,roundForNet:!0},this.currency.totalRounding={decimals:2,interval:.01,roundForNet:!0},this.isLoading=!1,Promise.resolve())},loadEntityData(){return this.isLoading=!0,this.currencyRepository.get(this.currencyId).then(n=>(this.currency=n,this.loadCurrencyCountryRoundings().then(e=>[n,e]))).finally(()=>{this.isLoading=!1})},loadCurrencyCountryRoundings(){return this.currencyCountryLoading=!0,this.currencyCountryRoundingRepository.search(this.currencyCountryRoundingCriteria).then(n=>(this.currencyCountryRoundings=n,n)).finally(()=>{this.currencyCountryLoading=!1})},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("currency").then(n=>{this.customFieldSets=n})},saveFinish(){this.isSaveSuccessful=!1},onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.currencyRepository.save(this.currency).then(()=>{this.isSaveSuccessful=!0,this.currencyId||this.$router.push({name:"sw.settings.currency.detail",params:{id:this.currency.id}}),this.currencyRepository.get(this.currency.id).then(n=>{this.currency=n,this.isLoading=!1})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-currency.detail.notificationErrorMessage")}),this.isLoading=!1})},onCancel(){this.$router.push({name:"sw.settings.currency.index"})},abortOnLanguageChange(){return this.currencyRepository.hasChanges(this.currency)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()},onChangeCountrySearch(n){this.searchTerm=n,this.loadCurrencyCountryRoundings()},onAddCountry(){this.currentCurrencyCountry=this.currencyCountryRoundingRepository.create(),this.currentCurrencyCountry.itemRounding=r(this.currency.itemRounding),this.currentCurrencyCountry.totalRounding=r(this.currency.totalRounding),this.currentCurrencyCountry.currencyId=this.currency.id},onCancelEditCountry(){this.currentCurrencyCountry=null},onClickEdit(n){this.currentCurrencyCountry=n},onSaveCurrencyCountry(){this.currencyCountryLoading=!0,this.currencyCountryRoundingRepository.save(this.currentCurrencyCountry).then(()=>{this.createNotificationSuccess({title:this.$tc("global.default.success"),message:this.$tc("sw-settings-currency.detail.notificationCountrySuccessMessage")}),this.onCancelEditCountry(),this.loadCurrencyCountryRoundings()}).catch(()=>{this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-settings-currency.detail.notificationCountryErrorMessage")})}).finally(()=>{this.currencyCountryLoading=!1})}}}},380326:function(n,e,t){var r=t(115900);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals),(0,t(745346).Z)("5951945b",r,!0,{})}}]);