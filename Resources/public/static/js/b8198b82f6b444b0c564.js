(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[20140],{280598:function(){},520140:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n(469493);let{mapState:s}=Shopware.Component.getComponentHelper();var i={template:'<div class="sw-extension-my-extensions-listing">\n    <sw-skeleton\n        v-if="isLoading"\n        :variant="skeletonVariant"\n    />\n\n    <div\n        v-else\n        class="sw-extension-my-extensions-listing__listing-grid"\n    >\n        <sw-alert\n            v-if="!isAppUrlReachable"\n            class="sw-extension-my-extensions-listing__app-url-warning"\n            variant="warning"\n            :title="$tc(\'sw-app.component.sw-app-wrong-app-url-modal.title\')"\n        >\n\n            <template #default>\n                <div>\n                    {{ $tc(\'sw-app.component.sw-app-wrong-app-url-modal.explanation\') }}\n                </div>\n                <div>\n                    {{ $tc(\'sw-app.component.sw-app-wrong-app-url-modal.textGetSupport\') }}\n                </div>\n            </template>\n\n            <template #actions>\n                <sw-button\n                    class="sw-app-wrong-app-url-modal__content-link-button"\n                    variant="ghost"\n                    :link="$tc(\'sw-app.component.sw-app-wrong-app-url-modal.linkToDocsArticle\')"\n                >\n                    {{ $tc(\'sw-app.component.sw-app-wrong-app-url-modal.labelLearnMoreButton\') }}\n                </sw-button>\n            </template>\n\n        </sw-alert>\n\n        <sw-alert\n            v-if="extensionManagementDisabled"\n            class="sw-extension-my-extensions-listing__runtime-extension-warning"\n            variant="warning"\n            :title="$tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.alertExtensionManagement.title\')"\n        >\n            <template #default>\n                <div>\n                    {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.alertExtensionManagement.description\') }}\n                </div>\n            </template>\n\n            <template #actions>\n                <sw-external-link\n                    href="https://developer.haokeyingxiao.com/docs/guides/hosting/installation-updates/extension-managment.html"\n                >\n                    {{ $tc(\'sw-app.component.sw-app-wrong-app-url-modal.labelLearnMoreButton\') }}\n                </sw-external-link>\n            </template>\n        </sw-alert>\n\n        {% block sw_extension_my_extensions_list_empty_state %}\n\n        <sw-meteor-card\n            v-if="!extensionListPaginated.length && !filterByActiveState"\n            class="sw-extension-my-extensions-listing__empty-state"\n        >\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/extensions-empty-state.svg\')"\n                alt=""\n            >\n\n            <h3 v-if="isThemeRoute">\n                {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.themes.titleEmptyState\') }}\n            </h3>\n            <h3 v-else>\n                {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.apps.titleEmptyState\') }}\n            </h3>\n\n            <p v-if="isThemeRoute">\n                {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.themes.textEmptyState\') }}\n            </p>\n            <p v-else>\n                {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.apps.textEmptyState\') }}\n            </p>\n\n            <sw-button\n                variant="ghost"\n                @click="isThemeRoute ? openThemesStore() : openStore()"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.btnOpenStore\') }}\n            </sw-button>\n        </sw-meteor-card>\n\n        {% endblock %}\n\n        <template v-else>\n            <div class="sw-extension-my-extensions-listing__container">\n                <sw-extension-my-extensions-listing-controls\n                    @update:active-state="changeActiveState"\n                    @update:sorting-option="changeSortingOption"\n                />\n\n                <sw-meteor-card\n                    v-if="!extensionListPaginated.length && filterByActiveState"\n                    class="sw-extension-my-extensions-listing__empty-state"\n                >\n                    <img\n                        :src="assetFilter(\'administration/static/img/empty-states/extensions-empty-state.svg\')"\n                        alt=""\n                    >\n\n                    <h3 v-if="isThemeRoute">\n                        {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.themes.noActivePlugins\') }}\n                    </h3>\n                    <h3 v-else>\n                        {{ $tc(\'sw-extension-store.component.sw-extension-my-extensions-listing.apps.noActivePlugins\') }}\n                    </h3>\n                </sw-meteor-card>\n\n                <template v-else>\n                    <template\n                        v-for="entry in extensionListPaginated"\n                        :key="entry.name"\n                    >\n                        <component\n                            :is="entry.storeLicense ? \'sw-extension-card-bought\' : \'sw-self-maintained-extension-card\'"\n                            :extension="entry"\n                            @update-list="updateList"\n                        />\n                    </template>\n\n                    <sw-pagination\n                        :total="total"\n                        :limit="limit"\n                        :page="page"\n                        @page-change="changePage"\n                    />\n                </template>\n            </div>\n        </template>\n    </div>\n</div>\n',compatConfig:Shopware.compatConfig,inject:["shopwareExtensionService"],data(){return{filterByActiveState:!1,sortingOption:"updated-at"}},computed:{...s("context",{isAppUrlReachable:e=>e.app.config.settings.appUrlReachable}),isLoading(){return Shopware.State.get("shopwareExtensions").myExtensions.loading},myExtensions(){return Shopware.State.get("shopwareExtensions").myExtensions.data},extensionList(){let e=this.filterExtensionsByType(this.myExtensions),t=this.sortExtensions(e,this.sortingOption);return this.filterByActiveState?this.filterExtensionsByActiveState(t):t},extensionListPaginated(){let e=(this.page-1)*this.limit;return this.extensionListSearched.slice(e,e+this.limit)},extensionListSearched(){return this.extensionList.filter(e=>{let t=this.term&&this.term.toLowerCase();if(!this.term)return!0;let n=e.label||"",s=e.name||"";return n.toLowerCase().includes(t)||s.toLowerCase().includes(t)})},isAppRoute(){return"sw.extension.my-extensions.listing.app"===this.$route.name},isThemeRoute(){return"sw.extension.my-extensions.listing.theme"===this.$route.name},total(){return this.extensionListSearched.length||0},limit:{get(){return Number(this.$route.query.limit)||25},set(e){this.updateRouteQuery({limit:e})}},page:{get(){return Number(this.$route.query.page)||1},set(e){this.updateRouteQuery({page:e})}},term:{get(){return this.$route.query.term||void 0},set(e){this.updateRouteQuery({term:e,page:1})}},skeletonVariant(){return this.isThemeRoute?"extension-themes":"extension-apps"},assetFilter(){return Shopware.Filter.getByName("asset")},extensionManagementDisabled(){return Shopware.State.get("context").app.config.settings.disableExtensionManagement}},watch:{"$route.name"(){this.updateList(),this.filterByActiveState=!1}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.updateList(),this.updateRouteQuery()},updateList(){this.shopwareExtensionService.updateExtensionData()},openStore(){this.$router.push({name:"sw.extension.store.listing"})},openThemesStore(){this.$router.push({name:"sw.extension.store.listing.theme"})},updateRouteQuery(e={}){let t=this.$route.query,n=e.limit||this.$route.query.limit,s=e.page||this.$route.query.page,i=e.term||this.$route.query.term,o={name:this.$route.name,params:this.$route.params,query:{limit:n||25,page:s||1,term:i||void 0}};Shopware.Utils.types.isEmpty(t)?this.$router.replace(o):this.$router.push(o)},changePage({page:e,limit:t}){this.updateRouteQuery({page:e,limit:t})},filterExtensionsByType(e){return e.filter(e=>!!this.isAppRoute&&!e.isTheme||!!this.isThemeRoute&&!!e.isTheme)},sortExtensions(e,t){return e.sort((e,n)=>{if("name-asc"===t)return e.label.localeCompare(n.label,{sensitivity:"base"});if("name-desc"===t)return -1*e.label.localeCompare(n.label,{sensitivity:"base"});if("updated-at"===t){if(null===e.updatedAt&&null!==n.updatedAt)return 1;if(null!==e.updatedAt&&null===n.updatedAt)return -1;if(null===n.updatedAt&&null===e.updatedAt)return 0;let t=new Date(e.updatedAt.date),s=new Date(n.updatedAt.date);if(t>s)return -1;if(t<s)return 1}return 0})},changeSortingOption(e){this.sortingOption=e},changeActiveState(e){this.filterByActiveState=e},filterExtensionsByActiveState(e){return e.filter(e=>e.active)}}}},469493:function(e,t,n){var s=n(280598);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,n(745346).Z)("0fa72215",s,!0,{})}}]);