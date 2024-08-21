(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[97429],{620580:function(){},397429:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n}}),r(882394);var n={template:'\n{% block sw_product_variants_delivery_order %}\n<div class="sw-product-variants-delivery-order">\n    \n    {% block sw_product_variants_delivery_order_groups %}\n    <div class="sw-product-variants-delivery-order__groups">\n        \n        {% block sw_product_variants_delivery_order_groups_sw_tree %}\n        <sw-tree\n            v-if="orderObjects.length"\n            :items="orderObjects"\n            :searchable="false"\n            :disable-context-menu="true"\n            bind-items-to-folder\n            @drag-end="orderChanged"\n        >\n\n            <template\n                #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute }"\n            >\n                <sw-tree-item\n                    v-for="item in treeItems"\n                    :key="item.id"\n                    :item="item"\n                    :disable-context-menu="true"\n                    :sortable="true"\n                />\n            </template>\n        </sw-tree>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_delivery_order_loader %}\n        <sw-loader v-else />\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data(){return{groups:[],orderObjects:[]}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.createOrderObjects()},createOrderObjects(){let t=[],e=[...this.selectedGroups];this.product.variantListingConfig.configuratorGroupConfig&&this.product.variantListingConfig.configuratorGroupConfig.length>0&&(t=this.product.variantListingConfig.configuratorGroupConfig.reduce((t,r)=>{let n=e.find(t=>t.id===r.id);return n&&(t.push(n),e.splice(e.indexOf(n),1)),t},[]));let r=(t=[...t,...e]).map((e,r)=>{let n=this.getOptionsForGroup(e.id);return{id:e.id,name:e.translated.name,childCount:n.length,parentId:null,afterId:r>0?t[r-1].id:null,storeObject:e}}),n=r.reduce((t,e)=>{let r=this.getOptionsForGroup(e.id);return[...t,...r.sort((t,e)=>t.position-e.position).map((t,e)=>{let n=t.option,o=null;return e>0&&(o=r[e-1].option.id),{id:n.id,name:n.translated.name,childCount:0,parentId:n.groupId,afterId:o,storeObject:t}})]},[]);this.orderObjects=[...r,...n]},getOptionsForGroup(t){return this.product.configuratorSettings.filter(e=>!e.isDeleted&&e.option.groupId===t)},orderChanged(){let t=this.orderObjects.filter(t=>null===t.parentId);this.product.variantListingConfig.configuratorGroupConfig||(this.product.variantListingConfig.configuratorGroupConfig=[]);let e=[],r=t.find(t=>null===t.afterId);t.forEach(()=>{void 0!==r&&(e.push(r.id),r=t.find(t=>t.afterId===r.id))});let n=[],o=this.product.variantListingConfig.configuratorGroupConfig??[];o.length?e.forEach(t=>{let e=o.find(e=>e.id===t);e?n.push(e):n.push({id:t,expressionForListings:!1,representation:"box"})}):e.forEach(t=>{n.push({id:t,expressionForListings:!1,representation:"box"})}),this.product.variantListingConfig.configuratorGroupConfig=n;let i=this.orderObjects.filter(t=>t.parentId);t.forEach(t=>{let e=i.filter(e=>e.parentId===t.id),r=e.find(t=>null===t.afterId);e.forEach((t,n)=>{void 0!==r&&(r.storeObject.position=n+1,r=e.find(t=>t.afterId===r.id))})})}}}},882394:function(t,e,r){var n=r(620580);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,r(745346).Z)("eaa55138",n,!0,{})}}]);