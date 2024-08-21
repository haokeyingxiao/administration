(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[10756],{619601:function(){},910756:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return c}}),s(913724);let{Mixin:t}=Shopware;var c={template:'\n{% block sw_cms_el_buy_box %}\n<div\n    class="sw-cms-el-buy-box"\n    :style="alignStyle"\n>\n    <div\n        v-if="(product && !isProductPageType) || currentDemoEntity"\n        class="sw-cms-el-buy-box__content"\n    >\n\n        \n        {% block sw_cms_el_buy_box_product_info %}\n        \n        {% block sw_cms_el_buy_box_product_price %}\n        <div class="sw-cms-el-buy-box__price">\n            {{ currencyFilter(product.price[0].gross, \'EUR\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_buy_box_product_tax_info %}\n        <div class="sw-cms-el-buy-box__tax-info">\n            {{ $tc(\'sw-cms.elements.buyBox.component.label.taxInfo\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_buy_box_product_shipping_info %}\n        <ul class="sw-cms-el-buy-box__shipping-info">\n            <li v-if="product.shippingFree">\n                {{ $tc(\'sw-cms.elements.buyBox.component.label.deliveryShippingFree\') }}\n            </li>\n            <li v-if="product.deliveryTime">\n                {{ $tc(\'sw-cms.elements.buyBox.component.label.deliveryTime\', 0, {name: placeholder(product, \'deliveryTime.name\', product.deliveryTime.name)}) }}\n            </li>\n        </ul>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_buy_box_product_variants %}\n        <template v-if="product.parentId || product.childCount > 0">\n            <p class="sw-cms-el-buy-box__variant-title">\n                {{ $tc(\'sw-cms.elements.buyBox.component.label.variants\') }}\n            </p>\n            <div class="sw-cms-el-buy-box__variants">\n                <div class="sw-cms-el-buy-box__variant"></div>\n                <div class="sw-cms-el-buy-box__variant"></div>\n                <div class="sw-cms-el-buy-box__variant"></div>\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_buy_box_form %}\n        <div class="sw-cms-el-buy-box__form">\n\n            \n            {% block sw_cms_element_buy_box_form_select_quantity %}\n            <sw-block-field class="sw-cms-el-buy-box__quantity">\n                <template #sw-field-input>\n                    \n                    <select>\n                        <option\n                            :value="product.minPurchase"\n                            selected\n                        >\n                            {{ product.minPurchase }}\n                        </option>\n                    </select>\n                    <div class="sw-cms-el-buy-box__icon">\n                        <sw-icon\n                            name="regular-chevron-up-xxs"\n                            decorative\n                        />\n                        <sw-icon\n                            name="regular-chevron-down-xxs"\n                            decorative\n                        />\n                    </div>\n                </template>\n            </sw-block-field>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_buy_box_form_action %}\n            <div class="sw-cms-el-buy-box__actions">\n                <a\n                    href="#"\n                    class="sw-cms-el-buy-box__buy-action"\n                >\n                    {{ $tc(\'sw-cms.elements.buyBox.component.label.actionBuy\') }}\n                </a>\n            </div>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_element_buy_box_product_number %}\n        <div class="sw-cms-el-buy-box__product-number">\n            <span class="sw-cms-el-buy-box__product-number-title">\n                {{ $tc(\'sw-cms.elements.buyBox.component.label.productNumber\') }}\n            </span>\n            <span>{{ product.productNumber }}</span>\n        </div>\n        {% endblock %}\n        {% endblock %}\n    </div>\n\n    <div\n        v-else\n        class="sw-cms-el-buy-box__skeleton"\n    >\n\n        \n        {% block sw_cms_element_buybox_skeleton %}\n        \n        {% block sw_cms_element_buybox_skeleton_info %}\n        <div class="sw-cms-el-buy-box__placeholder"></div>\n        <div class="sw-cms-el-buy-box__placeholder"></div>\n        <div class="sw-cms-el-buy-box__placeholder"></div>\n        <div class="sw-cms-el-buy-box__placeholder"></div>\n        {% endblock %}\n\n        \n        {% block sw_cms_element_buybox_skeleton_form %}\n        <div class="sw-cms-el-buy-box__form">\n\n            \n            {% block sw_cms_element_buybox_skeleton_quantity %}\n            <sw-block-field class="sw-cms-el-buy-box__quantity">\n                <template #sw-field-input>\n                    \n                    <select>\n                        <option\n                            value="1"\n                            selected\n                        >\n                            1\n                        </option>\n                    </select>\n                    <div class="sw-cms-el-buy-box__icon">\n                        <sw-icon\n                            name="regular-chevron-up-xxs"\n                            small\n                            decorative\n                        />\n                        <sw-icon\n                            name="regular-chevron-down-xxs"\n                            small\n                            decorative\n                        />\n                    </div>\n                </template>\n            </sw-block-field>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_buy_box_skeleton_action %}\n            <div class="sw-cms-el-buy-box__actions">\n                <a\n                    href="#"\n                    class="sw-cms-el-buy-box__buy-action"\n                >\n                    {{ $tc(\'sw-cms.elements.buyBox.component.label.actionBuy\') }}\n                </a>\n            </div>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_element_buybox_skeleton_product_number %}\n        <div class="sw-cms-el-buy-box__placeholder"></div>\n        {% endblock %}\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,mixins:[t.getByName("cms-element"),t.getByName("placeholder")],computed:{product(){return this.currentDemoEntity?this.currentDemoEntity:this.element.data?.product?this.element?.data?.product??null:{name:"Lorem Ipsum dolor",productNumber:"XXXXXX",minPurchase:1,deliveryTime:{name:"1-3 days"},price:[{gross:0}]}},pageType(){return this.cmsPageState?.currentPage?.type??""},isProductPageType(){return"product_detail"===this.pageType},alignStyle(){return this.element.config?.alignment?.value?`justify-content: ${this.element.config.alignment.value};`:null},currentDemoEntity(){return"product"===this.cmsPageState.currentMappingEntity?this.cmsPageState.currentDemoEntity:null},currencyFilter(){return Shopware.Filter.getByName("currency")}},watch:{pageType(n){this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"locked","product_detail"===n):this.element.locked="product_detail"===n}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("buy-box"),this.initElementData("buy-box"),this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"locked",this.isProductPageType):this.element.locked=this.isProductPageType}}}},913724:function(n,e,s){var t=s(619601);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),(0,s(745346).Z)("37790fb9",t,!0,{})}}]);