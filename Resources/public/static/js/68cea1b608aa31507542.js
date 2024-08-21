(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74675],{81656:function(){},74675:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}}),l(496089);let{Mixin:n}=Shopware;var i={template:'\n{% block sw_sales_channel_defaults_select %}\n<sw-container\n    class="sw-sales-channel-defaults-select"\n    gap="0px 30px"\n    columns="1fr 200px"\n>\n    <template v-if="salesChannel">\n        <sw-entity-multi-select\n            :label-property="labelProperty"\n            :disabled="disabled"\n            :class="multiSelectClass"\n            :label="propertyLabel"\n            :help-text="helpText"\n            :entity-collection="propertyCollection"\n            :criteria="criteria"\n            @update:entity-collection="updateCollection"\n        >\n            <template\n                v-if="shouldShowActiveState"\n                #result-label-preview="{ item }"\n            >\n                <sw-icon\n                    class="sw-sales-channel-defaults-select__active-icon"\n                    size="6"\n                    :color="getActiveIconColor(item)"\n                    name="solid-circle"\n                />\n            </template>\n        </sw-entity-multi-select>\n\n        <sw-entity-single-select\n            :label-property="labelProperty"\n            :disabled="disabled"\n            :class="singleSelectClass"\n            :label="defaultPropertyLabel"\n            :help-text="helpText"\n            required\n            show-clearable-button\n            :entity="propertyEntityName"\n            :value="defaultId"\n            :error="defaultsValueError"\n            :criteria="criteria"\n            :selection-disabling-method="isDisabledItem"\n            :disabled-selection-tooltip="{ message: disabledTooltipMessage }"\n            @update:value="updateDefault"\n        />\n    </template>\n</sw-container>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],mixins:[n.getByName("notification")],props:{salesChannel:{type:Object,required:!1,default:null},propertyName:{type:String,required:!0},propertyLabel:{type:String,required:!0},defaultPropertyName:{type:String,required:!0},defaultPropertyLabel:{type:String,required:!0},propertyNameInDomain:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},criteria:{type:Object,required:!1,default:void 0},disabledTooltipMessage:{type:String,required:!1,default:""},shouldShowActiveState:{type:Boolean,required:!1,default:!1}},computed:{propertyCollection:{get(){return this.salesChannel?this.salesChannel[this.propertyName]:[]},set(e){this.salesChannel&&(this.salesChannel[this.propertyName]=e)}},defaultId:{get(){return this.salesChannel?this.salesChannel[this.defaultPropertyName]:null},set(e){this.salesChannel&&(this.salesChannel[this.defaultPropertyName]=e)}},propertyEntityName(){return this.propertyCollection?this.propertyCollection.entity:null},propertyNameKebabCase(){return Shopware.Utils.string.kebabCase(this.propertyName)},multiSelectClass(){return`sw-sales-channel-detail__select-${this.propertyNameKebabCase}`},singleSelectClass(){return`sw-sales-channel-detail__assign-${this.propertyNameKebabCase}`},defaultsValueError(){return Shopware.State.getters["error/getApiError"](this.salesChannel,this.defaultPropertyName)},labelProperty(){return"payment_method"===this.propertyEntityName?"distinguishableName":"name"}},methods:{updateCollection(e){if(e.length>this.propertyCollection.length){this.addItem(e);return}this.removeItem(e)},getNotInCollection(e,t){return e.find(e=>!t.some(t=>t.id===e.id))||null},addItem(e){let t=this.getNotInCollection(e,this.propertyCollection);this.propertyCollection=e,1===this.propertyCollection.length&&(this.defaultId=t.id)},removeItem(e){let t=this.getNotInCollection(this.propertyCollection,e);if(null!==t){if(this.propertyNameInDomain){let e=this.getDomainUsingValue(t);if(null!==e){this.createNotificationError({message:this.$tc("sw-sales-channel.sw-sales-channel-defaults-select.messageError",0,{url:e.url})});return}}this.propertyCollection=e,this.defaultId===t.id&&(this.defaultId=null)}},getDomainUsingValue(e){return this.salesChannel.domains.find(t=>t[this.propertyNameInDomain]===e.id)||null},updateDefault(e,t){this.defaultId=e,e&&!this.propertyCollection.has(e)&&this.propertyCollection.add(t)},isDisabledItem(e){return!1===e.active},getActiveIconColor(e){return this.isDisabledItem(e)?"#d1d9e0":"#37d046"}}}},496089:function(e,t,l){var n=l(81656);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,l(745346).Z)("29dc7306",n,!0,{})}}]);