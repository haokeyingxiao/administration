(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[4339],{192666:function(){},104339:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(570881);t(119740);let{Utils:s,State:r,Service:l}=Shopware,{get:a,format:o}=s;var c={template:'\n{% block sw_order_line_items_grid_sales_channel %}\n<sw-container\n    type="row"\n    class="sw-order-line-items-grid-sales-channel"\n>\n\n    \n    {% block sw_order_line_items_grid_sales_channel_actions %}\n    <sw-container\n        class="sw-order-line-items-grid-sales-channel__actions-container"\n        columns="1fr auto"\n        gap="16px"\n    >\n\n        \n        {% block sw_order_line_items_grid_sales_channel_header %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_line_item_filter %}\n        <div align="left">\n            <sw-card-filter\n                ref="itemFilter"\n                :placeholder="$tc(\'sw-order.createBase.placeholderSearchBarItem\')"\n                @sw-card-filter-term-change="onSearchTermChange"\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_create_actions_button_group %}\n        <div align="right">\n            <sw-button-group>\n\n                \n                {% block sw_order_line_items_grid_sales_channel_add_existing_product %}\n                <sw-button\n                    class="sw-order-line-items-grid-sales-channel__add-product"\n                    variant="ghost"\n                    size="small"\n                    :disabled="isAddNewItemButtonDisabled || undefined"\n                    @click="onInsertExistingItem"\n                >\n                    {{ $tc(\'sw-order.createBase.buttonAddProduct\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_sales_channel_create_actions_dropdown %}\n                <sw-context-button>\n                    <template #button>\n                        <sw-button\n                            variant="ghost"\n                            size="small"\n                            square\n                            :disabled="isAddNewItemButtonDisabled || undefined"\n                        >\n                            <sw-icon\n                                name="regular-chevron-down-xxs"\n                                decorative\n                            />\n                        </sw-button>\n                    </template>\n\n                    \n                    {% block sw_order_line_items_grid_sales_channel_create_actions_dropdown_menu %}\n                    <sw-context-menu-item\n                        class="sw-order-line-items-grid-sales-channel__add-custom-item"\n                        @click="onInsertBlankItem"\n                    >\n                        {{ $tc(\'sw-order.createBase.buttonAddBlankProduct\') }}\n                    </sw-context-menu-item>\n                    <sw-context-menu-item\n                        class="sw-order-line-items-grid-sales-channel__add-credit-item"\n                        @click="onInsertCreditItem"\n                    >\n                        {{ $tc(\'sw-order.createBase.buttonAddCredit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </sw-context-button>\n                {% endblock %}\n            </sw-button-group>\n        </div>\n        {% endblock %}\n\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_order_line_items_grid_sales_channel_grid %}\n    \n    {% block sw_order_line_items_grid_sales_channel_grid_no_items %}\n    <sw-empty-state\n        v-if="cartLineItems.length === 0"\n        :title="$tc(\'sw-order.createBase.messageEmptyItem\')"\n        :absolute="false"\n    >\n        <template #icon>\n            <img\n                :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                :alt="$tc(\'sw-order.createBase.messageEmptyItem\')"\n            >\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n\n    \n    {% block sw_order_line_items_grid_sales_channel_grid_item_table %}\n    <sw-data-grid\n        v-else\n        ref="dataGrid"\n        :data-source="cartLineItems"\n        :columns="getLineItemColumns"\n        :full-page="false"\n        :show-settings="false"\n        :show-selection="isCustomerActive"\n        show-actions\n        :allow-column-edit="false"\n        :allow-inline-edit="isCustomerActive"\n        :is-record-editable="(item) => !isPromotionItem(item)"\n        :is-record-selectable="(item) => !isAutoPromotionItem(item)"\n        :compact-mode="false"\n        identifier="sw-order-line-item-grid-sales-channel"\n        class="sw-order-line-items-grid-sales-channel__data-grid"\n        @inline-edit-cancel="onInlineEditCancel"\n        @inline-edit-save="onInlineEditSave"\n        @selection-change="onSelectionChanged"\n    >\n\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_columns %}\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_columns_label %}\n        <template #column-label="{ item, isInlineEdit}">\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_label_inline_edit %}\n            <sw-order-product-select\n                v-if="isInlineEdit"\n                :item="item"\n                :tax-status="taxStatus"\n                :sales-channel-id="salesChannelId"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_label_link %}\n            <div\n                v-else-if="!isInlineEdit && isProductItem(item)"\n            >\n\n                \n                {% block sw_order_line_items_grid_column_payload_options %}\n                <router-link\n                    v-if="item.payload && item.payload.options"\n                    target="_blank"\n                    class="sw-order-line-items-grid-sales-channel__item-payload-options"\n                    :title="$tc(\'sw-order.detailBase.contextMenuShowProduct\')"\n                    :to="{ name: \'sw.product.detail\', params: { id: item.identifier || item.id } }"\n                >\n                    <sw-product-variant-info :variations="item.payload.options">\n                        <div class="sw-order-line-items-grid__item-label">\n                            {{ item.label }}\n                        </div>\n                    </sw-product-variant-info>\n                </router-link>\n\n                <div\n                    v-else\n                    class="sw-order-line-items-grid-sales-channel__item-payload-options"\n                >\n                    <span class="sw-order-line-items-grid__item-label">\n                        {{ item.label }}\n                    </span>\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_label_content %}\n            <template v-else>\n                <span class="sw-order-line-items-grid-sales-channel__item-label">\n                    {{ item.label }}\n                </span>\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_columns_unit_price %}\n        <template #column-unitPrice="{ item, isInlineEdit}">\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_unit_price_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && !itemCreatedFromProduct(item)"\n                placeholder="0"\n                size="small"\n                :min="getMinItemPrice(item)"\n                :value="item.priceDefinition.price"\n                @update:value="checkItemPrice($event, item)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_unit_price_content %}\n            <template v-else>\n                {{ currencyFilter(item.price.unitPrice,  currency.isoCode) }}\n            </template>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_columns_total_price %}\n        <template #column-totalPrice="{ item }">\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_total_price_content %}\n            {{ currencyFilter(item.price.totalPrice, currency.isoCode) }}\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_columns_quantity %}\n        <template #column-quantity="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_quantity_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && !isCreditItem(item)"\n                number-type="int"\n                :min="1"\n                size="small"\n                placeholder="0"\n                :value="item.quantity"\n                @update:value="changeItemQuantity($event, item)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_quantity_content %}\n            <template v-else>\n                <span class="sw-order-line-items-grid-sales-channel__quantity">\n                    {{ item.quantity }}\n                </span>\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_columns_tax %}\n        <template #column-tax="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_tax_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit &&\n                    !itemCreatedFromProduct(item.id) &&\n                    item.priceDefinition &&\n                    item.priceDefinition.taxRules &&\n                    !isCreditItem(item)"\n                key="order-line-item-tax-edit-default"\n                v-model:value="item.priceDefinition.taxRules[0].taxRate"\n                size="small"\n                placeholder="0"\n                :min="0"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_tax_content_tooltip %}\n            <span\n                v-else-if="hasMultipleTaxes(item)"\n                v-tooltip="tooltipTaxDetail(item)"\n                class="sw-order-line-items-grid-sales-channel__item-tax-tooltip"\n            >\n                {{ showTaxValue(item) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_columns_tax_content %}\n            <template v-else-if="item.price && item.price.taxRules.length">\n                {{ showTaxValue(item) }}\n            </template>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_grid_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_order_line_items_grid_sales_channel_grid_actions_show %}\n            <sw-context-menu-item\n                :disabled="!isProductItem(item) || undefined"\n                icon="regular-eye"\n                :router-link="{ name: \'sw.product.detail\', params: { id: item.id } }"\n                target="_blank"\n                rel="noopener"\n            >\n                \n                {% block sw_order_line_items_grid_sales_channel_grid_actions_show_label %}\n                {{ $tc(\'sw-order.createBase.contextMenuShowProduct\') }}\n                {% endblock %}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_sales_channel_bulk_actions %}\n        <template #bulk>\n            \n            {% block sw_order_line_items_grid_sales_channel_bulk_actions_delete %}\n            <a\n                class="link link-danger"\n                role="link"\n                tabindex="0"\n                @click="onDeleteSelectedItems"\n                @keydown.enter="onDeleteSelectedItems"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </a>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n    {% endblock %}\n</sw-container>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],emits:["on-save-item","on-remove-items"],props:{salesChannelId:{type:String,required:!0,default:""},cart:{type:Object,required:!0},currency:{type:Object,required:!0},isCustomerActive:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},data(){return{selectedItems:{},searchTerm:""}},computed:{orderLineItemRepository(){return l("repositoryFactory").create("order_line_item")},cartLineItems(){if(!this.searchTerm)return this.cart.lineItems;let e=this.searchTerm.split(/[\W_]+/ig);return this.cart.lineItems.filter(n=>!!n.label&&e.every(e=>n.label.toLowerCase().includes(e.toLowerCase())))},lineItemTypes(){return i.S},isCartTokenAvailable(){return r.getters["swOrder/isCartTokenAvailable"]},isAddNewItemButtonDisabled(){return!this.isCustomerActive||!this.isCartTokenAvailable||this.isLoading},taxStatus(){return a(this.cart,"price.taxStatus","")},unitPriceLabel(){return"net"===this.taxStatus?this.$tc("sw-order.createBase.columnPriceNet"):"tax-free"===this.taxStatus?this.$tc("sw-order.createBase.columnPriceTaxFree"):this.$tc("sw-order.createBase.columnPriceGross")},getLineItemColumns(){let e=[{property:"quantity",dataIndex:"quantity",label:this.$tc("sw-order.createBase.columnQuantity"),allowResize:!1,align:"right",inlineEdit:!0,width:"80px"},{property:"label",dataIndex:"label",label:this.$tc("sw-order.createBase.columnProductName"),allowResize:!1,primary:!0,inlineEdit:!0,multiLine:!0},{property:"unitPrice",dataIndex:"unitPrice",label:this.unitPriceLabel,allowResize:!1,align:"right",inlineEdit:!0,width:"120px"}];return"tax-free"!==this.taxStatus&&e.push({property:"tax",label:this.$tc("sw-order.createBase.columnTax"),allowResize:!1,align:"right",inlineEdit:!0,width:"100px"}),[...e,{property:"totalPrice",dataIndex:"totalPrice",label:"gross"===this.taxStatus?this.$tc("sw-order.createBase.columnTotalPriceGross"):this.$tc("sw-order.createBase.columnTotalPriceNet"),allowResize:!1,align:"right",width:"80px"}]},assetFilter(){return Shopware.Filter.getByName("asset")},currencyFilter(){return Shopware.Filter.getByName("currency")}},methods:{onInlineEditSave(e){""!==e.label&&(e.priceDefinition.isCalculated=!0,this.$emit("on-save-item",e))},onInlineEditCancel(e){e._isNew&&(this.initLineItem(e),delete e.identifier),e.initialQuantity&&(e.quantity=e.initialQuantity)},createNewOrderLineItem(){this.searchTerm="",this.$refs.itemFilter.term="";let e=this.orderLineItemRepository.create();return e.versionId=Shopware.Context.api.liveVersionId,this.initLineItem(e),e},initLineItem(e){e.priceDefinition={isCalculated:!1,taxRules:[{taxRate:0,percentage:100}],price:0},e.price={taxRules:[{taxRate:0}],unitPrice:"...",quantity:1,totalPrice:"..."},e.quantity=1,e.unitPrice=0,e.totalPrice=0,e.precision=2,e.label=""},onInsertExistingItem(){let e=this.createNewOrderLineItem();e.type=this.lineItemTypes.PRODUCT,this.cartLineItems.unshift(e),r.commit("swOrder/setCartLineItems",this.cartLineItems)},onInsertBlankItem(){let e=this.createNewOrderLineItem();e.description="custom line item",e.type=this.lineItemTypes.CUSTOM,this.cartLineItems.unshift(e),r.commit("swOrder/setCartLineItems",this.cartLineItems)},onInsertCreditItem(){let e=this.createNewOrderLineItem();e.description="credit line item",e.type=this.lineItemTypes.CREDIT,this.cartLineItems.unshift(e),r.commit("swOrder/setCartLineItems",this.cartLineItems)},onSelectionChanged(e){this.selectedItems=e},onDeleteSelectedItems(){let e=[];Object.keys(this.selectedItems).forEach(n=>{""===this.selectedItems[n].label?r.commit("swOrder/removeEmptyLineItem",n):e.push(n)}),e.length>0&&this.$emit("on-remove-items",e),this.$refs.dataGrid.resetSelection()},itemCreatedFromProduct(e){return e._isNew&&e.type===this.lineItemTypes.PRODUCT},onSearchTermChange(e){this.searchTerm=e.toLowerCase()},isCreditItem(e){return e.type===this.lineItemTypes.CREDIT},isProductItem(e){return e.type===this.lineItemTypes.PRODUCT},getMinItemPrice(e){return this.isCreditItem(e)?null:0},isPromotionItem(e){return e.type===this.lineItemTypes.PROMOTION},isAutoPromotionItem(e){return this.isPromotionItem(e)&&!a(e,"payload.code")},showTaxValue(e){return(this.isCreditItem(e)||this.isPromotionItem(e))&&e.price.taxRules.length>1?this.$tc("sw-order.createBase.textCreditTax"):`${e.price.taxRules[0].taxRate} %`},checkItemPrice(e,n){if(this.isCreditItem(n)){n.priceDefinition.price=-1*Math.abs(e);return}n.priceDefinition.price=e},tooltipTaxDetail(e){let n=[...e.price.calculatedTaxes].sort((e,n)=>e.taxRate-n.taxRate).map(e=>this.$tc("sw-order.createBase.taxDetail",0,{taxRate:e.taxRate,tax:o.currency(e.tax,this.currency.isoCode)}));return{showDelay:300,message:`${this.$tc("sw-order.createBase.tax")}<br>${n.join("<br>")}`}},hasMultipleTaxes(e){return a(e,"price.calculatedTaxes")&&e.price.calculatedTaxes.length>1},changeItemQuantity(e,n){n.initialQuantity||(n.initialQuantity=n.quantity),n.quantity=e}}}},119740:function(e,n,t){var i=t(192666);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,t(745346).Z)("2f015260",i,!0,{})}}]);