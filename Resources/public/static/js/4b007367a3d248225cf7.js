(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[3614],{580820:function(){},803614:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n(99387);var i={template:'\n{% block sw_settings_snippet_grid_sidebar %}\n<sw-sidebar class="sw-snippet-settings__sidebar">\n    \n    {% block sw_settings_snippet_grid_sidebar_refresh %}\n    <sw-sidebar-item\n        icon="regular-undo"\n        :title="$tc(\'sw-settings-snippet.list.titleSidebarItemRefresh\')"\n        @click="onRefresh"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_grid_sidebar_filter %}\n    <sw-sidebar-item\n        ref="filterSideBar"\n        icon="regular-filter"\n        :title="$tc(\'sw-settings-snippet.list.titleSidebarItemFilter\')"\n        :badge="activeFilterNumber"\n        @close-content="closeContent"\n        @click="closeContent"\n    >\n        <template #headline-content>\n            \n            <a\n                v-if="activeFilterNumber"\n                class="sw-snippet-settings__sidebar-reset-all"\n                role="button"\n                tabindex="0"\n                @click="resetAll"\n            >\n                {{ $tc(\'sw-sidebar-filter-panel.resetButton\') }}\n            </a>\n        </template>\n\n        \n        {% block sw_settings_snippet_grid_sidebar_filter_only_empty %}\n        <sw-settings-snippet-filter-switch\n            name="emptySnippets"\n            group="emptySnippets"\n            type="small"\n            :value="filterSettings?.emptySnippets"\n            :label="$tc(\'sw-settings-snippet.filter.showOnlyEmpty\')"\n            @update:value="onChange"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_snippet_grid_sidebar_filter_custom %}\n        <sw-settings-snippet-filter-switch\n            name="editedSnippets"\n            group="editedSnippets"\n            type="small"\n            :value="filterSettings?.editedSnippets"\n            :label="$tc(\'sw-settings-snippet.filter.showOnlyCustom\')"\n            @update:value="onChange"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_snippet_grid_sidebar_filter_added %}\n        <sw-settings-snippet-filter-switch\n            name="addedSnippets"\n            group="addedSnippets"\n            type="small"\n            :value="filterSettings?.addedSnippets"\n            :label="$tc(\'sw-settings-snippet.filter.showOnlyAdded\')"\n            @update:value="onChange"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_snippet_grid_sidebar_filter_author %}\n        <sw-sidebar-collapse :expand-on-loading="isExpandedAuthorFilters">\n            <template #header>\n                {{ $tc(\'sw-settings-snippet.filter.author\') }}\n            </template>\n            <template #content>\n                <div\n                    v-for="(item, index) in authorFilters"\n                    :key="index"\n                >\n                    <sw-settings-snippet-filter-switch\n                        group="authorFilter"\n                        :name="item"\n                        :value="filterSettings?.[item]"\n                        :label="item"\n                        @update:value="onChange"\n                    />\n                </div>\n            </template>\n        </sw-sidebar-collapse>\n        {% endblock %}\n\n        \n        {% block sw_settings_snippet_grid_sidebar_filter_more %}\n        <sw-sidebar-collapse :expand-on-loading="isExpandedMoreFilters">\n            <template #header>\n                {{ $tc(\'sw-settings-snippet.filter.more\') }}\n            </template>\n            <template #content>\n                <div\n                    v-for="(item, index) in filterItems"\n                    :key="index"\n                >\n                    <sw-settings-snippet-filter-switch\n                        group="namespaceFilters"\n                        :name="item"\n                        :value="filterSettings?.[item]"\n                        :label="item"\n                        @update:value="onChange"\n                    />\n                </div>\n            </template>\n        </sw-sidebar-collapse>\n        {% endblock %}\n    </sw-sidebar-item>\n    {% endblock %}\n</sw-sidebar>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["sw-sidebar-close","sw-sidebar-open","change","sw-sidebar-collaps-refresh-grid","sidebar-reset-all"],props:{filterItems:{type:Array,required:!0},authorFilters:{type:Array,required:!0},filterSettings:{type:Object,required:!1,default:null}},computed:{activeFilterNumber(){let e=0;return this.filterSettings&&Object.values(this.filterSettings).forEach(t=>{!0===t&&(e+=1)}),e},isExpandedAuthorFilters(){return!!this.filterSettings&&this.authorFilters.some(e=>!0===this.filterSettings[e])},isExpandedMoreFilters(){return!!this.filterSettings&&this.filterItems.some(e=>!0===this.filterSettings[e])}},methods:{closeContent(){if(this.filterSidebarIsOpen){this.$refs.filterSideBar.closeContent(),this.filterSidebarIsOpen=!1,this.$emit("sw-sidebar-close");return}this.$refs.filterSideBar?.openContent?.(),this.filterSidebarIsOpen=!0,this.$emit("sw-sidebar-open")},onChange(e){this.$emit("change",e)},onRefresh(){this.$emit("sw-sidebar-collaps-refresh-grid")},resetAll(){this.$emit("sidebar-reset-all")}}}},99387:function(e,t,n){var i=n(580820);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,n(745346).Z)("6bbcf8af",i,!0,{})}}]);