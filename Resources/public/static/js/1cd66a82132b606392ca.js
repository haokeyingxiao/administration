"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77145],{177145:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});let{EntityCollection:n,Criteria:s}=Shopware.Data,{mapState:r}=Shopware.Component.getComponentHelper();var l={template:'\n{% block sw_entity_multi_select_base_selection_list_label_inner %}\n<slot\n    name="selection-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty }"\n>\n    {{ item.salesChannel.translated.name }}\n</slot>\n{% endblock %}\n\n\n{% block sw_entity_multi_select_base_results_list_result_label %}\n<slot\n    name="result-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty: \'id\' }"\n>\n    {{ item.translated.name }}\n</slot>\n{% endblock %}\n',emits:["item-add"],props:{criteria:{type:Object,required:!1,default(e){let t=new s(1,e.resultLimit);return t.addSorting(s.sort("name","ASC")),t}}},data(){return{defaultVisibility:30}},computed:{...r("swProductDetail",["product"]),repository(){return this.repositoryFactory.create("sales_channel")},associationRepository(){return this.repositoryFactory.create("product_visibility")}},methods:{isSelected(e){return this.currentCollection.some(t=>t.salesChannelId===e.id)},addItem(e){if(this.isSelected(e)){let t=this.currentCollection.find(t=>t.salesChannelId===e.id);this.remove(t);return}let t=this.associationRepository.create(this.entityCollection.context);t.productId=this.product.id,t.productVersionId=this.product.versionId,t.salesChannelId=e.id,t.visibility=this.defaultVisibility,t.salesChannel=e,this.$emit("item-add",e);let i=n.fromCollection(this.currentCollection);i.add(t),this.emitChanges(i),this.onSelectExpanded()}}}}}]);