(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[22730],{708234:function(){},422730:function(n,i,e){"use strict";e.r(i),e.d(i,{default:function(){return t}}),e(539334);var t={template:'\n{% block sw_product_modal_delivery %}\n<sw-modal\n    :title="$tc(\'sw-product.variations.deliveryModal.modalHeadline\')"\n    class="sw-product-modal-delivery"\n    :is-loading="isLoading"\n    @modal-close="$emit(\'modal-close\')"\n>\n\n    \n    {% block sw_product_modal_delivery_sidebar %}\n    <div class="sw-product-modal-delivery__sidebar">\n        \n        {% block sw_product_modal_delivery_sidebar_tabs %}\n        <sw-tabs\n            is-vertical\n            position-identifier="sw-product-modal-delivery"\n        >\n            \n            {% block sw_product_modal_delivery_sidebar_tabs_items %}\n            <sw-tabs-item\n                :active="activeTab == \'order\'"\n                @click="activeTab = \'order\'"\n            >\n                {{ $tc(\'sw-product.variations.deliveryModal.order\') }}\n            </sw-tabs-item>\n            <sw-tabs-item\n                :active="activeTab == \'media\'"\n                @click="activeTab = \'media\'"\n            >\n                {{ $tc(\'sw-product.variations.deliveryModal.media\') }}\n            </sw-tabs-item>\n            <sw-tabs-item\n                :active="activeTab == \'listing\'"\n                @click="activeTab = \'listing\'"\n            >\n                {{ $tc(\'sw-product.variations.deliveryModal.listing\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </sw-tabs>\n        {% endblock %}\n\n        \n        {% block sw_product_modal_delivery_sidebar_descriptions %}\n        <p v-if="activeTab == \'order\'">\n            {{ $tc(\'sw-product.variations.deliveryModal.orderExplanation\') }}\n        </p>\n        <p v-if="activeTab == \'media\'">\n            {{ $tc(\'sw-product.variations.deliveryModal.mediaExplanation\') }}\n        </p>\n        <p v-if="activeTab == \'listing\'">\n            {{ $tc(\'sw-product.variations.deliveryModal.listingExplanation\') }}\n        </p>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_modal_delivery_main %}\n    <div class="sw-product-modal-delivery__main">\n        \n        {% block sw_product_modal_delivery_main_order %}\n        <sw-product-variants-delivery-order\n            v-if="activeTab == \'order\'"\n            :product="product"\n            :selected-groups="selectedGroups"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_modal_delivery_media %}\n        <sw-product-variants-delivery-media\n            v-if="activeTab == \'media\'"\n            :product="product"\n            :selected-groups="selectedGroups"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_modal_delivery_listing %}\n        <sw-product-variants-delivery-listing\n            v-if="activeTab == \'listing\'"\n            :product="product"\n            :selected-groups="selectedGroups"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_modal_delivery_footer %}\n    <template #modal-footer>\n        \n        {% block sw_product_modal_delivery_footer_button_cancel %}\n        <sw-button\n            size="small"\n            @click="cancelDeliveryConfiguration"\n        >\n            {{ $tc(\'sw-product.variations.deliveryModal.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_product_modal_delivery_footer_button_save %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'product.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-product-modal-delivery__save-button"\n            :disabled="!acl.can(\'product.editor\')"\n            variant="primary"\n            size="small"\n            @click="saveDeliveryConfiguration"\n        >\n            {{ $tc(\'sw-product.variations.deliveryModal.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data(){return{activeTab:"order",isLoading:!1}},computed:{productRepository(){return this.repositoryFactory.create("product")}},created(){this.createdComponent()},methods:{createdComponent(){this.product.variantListingConfig||this.$set(this.product,"variantListingConfig",{displayParent:null,configuratorGroupConfig:[],mainVariantId:null})},saveDeliveryConfiguration(){this.isLoading=!0;let n=this.handleExpandedListing(this.product);this.productRepository.save(n).then(()=>{this.$emit("configuration-close")})},cancelDeliveryConfiguration(){this.$emit("configuration-close")},handleExpandedListing(n){if(n&&"expanded"===n.listingMode){let i=n.variantListingConfig.configuratorGroupConfig??[];n.variantListingConfig.mainVariantId=null,n.variantListingConfig.displayParent=null,n.variantListingConfig.configuratorGroupConfig=i}return delete n.listingMode,n}}}},539334:function(n,i,e){var t=e(708234);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),e(745346).Z("4b14fbbc",t,!0,{})}}]);