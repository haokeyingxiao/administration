"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[97352],{297352:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});let{Mixin:s}=Shopware,{Criteria:i}=Shopware.Data;var a={template:'\n{% block sw_settings_search_searchable_content_customfields %}\n<div class="sw-settings-search__searchable-content-customfields">\n    \n    {% block sw_settings_search_searchable_content_customfields_empty_state %}\n    <sw-empty-state\n        v-if="isEmpty"\n        :title="$tc(\'sw-settings-search.generalTab.textEmptyStateSearchableContent\')"\n        :show-description="false"\n        :has-action-slot="true"\n        :absolute="false"\n    >\n        <template #icon>\n            \n            {% block sw_settings_search_searchable_content_customfields_state_image %}\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                :alt="$tc(\'sw-settings-search.generalTab.textEmptyStateSearchableContent\')"\n            >\n            {% endblock %}\n        </template>\n\n        <template #actions>\n            \n            {% block sw_settings_search_searchable_content_customfields_empty_state_action %}\n            <sw-button\n                variant="ghost"\n                size="small"\n                :disabled="!acl.can(\'product_search_config.creator\')"\n                @click="onAddField"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.buttonAddContent\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n\n    \n    {% block sw_settings_search_searchable_content_customfields_grid %}\n    <sw-entity-listing\n        v-if="!isEmpty"\n        ref="customGrid"\n        class="sw-settings-search__searchable-content-list"\n        :columns="columns"\n        :repository="repository"\n        :allow-column-edit="false"\n        :full-page="false"\n        :show-settings="false"\n        :show-selection="false"\n        :is-loading="isLoading"\n        :items="searchConfigs"\n        :allow-inline-edit="acl.can(\'product_search_config.editor\')"\n        :allow-edit="acl.can(\'product_search_config.editor\')"\n        :allow-delete="acl.can(\'product_search_config.deleter\')"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n        \n        {% block sw_settings_search_searchable_content_customfields_field %}\n        <template #column-field="{ item, isInlineEdit }">\n            <template v-if="item._isNew && isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_field_editor %}\n                <sw-entity-single-select\n                    v-model:value="currentCustomFieldId"\n                    class="sw-settings-search-custom-field-select"\n                    entity="custom_field"\n                    :criteria="customFieldFilteredCriteria"\n                    show-clearable-button\n                    @update:value="(id, customfield) => onSelectCustomField(customfield)"\n                >\n\n                    <template #selection-label-property="{ item }">\n                        {{ showCustomFieldWithSet(item) }}\n                    </template>\n\n                    <template #result-label-property="{ item }">\n                        {{ showCustomFieldWithSet(item) }}\n                    </template>\n\n                </sw-entity-single-select>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_customfields_field_label %}\n                {{ getMatchingCustomFields(item.field) }}\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_ranking %}\n        <template #column-ranking="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_ranking_editor %}\n                <sw-number-field\n                    v-model:value="item.ranking"\n                    number-type="int"\n                    size="small"\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_searchable %}\n        <template #column-searchable="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_searchable_editor %}\n                <sw-checkbox-field\n                    v-model:value="item.searchable"\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_customfields_searchable_label %}\n                <sw-icon\n                    v-if="item.searchable"\n                    class="is--active"\n                    name="regular-checkmark-xs"\n                    small\n                />\n                <sw-icon\n                    v-else\n                    class="is--inactive"\n                    name="regular-times-s"\n                    small\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_tokenize %}\n        <template #column-tokenize="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_tokenize_editor %}\n                <sw-checkbox-field\n                    v-model:value="item.tokenize"\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_customfields_tokenize_label %}\n                <sw-icon\n                    v-if="item.tokenize"\n                    class="is--active"\n                    name="regular-checkmark-xs"\n                    small\n                />\n                <sw-icon\n                    v-else\n                    class="is--inactive"\n                    name="regular-times-s"\n                    small\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_columns_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_settings_search_searchable_content_customfields_columns_actions_edit %}\n            <sw-context-menu-item\n                class="sw-settings-search__searchable-content-list-action sw-settings-search__searchable-content-list-reset"\n                :disabled="!acl.can(\'product_search_config.editor\')"\n                @click="onResetRanking(item)"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.list.textResetRanking\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_settings_search_searchable_content_customfields_columns_actions_delete %}\n            <sw-context-menu-item\n                class="sw-settings-search__searchable-content-list-action sw-settings-search__searchable-content-list-remove"\n                :disabled="!acl.can(\'product_search_config.deleter\')"\n                @click="onRemove(item)"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.list.textRemove\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-entity-listing>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],emits:["config-add","data-load","config-save","config-delete"],mixins:[s.getByName("notification"),s.getByName("sw-inline-snippet")],props:{isEmpty:{type:Boolean,required:!0},columns:{type:Array,required:!0},repository:{type:Object,required:!0},searchConfigs:{type:Array,required:!1,default(){return null}},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{customFields:[],currentCustomFieldId:null,addedCustomFieldIds:[]}},computed:{customFieldRepository(){return this.repositoryFactory.create("custom_field")},customFieldFilteredCriteria(){let e=new i(1,25);return e.addAssociation("customFieldSet"),this.searchConfigs&&(this.searchConfigs.forEach(e=>{e?.customFieldId&&this.addedCustomFieldIds.push(e.customFieldId)}),0===this.addedCustomFieldIds.length||e.addFilter(i.not("AND",[i.equalsAny("id",this.addedCustomFieldIds)]))),e},customFieldCriteria(){let e=new i(1,25);return e.addAssociation("customFieldSet"),e},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{searchConfigs(e){e[0]&&e[0]._isNew&&this.$refs.customGrid&&(this.$refs.customGrid.enableInlineEdit(),this.$refs.customGrid.onDbClickCell(this.$refs.customGrid.records[0]))}},created(){this.createdComponent()},methods:{createdComponent(){this.customFieldRepository.search(this.customFieldCriteria).then(e=>{this.customFields=e}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-search.notification.loadError")})})},showCustomFieldWithSet(e){let t="";e?.customFieldSet&&(t=this.getInlineSnippet(e.customFieldSet.config.label)||e.customFieldSet.name);let n=this.getInlineSnippet(e.config.label)||e.name;return`${t} - ${n}`},getMatchingCustomFields(e){if(!e)return"";let t=e.replace("customFields.",""),n=this.customFields.find(e=>e.name===t);return n?this.showCustomFieldWithSet(n):t},onSelectCustomField(e){let t=this.searchConfigs.find(e=>e._isNew);t.field=`customFields.${e.name}`,t.customFieldId=this.currentCustomFieldId},onAddField(){this.$emit("config-add")},onInlineEditSave(e){e.then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-search.notification.saveSuccess")})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")})}).finally(()=>{this.currentCustomFieldId=null,this.$emit("data-load")})},onInlineEditCancel(){this.currentCustomFieldId=null,this.$emit("data-load")},onResetRanking(e){if(!e.field){this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")}),this.$emit("data-load");return}let t=this.searchConfigs.find(t=>t.field===e.field);if(!t){this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")});return}t.ranking=0,this.$emit("config-save")},onRemove(e){if(!e.field){this.$emit("data-load");return}this.$emit("config-delete",e.id)}}}}}]);