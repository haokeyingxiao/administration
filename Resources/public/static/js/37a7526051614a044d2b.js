(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[40081],{292886:function(){},840081:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}}),s(100938);var a={template:'\n{% block sw_settings_search_searchable_content_example_modal %}\n<sw-modal\n    class="sw-settings-search-example-modal"\n    :title="$tc(\'sw-settings-search.generalTab.titleExampleModal\')"\n    @modal-close="closeModal"\n>\n    \n    {% block sw_settings_search_searchable_content_example_modal_content %}\n    \n    {% block sw_settings_search_searchable_content_example_modal_explain %}\n    <span class="sw-field sw-settings-search__example-text">\n        {{ $tc(\'sw-settings-search.generalTab.modal.textExplain\') }}\n    </span>\n    {% endblock %}\n\n    \n    {% block sw_settings_search_searchable_content_example_modal_result %}\n    <ul class="sw-settings-search__searchable-content-example-list">\n        <li\n            v-for="result in exampleResults"\n            :key="result.textProductRankedScore"\n            class="sw-settings-search__example-text"\n        >\n            <div class="sw-settings-search__searchable-content-example-wrapper">\n                <div class="sw-settings-search__searchable-content-example-detail">\n                    <div>{{ result.textTitle }}: {{ result.textSuperProductName }}</div>\n                    <div>{{ result.scoreSuperProductName }}</div>\n                    <div>{{ result.textDescription }}: {{ result.textProductName }}</div>\n                    <div>{{ result.scoreProductName }}</div>\n                    <div>{{ result.textTag }}: {{ result.textDetailName }}</div>\n                    <div>{{ result.scoreDetail }}</div>\n                    <div>{{ result.textTotal }}:</div>\n                    <div>{{ result.scoreTotal }}</div>\n                </div>\n                <div class="sw-settings-search__example-text">\n                    <p>{{ result.textProductRankedScore }}</p>\n                </div>\n            </div>\n        </li>\n    </ul>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_settings_search_searchable_content_example_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_search_searchable_content_example_modal_close %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="closeModal"\n        >\n            {{ $tc(\'global.sw-modal.labelClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["modal-close"],data(){return{exampleResults:[{textTitle:this.$tc("sw-settings-search.generalTab.modal.textTitle"),textSuperProductName:this.$tc("sw-settings-search.generalTab.modal.textSuperJeans"),scoreSuperProductName:100,textDescription:this.$tc("sw-settings-search.generalTab.modal.textDescription"),textProductName:this.$tc("sw-settings-search.generalTab.modal.textFancyJeans"),scoreProductName:50,textTag:this.$tc("sw-settings-search.generalTab.modal.textTag"),textDetailName:this.$tc("sw-settings-search.generalTab.modal.textJeans"),scoreDetail:20,textTotal:this.$tc("sw-settings-search.generalTab.modal.textTotal"),scoreTotal:170,textProductRankedScore:this.$tc("sw-settings-search.generalTab.modal.textProductRankedFirstScore")},{textTitle:this.$tc("sw-settings-search.generalTab.modal.textTitle"),textSuperProductName:this.$tc("sw-settings-search.generalTab.modal.textSuperJeans"),scoreSuperProductName:100,textDescription:this.$tc("sw-settings-search.generalTab.modal.textDescription"),textProductName:this.$tc("sw-settings-search.generalTab.modal.textFancyPants"),scoreProductName:0,textTag:this.$tc("sw-settings-search.generalTab.modal.textTag"),textDetailName:this.$tc("sw-settings-search.generalTab.modal.textJeans"),scoreDetail:20,textTotal:this.$tc("sw-settings-search.generalTab.modal.textTotal"),scoreTotal:120,textProductRankedScore:this.$tc("sw-settings-search.generalTab.modal.textProductRankedSecondScore")},{textTitle:this.$tc("sw-settings-search.generalTab.modal.textTitle"),textSuperProductName:this.$tc("sw-settings-search.generalTab.modal.textSuperPants"),scoreSuperProductName:0,textDescription:this.$tc("sw-settings-search.generalTab.modal.textDescription"),textProductName:this.$tc("sw-settings-search.generalTab.modal.textFancyPants"),scoreProductName:0,textTag:this.$tc("sw-settings-search.generalTab.modal.textTag"),textDetailName:this.$tc("sw-settings-search.generalTab.modal.textJeans"),scoreDetail:20,textTotal:this.$tc("sw-settings-search.generalTab.modal.textTotal"),scoreTotal:20,textProductRankedScore:this.$tc("sw-settings-search.generalTab.modal.textProductRankedThirdScore")}]}},methods:{closeModal(){this.$emit("modal-close")}}}},100938:function(e,t,s){var a=s(292886);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,s(745346).Z)("3445b5d9",a,!0,{})}}]);