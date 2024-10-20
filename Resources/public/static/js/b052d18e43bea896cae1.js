(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[19386],{473821:function(){},19386:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n(617786);let{Component:i,Mixin:s,Context:a}=Shopware,{mapPropertyErrors:o}=i.getComponentHelper(),{Criteria:r,EntityCollection:l}=Shopware.Data;var d={template:'\n{% block sw_settings_rule_detail %}\n<sw-page class="sw-settings-rule-detail">\n    \n    {% block sw_settings_rule_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="rule">\n            {{ rule.name }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-rule.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_rule_detail_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-settings-rule-detail__cancel-action"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-rule.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        <sw-button-group\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'rule.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-rule-detail__save-button-group"\n            :split-button="true"\n        >\n            \n            {% block sw_settings_rule_detail_actions_save %}\n            <sw-button-process\n                v-model:processSuccess="isSaveSuccessful"\n                v-tooltip.bottom="tooltipSave"\n                class="sw-settings-rule-detail__save-action"\n                :is-loading="isLoading"\n                variant="primary"\n                :disabled="!acl.can(\'rule.editor\')"\n                @click="onSave"\n            >\n                {{ $tc(\'sw-settings-rule.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_detail_actions_save_context_menu %}\n            <sw-context-button>\n                <template #button>\n                    <sw-button\n                        class="sw-settings-rule-detail__button-context-menu"\n                        square\n                        variant="primary"\n                        :disabled="isLoading || !acl.can(\'rule.editor\')"\n                    >\n                        <sw-icon\n                            name="regular-chevron-down-xs"\n                            size="16"\n                        />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_settings_rule_detail_actions_save_context_menu_actions %}\n                \n                {% block sw_settings_rule_detail_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-settings-rule-detail__save-duplicate-action"\n                    :disabled="!acl.can(\'rule.creator\') || !acl.can(\'rule.editor\')"\n                    @click="onDuplicate"\n                >\n                    {{ $tc(\'sw-product.detail.buttonSaveDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="!ruleId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_settings_rule_detail_content %}\n    <template #content>\n        \n        {% block sw_settings_rule_detail_tabs_discard_changes_modal %}\n        <sw-discard-changes-modal\n            v-if="isDisplayingSaveChangesWarning"\n            @keep-editing="onLeaveModalClose(nextRoute)"\n            @discard-changes="onLeaveModalConfirm(nextRoute)"\n        />\n        {% endblock %}\n        <sw-card-view>\n            \n            {% block sw_settings_rule_detail_tabs %}\n            <sw-tabs\n                v-if="rule && !rule.isNew()"\n                class="sw-settings-rule-detail__tabs"\n                position-identifier="sw-settings-rule-detail"\n            >\n                \n                {% block sw_settings_rule_detail_tab_items %}\n                <sw-tabs-item\n                    v-for="tab in tabItems"\n                    :key="tab.route.name"\n                    :class="\'sw-settings-rule-detail__tab-item sw-settings-rule-detail__tab-item-\' + tab.cssClassSuffix"\n                    :route="tab.route"\n                    :title="tab.title"\n                    :has-error="tabHasError(tab)"\n                >\n                    {{ tab.title }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else-if="rule !== null">\n                <router-view\n                    v-slot="{ Component }"\n                    :key="$route.path"\n                >\n                    <component\n                        :is="Component"\n                        :rule="rule"\n                        :conditions="conditions"\n                        :condition-repository="conditionRepository"\n                        :is-loading="isLoading"\n                        :detail-page-loading="isLoading"\n                        :rule-name-error="ruleNameError"\n                        :rule-priority-error="rulePriorityError"\n                        @conditions-changed="conditionsChanged"\n                        @tree-finished-loading="setTreeFinishedLoading"\n                    />\n                </router-view>\n            </template>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["ruleConditionDataProviderService","ruleConditionsConfigApiService","repositoryFactory","acl"],mixins:[s.getByName("notification")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{ruleId:{type:String,required:!1,default:null}},data(){return{rule:null,conditions:null,conditionTree:null,deletedIds:[],isLoading:!1,isSaveSuccessful:!1,conditionTreeFinishedLoading:!1,conditionsTreeContainsUserChanges:!1,nextRoute:null,isDisplayingSaveChangesWarning:!1,forceDiscardChanges:!1,entityCount:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.rule?this.rule.name:""},ruleRepository(){return this.repositoryFactory.create("rule")},ruleCriteria(){let e=new r;return e.addAssociation("tags"),e.addAssociation("flowSequences.flow"),["personaPromotions","orderPromotions","cartPromotions","promotionDiscounts","promotionSetGroups","shippingMethodPriceCalculations","shippingMethodPrices","productPrices","shippingMethods","paymentMethods"].forEach(t=>{e.addAggregation(r.terms(t,"id",null,null,r.count(t,`rule.${t}.id`)))}),e},appScriptConditionRepository(){return this.repositoryFactory.create("app_script_condition")},conditionRepository(){return this.repositoryFactory.create(this.rule.conditions.entity,this.rule.conditions.source)},tooltipSave(){if(!this.acl.can("rule.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("rule.editor"),showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},tabItems(){return[{title:this.$tc("sw-settings-rule.detail.tabGeneral"),route:{name:"sw.settings.rule.detail.base",params:{id:this.$route.params.id}},cssClassSuffix:"general"},{title:this.$tc("sw-settings-rule.detail.tabAssignments"),route:{name:"sw.settings.rule.detail.assignments",params:{id:this.$route.params.id}},cssClassSuffix:"assignments"}]},...o("rule",["name","priority"])},watch:{ruleId:{immediate:!0,handler(){this.isLoading=!0,this.loadConditionData().then(e=>{if(this.ruleConditionDataProviderService.addScriptConditions(e),!this.ruleId){this.isLoading=!1,this.createRule();return}this.loadEntityData(this.ruleId).then(()=>{this.isLoading=!1}),this.setTreeFinishedLoading()})}},conditionTree:{deep:!0,handler(){this.conditionTreeFinishedLoading&&(this.conditionsTreeContainsUserChanges=!0)}},$route(e,t){"sw.settings.rule.detail.base"===e.name&&"sw.settings.rule.detail.assignments"===t.name&&(this.isLoading=!0,this.loadEntityData(this.ruleId).then(()=>{this.isLoading=!1,this.setTreeFinishedLoading()}))}},beforeRouteUpdate(e,t,n){this.unsavedDataLeaveHandler(e,t,n)},beforeRouteLeave(e,t,n){this.unsavedDataLeaveHandler(e,t,n)},methods:{loadConditionData(){let e={...a.api,languageId:Shopware.State.get("session").languageId},t=new r;return Promise.all([this.appScriptConditionRepository.search(t,e),this.ruleConditionsConfigApiService.load()]).then(e=>e[0])},createRule(){this.rule=this.ruleRepository.create(a.api),this.conditions=this.rule.conditions},loadEntityData(e){return this.isLoading=!0,this.conditions=null,this.ruleCriteria.addFilter(r.equals("id",e)),this.ruleRepository.search(this.ruleCriteria).then(e=>(this.entityCount=this.extractEntityCount(e.aggregations),this.rule=e.first(),this.loadConditions()))},extractEntityCount(e){let t={};return Object.keys(e).forEach(n=>{t[n]=e[n].buckets.at(0)[n].count}),t},unsavedDataLeaveHandler(e,t,n){if(this.forceDiscardChanges){this.forceDiscardChanges=!1,n();return}if("sw.settings.rule.detail.assignments"===e.name&&"sw.settings.rule.detail.base"===t.name||"sw.settings.rule.detail.base"===e.name||"sw.settings.rule.create.base"===e.name){this.conditionsTreeContainsUserChanges=!1,this.conditionTreeFinishedLoading=!1,n();return}this.checkUnsavedData({to:e,next:n})},checkUnsavedData({to:e,next:t}){this.conditionsTreeContainsUserChanges||this.ruleRepository.hasChanges(this.rule)?(this.isDisplayingSaveChangesWarning=!0,this.nextRoute=e,t(!1)):t()},setTreeFinishedLoading(){this.$nextTick(()=>{this.conditionsTreeContainsUserChanges=!1,this.conditionTreeFinishedLoading=!0})},onLeaveModalClose(){this.nextRoute=null,this.isDisplayingSaveChangesWarning=!1},async onLeaveModalConfirm(e){this.forceDiscardChanges=!0,this.isDisplayingSaveChangesWarning=!1,"sw.settings.rule.detail.assignments"===e.name&&await this.loadEntityData(this.ruleId).then(()=>{this.isLoading=!1}),this.$nextTick(()=>{this.$router.push({name:e.name,params:e.params})})},loadConditions(e=null){let t={...a.api,inheritance:!0};if(null===e)return this.conditionRepository.search(new r,t).then(e=>this.loadConditions(e));if(e.total<=e.length)return this.conditions=e,Promise.resolve();let n=new r(e.criteria.page+1,e.criteria.limit);return"product"===e.entity&&n.addAssociation("options.group"),this.conditionRepository.search(n,e.context).then(t=>(e.push(...t),e.criteria=t.criteria,e.total=t.total,this.loadConditions(e)))},conditionsChanged({conditions:e,deletedIds:t}){this.conditionTree=e,this.deletedIds=[...this.deletedIds,...t]},validateRuleAwareness(){let e=this.ruleConditionDataProviderService.getAwarenessKeysWithEqualsAnyConfig();if(e.length<=0||!this.entityCount)return!0;let t=!0;return e.forEach(e=>{if(this.entityCount[e]<=0)return;let n=[];this.conditionTree.forEach(e=>{if(n.push(e),e.children){let t=this.getChildrenConditions(e);n.push(...t)}});let i=this.ruleConditionDataProviderService.getRestrictionsByAssociation(new l(this.conditionRepository.route,this.conditionRepository.entityName,a.api,null,n),e);if(i.isRestricted){let e=this.$tc("sw-restricted-rules.restrictedAssignment.equalsAnyViolationTooltip",0,{conditions:this.ruleConditionDataProviderService.getTranslatedConditionViolationList(i.equalsAnyNotMatched,"sw-restricted-rules.or"),entityLabel:this.$tc(i.assignmentSnippet,2)});this.createNotificationError({message:e}),t=!1}}),t},getChildrenConditions(e){let t=[];return e.children.forEach(e=>{if(t.push(e),e.children){let n=this.getChildrenConditions(e);t.push(...n)}}),t},onSave(){return this.validateRuleAwareness()?(this.isSaveSuccessful=!1,this.isLoading=!0,this.rule.isNew())?(this.rule.conditions=this.conditionTree,this.saveRule().then(()=>{this.$router.push({name:"sw.settings.rule.detail",params:{id:this.rule.id}}),this.isSaveSuccessful=!0,this.conditionsTreeContainsUserChanges=!1}).catch(()=>{this.showErrorNotification()})):this.saveRule().then(this.syncConditions).then(()=>{this.isSaveSuccessful=!0,this.loadEntityData(this.rule.id).then(()=>{this.setTreeFinishedLoading()})}).then(()=>{this.isLoading=!1}).catch(()=>{this.isLoading=!1,this.showErrorNotification()}):Promise.resolve()},abortOnLanguageChange(){return this.ruleRepository.hasChanges(this.rule)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(e){Shopware.State.commit("context/setApiLanguageId",e),this.isLoading=!0,this.loadEntityData(this.ruleId).then(()=>{this.isLoading=!1,this.setTreeFinishedLoading()})},saveRule(){return this.ruleRepository.save(this.rule,a.api)},syncConditions(){return this.conditionRepository.sync(this.conditionTree,a.api).then(()=>this.deletedIds.length>0?this.conditionRepository.syncDeleted(this.deletedIds,a.api).then(()=>{this.deletedIds=[]}):Promise.resolve())},showErrorNotification(){this.createNotificationError({message:this.$tc("sw-settings-rule.detail.messageSaveError",0,{name:this.rule.name})}),this.isLoading=!1},tabHasError(e){return"sw.settings.rule.detail.base"===e.route.name&&(!!this.ruleNameError||!!this.rulePriorityError)},onCancel(){this.$router.push({name:"sw.settings.rule.index"})},onDuplicate(){return this.onSave().then(()=>{let e={overwrites:{name:`${this.rule.name} ${this.$tc("global.default.copy")}`,createdAt:null}};return this.ruleRepository.clone(this.rule.id,e,Shopware.Context.api).then(e=>{this.$router.push({name:"sw.settings.rule.detail",params:{id:e.id}})})})}}}},617786:function(e,t,n){var i=n(473821);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,n(745346).Z)("460413c7",i,!0,{})}}]);