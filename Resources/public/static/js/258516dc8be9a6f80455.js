(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[50163],{266966:function(){},50163:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o}}),e(12714);var o={template:'\n{% block sw_import_export %}\n<sw-page class="sw-import-export">\n\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_import_export_tabs %}\n            <sw-tabs position-identifier="sw-import-export">\n                \n                {% block sw_import_export_tabs_import %}\n                <sw-tabs-item :route="{ name: \'sw.import.export.index.import\' }">\n                    {{ $tc(\'sw-import-export.page.importTab\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_import_export_tabs_export %}\n                <sw-tabs-item :route="{ name: \'sw.import.export.index.export\' }">\n                    {{ $tc(\'sw-import-export.page.exportTab\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_import_export_tabs_profiles %}\n                <sw-tabs-item :route="{ name: \'sw.import.export.index.profiles\' }">\n                    {{ $tc(\'sw-import-export.page.profileTab\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            <router-view ref="tabContent" />\n\n        </sw-card-view>\n    </template>\n\n    \n    {% block sw_import_export_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],data(){return{}},metaInfo(){return{title:this.$createTitle()}},methods:{onChangeLanguage(){this.$refs.tabContent.reloadContent&&this.$refs.tabContent.reloadContent()}}}},12714:function(t,n,e){var o=e(266966);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,e(745346).Z)("34d567d8",o,!0,{})}}]);