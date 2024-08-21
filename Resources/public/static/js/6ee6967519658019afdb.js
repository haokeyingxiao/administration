(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27859],{590783:function(){},127859:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var i=n(594998);n(726353);let{Context:s}=Shopware,{Criteria:o}=Shopware.Data;var a={template:'\n{% block sw_settings_rule_add_assignment_modal %}\n<sw-modal\n    class="sw-settings-rule-add-assignment-modal"\n    :title="$tc(entityContext.label)"\n    :variant="modalSize"\n    @modal-close="onCloseAddModal"\n>\n\n    \n    {% block sw_settings_rule_add_assignment_modal_category_tree %}\n    <sw-settings-rule-category-tree\n        v-if="entityContext.entityName === \'category\'"\n        :rule="rule"\n        :association="entityContext.addContext.association"\n        :categories-collection="entities"\n        :hide-headline="true"\n        :hide-search="true"\n        placeholder="Add categories"\n        @on-selection="onSelect"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_add_assignment_modal_listing %}\n    <sw-settings-rule-add-assignment-listing\n        v-else\n        class="sw-settings-rule-detail-assignments__entity-listing"\n        :entity-context="entityContext"\n        :rule-id="rule.id"\n        @select-item="onSelect"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_add_assignment_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_settings_rule_add_assignment_modal_cancel %}\n        <sw-button\n            class="sw-settings-rule-add-assignment-modal__cancel-button"\n            size="small"\n            @click="onCloseAddModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_rule_add_assignment_modal_confirm %}\n        <sw-button\n            class="sw-settings-rule-add-assignment-modal__confirm-button"\n            size="small"\n            variant="primary"\n            @click="onAdd"\n        >\n            {{ $tc(\'global.default.add\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["close-add-modal","entities-saved"],props:{rule:{type:Object,required:!0},entityContext:{type:Object,required:!0}},data(){return{repository:null,entities:null,isLoading:!0,selection:{},criteriaLimit:10,currentLanguageId:Shopware.Context.api.languageId}},computed:{modalSize(){return"category"===this.entityContext.entityName?"default":"large"}},created(){this.createdComponent()},methods:{createdComponent(){"category"===this.entityContext.entityName?this.entities=new i.Z("/category","category",s.api):(this.repository=this.entityContext.repository,this.loadEntities())},loadEntities(){let t=this.entityContext.api?this.entityContext.api():s.api,e=new o(1,this.criteriaLimit);this.repository.search(e,t).then(t=>{this.entities=t,this.isLoading=!1})},onCloseAddModal(){this.$emit("close-add-modal")},onAdd(){if("one-to-many"===this.entityContext.addContext.type){this.updateEntities();return}this.insertEntities()},updateEntities(){let t=this.entityContext.api?this.entityContext.api():s.api,e=this.repositoryFactory.create(this.entityContext.addContext.entity);return Object.values(this.selection).forEach(t=>{t[this.entityContext.addContext.column]=this.rule.id}),e.sync(Object.values(this.selection),t).then(()=>this.$emit("entities-saved"))},insertEntities(){let t=this.entityContext.api?this.entityContext.api():s.api,e=this.repositoryFactory.create(this.entityContext.addContext.entity),n=[];return Object.values(this.selection).forEach(i=>{let s=e.create(t);s.ruleId=this.rule.id,s[this.entityContext.addContext.column]=i.id,n.push(s)}),e.sync(n,t).then(()=>this.$emit("entities-saved"))},onSelect(t){this.selection=t}}}},726353:function(t,e,n){var i=n(590783);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,n(745346).Z)("049c1f74",i,!0,{})}}]);