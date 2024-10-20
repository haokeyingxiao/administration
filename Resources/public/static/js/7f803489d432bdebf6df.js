(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[1197],{6934:function(){},601197:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return a}}),i(829227);let{Mixin:o}=Shopware,{Criteria:s,EntityCollection:n}=Shopware.Data,{format:r}=Shopware.Utils;var a={template:'\n{% block sw_import_export_activity %}\n<div class="sw-import-export-activity">\n    \n    {% block sw_import_export_activity_listing %}\n    <sw-entity-listing\n        v-if="showGrid"\n        :repository="logRepository"\n        :items="logs"\n        :columns="exportActivityColumns"\n        sort-by="createdAt"\n        sort-direction="DESC"\n        :show-selection="false"\n        :allow-column-edit="false"\n        :full-page="true"\n    >\n        \n        {% block sw_import_export_activity_listing_size %}\n        <template #column-file.size="{ item }">\n            {{ calculateFileSize(item.file.size) }}\n        </template>\n        {% endblock %}\n        \n        {% block sw_import_export_activity_listing_records %}\n        <template #column-records="{ item }">\n            {{ item.records }}\n        </template>\n        {% endblock %}\n        <template #column-label-invalidRecords="{ column }">\n            {{ $te(column.label) ? $t(column.label) : column.label }}\n            <sw-help-text\n                class="sw-import-export-activity__invalid-records-help-text"\n                :text="$t(\'sw-import-export.activity.invalidHelpText\')"\n            />\n        </template>\n        \n        {% block sw_import_export_activity_listing_invalid_records %}\n        <template #column-invalidRecords="{ item }">\n            <template v-if="item.invalidRecordsLog">\n                {{ item.invalidRecordsLog.records }}\n            </template>\n            <template v-else>\n                0\n            </template>\n        </template>\n        {% endblock %}\n        \n        {% block sw_import_export_activity_listing_createdAt %}\n        <template #column-createdAt="{ item }">\n            <sw-label\n                v-if="item.activity === \'dryrun\'"\n                size="small"\n                appearance="pill"\n            >\n                {{ $t(\'sw-import-export.activity.dryrun\') }}\n            </sw-label>\n            <a\n                href="#"\n                @click.prevent="onShowLog(item)"\n            >\n                {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n            </a>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_activity_listing_state %}\n        <template #column-state="{ item }">\n            <sw-color-badge\n                v-if="item.state === \'failed\'"\n                variant="error"\n                rounded\n            />\n            <sw-color-badge\n                v-else-if="item.state === \'succeeded\'"\n                variant="success"\n                rounded\n            />\n            <sw-color-badge\n                v-else\n                rounded\n            />\n            <span :class="getStateClass(item.state)">{{ getStateLabel(item.state) }}</span>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_activity_listing_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_import_export_activity_listing_actions_show_results %}\n            <sw-context-menu-item\n                v-if="item.result && Object.keys(item.result).length"\n                class="sw-import-export-activity__results-action"\n                @click="onShowResult(item)"\n            >\n                {{ $t(\'sw-import-export.activity.contextMenu.showResults\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_show_log_info %}\n            <sw-context-menu-item\n                v-if="type === \'export\'"\n                class="sw-import-export-activity__log-info-action"\n                @click="onShowLog(item)"\n            >\n                {{ $t(\'sw-import-export.activity.contextMenu.showLogInfo\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_download_file %}\n            <a\n                class="sw-import-export-activity__download-action"\n                role="button"\n                tabindex="0"\n                @click="openProcessFileDownload(item)"\n                @keydown.enter="openProcessFileDownload(item)"\n            >\n                <sw-context-menu-item :disabled="type === \'export\' && item.state !== \'succeeded\'">\n                    {{ downloadFileText }}\n                </sw-context-menu-item>\n            </a>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_open_profile %}\n            <sw-context-menu-item @click="onOpenProfile(item.profileId)">\n                {{ $t(\'sw-import-export.activity.contextMenu.showProfile\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_abort_process %}\n            <sw-context-menu-item\n                v-if="item.state === \'progress\'"\n                class="sw-import-export-activity__abort-process-action"\n                variant="danger"\n                @click="onAbortProcess(item)"\n            >\n                {{ $t(\'sw-import-export.activity.contextMenu.abortProcess\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_download_invalid %}\n            <template v-if="item.invalidRecordsLog">\n                <a\n                    class="sw-import-export-activity__download-action"\n                    role="button"\n                    tabindex="0"\n                    @click="openProcessFileDownload(item.invalidRecordsLog)"\n                    @keydown.enter="openProcessFileDownload(item.invalidRecordsLog)"\n                >\n                    <sw-context-menu-item>\n                        {{ $t(\'sw-import-export.activity.contextMenu.downloadInvalidFile\') }}\n                    </sw-context-menu-item>\n                </a>\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-entity-listing>\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_spinner %}\n    <sw-loader v-else-if="showSpinner" />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_empty_state %}\n    <sw-empty-state\n        v-if="showEmptyState"\n        :title="emptyStateTitle"\n        :subline="emptyStateSubLine"\n        :absolute="false"\n        icon="regular-database"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_log_info_modal %}\n    <sw-import-export-activity-log-info-modal\n        v-if="showDetailModal"\n        :log-entity="selectedLog"\n        @log-close="closeSelectedLog"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_result_modal %}\n    <sw-import-export-activity-result-modal\n        v-if="showResultModal"\n        :log-entity="selectedLog"\n        :result="selectedResult"\n        @result-close="closeSelectedResult"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_modal %}\n    <sw-import-export-edit-profile-modal\n        v-if="selectedProfile"\n        :profile="selectedProfile"\n        @profile-save="saveSelectedProfile"\n        @profile-close="closeSelectedProfile"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","importExport","feature"],mixins:[o.getByName("notification")],props:{type:{type:String,required:!1,default:"import",validValues:["import","export"],validator(t){return["import","export"].includes(t)}}},data(){return{logs:new n("/import-export-log","import_export_log",null),isLoading:!1,selectedProfile:null,selectedLog:null,selectedResult:null,activitiesReloadIntervall:1e4,activitiesReloadTimer:null,showDetailModal:!1,showResultModal:!1,stateText:{import:{succeeded:"sw-import-export.importer.messageImportSuccess",failed:"sw-import-export.importer.messageImportError"},dryrun:{succeeded:"sw-import-export.importer.messageImportSuccess",failed:"sw-import-export.importer.messageImportError"},export:{succeeded:"sw-import-export.exporter.messageExportSuccess",failed:"sw-import-export.exporter.messageExportError"}}}},computed:{logRepository(){return this.repositoryFactory.create("import_export_log")},profileRepository(){return this.repositoryFactory.create("import_export_profile")},activityCriteria(){let t=new Shopware.Data.Criteria;return"import"===this.type?t.addFilter(s.multi("OR",[s.equals("activity","import"),s.equals("activity","dryrun")])):"export"===this.type&&t.addFilter(s.equals("activity","export")),t.addSorting(s.sort("createdAt","DESC")),t.setPage(1),t.addAssociation("user"),t.addAssociation("file"),t.addAssociation("profile"),t.getAssociation("invalidRecordsLog").addAssociation("file"),t},exportActivityColumns(){return[{property:"createdAt",dataIndex:"createdAt",label:"sw-import-export.activity.columns.date",allowResize:!0,primary:!0},{property:"profileName",dataIndex:"profile.label",label:"sw-import-export.activity.columns.profile",allowResize:!0,primary:!1},{property:"state",dataIndex:"state",label:"sw-import-export.activity.columns.state",allowResize:!0,primary:!1},{property:"records",dataIndex:"records",label:"sw-import-export.activity.columns.records",allowResize:!0,primary:!1},..."import"===this.type?[{property:"invalidRecords",dataIndex:"records",label:"sw-import-export.activity.columns.invalidRecords",allowResize:!0,primary:!1}]:[],{property:"file.size",dataIndex:"file.size",label:"sw-import-export.activity.columns.size",allowResize:!0,primary:!1},{property:"user.lastName",dataIndex:"user.lastName",label:"sw-import-export.activity.columns.user",allowResize:!0,primary:!1}]},hasActivitiesInProgress(){return this.logs.filter(t=>"progress"===t.state).length>0},downloadFileText(){return"export"===this.type?this.$t("sw-import-export.activity.contextMenu.downloadExportFile"):this.$t("sw-import-export.activity.contextMenu.downloadImportFile")},showGrid(){return!this.isLoading&&!!this.logs.length>0},showEmptyState(){return!this.isLoading&&0>=!!this.logs.length},showSpinner(){return this.isLoading},emptyStateSubLine(){return"export"===this.type?this.$t("sw-import-export.activity.emptyState.subLineExport"):this.$t("sw-import-export.activity.emptyState.subLineImport")},emptyStateTitle(){return"export"===this.type?this.$t("sw-import-export.activity.emptyState.titleExport"):this.$t("sw-import-export.activity.emptyState.titleImport")},dateFilter(){return Shopware.Filter.getByName("date")}},watch:{hasActivitiesInProgress(t){t&&!this.activitiesReloadTimer?this.activitiesReloadTimer=window.setInterval(this.updateActivitiesInProgress.bind(this),this.activitiesReloadIntervall):this.activitiesReloadTimer&&(window.clearInterval(this.activitiesReloadTimer),this.activitiesReloadTimer=null)}},created(){this.createdComponent()},unmounted(){this.activitiesReloadTimer&&window.clearInterval(this.activitiesReloadTimer)},methods:{createdComponent(){return this.fetchActivities()},addActivity(t){this.logs.addAt(t,0)},async fetchActivities(){this.isLoading=!0,this.logRepository.search(this.activityCriteria).then(t=>t instanceof n?(this.updateActivitiesFromLogs(t),this.logs=t,Promise.resolve()):Promise.reject(Error(this.$t("global.notification.notificationLoadingDataErrorMessage")))).catch(t=>{this.createNotificationError({message:t?.message??this.$t("global.notification.notificationLoadingDataErrorMessage")})}).finally(()=>{this.isLoading=!1})},async updateActivitiesInProgress(){let t=s.fromCriteria(this.activityCriteria);t.setIds(this.logs.filter(t=>"progress"===t.state).getIds()),t.addAssociation("file"),this.logRepository.search(t).then(t=>t instanceof n?(this.updateActivitiesFromLogs(t),Promise.resolve()):Promise.reject(Error(this.$t("global.notification.notificationLoadingDataErrorMessage")))).catch(t=>{this.createNotificationError({message:t?.message??this.$t("global.notification.notificationLoadingDataErrorMessage")})})},updateActivitiesFromLogs(t){t.forEach(t=>{let e=this.logs.get(t.id);if(!e)return;let i=e.state;if(Object.keys(t).forEach(i=>{e[i]=t[i]}),i===t.state)return;let o={message:this.$tc(this.stateText?.[t.activity]?.[t.state]??"","failed"===t.state&&t.invalidRecordsLog?2:1,{profile:t.profileName})};if("succeeded"===t.state){this.createNotificationSuccess(o),"import"===t.activity&&0===t.records&&this.createNotificationWarning({message:this.$t("sw-import-export.importer.messageImportWarning")});return}this.createNotificationError(o)})},async onOpenProfile(t){this.profileRepository.get(t).then(t=>{this.selectedProfile=t}).catch(t=>{this.createNotificationError({message:t?.message??this.$t("global.notification.notificationLoadingDataErrorMessage")})})},onAbortProcess(t){this.importExport.cancel(t.id).then(()=>{this.fetchActivities()})},closeSelectedProfile(){this.selectedProfile=null},onShowLog(t){this.selectedLog=t,this.showDetailModal=!0},onShowResult(t){this.selectedLog=t,this.showResultModal=!0},closeSelectedLog(){this.selectedLog=null,this.showDetailModal=!1},closeSelectedResult(){this.selectedResult=null,this.showResultModal=!1},async openProcessFileDownload(t){return"export"===this.type&&"succeeded"!==t.state?null:window.open(await this.importExport.getDownloadUrl(t.fileId),"_blank")},saveSelectedProfile(){this.isLoading=!0,this.profileRepository.save(this.selectedProfile).then(()=>{this.selectedProfile=null,this.createNotificationSuccess({message:this.$t("sw-import-export.profile.messageSaveSuccess")})}).catch(()=>{this.createNotificationError({message:this.$t("sw-import-export.profile.messageSaveError")})}).finally(()=>{this.isLoading=!1})},calculateFileSize(t){return r.fileSize(t)},getStateLabel(t){let e=`sw-import-export.activity.status.${t}`;return this.$te(e)?this.$t(e):t},getStateClass(t){return{"sw-import-export-activity__progress-indicator":"progress"===t}}}}},829227:function(t,e,i){var o=i(6934);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,i(745346).Z)("6eb2c423",o,!0,{})}}]);