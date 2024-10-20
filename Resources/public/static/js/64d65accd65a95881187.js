(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[15246],{717336:function(){},915246:function(e,i,a){"use strict";a.r(i),a.d(i,{default:function(){return o}}),a(941739);let{Mixin:n,Context:t,Utils:s}=Shopware,{dom:l,format:d}=s;var o={template:'\n{% block sw_media_quickinfo %}\n<div class="sw-media-quickinfo">\n    \n    {% block sw_media_quickinfo_broken_file %}\n    <sw-alert\n        v-if="!item.hasFile"\n        class="sw-media-quickinfo__alert-file-missing"\n        variant="warning"\n        :title="$tc(\'sw-media.sidebar.infoMissingFile.titleMissingFile\')"\n    >\n        {{ $tc(\'sw-media.sidebar.infoMissingFile.descriptionMissingFile\') }}\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_quickactions %}\n    <sw-media-collapse\n        v-if="editable"\n        :title="$tc(\'sw-media.sidebar.sections.actions\')"\n        :expand-on-loading="true"\n    >\n\n        <template #content>\n            \n            {% block sw_media_quickinfo_quickactions_content %}\n            <ul class="sw-media-sidebar__quickactions-list">\n                \n                {% block sw_media_quickinfo_quickactions_replace %}\n                <li\n                    v-if="!item.private"\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--replace"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalReplace"\n                    @keydown.enter="openModalReplace"\n                >\n                    <sw-icon\n                        small\n                        name="regular-files"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.replace\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_quickactions_download %}\n                <li\n                    v-if="item.hasFile"\n                    class="sw-media-sidebar__quickaction quickaction--download"\n                >\n                    <sw-external-link\n                        :href="item.url"\n                        download\n                    >\n\n                        <sw-icon\n                            small\n                            name="regular-cloud-download"\n                            class="sw-media-sidebar__quickactions-icon"\n                        />\n                        {{ $tc(\'sw-media.sidebar.actions.download\') }}\n                    </sw-external-link>\n                </li>\n                {% endblock %}\n                \n                {% block sw_media_quickinfo_quickactions_move %}\n                <li\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--move"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalMove"\n                    @keydown.enter="openModalMove"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-file-export"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.move\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_quickactions_copy_link %}\n                <li\n                    v-if="item.hasFile"\n                    class="sw-media-sidebar__quickaction quickaction--copy-link"\n                    role="button"\n                    tabindex="0"\n                    @click="copyLinkToClipboard"\n                    @keydown.enter="copyLinkToClipboard"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-link"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.copyLink\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_quickactions_delete %}\n                <li\n                    v-if="!item.private"\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.deleter\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--delete"\n                    :class="quickActionClasses(!acl.can(\'media.deleter\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalDelete"\n                    @keydown.enter="openModalDelete"\n                >\n                    <sw-icon\n                        small\n                        name="regular-trash"\n                        class="sw-media-sidebar__quickactions-icon is--danger"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.delete\') }}\n                </li>\n                {% endblock %}\n            </ul>\n            {% endblock %}\n        </template>\n    </sw-media-collapse>\n    {% endblock %}\n\n    {# @experimental stableVersion:v6.7.0 feature:SPATIAL_BASES #}\n    {% block sw_media_quickinfo_spatial_configuration %}\n    <sw-media-collapse\n        v-if="isSpatial"\n        :title="$tc(\'sw-media.sidebar.sections.configuration\')"\n        :expand-on-loading="true"\n    >\n        <template #content>\n            <sw-inherit-wrapper\n                v-model:value="arReady"\n                :inherited-value="defaultArReady"\n                @update:value="toggleAR"\n            >\n                <template #content="props">\n                    <sw-switch-field\n                        :map-inheritance="props"\n                        :help-text="buildAugmentedRealityTooltip(\'sw-media.sidebar.actions.arHelpText\')"\n                        :label="$tc(\'sw-media.sidebar.actions.ar\')"\n                        :disabled="props.isInherited || !editable"\n                        :value="props.currentValue"\n                        class="sw-media-sidebar__quickactions-switch ar-ready-toggle"\n                        @update:value="props.updateCurrentValue"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n        </template>\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_preview %}\n    <sw-media-collapse\n        v-if="item.hasFile"\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.preview\')"\n    >\n\n        \n        {% block sw_media_quickinfo_preview_content %}\n        <template #content>\n            <div>\n                \n                {% block sw_media_quickinfo_preview_item %}\n                <sw-media-preview-v2\n                    class="sw-media-quickinfo__media-preview"\n                    :source="item.id"\n                    :show-controls="true"\n                    :use-thumbnails="false"\n                />\n                {% endblock %}\n            </div>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_metadata %}\n    <sw-media-collapse\n        v-if="item.hasFile"\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.metadata\')"\n    >\n\n        \n        {% block sw_media_quickinfo_metadata_content %}\n        <template #content>\n            <dl class="sw-media-sidebar__metadata-list">\n                \n                {% block sw_media_quickinfo_metadata_content_base %}\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-name"\n                    :class="fileNameClasses"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.name\')"\n                    :truncated="false"\n                >\n\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldName"\n                        class="sw-media-quickinfo-metadata-name"\n                        :disabled="!acl.can(\'media.editor\')"\n                        compact\n                        :value="item.fileName"\n                        :error="fileNameError"\n                        @input="onChangeFileName"\n                        @remove-error="onRemoveFileNameError"\n                    /><template v-else>\n                        {{ item.fileName }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-file-type"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.fileType\')"\n                >\n                    {{ item.fileExtension.toUpperCase() }}\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-alt-field"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.altText\')"\n                    :truncated="false"\n                >\n\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldAlt"\n                        :disabled="!acl.can(\'media.editor\')"\n                        compact\n                        :placeholder="placeholder(item, \'alt\', $tc(\'sw-media.sidebar.metadata.altText\'))"\n                        :value="item.alt"\n                        @input="onSubmitAltText"\n                    /><template v-else>\n                        {{ placeholder(item, \'alt\') }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-alt-field"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.title\')"\n                    :truncated="false"\n                >\n\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldTitle"\n                        :disabled="!acl.can(\'media.editor\')"\n                        compact\n                        :value="item.title"\n                        :placeholder="placeholder(item, \'title\', $tc(\'sw-media.sidebar.metadata.title\'))"\n                        @input="onSubmitTitle"\n                    /><template v-else>\n                        {{ placeholder(item, \'title\') }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-mimeType"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.mimeType\')"\n                >\n                    {{ item.mimeType }}\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-size"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.fileSize\')"\n                >\n                    {{ fileSize }}\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-createdAt"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.createdAt\')"\n                >\n                    {{ createdAt }}\n                </sw-media-quickinfo-metadata-item>\n                {% endblock %}\n\n                <template v-if="item.metaData">\n                    \n                    {% block sw_media_quickinfo_metadata_specific_meta_data %}\n                    <template v-if="item.mediaType.name === \'IMAGE\'">\n                        \n                        {% block sw_media_quickinfo_metadata_content_image %}\n                        <sw-media-quickinfo-metadata-item\n                            v-if="item.metaData.width"\n                            class="sw-media-quickinfo-metadata-width"\n                            :label-name="$tc(\'sw-media.sidebar.metadata.width\')"\n                        >\n                            {{ item.metaData.width }}px\n                        </sw-media-quickinfo-metadata-item>\n\n                        <sw-media-quickinfo-metadata-item\n                            v-if="item.metaData.height"\n                            class="sw-media-quickinfo-metadata-height"\n                            :label-name="$tc(\'sw-media.sidebar.metadata.height\')"\n                        >\n                            {{ item.metaData.height }}px\n                        </sw-media-quickinfo-metadata-item>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </template>\n            </dl>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_tags %}\n    <sw-media-tag\n        :disabled="!acl.can(\'media.editor\')"\n        :media="item"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_usage %}\n    <sw-media-collapse\n        v-if="editable && item.hasFile"\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.usage\')"\n    >\n\n        <template #content>\n            <sw-media-quickinfo-usage :item="item" />\n        </template>\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_modal_replace %}\n    <sw-media-modal-replace\n        v-if="showModalReplace"\n        :item-to-replace="item"\n        @media-replace-modal-item-replaced="emitRefreshMediaLibrary"\n        @media-replace-modal-close="closeModalReplace"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_modal_delete %}\n    <sw-media-modal-delete\n        v-if="showModalDelete"\n        :items-to-delete="[item]"\n        @media-delete-modal-close="closeModalDelete"\n        @media-delete-modal-items-delete="deleteSelectedItems"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_move_modal %}\n    <sw-media-modal-move\n        v-if="showModalMove"\n        :items-to-move="[item]"\n        @media-move-modal-close="closeModalMove"\n        @media-move-modal-items-move="onFolderMoved"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_custom_field_sets %}\n    <sw-custom-field-set-renderer\n        :key="item.id"\n        :disabled="!acl.can(\'media.editor\')"\n        :entity="item"\n        variant="media-collapse"\n        :sets="customFieldSets"\n        :is-loading="isLoading"\n        :is-save-successful="isSaveSuccessful"\n        @save="onSaveCustomFields(item)"\n        @process-finish="saveFinish"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["mediaService","repositoryFactory","acl","customFieldDataProviderService","systemConfigApiService"],emits:["media-item-rename-success","media-item-replaced","update:item"],mixins:[n.getByName("notification"),n.getByName("media-sidebar-modal-mixin"),n.getByName("placeholder")],props:{item:{required:!0,type:Object,validator(e){return"media"===e.getEntityName()}},editable:{type:Boolean,required:!1,default:!1}},data(){return{customFieldSets:[],isLoading:!1,isSaveSuccessful:!1,showModalReplace:!1,fileNameError:null,arReady:!1,defaultArReady:!1}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},isMediaObject(){return"media"===this.item.type},fileSize(){return d.fileSize(this.item.fileSize)},createdAt(){let e=this.item.uploadedAt||this.item.createdAt;return d.date(e)},fileNameClasses(){return{"has--error":this.fileNameError}},isSpatial(){return this.item?.fileExtension==="glb"||!!this.item?.url?.endsWith(".glb")}},watch:{"item.id":{handler(){this.fetchSpatialItemConfig(),this.fileNameError=null}}},created(){this.createdComponent()},methods:{createdComponent(){this.loadCustomFieldSets(),this.fetchSpatialItemConfig()},fetchSpatialItemConfig(){this.systemConfigApiService.getValues("core.media").then(e=>{this.defaultArReady=e["core.media.defaultEnableAugmentedReality"]}),this.mediaRepository.get(this.item.id,Shopware.Context.api).then(e=>{this.arReady=e?.config?.spatial?.arReady})},buildAugmentedRealityTooltip(e){let i={settingsLink:this.$router.resolve({name:"sw.settings.media.index"}).href};return this.$tc(e,0,i)},loadCustomFieldSets(){return this.customFieldDataProviderService.getCustomFieldSets("media").then(e=>{this.customFieldSets=e})},async onSaveCustomFields(e){this.isSaveSuccessful=!1,this.isLoading=!0,await this.mediaRepository.save(e,t.api),this.isSaveSuccessful=!0,this.isLoading=!1},saveFinish(){this.isSaveSuccessful=!1},async copyLinkToClipboard(){if(this.item)try{await l.copyStringToClipboard(this.item.url),this.createNotificationSuccess({message:this.$tc("sw-media.general.notification.urlCopied.message")})}catch(e){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-field.notification.notificationCopyFailureMessage")})}},async onSubmitTitle(e){this.item.title=e;try{await this.mediaRepository.save(this.item,t.api)}catch{this.$refs.inlineEditFieldTitle.cancelSubmit()}},async onSubmitAltText(e){this.item.alt=e;try{await this.mediaRepository.save(this.item,t.api)}catch{this.$refs.inlineEditFieldAlt.cancelSubmit()}},async onChangeFileName(e){let{item:i}=this;i.isLoading=!0,this.fileNameError=null;try{await this.mediaService.renameMedia(i.id,e).catch(e=>{let i=["CONTENT__MEDIA_EMPTY_FILE","CONTENT__MEDIA_ILLEGAL_FILE_NAME"];return e.response.data.errors.forEach(e=>{!this.fileNameError&&i.includes(e.code)&&(this.fileNameError=e)}),Promise.reject(e)}),i.fileName=e,this.createNotificationSuccess({message:this.$tc("global.sw-media-media-item.notification.renamingSuccess.message")}),this.$emit("media-item-rename-success",i)}catch(e){e.response.data.errors.forEach(e=>{this.handleErrorMessage(e)})}finally{i.isLoading=!1}},handleErrorMessage(e){"CONTENT__MEDIA_FILE_NAME_IS_TOO_LONG"===e.code?this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.fileNameTooLong.message",0,{length:e.meta.parameters.maxLength})}):this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.renamingError.message")})},openModalReplace(){this.acl.can("media.editor")&&(this.showModalReplace=!0)},closeModalReplace(){this.showModalReplace=!1},emitRefreshMediaLibrary(){this.closeModalReplace(),this.$nextTick(()=>{this.$emit("media-item-replaced")})},quickActionClasses(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]},onRemoveFileNameError(){this.fileNameError=null},toggleAR(e){let i={spatial:{arReady:e,updatedAt:Date.now()}},a={config:{...this.item.config,...i}};this.$emit("update:item",{...this.item,...a})}}}},941739:function(e,i,a){var n=a(717336);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(745346).Z)("1c7a9db9",n,!0,{})}}]);