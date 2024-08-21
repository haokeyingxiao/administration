(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[94086],{624279:function(){},994086:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}}),i(700019);let{Mixin:n}=Shopware,{Criteria:r,EntityCollection:s}=Shopware.Data;var l={template:'\n{% block sw_cms_element_product_listing_config %}\n<div class="sw-cms-el-config-product-listing">\n\n    <sw-tabs\n        position-identifier="sw-cms-element-config-product-listing"\n        default-item="content"\n    >\n        <template #default="{ active }">\n            <sw-tabs-item\n                class="sw-cms-el-config-product-listing__tab-content"\n                name="content"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n\n            <sw-tabs-item\n                class="sw-cms-el-config-product-listing__tab-sorting"\n                name="sorting"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.productListing.config.tab.sorting\') }}\n            </sw-tabs-item>\n\n            <sw-tabs-item\n                class="sw-cms-el-config-product-listing__tab-filter"\n                name="filter"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.productListing.config.tab.filter\') }}\n            </sw-tabs-item>\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            <template v-if="active === \'content\'">\n\n                \n                {% block sw_cms_element_product_listing_config_layout_select %}\n                <sw-select-field\n                    v-model:value="element.config.boxLayout.value"\n                    :label="$tc(\'sw-cms.elements.productBox.config.label.layoutType\')"\n                >\n                    \n                    {% block sw_cms_element_product_listing_config_layout_select_options %}\n                    <option value="standard">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeStandard\') }}\n                    </option>\n                    <option value="image">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeImage\') }}\n                    </option>\n                    <option value="minimal">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeMinimal\') }}\n                    </option>\n                    {% endblock %}\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_info %}\n                <sw-alert variant="info">\n                    {{ $tc(\'sw-cms.elements.general.config.infoText.listingElement\') }}\n                </sw-alert>\n                {% endblock %}\n            </template>\n\n            <template v-if="active === \'sorting\'">\n                \n                {% block sw_cms_element_product_listing_config_show_sorting %}\n                <sw-switch-field\n                    v-model:value="element.config.showSorting.value"\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelShowSorting\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_use_default_sorting %}\n                <sw-switch-field\n                    v-model:value="element.config.useCustomSorting.value"\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelUseCustomSortings\')"\n                    :help-text="$tc(\'sw-cms.elements.productListing.config.sorting.helpTextUseCustomSortings\')"\n                    class="sw-cms-el-config-product-listing-custom-sortings"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_default_sorting %}\n                <sw-entity-single-select\n                    v-if="showSortingGrid"\n                    class="sw-cms-element-config-product-listing__sorting-default-select"\n                    entity="product_sorting"\n                    label-property="label"\n                    show-clearable-button\n                    :value="defaultSorting.id"\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelDefaultSorting\')"\n                    :help-text="$tc(\'sw-cms.elements.productListing.config.sorting.helpTextDefaultSorting\')"\n                    :criteria="allProductSortingsCriteria"\n                    :placeholder="$tc(\'sw-cms.elements.productListing.config.sorting.placeholderDefaultProductSorting\')"\n                    @option-select="onDefaultSortingChange"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_available_sortings %}\n                <sw-entity-multi-select\n                    v-if="showSortingGrid"\n                    v-model:entityCollection="productSortings"\n                    class="sw-cms-el-config-product-listing-config-sorting-grid__select"\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelProductSortings\')"\n                    label-property="label"\n                    :criteria="allProductSortingsCriteria"\n                    :hide-labels="true"\n                    :placeholder="$tc(\'sw-cms.elements.productListing.config.sorting.placeHolderProductSortings\')"\n                >\n                    <template #result-item="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, isSelected, addItem, getKey }">\n                        <slot\n                            name="result-item"\n                            v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, isSelected, addItem, getKey }"\n                        >\n                            <sw-select-result\n                                v-tooltip="{\n                                    showDelay: 300,\n                                    message: $tc(\'sw-cms.elements.productListing.config.sorting.defaultSortingInUse\'),\n                                    disabled: !isDefaultSorting(item)\n                                }"\n                                :selected="isSelected(item)"\n                                :disabled="isDefaultSorting(item)"\n                                v-bind="{ item, index }"\n                                @item-select="addItem"\n                            >\n                                \n                                {% block sw_entity_multi_select_base_results_list_result_label %}\n                                <slot\n                                    name="result-label-property"\n                                    v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, getKey }"\n                                >\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)"\n                                        :search-term="searchTerm"\n                                    />\n                                    <template v-else>\n                                        {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }}\n                                    </template>\n                                </slot>\n                                {% endblock %}\n                            </sw-select-result>\n                        </slot>\n                    </template>\n                </sw-entity-multi-select>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_sorting_grid %}\n                <sw-cms-el-config-product-listing-config-sorting-grid\n                    v-if="showSortingGrid"\n                    :product-sortings="productSortings"\n                    :default-sorting="defaultSorting"\n                />\n                {% endblock %}\n            </template>\n\n            <template v-if="active === \'filter\'">\n                \n                {% block sw_cms_element_product_listing_config_filter_info %}\n                <sw-alert variant="info">\n                    {{ $tc(\'sw-cms.elements.productListing.config.filter.infoText\') }}\n                </sw-alert>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_filter_by_wrapper %}\n                <sw-container\n                    columns="1fr 1fr"\n                    gap="0px 30px"\n                >\n                    \n                    {% block sw_cms_element_product_listing_config_filter_by_manufacturer %}\n                    <sw-switch-field\n                        v-model:value="filterByManufacturer"\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterByManufacturer\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_by_rating %}\n                    <sw-switch-field\n                        v-model:value="filterByRating"\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterByRating\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_by_price %}\n                    <sw-switch-field\n                        v-model:value="filterByPrice"\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterByPrice\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_for_free_shipping %}\n                    <sw-switch-field\n                        v-model:value="filterByFreeShipping"\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterForFreeShipping\')"\n                    />\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_filter_properties_wrapper %}\n                <div>\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_spacer %}\n                    <hr class="spacer">\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_properties_as_filter %}\n                    \n                    {% block sw_cms_element_product_listing_config_filter_properties_as_filter_switch %}\n                    <sw-switch-field\n                        v-model:value="filterByProperties"\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelUseFilterByProperties\')"\n                        :help-text="$tc(\'sw-cms.elements.productListing.config.filter.helpTextUseFilterByProperties\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_properties_as_filter_info_text %}\n                    <div\n                        class="sw-cms-el-config-product-listing-filter_properties_as_filter__description-text"\n                        v-html="$tc(\'sw-cms.elements.productListing.config.filter.descriptionTextUseFilterByProperties\')"\n                    ></div>\n                    {% endblock %}\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_property_search %}\n                    <sw-simple-search-field\n                        v-model:value="filterPropertiesTerm"\n                        class="sw-cms-element-product-listing-config-filter-property-search"\n                        variant="form"\n                        :disabled="showFilterGrid"\n                        @search-term-change="onFilterProperties"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_property_grid %}\n                    <div\n                        v-if="showPropertySelection"\n                        class="sw-cms-el-config-product-listing-property-grid"\n                        :class="gridClasses"\n                    >\n                        <sw-data-grid\n                            :data-source="properties"\n                            :columns="gridColumns"\n                            :compact-mode="true"\n                            :allow-inline-edit="false"\n                            :show-actions="false"\n                            :show-selection="false"\n                            plain-appearance\n                        >\n\n                            <template #column-status="{ item, column }">\n                                \n                                {% block sw_cms_element_product_listing_config_filter_property_grid_column_status %}\n                                <sw-switch-field\n                                    :disabled="column.disabled"\n                                    :value="item.active"\n                                    @update:value="propertyStatusChanged(item.id)"\n                                />\n                            {% endblock %}\n                            </template>\n\n                            <template #pagination>\n                                \n                                {% block sw_cms_element_product_listing_config_filter_property_grid_pagination %}\n                                <sw-pagination\n                                    v-if="!disabled"\n                                    :page="propertiesPage"\n                                    :limit="propertiesLimit"\n                                    :total="propertiesTotal"\n                                    :auto-hide="false"\n                                    :steps="[]"\n                                    @page-change="onPropertiesPageChange"\n                                />\n                            {% endblock %}\n                            </template>\n                        </sw-data-grid>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_empty_state %}\n                    <sw-empty-state\n                        v-else\n                        :absolute="false"\n                        :title="$tc(\'sw-cms.elements.productListing.config.filter.gridEmptyStateLabel\')"\n                        :subline="$tc(\'sw-cms.elements.productListing.config.filter.gridEmptyStateHint\')"\n                    >\n                        <template #icon>\n                            <img\n                                :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                                alt="$tc(\'sw-cms.elements.productListing.config.filter.gridEmptyStateLabel\')"\n                            >\n                        </template>\n                    </sw-empty-state>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </template>\n        </template>\n    </sw-tabs>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","feature"],mixins:[n.getByName("cms-element")],data(){return{productSortings:[],defaultSorting:{},filters:[],filterPropertiesTerm:"",properties:[],propertiesPage:1,propertiesLimit:6,propertiesTotal:0}},computed:{showSortingGrid(){return this.element.config.useCustomSorting.value},showFilterGrid(){return!this.filterByProperties},productSortingRepository(){return this.repositoryFactory.create("product_sorting")},propertyRepository(){return this.repositoryFactory.create("property_group")},productSortingsCriteria(){let e=new r(1,25);return e.addFilter(r.equalsAny("id",[...Object.keys(this.productSortingsConfigValue)])),e.addSorting(r.sort("priority","desc")),e},propertyCriteria(){let e=new r(this.propertiesPage,this.propertiesLimit);return e.setTerm(this.filterPropertiesTerm),e.addSorting(r.sort("name","ASC",!1)),e.addFilter(r.equals("filterable",!0)),e},allProductSortingsCriteria(){let e=new r(1,25);return e.addFilter(r.equals("locked",!1)),e},excludedDefaultSortingCriteria(){let e=new r(1,25);return this.defaultSorting.id&&e.addFilter(r.not("AND",[r.equals("id",this.defaultSorting.id)])),e.addFilter(r.equals("locked",!1)),e},productSortingsConfigValue(){return this.element.config.availableSortings.value},filterByManufacturer:{get(){return this.isActiveFilter("manufacturer-filter")},set(e){this.updateFilters("manufacturer-filter",e)}},filterByRating:{get(){return this.isActiveFilter("rating-filter")},set(e){this.updateFilters("rating-filter",e)}},filterByPrice:{get(){return this.isActiveFilter("price-filter")},set(e){this.updateFilters("price-filter",e)}},filterByFreeShipping:{get(){return this.isActiveFilter("shipping-free-filter")},set(e){this.updateFilters("shipping-free-filter",e)}},filterByProperties:{get(){return!this.isActiveFilter("property-filter")},set(e){this.updateFilters("property-filter",!e),this.sortProperties(this.properties)}},showPropertySelection(){return 1>!this.properties.length},gridColumns(){return[{property:"status",label:"sw-cms.elements.productListing.config.filter.gridHeaderStatus",disabled:this.showFilterGrid,width:"70px"},{property:"name",label:"sw-cms.elements.productListing.config.filter.gridHeaderName"}]},gridClasses(){return{"is--disabled":this.showFilterGrid}},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{productSortings:{handler(){this.element.config.availableSortings.value=this.transformProductSortings()},deep:!0},defaultSorting(){0===Object.keys(this.defaultSorting).length?this.element.config.defaultSorting.value="":this.element.config.defaultSorting.value=this.defaultSorting.id}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("product-listing"),Shopware.Utils.types.isEmpty(this.productSortingsConfigValue)?this.productSortings=new s(this.productSortingRepository.route,this.productSortingRepository.schema.entity,Shopware.Context.api,this.productSortingsCriteria):this.fetchProductSortings().then(e=>{this.productSortings=e}),this.initDefaultSorting(),this.unpackFilters(),this.loadFilterableProperties()},fetchProductSortings(){return this.productSortingRepository.search(this.productSortingsCriteria).then(e=>this.updateValuesFromConfig(e))},updateValuesFromConfig(e){return Object.entries(this.productSortingsConfigValue).forEach(([t,i])=>{let n=e.find(e=>e.id===t);n&&(n.priority=i)}),e},transformProductSortings(){if(0===this.productSortings.length)return[];let e={};return this.productSortings.forEach(t=>{e[t.id]=t.priority}),e},initDefaultSorting(){let e=this.element.config.defaultSorting.value;if(""!==e){let t=new r(1,25);t.addFilter(r.equals("id",e)),this.productSortingRepository.search(t).then(e=>{this.defaultSorting=e.first()||{}})}},loadFilterableProperties(){return this.propertyRepository.search(this.propertyCriteria).then(e=>{this.propertiesTotal=e.total,this.properties=this.sortProperties(e)})},sortProperties(e){return e.forEach(e=>{if(!this.filterByProperties){e.active=!0;return}e.active=this.element.config.propertyWhitelist.value.includes(e.id)}),e.sort((e,t)=>e.active===t.active||!e.active==!t.active?0:e.active?-1:1),e},onDefaultSortingChange(e,t){if(!t){this.defaultSorting={};return}this.productSortings.has(t.id)||this.productSortings.add(t),this.defaultSorting=t},isDefaultSorting(e){return this.defaultSorting.id===e.id},isActiveFilter(e){return this.filters.includes(e)},updateFilters(e,t){t?this.filters=[...this.filters,e]:this.filters=this.filters.reduce((t,i)=>i===e?t:[...t,i],[]),this.element.config.filters.value=this.filters.join()},unpackFilters(){if(void 0===this.element.config.filters)return;let e=this.element.config.filters.value;null!==e&&""!==e&&(this.filters=e.split(","))},onFilterProperties(){return this.propertiesPage=1,this.loadFilterableProperties()},onPropertiesPageChange({limit:e,page:t}){return this.propertiesLimit=e,this.propertiesPage=t,this.loadFilterableProperties()},propertyStatusChanged(e){let t=this.element.config.propertyWhitelist.value;if(!t.includes(e)){this.element.config.propertyWhitelist.value=[...t,e];return}this.element.config.propertyWhitelist.value=t.reduce((t,i)=>i===e?t:[...t,i],[])}}}},700019:function(e,t,i){var n=i(624279);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,i(745346).Z)("6d2f4c18",n,!0,{})}}]);