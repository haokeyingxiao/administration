(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[3827],{847973:function(){},103827:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return t}}),s(789971);let{Module:n,State:a,Mixin:c}=Shopware;var t={template:'\n{% block sw_profile_index_search_preferences %}\n<div class="sw-profile-index-search-preferences">\n    <sw-card\n        v-if="adminEsEnable"\n        class="sw-card-elasticsearch-enabled"\n        position-identifier="sw-card-elasticsearch-enabled"\n    >\n        <sw-alert\n            class="sw-card-elasticsearch-enabled__alert"\n            variant="info"\n            :title="$tc(\'sw-profile.tabSearchPreferences.alert_elasticsearch.title\')"\n        >\n            {{ $tc(\'sw-profile.tabSearchPreferences.alert_elasticsearch.text\') }}\n        </sw-alert>\n    </sw-card>\n\n    \n    {% block sw_profile_index_search_preferences_searchable_elements %}\n    <sw-card\n        class="sw-profile-index-search-preferences-searchable-elements"\n        position-identifier="sw-profile-index-search-preferences"\n        :title="$tc(\'sw-profile.tabSearchPreferences.cardSearchableElements.title\')"\n        :is-loading="isLoading"\n    >\n        \n        {% block sw_profile_index_search_preferences_searchable_elements_content %}\n        <sw-container\n            v-if="searchPreferences.length > 0"\n            rows="auto auto auto"\n            gap="24px"\n        >\n            \n            {% block sw_profile_index_search_preferences_searchable_elements_header %}\n            <p>{{ $tc(\'sw-profile.tabSearchPreferences.cardSearchableElements.description\') }}</p>\n\n            <sw-container\n                columns="auto auto auto 1fr"\n                gap="8px"\n            >\n                \n                {% block sw_profile_index_search_preferences_searchable_elements_button_select %}\n                <sw-button\n                    class="sw-profile-index-search-preferences-searchable-elements__button-select-all"\n                    @click="onSelect(true)"\n                >\n                    {{ $tc(\'sw-profile.tabSearchPreferences.cardSearchableElements.buttonSelect\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_profile_index_search_preferences_searchable_elements_button_deselect %}\n                <sw-button\n                    class="sw-profile-index-search-preferences-searchable-elements__button-deselect-all"\n                    @click="onSelect(false)"\n                >\n                    {{ $tc(\'sw-profile.tabSearchPreferences.cardSearchableElements.buttonDeselect\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_profile_index_search_preferences_searchable_elements_button_reset %}\n                <sw-button\n                    class="sw-profile-index-search-preferences-searchable-elements__button-reset-to-default"\n                    @click="onReset"\n                >\n                    {{ $tc(\'sw-profile.tabSearchPreferences.cardSearchableElements.buttonReset\') }}\n                </sw-button>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_profile_index_search_preferences_searchable_elements_body %}\n            <div class="sw-profile-index-search-preferences-searchable-elements__entity-container">\n                <ul\n                    v-for="searchPreference in searchPreferences"\n                    :key="searchPreference.entityName"\n                    class="sw-profile-index-search-preferences-searchable-elements__entity"\n                >\n                    <li class="sw-profile-index-search-preferences-searchable-elements__entity-field">\n                        \n                        <sw-checkbox-field\n                            v-model:value="searchPreference._searchable"\n                            :label="getModuleTitle(searchPreference.entityName)"\n                            @update:value="onChangeSearchPreference(searchPreference)"\n                            name="sw-field--searchPreference-_searchable"\n                        />\n                        <ul class="sw-profile-index-search-preferences-searchable-elements__entity">\n                            <li\n                                v-for="field in searchPreference.fields"\n                                :key="field.fieldName"\n                                class="sw-profile-index-search-preferences-searchable-elements__entity-field"\n                            >\n                                <sw-checkbox-field\n                                    v-model:value="field._searchable"\n                                    name="sw-field--field-_searchable"\n                                    :label="$tc(`sw-profile.tabSearchPreferences.modules.${searchPreference.entityName}.${field.fieldName}`)"\n                                    :disabled="adminEsEnable || !searchPreference._searchable"\n                                />\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["searchPreferencesService"],mixins:[c.getByName("notification")],data(){return{isLoading:!1}},computed:{searchPreferences:{get(){return a.get("swProfile").searchPreferences},set(e){a.commit("swProfile/setSearchPreferences",e)}},userSearchPreferences:{get(){return a.get("swProfile").userSearchPreferences},set(e){a.commit("swProfile/setUserSearchPreferences",e)}},defaultSearchPreferences(){let e=this.searchPreferencesService.getDefaultSearchPreferences();if(null===this.userSearchPreferences)return e;let r=[];return e.forEach(e=>{let s=Object.keys(e)[0],n=this.userSearchPreferences.find(e=>Object.keys(e)[0]===s);if(!n){r.push(e);return}let a=n[s],c=e[s];Object.keys(c).forEach(e=>{a.hasOwnProperty(e)||(a[e]=c[e])}),Object.keys(a).forEach(e=>{c.hasOwnProperty(e)||delete a[e]}),r.push({[s]:a})}),r},adminEsEnable(){return Shopware.Context.app.adminEsEnable??!1}},created(){this.createdComponent()},beforeUnmount(){this.beforeDestroyComponent()},methods:{async createdComponent(){await this.getDataSource(),this.updateDataSource(),this.addEventListeners()},beforeDestroyComponent(){this.removeEventListeners()},async getDataSource(){this.isLoading=!0;try{this.userSearchPreferences=await this.searchPreferencesService.getUserSearchPreferences(),this.searchPreferences=this.searchPreferencesService.processSearchPreferences(this.defaultSearchPreferences)}catch(e){this.createNotificationError({message:e.message}),this.searchPreferences=[],this.userSearchPreferences=null}finally{this.isLoading=!1}},addEventListeners(){this.isCompatEnabled("INSTANCE_EVENT_EMITTER")?this.$root.$on("sw-search-preferences-modal-close",this.getDataSource):Shopware.Utils.EventBus.on("sw-search-preferences-modal-close",this.getDataSource)},removeEventListeners(){this.isCompatEnabled("INSTANCE_EVENT_EMITTER")?this.$root.$off("sw-search-preferences-modal-close",this.getDataSource):Shopware.Utils.EventBus.off("sw-search-preferences-modal-close",this.getDataSource)},updateDataSource(){this.adminEsEnable&&this.searchPreferences.forEach(e=>{e.fields.forEach(e=>{e._searchable=!0})})},getModuleTitle(e){let r=n.getModuleByEntityName(e);return this.$tc(r?.manifest.title)},onChangeSearchPreference(e){e._searchable&&e.fields.every(e=>!e._searchable)&&e.fields.forEach(e=>{e._searchable=!0})},onSelect(e){this.searchPreferences.forEach(r=>{r._searchable=e,this.adminEsEnable||r.fields.forEach(r=>{r._searchable=e})})},onReset(){let e=this.searchPreferencesService.getDefaultSearchPreferences(),r=this.searchPreferencesService.processSearchPreferences(e);this.searchPreferences.forEach((e,s)=>{r.forEach(r=>{r.entityName===e.entityName&&this.resetSearchPreference(r,this.searchPreferences[s])})})},resetSearchPreference(e,r){r._searchable=e._searchable,this.adminEsEnable||(r.fields=r.fields.map(r=>e.fields.find(e=>e.fieldName===r.fieldName)||r))}}}},789971:function(e,r,s){var n=s(847973);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(745346).Z)("792dd44b",n,!0,{})}}]);