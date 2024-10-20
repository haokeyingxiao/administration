(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[90873],{384130:function(){},190873:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(450393);let{Context:a}=Shopware,{Criteria:l}=Shopware.Data,r="ed535e5722134ac1aa6524f73e26881b";var s={template:'\n{% block sw_product_stream_modal_preview %}\n<sw-modal\n    class="sw-product-stream-modal-preview"\n    :title="`${$tc(\'sw-product-stream.previewModal.title\')} (${total || 0})`"\n    :is-loading="isLoading"\n    variant="full"\n    @modal-close="closeModal"\n>\n    \n    {% block sw_product_stream_modal_preview_content %}\n    <div class="sw-product-stream-modal-preview__content">\n        \n        {% block sw_product_stream_modal_preview_content_header %}\n        <sw-container class="sw-product-stream-modal-preview__content-header">\n            \n            {% block sw_product_stream_modal_preview_search_field_label %}\n            <sw-label class="sw-product-stream-modal-preview__search-field-label">\n                \n                {% block sw_product_stream_modal_preview_search_field %}\n                <sw-simple-search-field\n                    class="sw-product-stream-modal-preview__search-field"\n                    variant="form"\n                    :value="searchTerm"\n                    :delay="750"\n                    @search-term-change="onSearchTermChange"\n                />\n                {% endblock %}\n            </sw-label>\n            {% endblock %}\n            \n            {% block sw_product_stream_modal_preview_sales_channel_field_label %}\n            <sw-label class="sw-product-stream-modal-preview__sales-channel-field-label">\n                \n                {% block sw_product_stream_modal_preview_sales_channel_field %}\n                <sw-entity-single-select\n                    v-model:value="selectedSalesChannel"\n                    entity="sales_channel"\n                    class="sw-product-stream-modal-preview__sales-channel-field"\n                    name="sw-field--selectedSalesChannel"\n                    :criteria="previewSelectionCriteria"\n                    :disabled="isLoading"\n                    :label="$tc(\'sw-settings.system-config.labelSalesChannelSelect\')"\n                    @update:value="onSalesChannelChange"\n                />\n                {% endblock %}\n            </sw-label>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_product_stream_modal_preview_grid %}\n        <sw-data-grid\n            v-if="total"\n            :data-source="products"\n            :columns="productColumns"\n            :show-selection="false"\n            :show-actions="false"\n            :show-previews="true"\n            :is-loading="isLoading"\n            full-page\n        >\n\n            <template #column-name="{ item, column }">\n                \n                {% block sw_product_stream_modal_preview_grid_column_name %}\n                <router-link :to="{ name: column.routerLink, params: { id: item.id } }">\n                    <sw-product-variant-info :variations="item.variation">\n                        {{ item.name || item.translated.name }}\n                    </sw-product-variant-info>\n                </router-link>\n                {% endblock %}\n            </template>\n\n            <template #column-active="{ item }">\n                \n                {% block sw_product_stream_modal_preview_grid_column_active %}\n                <sw-data-grid-column-boolean\n                    :value="item.active"\n                    :is-inline-edit="false"\n                />\n                {% endblock %}\n            </template>\n\n            <template #column-price="{ item }">\n                \n                {% block sw_product_stream_modal_preview_grid_column_price %}\n                {{ currencyFilter(getPriceForDefaultCurrency(item).unitPrice, selectedCurrencyIsoCode) }}\n                {% endblock %}\n            </template>\n\n            <template #column-stock="{ item }">\n                \n                {% block sw_product_stream_modal_preview_grid_column_stock %}\n                {{ item.stock }}\n                <sw-color-badge :variant="stockColorVariantFilter(item.stock)" />\n                {% endblock %}\n            </template>\n\n            <template #pagination>\n                \n                {% block sw_product_stream_modal_preview_grid_pagination %}\n                <sw-pagination\n                    v-bind="{ total, page, limit }"\n                    :total-visible="7"\n                    :auto-hide="false"\n                    @page-change="onPageChange"\n                />\n                {% endblock %}\n            </template>\n        </sw-data-grid>\n        {% endblock %}\n\n        \n        {% block sw_product_stream_modal_preview_empty_state %}\n        <sw-empty-state\n            v-if="!total && !isLoading"\n            :absolute="false"\n            :title="$tc(\'sw-product-stream.previewModal.empty\')"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_modal_preview_footer %}\n    <template #modal-footer>\n        \n        {% block sw_product_stream_modal_preview_close_button %}\n        <sw-button\n            class="sw-product-stream-modal-preview__close-action"\n            variant="primary"\n            @click.prevent="closeModal"\n        >\n            {{ $tc(\'sw-product-stream.previewModal.close\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","productStreamPreviewService"],emits:["modal-close"],props:{filters:{type:Array,required:!0},defaultLimit:{type:Number,default:25},defaultSorting:{type:String,default:null,validator(e){return null===e||2===e.split(":").length}}},data(){return{products:[],selectedSalesChannel:null,searchTerm:"",page:1,total:!1,limit:this.defaultLimit,sorting:this.defaultSorting,isLoading:!1,selectedCurrencyIsoCode:"EUR",selectedCurrencyId:a.app.systemCurrencyId}},computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},salesChannelCriteria(){return new l(1,1).addFilter(l.not("OR",[l.equals("typeId",r)])).addSorting(l.sort("type.iconName","ASC"))},previewCriteria(){let e=new l(this.page,this.limit).setTerm(this.searchTerm);if(this.sorting){let[t,n]=this.sorting.split(":");e.addSorting(l.sort(t,n))}return e},previewSelectionCriteria(){return new l().addFilter(l.not("OR",[l.equals("typeId",r)])).addSorting(l.sort("name","ASC"))},productColumns(){return[{property:"name",label:this.$tc("sw-product-stream.filter.values.product"),type:"text",routerLink:"sw.product.detail"},{property:"manufacturer.name",label:this.$tc("sw-product-stream.filter.values.manufacturerId")},{property:"active",label:this.$tc("sw-product-stream.filter.values.active"),align:"center",type:"bool"},{property:"price",label:this.$tc("sw-product-stream.filter.values.price")},{property:"stock",label:this.$tc("sw-product-stream.filter.values.stock"),align:"right"}]},currencyFilter(){return Shopware.Filter.getByName("currency")},stockColorVariantFilter(){return Shopware.Filter.getByName("stockColorVariant")}},created(){this.createdComponent()},methods:{createdComponent(){return this.isLoading=!0,this.loadSalesChannels().then(()=>this.loadEntityData()).finally(()=>{this.isLoading=!1})},onSearchTermChange(e){this.searchTerm=e,this.page=1,this.isLoading=!0,this.loadEntityData().finally(()=>{this.isLoading=!1})},onSalesChannelChange(){this.page=1,this.isLoading=!0,this.loadSalesChannelById().then(()=>this.loadEntityData()).finally(()=>{this.isLoading=!1})},loadEntityData(){return!!this.selectedSalesChannel&&this.productStreamPreviewService.preview(this.selectedSalesChannel,this.previewCriteria,this.mapFiltersForSearch(this.filters),{"sw-currency-id":this.selectedCurrencyId,"sw-inheritance":!0}).then(e=>{this.products=Object.values(e.elements),this.total=e.total})},loadSalesChannels(){return this.salesChannelRepository.searchIds(this.salesChannelCriteria).then(({data:e})=>{this.selectedSalesChannel=e.at(0)})},mapFiltersForSearch(e=[],t=null){return e.map(e=>{let{field:n,type:a,operator:l,value:r,parameters:s,queries:i}=e,o=this.mapFiltersForSearch(i,a),c={field:n,type:a,operator:l,value:r,parameters:s,queries:o};return"id"===n||"product.id"===n?{type:"multi",field:null,operator:this.isNotEqualToAnyType(a,t)?"AND":"OR",value:null,parameters:null,queries:[c,{...c,field:"parentId"}]}:c})},closeModal(){this.$emit("modal-close")},getPriceForDefaultCurrency(e){let t=e.calculatedCheapestPrice,n=e.calculatedPrice;return(e.calculatedPrices.length>0&&(n=e.calculatedPrices[e.calculatedPrices.length-1]),t.unitPrice!==n.unitPrice)?n:t},onPageChange({page:e=1,limit:t=25}){this.isLoading=!0,this.page=e,this.limit=t,this.loadEntityData().finally(()=>{this.isLoading=!1})},loadSalesChannelById(){return null===this.selectedSalesChannel?Promise.resolve():(this.salesChannelCriteria.addAssociation("currency"),this.salesChannelRepository.get(this.selectedSalesChannel,Shopware.Context.api,this.salesChannelCriteria).then(e=>{this.selectedCurrencyIsoCode=e.currency.isoCode,this.selectedCurrencyId=e.currencyId}))},isNotEqualToAnyType(e,t){return"equalsAny"===e&&"not"===t}}}},450393:function(e,t,n){var a=n(384130);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(745346).Z)("9da4bfe0",a,!0,{})}}]);