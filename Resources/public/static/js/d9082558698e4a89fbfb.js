"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[41257],{141257:function(o,t,n){n.r(t),n.d(t,{default:function(){return s}});var s=Shopware.Component.wrapComponentConfig({template:'<div\n    class="sw-cms-block-app-renderer"\n    :style="blockStyle"\n>\n    <slot\n        v-for="slot in slots"\n        :name="slot.slot"\n    ></slot>\n</div>\n',compatConfig:Shopware.compatConfig,props:{block:{type:Object,required:!1,default(){return{}}}},computed:{slots(){return this.block.slots??[]},blockStyle(){return{display:"grid",grid:this.block?.customFields?.slotLayout?.grid??"auto / auto"}}}})}}]);