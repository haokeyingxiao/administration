(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[44089],{357209:function(){},44089:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}}),n(608105);let{Mixin:o}=Shopware;var s={template:'\n{% block sw_settings_country_state_list_card %}\n<sw-card\n    v-if="!isLoading"\n    position-identifier="sw-settings-country-state"\n>\n    <template #toolbar>\n        <sw-container\n            columns="1fr 32px minmax(100px, 200px)"\n            gap="0 10px"\n        >\n\n            \n            {% block sw_attribute_list_toolbar_searchfield %}\n            <sw-simple-search-field\n                v-model:value="term"\n                size="small"\n                variant="form"\n                @search-term-change="onSearchCountryState"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_country_state_list_toolbar_delete %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'country.editor\'),\n                    showOnDisabledElements: true\n                }"\n                square\n                size="small"\n                class="sw-settings-country-state-list__delete-button"\n                :disabled="deleteButtonDisabled || !acl.can(\'country.editor\')"\n                @click="onDeleteCountryStates"\n            >\n                <sw-icon\n                    name="regular-trash"\n                    small\n                />\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_settings_country_state_list_toolbar_add %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'country.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-settings-country-state__add-country-state-button"\n                size="x-small"\n                variant="primary"\n                :disabled="!acl.can(\'country.editor\') || undefined"\n                @click="onAddCountryState"\n            >\n                {{ $tc(\'sw-settings-country.detail.buttonAddCountryState\') }}\n            </sw-button>\n            {% endblock %}\n\n        </sw-container>\n    </template>\n\n    <template #grid>\n\n        \n        {% block sw_settings_country_state_list_listing %}\n        <sw-one-to-many-grid\n            ref="countryStateGrid"\n            class="sw-settings-country-state-list__content"\n            :is-loading="countryStateLoading"\n            :collection="country.states"\n            :full-page="undefined"\n            :local-mode="country.isNew()"\n            :columns="stateColumns"\n            :allow-delete="acl.can(\'country.editor\')"\n            :tooltip-delete="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'country.editor\'),\n                showOnDisabledElements: true\n            }"\n            @selection-change="countryStateSelectionChanged"\n            @load-finish="checkEmptyState"\n        >\n\n            <template #column-name="{ item }">\n\n                \n                {% block sw_settings_country_state_list_listing_column_name %}\n                <a\n                    class="sw-settings-country-state__link"\n                    role="button"\n                    tabindex="0"\n                    @click="onClickCountryState(item)"\n                    @keydown.enter="onClickCountryState(item)"\n                >\n                    {{ getCountryStateName(item) }}\n                </a>\n                {% endblock %}\n\n            </template>\n\n            <template #more-actions="{ item }">\n                \n                {% block sw_settings_country_state_list_listing_action_edit %}\n                <sw-context-menu-item\n                    v-tooltip.top="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'country.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="sw-settings-country-state__edit-country-state-action"\n                    :disabled="!acl.can(\'country.editor\') || undefined"\n                    @click="onClickCountryState(item)"\n                >\n                    {{ $tc(\'sw-settings-country.detail.editAction\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n        </sw-one-to-many-grid>\n        {% endblock %}\n        \n        {% block sw_settings_country_state_list_empty %}\n        <sw-empty-state\n            v-if="showEmptyState"\n            :absolute="false"\n            :title="$tc(\'sw-country-state-detail.emptyTitle\')"\n            :subline="$tc(\'sw-country-state-detail.emptySubline\')"\n            auto-height\n        />\n        {% endblock %}\n    </template>\n    \n    {% block sw_settings_country_state_detail %}\n    <sw-country-state-detail\n        v-if="currentCountryState"\n        :country-state="currentCountryState"\n        @attribute-edit-save="onSaveCountryState"\n        @attribute-edit-cancel="onCancelCountryState"\n    />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],mixins:[o.getByName("notification")],props:{country:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1},countryStateRepository:{type:Object,required:!1,default:null}},data(){return{deleteButtonDisabled:!0,term:null,currentCountryState:null,countryStateLoading:!1,showEmptyState:!1}},computed:{stateColumns(){return this.getStateColumns()},countryStates(){return this.country.states}},watch:{countryStates(){this.checkEmptyState()}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.checkEmptyState()},getStateColumns(){return[{property:"name",label:this.$tc("sw-settings-country.detail.columnStateNameLabel"),inlineEdit:"string",primary:!0},{property:"shortCode",label:this.$tc("sw-settings-country.detail.columnStateShortCodeLabel"),inlineEdit:"string"}]},countryStateSelectionChanged(t,e){this.deleteButtonDisabled=e<=0},onSearchCountryState(){this.country.states.criteria.setTerm(this.term),this.refreshCountryStateList()},onDeleteCountryStates(){let t=Object.keys(this.$refs.countryStateGrid.selection);return t.length?this.country.isNew()?(t.forEach(t=>{this.country.states.remove(t)}),this.$refs.countryStateGrid.resetSelection(),Promise.resolve()):(this.countryStateLoading=!0,this.countryStateRepository.syncDeleted(t,Shopware.Context.api).then(()=>{this.$refs.countryStateGrid.resetSelection(),this.refreshCountryStateList()}).finally(()=>{this.countryStateLoading=!1})):Promise.resolve()},onAddCountryState(){this.currentCountryState=this.countryStateRepository.create(Shopware.Context.api)},onSaveCountryState(t){return this.country.isNew()?(this.country.states.add(t),Promise.resolve().then(()=>{this.currentCountryState=null})):this.countryStateRepository.save(this.currentCountryState).then(()=>{this.refreshCountryStateList()}).catch(t=>{"MISSING-SYSTEM-TRANSLATION"===t.response.data.errors[0].code&&this.createNotificationError({message:this.$tc("sw-country-state-detail.createNewStateError")})})},onCancelCountryState(){this.currentCountryState=null},onClickCountryState(t){let e=this.countryStateRepository.create(Shopware.Context.api,t.id);e._isNew=!1,this.currentCountryState=Object.assign(e,t)},refreshCountryStateList(){this.countryStateLoading=!0,this.$refs.countryStateGrid.load().then(()=>{this.countryStateLoading=!1,this.currentCountryState=null})},getCountryStateName(t){return t?.translated?.name||t?.name},checkEmptyState(){if(this.country?.isNew()){this.showEmptyState=this.country?.states?.length===0;return}this.showEmptyState=this.$refs.countryStateGrid?.total===0}}}},608105:function(t,e,n){var o=n(357209);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,n(745346).Z)("bf6169fc",o,!0,{})}}]);