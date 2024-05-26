(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[96095],{849021:function(){},96095:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return c}}),t(451967);let{Application:n}=Shopware,r=Shopware.Utils;var c={template:'\n{% block sw_product_variants_price_field %}\n<div\n    class="sw-product-variants-price-field"\n    :class="{\'is--readonly\': readonly}"\n>\n    \n    {% block sw_product_variants_price_field_gross %}\n    <div class="sw-field">\n        <sw-number-field\n            v-model:value="price.gross"\n            size="small"\n            class="sw-product-variants-price-field__input"\n            :disabled="readonly"\n            :digits="currency.decimalPrecision"\n            v-bind="$attrs"\n            @update:value="onPriceGrossChange"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_price_field_lock_button %}\n    <button\n        class="sw-product-variants-price-field__lock"\n        :class="{\'is--locked\': price.linked}"\n        @click="onLockSwitch"\n    >\n        <sw-icon\n            v-if="price.linked"\n            name="regular-lock"\n            size="16"\n        />\n        <sw-icon\n            v-else\n            name="regular-lock-open"\n            size="16"\n        />\n    </button>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_price_field_net %}\n    <div class="sw-field">\n        <sw-number-field\n            v-model:value="price.net"\n            size="small"\n            class="sw-field sw-product-variants-price-field__input"\n            :disabled="readonly"\n            :digits="currency.decimalPrecision"\n            v-bind="$attrs"\n            @update:value="onPriceNetChange"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{price:{type:Object,required:!0},taxRate:{type:String,required:!1,default:null},currency:{type:Object,required:!0},readonly:{type:Boolean,required:!1,default:!1}},computed:{calculatePriceApiService(){return n.getContainer("factory").apiService.getByName("calculate-price")}},watch:{"price.linked":function(e){!0===e&&(this.price.net=this.convertGrossToNet(this.price.gross))},"taxRate.taxRate":function(){!0===this.price.linked&&(this.price.net=this.convertGrossToNet(this.price.gross))}},methods:{onLockSwitch(){return!this.readonly&&(this.price.linked=!this.price.linked,this.$emit("price-lock-change",this.price.linked),this.$emit("change",this.price),!0)},onPriceGrossChange(e){e&&"number"==typeof e&&this.price.linked&&(this.$emit("price-calculate",!0),this.onPriceGrossChangeDebounce(Number(this.price.gross)))},onPriceGrossChangeDebounce:r.debounce(function(e){this.$emit("price-gross-change",e),this.$emit("change",this.price),this.convertGrossToNet(e)},500),onPriceNetChange(e){e&&"number"==typeof e&&this.price.linked&&(this.$emit("price-calculate",!0),this.onPriceNetChangeDebounce(Number(this.price.net)))},onPriceNetChangeDebounce:r.debounce(function(e){this.$emit("price-net-change",e),this.$emit("change",this.price),this.convertNetToGross(e)},500),convertNetToGross(e){return!!e&&"number"==typeof e&&(this.$emit("price-calculate",!0),this.requestTaxValue(e,"net").then(e=>{this.price.gross=Number(this.price.net)+e}),!0)},convertGrossToNet(e){return!!e&&"number"==typeof e&&(this.$emit("price-calculate",!0),this.requestTaxValue(e,"gross").then(e=>{this.price.net=Number(this.price.gross)-e}),!0)},requestTaxValue(e,i){return this.$emit("price-calculate",!0),new Promise(t=>{e&&"number"==typeof e&&this.price[i]&&this.taxRate&&i&&this.calculatePriceApiService.calculatePrice({taxId:this.taxRate,price:this.price[i],output:i,currencyId:this.currency.id}).then(({data:e})=>{t(e.calculatedTaxes[0].tax),this.$emit("price-calculate",!1)})})}}}},451967:function(e,i,t){var n=t(849021);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),t(745346).Z("d0073718",n,!0,{})}}]);