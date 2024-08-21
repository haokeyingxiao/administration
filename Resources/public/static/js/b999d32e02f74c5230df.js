(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[90168],{212131:function(){},590168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(687383);n(572337);let{Context:i,Mixin:a}=Shopware,{Criteria:r}=Shopware.Data;var l={template:'\n{% block sw_settings_tag_detail_assignments %}\n<div class="sw-settings-tag-detail-assignments">\n    \n    {% block sw_settings_tag_detail_assignments_card %}\n    <sw-card\n        class="sw-settings-tag-detail-assignments__card"\n        position-identifier="sw-settings-tag-detail-assignments-card"\n        large\n    >\n        <template #toolbar>\n            \n            {% block sw_settings_tag_detail_assignments_toolbar %}\n            <sw-card-filter\n                :placeholder="$tc(\'sw-settings-tag.detail.assignments.searchPlaceholder\')"\n                @sw-card-filter-term-change="onTermChange"\n            />\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_settings_tag_detail_assignments_header %}\n        <sw-container columns="1fr 1fr">\n            \n            {% block sw_settings_tag_detail_assignments_header_selected_filter %}\n            <sw-card-section\n                class="sw-settings-tag-detail-assignments__filter-selected"\n                divider="bottom"\n            >\n                <sw-switch-field\n                    v-model:value="showSelected"\n                    :disabled="isLoading"\n                    :label="$tc(\'sw-settings-tag.detail.assignments.showSelected\')"\n                />\n            </sw-card-section>\n            {% endblock %}\n            \n            {% block sw_settings_tag_detail_assignments_header_total_selected %}\n            <sw-card-section\n                class="sw-settings-tag-detail-assignments__total-selected"\n                divider="bottom"\n            >\n                {{ totalAssignments }} {{ $tc(\'sw-settings-tag.detail.assignments.selected\') }}\n            </sw-card-section>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n\n        <template #grid>\n            \n            {% block sw_settings_tag_detail_assignments_grid %}\n            <sw-container columns="300px 1fr">\n                <sw-card-section divider="right">\n                    \n                    {% block sw_settings_tag_detail_assignments_associations_grid %}\n                    <sw-data-grid\n                        class="sw-settings-tag-detail-assignments__associations-grid"\n                        :data-source="assignmentAssociations"\n                        :columns="assignmentAssociationsColumns"\n                        :v-bind="$attrs"\n                        :show-selection="false"\n                        :show-actions="false"\n                        :show-header="false"\n                        :plain-appearance="true"\n                        :full-page="true"\n                        item-identifier-property="entity"\n                    >\n                        <template #column-name="{ item }">\n                            \n                            {% block sw_settings_tag_detail_assignments_associations_grid_column_name %}\n                            <sw-button\n                                class="associations-grid__row"\n                                :class="{ \'is--selected\': item.entity === selectedEntity }"\n                                :disabled="isLoading"\n                                @click.prevent="onAssignmentChange(item)"\n                            >\n                                <sw-icon\n                                    v-if="item.entity === selectedEntity"\n                                    name="regular-folder-open"\n                                    small\n                                />\n                                <sw-icon\n                                    v-else\n                                    name="regular-folder"\n                                    small\n                                />\n                                <span>\n                                    {{ item.name }}\n                                </span>\n                                <span\n                                    v-if="getCount(item.assignment)"\n                                    class="associations-grid__count"\n                                >\n                                    {{ getCount(item.assignment) }}\n                                    {{ $tc(\'sw-settings-tag.detail.assignments.assignments\', getCount(item.assignment)) }}\n                                </span>\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n\n                        <template #actions="{ item }">\n                        </template>\n                    </sw-data-grid>\n                    {% endblock %}\n                </sw-card-section>\n                <sw-card-section>\n                    \n                    {% block sw_settings_tag_detail_assignments_entities_grid %}\n                    <sw-entity-listing\n                        :key="entitiesGridKey"\n                        class="sw-settings-tag-detail-assignments__entities-grid"\n                        :items="entities"\n                        :columns="entitiesColumns"\n                        :repository="entityRepository"\n                        :plain-appearance="true"\n                        :compact-mode="true"\n                        :show-selection="true"\n                        :show-actions="false"\n                        :show-header="true"\n                        :is-loading="isLoading"\n                        :disable-data-fetching="true"\n                        :pre-selection="selectedAssignments"\n                        :allow-inline-edit="false"\n                        :allow-delete="false"\n                        @page-change="onPageChange"\n                        @select-item="onSelectionChange"\n                    >\n                        <template #selection-content="{ item, isSelected, selectItem, itemIdentifierProperty }">\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_selection_content %}\n                            <div class="sw-data-grid__cell-content">\n                                \n                                {% block sw_settings_tag_detail_assignments_entities_grid_select_item_checkbox %}\n                                <sw-checkbox-field\n                                    v-if="isInherited(item.id, item.parentId)"\n                                    :key="`${itemIdentifierProperty}-inherited`"\n                                    :value="hasInheritedTag(item.id, item.parentId)"\n                                    :disabled="true"\n                                />\n                                <sw-checkbox-field\n                                    v-else\n                                    :key="itemIdentifierProperty"\n                                    :value="isSelected(item[itemIdentifierProperty])"\n                                    @update:value="selectItem($event, item)"\n                                />\n                                {% endblock %}\n                            </div>\n                            {% endblock %}\n                        </template>\n\n                        <template #column-name="{ item, selectItem }">\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_inheritance_switch %}\n                            <sw-inheritance-switch\n                                v-if="isInheritable && item.parentId && parentHasTags(item.id, item.parentId)"\n                                :is-inherited="isInherited(item.id, item.parentId)"\n                                :disabled="!isInherited(item.id, item.parentId)"\n                                @inheritance-remove="selectItem(true, item)"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_product %}\n                            <sw-product-variant-info\n                                v-if="selectedEntity === \'product\'"\n                                :variations="item.variation"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.translated.name || item.name"\n                                />\n                            </sw-product-variant-info>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_category %}\n                            <template\n                                v-else-if="selectedEntity === \'category\'"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.translated ? item.translated.name : item.name"\n                                />\n                                <sw-highlight-text\n                                    v-if="item.breadcrumb && item.breadcrumb.length > 1"\n                                    :text="item.breadcrumb.join(\' / \')"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_customer %}\n                            <template\n                                v-else-if="selectedEntity === \'customer\'"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="`${item.firstName} ${item.lastName}`"\n                                />\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.customerNumber"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_order %}\n                            <template\n                                v-else-if="selectedEntity === \'order\'"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="`${item.orderCustomer.firstName} ${item.orderCustomer.lastName}`"\n                                />\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.orderNumber"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_media %}\n                            <template\n                                v-else-if="selectedEntity === \'media\'"\n                            >\n                                <sw-media-preview-v2\n                                    :source="item.id"\n                                    :media-is-private="item.private"\n                                />\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="`${item.fileName}.${item.fileExtension}`"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_newsletter_recipient %}\n                            <sw-highlight-text\n                                v-else-if="selectedEntity === \'newsletter_recipient\'"\n                                :search-term="term"\n                                :text="`${item.firstName} ${item.lastName}`"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_default %}\n                            <sw-highlight-text\n                                v-else\n                                :search-term="term"\n                                :text="item.translated ? item.translated.name : item.name"\n                            />\n                            {% endblock %}\n                        </template>\n                    </sw-entity-listing>\n                    {% endblock %}\n                </sw-card-section>\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inheritAttrs:!1,inject:["repositoryFactory"],emits:["remove-assignment","add-assignment"],mixins:[a.getByName("listing")],props:{tag:{type:Object,required:!0},toBeAdded:{type:Object,required:!0},toBeDeleted:{type:Object,required:!0},initialCounts:{type:Object,required:!1,default(){return{}}},property:{type:String,required:!1,default:null},entity:{type:String,required:!1,default:null}},data(){return{selectedEntity:this.entity??"product",selectedAssignment:this.property??"products",entitiesGridKey:null,preSelected:{},entities:null,isLoading:!1,showSelected:this.property&&this.entity,counts:{...this.initialCounts},currentPageCountBuckets:[],disableRouteParams:!0,page:1,limit:25}},computed:{tagDefinition(){return Shopware.EntityDefinition.get("tag")},isInheritable(){return Shopware.EntityDefinition.get(this.selectedEntity)?.properties?.tags?.flags?.inherited===!0},assignmentAssociations(){let e=[];return Object.entries(this.tagDefinition.properties).forEach(([t,n])=>{"many_to_many"===n.relation&&e.push({name:this.$tc(`sw-settings-tag.detail.assignments.${t}`),entity:n.entity,assignment:t})}),e},assignmentAssociationsColumns(){return[{property:"name",dataIndex:"name",primary:!0,allowResize:!1,sortable:!1}]},entityRepository(){return this.repositoryFactory.create(this.selectedEntity)},entityCriteria(){let e=new r(this.page,this.limit);if(e.setTerm(this.term),e.addSorting(r.sort("createdAt","DESC")),"product"===this.selectedEntity&&e.addAssociation("options.group"),"order"===this.selectedEntity&&e.addAssociation("orderCustomer"),this.isInheritable&&this.addTagAggregations(e),!this.showSelected)return e;let t=Object.keys(this.toBeAdded[this.selectedAssignment]),n=Object.keys(this.toBeDeleted[this.selectedAssignment]).filter(e=>{let t=this.toBeDeleted[this.selectedAssignment][e].parentId;return!this.isInheritable||!t||!this.isInherited(e,t)||!this.hasInheritedTag(e,t)});return t.length?e.addFilter(r.multi("OR",[r.equals("tags.id",this.tag.id),r.equalsAny("id",t)])):e.addFilter(r.equals("tags.id",this.tag.id)),n.length&&e.addFilter(r.not("AND",[r.equalsAny("id",n)])),e},entitiesColumns(){return[{property:"name",primary:!0,allowResize:!1,sortable:!1}]},selectedAssignments(){let e=new Proxy({...this.preSelected},{get(e,t){return e[t]},set(e,t,n){return e[t]=n,!0}});return Object.values(this.toBeAdded[this.selectedAssignment]).forEach(t=>{this.isCompatEnabled("INSTANCE_SET")?this.$set(e,t.id,t):e[t.id]=t}),Object.values(this.toBeDeleted[this.selectedAssignment]).forEach(t=>{e.hasOwnProperty(t.id)&&(this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(e,t.id):delete e[t.id])}),e},totalAssignments(){let e=0;return Object.values(this.counts).forEach(t=>{e+=t}),e}},watch:{selectedEntity(){this.page=1,this.getList()},showSelected(){this.page=1,this.getList()}},methods:{getList(){this.isLoading=!0;let e=this.entityCriteria;return this.showSelected&&this.isInheritable?this.searchInheritedEntities(e).then(()=>this.search(e)).catch(()=>{this.isLoading=!1}):this.search(e)},search(e){return this.entityRepository.search(e,{...i.api,inheritance:!0}).then(e=>{if(this.tag.isNew()||0===e.total)return this.entitiesGridKey=s.ZP.createId(),this.total=e.total,this.entities=e,this.isLoading=!1,null;let t=e.map(({id:e})=>e),n=new r(1,this.limit);return n.addFilter(r.equalsAny("id",t)),this.isInheritable&&this.addTagAggregations(n,!1),n.addPostFilter(r.equals("tags.id",this.tag.id)),this.entityRepository.search(n).then(t=>{this.isInheritable&&(this.currentPageCountBuckets=t.aggregations.tags.buckets);let n={};t.forEach(e=>{n[e.id]=e}),this.preSelected=n,this.entitiesGridKey=s.ZP.createId(),this.total=e.total,this.entities=e,this.isLoading=!1})}).catch(()=>{this.isLoading=!1})},addTagAggregations(e,t=!0){let n=r.count("tags",`${this.selectedEntity}.tags.id`);t&&(n=r.filter("tags",[r.equals("tags.id",this.tag.id)],n),e.addAggregation(r.terms("parentTags","id",null,null,r.count("parentTags",`${this.selectedEntity}.parent.tags.id`)))),e.addAggregation(r.terms("tags","id",null,null,n))},searchInheritedEntities(e){let t=Object.keys(this.toBeAdded[this.selectedAssignment]),n=Object.keys(this.toBeDeleted[this.selectedAssignment]);if(!t.length&&!n.length)return Promise.resolve();let s=Promise.resolve(),i=Promise.resolve();if(t.length){let n=new r(1,25);n.addFilter(r.multi("AND",[r.equals("tags.id",null),r.equalsAny("parentId",t)])),s=this.entityRepository.searchIds(n).then(({data:t,total:n})=>{0!==n&&(e.filters=[r.multi("OR",[r.multi("AND",e.filters),r.equalsAny("id",t)])])})}if(n.length){let s=new r(1,25);s.addFilter(r.equals("tags.id",null)),s.addFilter(r.equalsAny("parentId",n)),t.length&&s.addFilter(r.not("AND",[r.equalsAny("id",t)])),i=this.entityRepository.searchIds(s).then(({data:t,total:n})=>{0!==n&&e.addFilter(r.not("AND",[r.equalsAny("id",t)]))})}return Promise.all([s,i])},async onTermChange(e){this.term=e,this.page=1,await this.getList()},onAssignmentChange({entity:e,assignment:t}){this.selectedEntity=e,this.selectedAssignment=t},onSelectionChange(e,t,n){let s=t.id;if(!n){this.$emit("remove-assignment",this.selectedAssignment,s,t),this.countDecrease(this.selectedAssignment);return}this.$emit("add-assignment",this.selectedAssignment,s,t),this.countIncrease(this.selectedAssignment)},getCount(e){return this.counts.hasOwnProperty(e)?this.counts[e]:null},countIncrease(e){this.counts.hasOwnProperty(e)?this.counts[e]+=1:this.isCompatEnabled("INSTANCE_SET")?this.$set(this.counts,e,1):this.counts[e]=1},countDecrease(e){this.counts.hasOwnProperty(e)&&0!==this.counts[e]?this.counts[e]-=1:this.isCompatEnabled("INSTANCE_SET")?this.$set(this.counts,e,0):this.counts[e]=0,this.showSelected&&(this.page>1&&1===this.entities.length&&(this.page-=1),this.getList())},isInherited(e,t){if(!this.isInheritable||!t||this.toBeAdded[this.selectedAssignment].hasOwnProperty(e))return!1;let n=this.toBeDeleted[this.selectedAssignment].hasOwnProperty(e);return!(this.currentPageCountBuckets.filter(({key:t,tags:s})=>t===e&&(n?s.count-1:s.count)>0).length>0)&&this.parentHasTags(e,t)},parentHasTags(e,t){let n=this.toBeDeleted[this.selectedAssignment].hasOwnProperty(t);return this.entities.aggregations.parentTags.buckets.filter(({key:t,parentTags:s})=>t===e&&(n?s.count-1:s.count)>0).length>0||this.toBeAdded[this.selectedAssignment].hasOwnProperty(t)},hasInheritedTag(e,t){let n=this.toBeAdded[this.selectedAssignment].hasOwnProperty(t),s=this.toBeDeleted[this.selectedAssignment].hasOwnProperty(t);return this.preSelected.hasOwnProperty(e)||this.toBeDeleted[this.selectedAssignment].hasOwnProperty(e)?n||this.preSelected.hasOwnProperty(t)&&!s:(this.entities.aggregations.tags.buckets.filter(t=>t.key===e).length>0||n)&&!s},onPageChange({page:e,limit:t}){this.page=e,this.limit=t,this.getList()}}}},572337:function(e,t,n){var s=n(212131);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,n(745346).Z)("05813ba6",s,!0,{})}}]);