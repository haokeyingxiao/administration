(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[68889],{46824:function(){},668889:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return n}}),t(7302);var n={template:'\n{% block sw_condition_base_field_condition %}\n<sw-arrow-field\n    v-if="options.length > 1"\n    class="sw-product-stream-field-select"\n    :class="{ \'has--error\': hasError }"\n    :primary="arrowPrimaryColor"\n    secondary="#ffffff"\n>\n    <sw-single-select\n        size="medium"\n        :options="options"\n        :value="field"\n        :placeholder="$tc(\'sw-product-stream.filter.placeholderFieldSelect\')"\n        :disabled="disabled"\n        show-clearable-button\n        @update:value="changeField"\n    />\n</sw-arrow-field>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["conditionDataProviderService","productCustomFields"],emits:["field-changed"],props:{definition:{type:Object,required:!0},field:{type:String,required:!1,default:null},index:{type:Number,required:!0},disabled:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1}},computed:{options(){let e=Object.keys(this.definition.properties).map(e=>this.conditionDataProviderService.isPropertyInAllowList(this.definition.entity,e)?"id"===e?{label:this.getPropertyTranslation(this.definition.entity),value:e}:{label:this.getPropertyTranslation(e),value:e}:null).filter(e=>null!==e);return"product"===this.definition.entity&&(Object.values(this.conditionDataProviderService.allowedJsonAccessors).forEach(i=>{e.push({label:this.getPropertyTranslation(i.trans),value:i.value})}),Object.keys(this.productCustomFields).forEach(i=>{e.push(this.productCustomFields[i])})),e},arrowPrimaryColor(){return this.hasError?"#de294c":"#758ca3"}},watch:{"definition.entity":{immediate:!0,handler(e){e&&1===this.options.length&&!this.field&&this.changeField(this.options[0].value)}},field:{handler(e){this.definition.entity&&1===this.options.length&&!e&&this.changeField(this.options[0].value)}}},methods:{changeField(e){this.$emit("field-changed",{field:e,index:this.index})},getPropertyTranslation(e){let i=`sw-product-stream.filter.values.${e}`,t=this.$tc(i);return t===i?e:t}}}},7302:function(e,i,t){var n=t(46824);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,t(745346).Z)("9054d626",n,!0,{})}}]);