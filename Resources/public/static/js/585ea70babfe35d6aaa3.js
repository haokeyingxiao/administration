(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[1307],{62798:function(){},501307:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return d}});let{Context:i}=Shopware,{Criteria:n}=Shopware.Data;a(565290);let{Mixin:l,Context:o,Utils:s}=Shopware,{Criteria:r}=Shopware.Data;var d={template:'\n{% block sw_settings_rule_detail_assignments %}\n<div class="sw-settings-rule-detail-assignments">\n    \n    {% block sw_settings_rule_detail_assignments_entity_cards %}\n    <sw-card\n        v-for="entity in associationEntities"\n        :key="entity.id"\n        class="sw-settings-rule-detail-assignments__card"\n        position-identifier="sw-settings-rule-detail-assignments-entity"\n        :class="`sw-settings-rule-detail-assignments__card-${entity.id}`"\n        :title="$tc(entity.label)"\n    >\n        <template #toolbar>\n            \n            {% block sw_settings_rule_detail_assignments_toolbar %}\n            <sw-card-filter\n                placeholder=""\n                @sw-card-filter-term-change="onFilterEntity(entity, $event)"\n            >\n                <template #filter>\n                    \n                    {% block sw_settings_rule_detail_assignments_add_button %}\n                    <sw-button\n                        v-if="entity.allowAdd"\n                        v-tooltip="getTooltipConfig(entity)"\n                        :disabled="disableAdd(entity) || !acl.can(\'rule.editor\')"\n                        variant="ghost"\n                        size="small"\n                        class="sw-settings-rule-detail-assignments__add-button"\n                        @click="onOpenAddModal(entity)"\n                    >\n                        {{ $tc(\'sw-settings-rule.detail.buttonAddAssignment\') }}\n                    </sw-button>\n                    {% endblock %}\n                </template>\n            </sw-card-filter>\n            {% endblock %}\n        </template>\n\n        <template #grid>\n            \n            {% block sw_settings_rule_detail_assignments_entity_listing %}\n            <sw-settings-rule-assignment-listing\n                v-if="entity.loadedData && entity.loadedData.length > 0"\n                class="sw-settings-rule-detail-assignments__entity-listing"\n                :class="`sw-settings-rule-detail-assignments__entity-listing-${entity.id}`"\n                :is-loading="isLoading"\n                :detail-route="entity.detailRoute"\n                :items="entity.loadedData"\n                :repository="entity.repository"\n                :local-mode="false"\n                :criteria-limit="5"\n                :allow-delete="allowDeletion(entity) && acl.can(\'rule.editor\')"\n                :allow-inline-edit="false"\n                :show-settings="false"\n                :show-selection="allowDeletion(entity) && acl.can(\'rule.editor\')"\n                :allow-column-edit="false"\n                :steps="associationSteps"\n                :columns="entity.gridColumns"\n                :full-page="false"\n                @delete-items="(event) => onDeleteItems(entity, event)"\n            >\n                <template #link-column="{ item, column, renderColumn }">\n                    <router-link\n                        v-if="column.routerLink"\n                        :to="getRouterLink(entity, item)"\n                    >\n                        <sw-product-variant-info\n                            v-if="item.variation"\n                            :variations="item.variation"\n                        >\n                            {{ renderColumn(item, column) }}\n                        </sw-product-variant-info>\n                        <span v-if="!item.variation">\n                            {{ renderColumn(item, column) }}\n                        </span>\n                    </router-link>\n                    <span v-else>\n                        <sw-product-variant-info\n                            v-if="item.variation"\n                            :variations="item.variation"\n                        >\n                            {{ renderColumn(item, column) }}\n                        </sw-product-variant-info>\n                        <span v-else>\n                            {{ renderColumn(item, column) }}\n                        </span>\n                    </span>\n                </template>\n                <template #actions="{ item }">\n                    \n                    {% block sw_settings_rule_detail_assignments_entity_listing_actions %}\n                    \n                    {% block sw_settings_rule_detail_assignments_entity_listing_view_action %}\n                    <sw-context-menu-item :router-link="getRouterLink(entity, item)">\n                        {{ $tc(\'global.default.view\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                    \n                    {% block sw_settings_rule_detail_assignments_entity_listing_delete_action %}\n                    <sw-context-menu-item\n                        v-if="entity.deleteContext && acl.can(\'rule.editor\')"\n                        variant="danger"\n                        @click="onOpenDeleteModal(entity, item)"\n                    >\n                        {{ $tc(\'global.default.remove\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                    {% endblock %}\n                </template>\n\n                <template #bulk-modal-delete-confirm-text="{ selectionCount }">\n                    {{ $tc(\'sw-settings-rule.detail.textModalBulkDelete\', selectionCount, { count: selectionCount }) }}\n                </template>\n\n                <template #bulk-modal-delete-items="{ isBulkLoading, deleteItems }">\n                    <sw-button\n                        variant="danger"\n                        size="small"\n                        :is-loading="isBulkLoading"\n                        @click="deleteItems"\n                    >\n                        {{ $tc(\'global.default.remove\') }}\n                    </sw-button>\n                </template>\n            </sw-settings-rule-assignment-listing>\n\n            \n            {% block sw_settings_rule_detail_assignments_empty_state %}\n            <sw-empty-state\n                v-else\n                class="sw-settings-rule-detail-assignments__entity-empty-state"\n                :class="`sw-settings-rule-detail-assignments__entity-empty-state-${entity.id}`"\n                :title="$tc(\'sw-settings-rule.detail.hasNoAssociations\')"\n                :absolute="false"\n                :show-description="false"\n            >\n                <template #icon>\n                    <img\n                        :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                        :alt="$tc(\'sw-settings-rule.detail.hasNoAssociations\')"\n                    >\n                </template>\n            </sw-empty-state>\n            {% endblock %}\n            {% endblock %}\n        </template>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_detail_assignments_delete_modal %}\n    <sw-modal\n        v-if="deleteModal"\n        class="sw-settings-rule-detail-assignments__delete-modal"\n        :title="$tc(\'sw-settings-rule.detail.titleModalDelete\')"\n        variant="small"\n        @modal-close="onCloseDeleteModal"\n    >\n\n        \n        {% block sw_settings_rule_detail_assignments_delete_modal_text %}\n        <p class="sw-settings-rule-detail-assignments__delete-text">\n            {{ $tc(\'sw-settings-rule.detail.textModalDelete\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_settings_rule_detail_assignments_delete_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_settings_rule_detail_assignments_delete_modal_cancel %}\n            <sw-button\n                class="sw-settings-rule-detail-assignments__delete-modal-cancel-button"\n                size="small"\n                @click="onCloseDeleteModal"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_detail_assignments_delete_modal_confirm %}\n            \n            {% block sw_settings_rule_detail_assignments_delete_modal_confirm_single %}\n            <sw-button\n                class="sw-settings-rule-detail-assignments__delete-modal-delete-button"\n                size="small"\n                variant="danger"\n                @click="onDelete"\n            >\n                {{ $tc(\'global.default.remove\') }}\n            </sw-button>\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_detail_assignments_add_modal %}\n    <sw-settings-rule-add-assignment-modal\n        v-if="addModal"\n        :rule="rule"\n        :entity-context="addEntityContext"\n        @entities-saved="onEntitiesSaved"\n        @close-add-modal="onCloseAddModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","ruleConditionDataProviderService","feature","acl"],mixins:[l.getByName("notification")],props:{rule:{type:Object,required:!0},conditions:{type:Array,required:!1,default:null},detailPageLoading:{type:Boolean,required:!1,default:!1}},data(){return{associationLimit:5,isLoading:!1,ruleAssociationsLoaded:!1,products:null,shippingMethods:null,paymentMethods:null,promotions:null,associationSteps:[5,10],associationEntities:null,deleteModal:!1,deleteEntity:null,deleteItem:null,addModal:!1,addEntityContext:null}},computed:{getRuleAssignmentConfiguration(){return(function(t,e){let a={product:{id:"product",associationName:"productPrices",notAssignedDataTotal:0,allowAdd:!1,entityName:"product",label:"sw-settings-rule.detail.associations.products",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("prices.rule.id",t)),a.addAssociation("options.group"),a},api:()=>{let t={...i.api};return t.inheritance=!0,t},detailRoute:"sw.product.detail.prices",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.product.detail.prices",allowEdit:!1}]},shipping_method_availability_rule:{id:"shipping_method_availability_rule",associationName:"shippingMethods",notAssignedDataTotal:0,allowAdd:!0,entityName:"shipping_method",label:"sw-settings-rule.detail.associations.shippingMethodAvailabilityRule",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("availabilityRuleId",t)),a},detailRoute:"sw.settings.shipping.detail",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.settings.shipping.detail",allowEdit:!1}],addContext:{type:"one-to-many",entity:"shipping_method",column:"availabilityRuleId",searchColumn:"name",criteria:()=>{let e=new n(1,25);return e.addFilter(n.not("AND",[n.equals("availabilityRuleId",t)])),e},gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,allowEdit:!1},{property:"description",label:"Description",rawData:!0,sortable:!0,allowEdit:!1},{property:"taxType",label:"Tax calculation",rawData:!0,sortable:!0,allowEdit:!1},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1}]}},shipping_method_prices:{id:"shipping_method_prices",associationName:"shippingMethodPrices",notAssignedDataTotal:0,allowAdd:!1,entityName:"shipping_method",label:"sw-settings-rule.detail.associations.shippingMethodPrices",criteria:()=>{let a=new n(1,e);return a.addFilter(n.multi("OR",[n.equals("prices.ruleId",t),n.equals("prices.calculationRuleId",t)])),a},detailRoute:"sw.settings.shipping.detail",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.settings.shipping.detail",allowEdit:!1}]},tax_provider:{id:"tax_provider",notAssignedDataTotal:0,allowAdd:!0,entityName:"tax_provider",label:"sw-settings-rule.detail.associations.taxProviders",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("availabilityRuleId",t)),a},detailRoute:"sw.settings.tax.tax_provider.detail",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.settings.tax.tax_provider.detail"},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1}],addContext:{type:"one-to-many",entity:"tax_provider",column:"availabilityRuleId",searchColumn:"name",criteria:()=>{let e=new n(1,25);return e.addFilter(n.not("AND",[n.equals("availabilityRuleId",t)])),e},gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,allowEdit:!1},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1}]}},payment_method:{id:"payment_method",associationName:"paymentMethods",notAssignedDataTotal:0,allowAdd:!0,entityName:"payment_method",label:"sw-settings-rule.detail.associations.paymentMethods",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("availabilityRuleId",t)),a},detailRoute:"sw.settings.payment.detail",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.settings.payment.detail",allowEdit:!1}],deleteContext:{type:"one-to-many",entity:"payment_method",column:"availabilityRuleId"},addContext:{type:"one-to-many",entity:"payment_method",column:"availabilityRuleId",searchColumn:"name",criteria:()=>{let e=new n(1,25);return e.addFilter(n.not("AND",[n.equals("availabilityRuleId",t)])),e},gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,allowEdit:!1},{property:"extension",label:"Extension",rawData:!0,sortable:!0,allowEdit:!1},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1},{property:"position",label:"Position",rawData:!0,sortable:!0,allowEdit:!1}]}},promotion_order_rule:{id:"promotion_order_rule",associationName:"orderPromotions",notAssignedDataTotal:0,allowAdd:!0,entityName:"promotion",label:"sw-settings-rule.detail.associations.promotionOrderRules",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("orderRules.id",t)),a.addAssociation("orderRules"),a},detailRoute:"sw.promotion.v2.detail.conditions",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.promotion.v2.detail.conditions"}],deleteContext:{type:"many-to-many",entity:"promotion",column:"orderRules"},addContext:{type:"many-to-many",entity:"promotion_order_rule",column:"promotionId",searchColumn:"name",association:"orderRules",criteria:()=>{let e=new n(1,25);return e.addFilter(n.not("AND",[n.equals("orderRules.id",t)])),e},gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,allowEdit:!1},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1},{property:"validFrom",label:"Valid from",rawData:!0,sortable:!0,allowEdit:!1},{property:"validTo",label:"Valid to",rawData:!0,sortable:!0,allowEdit:!1}]}},promotion_customer_rule:{id:"promotion_customer_rule",associationName:"personaPromotions",notAssignedDataTotal:0,allowAdd:!0,entityName:"promotion",label:"sw-settings-rule.detail.associations.promotionCustomerRules",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("personaRules.id",t)),a.addAssociation("personaRules"),a},detailRoute:"sw.promotion.v2.detail.conditions",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.promotion.v2.detail.conditions"}],deleteContext:{type:"many-to-many",entity:"promotion",column:"personaRules"},addContext:{type:"many-to-many",entity:"promotion_persona_rule",column:"promotionId",searchColumn:"name",association:"personaRules",criteria:()=>{let e=new n(1,25);return e.addFilter(n.not("AND",[n.equals("personaRules.id",t)])),e},gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,allowEdit:!1},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1},{property:"validFrom",label:"Valid from",rawData:!0,sortable:!0,allowEdit:!1},{property:"validTo",label:"Valid to",rawData:!0,sortable:!0,allowEdit:!1}]}},promotion_cart_rule:{id:"promotion_cart_rule",associationName:"cartPromotions",notAssignedDataTotal:0,allowAdd:!0,entityName:"promotion",label:"sw-settings-rule.detail.associations.promotionCartRules",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("cartRules.id",t)),a.addAssociation("cartRules"),a},detailRoute:"sw.promotion.v2.detail.conditions",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.promotion.v2.detail.conditions"}],deleteContext:{type:"many-to-many",entity:"promotion",column:"cartRules"},addContext:{type:"many-to-many",entity:"promotion_cart_rule",column:"promotionId",searchColumn:"name",association:"cartRules",criteria:()=>{let e=new n(1,25);return e.addFilter(n.not("AND",[n.equals("cartRules.id",t)])),e},gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,allowEdit:!1},{property:"active",label:"Active",rawData:!0,sortable:!0,allowEdit:!1},{property:"validFrom",label:"Valid from",rawData:!0,sortable:!0,allowEdit:!1},{property:"validTo",label:"Valid to",rawData:!0,sortable:!0,allowEdit:!1}]}},promotion_discount_rule:{id:"promotion_discount_rule",associationName:"promotionDiscounts",notAssignedDataTotal:0,allowAdd:!1,entityName:"promotion",label:"sw-settings-rule.detail.associations.promotionDiscountRules",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("discounts.discountRules.id",t)),a},detailRoute:"sw.promotion.v2.detail.conditions",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.promotion.v2.detail.conditions"}]},promotion_group_rule:{id:"promotion_group_rule",associationName:"promotionSetGroups",notAssignedDataTotal:0,allowAdd:!1,entityName:"promotion",label:"sw-settings-rule.detail.associations.promotionGroupRules",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("setgroups.setGroupRules.id",t)),a},detailRoute:"sw.promotion.v2.detail.conditions",gridColumns:[{property:"name",label:"Name",rawData:!0,sortable:!0,routerLink:"sw.promotion.v2.detail.conditions"}]},flow:{id:"flow",notAssignedDataTotal:0,allowAdd:!1,entityName:"flow",label:"sw-settings-rule.detail.associations.flows",criteria:()=>{let a=new n(1,e);return a.addFilter(n.equals("sequences.rule.id",t)),a},detailRoute:"sw.flow.detail",gridColumns:[{property:"name",label:"Flow",rawData:!0,sortable:!0,width:"50%",routerLink:"sw.flow.detail"},{property:"eventName",label:"Trigger",rawData:!0,sortable:!0,width:"50%",routerLink:!1}]}};return{getConfiguration:function(){return a}}})(this.rule.id,this.associationLimit).getConfiguration()},associationEntitiesConfig(){return Object.values(this.getRuleAssignmentConfiguration)},assetFilter(){return Shopware.Filter.getByName("asset")}},created(){this.createdComponent()},methods:{createdComponent(){this.prepareAssociationEntitiesList(),this.loadAssociationData()},disableAdd(t){let e=t.associationName??null;return!!this.ruleConditionDataProviderService.isRuleRestricted(this.conditions,e)||0===t.notAssignedDataTotal},getTooltipConfig(t){let e=t.associationName??null;return this.ruleConditionDataProviderService.getRestrictedRuleTooltipConfig(this.conditions,e)},allowDeletion(t){return!!t.deleteContext},prepareAssociationEntitiesList(){this.associationEntities=this.associationEntitiesConfig.map(t=>({repository:this.repositoryFactory.create(t.entityName),loadedData:null,...t}))},onOpenDeleteModal(t,e){this.deleteModal=!0,this.deleteEntity=t,this.deleteItem=e},onCloseDeleteModal(){this.deleteModal=!1,this.deleteContext=null,this.deleteItem=null},onOpenAddModal(t){this.addModal=!0,this.addEntityContext=t},onCloseAddModal(){this.addModal=!1,this.addEntityContext=null},onEntitiesSaved(){return this.addModal=!1,this.refreshAssignmentData(this.addEntityContext)},async onDeleteItems(t,e){return await Promise.all(Object.values(e).map(async e=>{this.deleteEntity=t,this.deleteItem=e,await this.doDeleteItem()})),this.refreshAssignmentData(t).then(()=>{this.onCloseDeleteModal()})},onDelete(){return this.doDeleteItem().then(()=>this.refreshAssignmentData(this.deleteEntity).then(()=>{this.onCloseDeleteModal()}))},doDeleteItem(){let t=this.deleteEntity.api?this.deleteEntity.api():o.api,e=this.repositoryFactory.create(this.deleteItem.getEntityName());return"one-to-many"===this.deleteEntity.deleteContext.type?s.object.set(this.deleteItem,this.deleteEntity.deleteContext.column,null):s.object.get(this.deleteItem,this.deleteEntity.deleteContext.column).remove(this.rule.id),this.isLoading=!0,e.save(this.deleteItem,t).finally(()=>{this.isLoading=!1})},async refreshAssignmentData(t){this.isLoading=!0;let e=t.api?t.api():o.api,a=await t.repository.search(t.criteria(),e),i=await this.loadNotAssignedDataTotals(t,e);this.associationEntities.forEach(e=>{t.id===e.id&&(e.loadedData=a,e.notAssignedDataTotal=i)}),this.isLoading=!1},onFilterEntity(t,e){let a=t.api?t.api():o.api,i=t.criteria();return i.setPage(1),i.setTerm(e),this.isLoading=!0,t.repository.search(i,a).then(e=>{t.loadedData=e}).finally(()=>{this.isLoading=!1})},async loadNotAssignedDataTotals(t,e){if(!t.deleteContext&&!t.addContext)return Promise.resolve(t.notAssignedDataTotal);let a=new r(1,1);return a.addFilter(r.not("AND",t.criteria().filters)),this.isLoading=!0,t.repository.search(a,e).then(t=>Promise.resolve(t.total)).finally(()=>{this.isLoading=!1})},getRouterLink(t,e){return{name:t.detailRoute,params:{id:e.id}}},loadAssociationData(){return this.isLoading=!0,Promise.all(this.associationEntities.map(t=>{let e=t.api?t.api():o.api;return t.repository.search(t.criteria(),e).then(async a=>{t.loadedData=a,t.notAssignedDataTotal=await this.loadNotAssignedDataTotals(t,e)})})).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-rule.detail.associationsLoadingError")})}).finally(()=>{this.isLoading=!1})}}}},565290:function(t,e,a){var i=a(62798);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),a(745346).Z("040c1fab",i,!0,{})}}]);