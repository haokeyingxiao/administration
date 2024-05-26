"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[46670],{946670:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});let{Mixin:a}=Shopware,{Criteria:r}=Shopware.Data;var s={template:'\n{% block sw_manufacturer_list %}\n<sw-page class="sw-manufacturer-list">\n    \n    {% block sw_manufacturer_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="product_manufacturer"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_manufacturer_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_manufacturer_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_manufacturer_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-manufacturer.list.textManufacturerOverview\') }}\n            {% endblock %}\n\n            \n            {% block sw_manufacturer_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_manufacturer_list_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_manufacturer_list_smart_bar_actions %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'product_manufacturer.creator\'),\n                showOnDisabledElements: true\n            }"\n            :router-link="{ name: \'sw.manufacturer.create\' }"\n            :disabled="!acl.can(\'product_manufacturer.creator\')"\n            class="sw-manufacturer-list__add-manufacturer"\n            variant="primary"\n        >\n            {{ $tc(\'sw-manufacturer.list.buttonAddManufacturer\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_manufacturer_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    <template #content>\n        \n        {% block sw_manufacturer_list_content %}\n        <div class="sw-manufacturer-list__content">\n            \n            {% block sw_manufacturer_list_grid %}\n            <sw-entity-listing\n                v-if="entitySearchable"\n                class="sw-manufacturer-list__grid"\n                detail-route="sw.manufacturer.detail"\n                :is-loading="isLoading"\n                :columns="manufacturerColumns"\n                :repository="manufacturerRepository"\n                :items="manufacturers"\n                :criteria-limit="limit"\n                :sort-by="currentSortBy"\n                :sort-direction="sortDirection"\n                :disable-data-fetching="true"\n                :allow-edit="acl.can(\'product_manufacturer.editor\')"\n                :allow-inline-edit="acl.can(\'product_manufacturer.editor\')"\n                :allow-delete="acl.can(\'product_manufacturer.deleter\')"\n                :show-selections="acl.can(\'product_manufacturer.deleter\')"\n                identifier="sw-manufacturer-list"\n                @update-records="updateTotal"\n                @page-change="onPageChange"\n                @column-sort="onSortColumn"\n            >\n                \n                {% block sw_manufacturer_list_grid_columns_name_preview %}\n                <template #preview-name="{ item }">\n                    <sw-media-preview-v2 :source="item.mediaId" />\n                </template>\n                {% endblock %}\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_manufacturer_list_empty_state %}\n            <sw-empty-state\n                v-if="!isLoading && !total && isValidTerm(term)"\n                :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n            >\n                <template #default>\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                    <router-link\n                        class="sw-empty-state__description-link"\n                        :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                    >\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                    </router-link>\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                </template>\n            </sw-empty-state>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n    </template>\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[a.getByName("listing")],data(){return{manufacturers:null,isLoading:!0,sortBy:"name",sortDirection:"ASC",total:0,searchConfigEntity:"product_manufacturer"}},metaInfo(){return{title:this.$createTitle()}},computed:{manufacturerRepository(){return this.repositoryFactory.create("product_manufacturer")},manufacturerColumns(){return[{property:"name",dataIndex:"name",allowResize:!0,routerLink:"sw.manufacturer.detail",label:"sw-manufacturer.list.columnName",inlineEdit:"string",primary:!0},{property:"link",label:"sw-manufacturer.list.columnLink",inlineEdit:"string"}]},manufacturerCriteria(){let t=new r(this.page,this.limit);return t.setTerm(this.term),t.addSorting(r.sort(this.sortBy,this.sortDirection,this.naturalSorting)),t}},methods:{onChangeLanguage(t){this.getList(t)},async getList(){this.isLoading=!0;let t=await this.addQueryScores(this.term,this.manufacturerCriteria);return this.entitySearchable?(this.freshSearchTerm&&t.resetSorting(),this.manufacturerRepository.search(t).then(t=>{this.manufacturers=t,this.total=t.total,this.isLoading=!1})):(this.isLoading=!1,this.total=0,!1)},updateTotal({total:t}){this.total=t}}}}}]);