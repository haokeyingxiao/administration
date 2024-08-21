(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74407],{953921:function(){},174407:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var l=a(687383);a(778016);let{Mixin:i}=Shopware,{Criteria:n,EntityCollection:s}=Shopware.Data,{warn:m}=Shopware.Utils.debug,{mapPropertyErrors:o}=Shopware.Component.getComponentHelper();var r={template:'\n{% block sw_mail_template_detail %}\n<sw-page class="sw-mail-template-detail">\n\n    \n    {% block sw_mail_template_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="mailTemplate">\n            {{ $tc(\'sw-mail-template.detail.textHeadlineEdit\') }}\n        </h2>\n        <h2\n            v-else\n            class="sw-mail-template-detail__empty-title"\n        >\n            {{ $tc(\'sw-mail-template.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_mail_template_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: \'ESC\',\n                appearance: \'light\'\n            }"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-mail-template.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_mail_template_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-mail-template-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!allowSave"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-mail-template.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_content %}\n    <template #content>\n        <sw-card-view sidebar>\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_mail_template_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(mailTemplate.mailTemplateType, \'name\', $tc(\'sw-mail-template.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_basic_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-template.detail.basic.titleCard\')"\n                    position-identifier="sw-mail-template-detail-basic-info"\n                >\n                    \n                    {% block sw_mail_template_basic_form_mail_type_field %}\n                    <sw-entity-single-select\n                        id="mailTemplateTypes"\n                        v-model:value="mailTemplate.mailTemplateTypeId"\n                        name="sw-field--mailTemplate-mailTemplateTypeId"\n                        entity="mail_template_type"\n                        required\n                        show-clearable-button\n                        :label="$tc(\'sw-mail-template.detail.basic.labelMailType\')"\n                        :placeholder="$tc(\'sw-mail-template.detail.basic.placeholderMailType\')"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        :error="mailTemplateMailTemplateTypeIdError"\n                        @update:value="onChangeType"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_basic_form_description_field %}\n                    <sw-textarea-field\n                        v-model:value="mailTemplate.description"\n                        name="sw-field--mailTemplate-description"\n                        :label="$tc(\'sw-mail-template.detail.basic.labelDescription\')"\n                        :placeholder="$tc(\'sw-mail-template.detail.basic.placeholderDescription\')"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_options_info %}\n                <sw-card\n                    position-identifier="sw-mail-template-detail-options-info"\n                    :title="$tc(\'sw-mail-template.detail.options.titleCard\')"\n                >\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0 30px"\n                        class="sw-mail-template-detail-options__container"\n                    >\n                        <div class="sw-mail-template-detail__options-info-wrapper">\n\n                            \n                            {% block sw_mail_template_options_form_subject_field %}\n                            <sw-text-field\n                                v-model:value="mailTemplate.subject"\n                                name="sw-field--mailTemplate-subject"\n                                required\n                                :label="$tc(\'sw-mail-template.detail.options.labelSubject\')"\n                                :placeholder="placeholder(mailTemplate, \'subject\', $tc(\'sw-mail-template.detail.options.placeholderSubject\'))"\n                                :disabled="!acl.can(\'mail_templates.editor\')"\n                                :error="mailTemplateSubjectError"\n                            />\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_mail_template_options_form_sender_name_field %}\n                        <sw-text-field\n                            v-model:value="mailTemplate.senderName"\n                            name="sw-field--mailTemplate-senderName"\n                            :label="$tc(\'sw-mail-template.detail.options.labelSenderName\')"\n                            :placeholder="placeholder(mailTemplate, \'senderName\', $tc(\'sw-mail-template.detail.options.placeholderSenderName\'))"\n                            :disabled="!acl.can(\'mail_templates.editor\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_attachments_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-template.detail.media.titleCard\')"\n                    position-identifier="sw-mail-template-detail-atttachments-info"\n                >\n                    \n                    {% block sw_mail_template_detail_attachments_info_upload %}\n                    <sw-upload-listener\n                        v-if="mailTemplate.id"\n                        auto-upload\n                        :upload-tag="mailTemplate.id"\n                        @media-upload-finish="successfulUpload"\n                    />\n\n                    <sw-media-upload-v2\n                        v-if="mailTemplate.id"\n                        variant="regular"\n                        default-folder="mail_template"\n                        :upload-tag="mailTemplate.id"\n                        :file-accept="fileAccept"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        @media-drop="onMediaDrop"\n                        @media-upload-sidebar-open="openMediaSidebar"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_detail_attachments_info_grid %}\n                    <sw-data-grid\n                        v-if="mailTemplateMedia && mailTemplateMedia.length > 0"\n                        class="sw-mail-template-detail__attachments-info-grid"\n                        :data-source="mailTemplateMedia"\n                        :columns="mediaColumns"\n                        :full-page="false"\n                        :show-settings="false"\n                        :allow-column-edit="false"\n                        :allow-inline-edit="false"\n                        :compact-mode="false"\n                        :show-selection="acl.can(\'mail_templates.editor\')"\n                        @selection-change="onSelectionChanged"\n                    >\n                        <template #preview-fileName="{ item }">\n                            \n                            {% block sw_mail_template_detail_attachments_info_grid_preview %}\n                            <sw-media-preview :source="item.id" />\n                            {% endblock %}\n                        </template>\n\n                        <template #actions="{ item }">\n                            \n                            {% block sw_mail_template_detail_attachments_info_grid_actions %}\n                            <sw-context-menu-item\n                                v-tooltip.bottom="{\n                                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                                    disabled: acl.can(\'mail_templates.editor\'),\n                                    showOnDisabledElements: true\n                                }"\n                                variant="danger"\n                                :disabled="!acl.can(\'mail_templates.editor\')"\n                                @click="onDeleteMedia(item.id)"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n\n                        <template #bulk>\n                            \n                            {% block sw_mail_template_detail_attachments_info_grid_bulk %}\n                            <a\n                                class="link link-danger"\n                                role="link"\n                                tabindex="0"\n                                @click="onDeleteSelectedMedia"\n                                @keydown.enter="onDeleteSelectedMedia"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </a>\n                            {% endblock %}\n                        </template>\n                    </sw-data-grid>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_mail_text_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-template.detail.mailText.titleCard\')"\n                    position-identifier="sw-mail-template-detail-text-info"\n                >\n                    \n                    {% block sw_mail_template_mail_text_form_content_plain_field %}\n                    <sw-code-editor\n                        ref="plainEditor"\n                        :key="`${mailTemplate.mailTemplateTypeId}plain`"\n                        v-model:value="mailTemplate.contentPlain"\n                        name="content_plain"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-template.detail.mailText.labelContentPlain\')"\n                        :placeholder="placeholder(mailTemplate, \'contentPlain\', $tc(\'sw-mail-template.detail.mailText.placeholderPlain\'))"\n                        :completer-function="outerCompleterFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        :error="mailTemplateContentPlainError"\n                        required\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_mail_text_form_content_html_field %}\n                    <sw-code-editor\n                        ref="htmlEditor"\n                        :key="`${mailTemplate.mailTemplateTypeId}html`"\n                        v-model:value="mailTemplate.contentHtml"\n                        name="content_html"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-template.detail.mailText.labelContentHtml\')"\n                        :placeholder="placeholder(mailTemplate, \'contentHtml\', $tc(\'sw-mail-template.detail.mailText.placeholderHtml\'))"\n                        :completer-function="outerCompleterFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        :error="mailTemplateContentHtmlError"\n                        required\n                    />\n                    {% endblock %}\n                </sw-card>\n                \n                {% block sw_mail_template_detail_preview_modal %}\n                <sw-modal\n                    v-if="mailPreview"\n                    class="sw-mail-template-preview-modal"\n                    :title="$tc(\'sw-mail-template.detail.previewModalTitle\')"\n                    :is-loading="isLoading"\n                    @modal-close="onCancelShowPreview"\n                >\n                    <template v-if="!isLoading">\n                        <span v-html="mailPreview"></span>\n                    </template>\n\n                    \n                    {% block sw_mail_template_detail_preview_modal_footer %}\n                    <template #modal-footer>\n                        \n                        {% block sw_mail_template_detail_preview_modal_footer_cancel %}\n                        <sw-button\n                            size="small"\n                            @click="onCancelShowPreview"\n                        >\n                            {{ $tc(\'global.default.close\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </sw-modal>\n                {% endblock %}\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_sidebar %}\n    <template #sidebar>\n        <sw-sidebar :propagate-width="true">\n            \n            {% block sw_mail_template_detail_sidebar_inner %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_test_mail %}\n            <sw-sidebar-item\n                icon="regular-paper-plane"\n                :title="$tc(\'sw-mail-template.detail.sidebar.titleTestMail\')"\n                class="sw-mail-template-detail__test-mail-sidebar"\n            >\n                <div class="sw-mail-template-detail__test-mail-sidebar-container">\n                    \n                    {% block sw_mail_template_mail_text_form_test_mail_field %}\n                    <sw-text-field\n                        v-model:value="testerMail"\n                        name="sw-field--testerMail"\n                        :placeholder="$tc(\'sw-mail-template.detail.sidebar.placeholderTestMail\')"\n                        :label="$tc(\'sw-mail-template.detail.sidebar.labelTestMail\')"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_mail_text_form_test_sales_channel_field %}\n                    <sw-entity-single-select\n                        v-model:value="testMailSalesChannelId"\n                        name="sw-field--testMailSalesChannelId"\n                        entity="sales_channel"\n                        :label="$tc(\'sw-mail-template.detail.basic.labelSalesChannels\')"\n                        :placeholder="$tc(\'sw-mail-template.detail.basic.placeholderSalesChannels\')"\n                        show-clearable-button\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_mail_text_form_test_mail_button %}\n                    <sw-button\n                        :disabled="isSendButtonDisabled"\n                        class="sw-mail-template-detail__send-test-mail"\n                        @click="onClickTestMailTemplate"\n                    >\n                        {{ $tc(\'sw-mail-template.detail.sidebar.buttonTestMail\') }}\n                    </sw-button>\n                    {% endblock %}\n                </div>\n            </sw-sidebar-item>\n            {% endblock %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_variables %}\n            <sw-sidebar-item\n                icon="regular-code"\n                :title="$tc(\'sw-mail-template.detail.sidebar.titleShowAvailableVariables\')"\n                :disabled="isLoading || !hasTemplateData"\n                class="sw-mail-template-detail__show-available-variables"\n            >\n                <div class="sw-mail-template-detail__available-variables-sidebar-container">\n                    \n                    {% block sw_mail_template_available_variables_tree %}\n                    <sw-tree\n                        class="sw-mail-template-detail__available-variables-sidebar-container__tree"\n                        :searchable="false"\n                        :disable-context-menu="true"\n                        :on-change-route="() => { return false; }"\n                        :items="loadedAvailableVariables"\n                        :sortable="false"\n                        @get-tree-items="onGetTreeItems"\n                    >\n                        \n                        {% block sw_mail_template_available_variables_tree_headline %}\n                        <template #headline>\n                            <span></span>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_mail_template_available_variables_tree_items %}\n                        <template\n                            #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute }"\n                        >\n                            \n                            {% block sw_mail_template_available_variables_tree_items_item %}\n                            <sw-tree-item\n                                v-for="(item, index) in treeItems"\n                                :key="item.id"\n                                :item="item"\n                                :disable-context-menu="disableContextMenu"\n                                :on-change-route="onChangeRoute"\n                                :sortable="false"\n                                :display-checkbox="false"\n                            >\n                                \n                                {% block sw_mail_template_available_variables_tree_items_item_grip %}\n                                <template #grip>\n                                    <span></span>\n                                </template>\n                                {% endblock %}\n\n                                \n                                {% block sw_mail_template_available_variables_tree_items_item_actions %}\n                                <template #actions="{ item }">\n                                    <sw-icon\n                                        v-tooltip="{\n                                            message: $tc(\'sw-mail-template.detail.sidebar.copyTooltip\'),\n                                            width: 150,\n                                            position: \'bottom\'\n                                        }"\n                                        name="regular-products-s"\n                                        class="sw-mail-template-detail__copy_icon"\n                                        @click="onCopyVariable(item.schema)"\n                                    />\n                                </template>\n                                {% endblock %}\n                            </sw-tree-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-tree>\n                    {% endblock %}\n                </div>\n            </sw-sidebar-item>\n            {% endblock %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_preview %}\n            <sw-sidebar-item\n                icon="regular-eye"\n                :title="$tc(\'sw-mail-template.detail.sidebar.titleShowPreview\')"\n                :disabled="isLoading || showPreview || !hasTemplateData"\n                class="sw-mail-template-detail__show-preview-sidebar"\n                @click="onClickShowPreview"\n            />\n            {% endblock %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_media %}\n            <sw-sidebar-media-item ref="mediaSidebarItem">\n                <template\n                    #context-menu-items="media"\n                >\n                    \n                    {% block sw_mail_template_detail_sidebar_add_attachment %}\n                    <sw-context-menu-item\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        @click="onAddItemToAttachment(media.mediaItem)"\n                    >\n                        {{ $tc(\'sw-mail-template.detail.sidebar.labelContextMenuAddToMailTemplate\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n            </sw-sidebar-media-item>\n            {% endblock %}\n\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["mailService","entityMappingService","repositoryFactory","acl","feature"],mixins:[i.getByName("placeholder"),i.getByName("notification")],shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data(){return{mailTemplate:!1,testerMail:"",mailTemplateId:null,mailPreview:null,isLoading:!1,isSaveSuccessful:!1,mailTemplateType:{},selectedType:{},editorConfig:{enableBasicAutocompletion:!0},mailTemplateMedia:null,mailTemplateMediaSelected:{},fileAccept:"application/pdf, image/*",testMailSalesChannelId:null,availableVariables:{},entitySchema:Object.fromEntries(Shopware.EntityDefinition.getDefinitionRegistry())}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{...o("mailTemplate",["contentHtml","contentPlain","mailTemplateTypeId","subject"]),loadedAvailableVariables(){return this.mailTemplateType&&this.mailTemplateType.templateData?(0===Object.values(this.availableVariables).length&&this.loadInitialAvailableVariables(),Object.values(this.availableVariables)):[]},identifier(){return this.placeholder(this.mailTemplateType,"name")},mailTemplateRepository(){return this.repositoryFactory.create("mail_template")},mediaRepository(){return this.repositoryFactory.create("media")},mailTemplateMediaRepository(){return this.repositoryFactory.create("mail_template_media")},outerCompleterFunction(){var e,t;return e=this.entityMappingService,t=this.mailTemplateType,function(a){let l=[];return Object.keys(e.getEntityMapping(a,t.availableEntities)).forEach(e=>{l.push({value:e})}),l}},mailTemplateTypeRepository(){return this.repositoryFactory.create("mail_template_type")},testMailRequirementsMet(){return this.testerMail&&(this.mailTemplate.subject||this.mailTemplate.translated?.subject)&&(this.mailTemplate.contentPlain||this.mailTemplate.translated?.contentPlain)&&(this.mailTemplate.contentHtml||this.mailTemplate.translated?.contentHtml)&&(this.mailTemplate.senderName||this.mailTemplate.translated?.senderName)},mediaColumns(){return this.getMediaColumns()},allowSave(){return this.mailTemplate&&this.mailTemplate.isNew()?this.acl.can("mail_templates.creator"):this.acl.can("mail_templates.editor")},tooltipSave(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},showPreview(){return void 0===this.mailTemplate.contentHtml||void 0===this.mailTemplate.mailTemplateTypeId||""===this.mailTemplate.contentHtml},hasTemplateData(){return Object.keys(this.mailTemplateType?.templateData||{}).length>0},lacksEmailSendPermission(){return!this.acl.can("api_send_email")},isSendButtonDisabled(){return this.isLoading||!this.testMailRequirementsMet||this.lacksEmailSendPermission}},watch:{"$route.params.id"(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplate",path:"mailTemplate",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplateMedia",path:"mailTemplateMedia",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplateMediaSelected",path:"mailTemplateMediaSelected",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplateType",path:"mailTemplateType",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__availableVariables",path:"availableVariables",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__testMailSalesChannelId",path:"testMailSalesChannelId",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__testerMail",path:"testerMail",scope:this}),this.$route.params.id&&(this.mailTemplateId=this.$route.params.id,this.loadEntityData())},loadEntityData(){let e=new n(1,25);e.addAssociation("mailTemplateType"),e.addAssociation("media.media"),this.isLoading=!0,this.mailTemplateRepository.get(this.mailTemplateId,Shopware.Context.api,e).then(e=>{this.mailTemplate=e,this.mailTemplate.mailTemplateType?.id?(this.onChangeType(this.mailTemplate.mailTemplateType.id),this.getMailTemplateMedia()):(this.isLoading=!1,this.createNotificationError({message:this.$tc("sw-mail-template.general.missingMailTemplateTypeErrorMessage")}))})},getMailTemplateType(){return this.mailTemplate.mailTemplateTypeId?this.mailTemplateTypeRepository.get(this.mailTemplate.mailTemplateTypeId).then(e=>{this.mailTemplateType=e}):Promise.resolve()},createMediaCollection(){return new s("/media","media",Shopware.Context.api)},getMailTemplateMedia(){this.mailTemplateMedia=this.createMediaCollection(),this.mailTemplate.media.forEach(e=>{e.languageId===Shopware.Context.api.languageId&&this.mailTemplateMedia.push(e.media)})},abortOnLanguageChange(){return this.mailTemplateRepository.hasChanges(this.mailTemplate)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(e){Shopware.State.commit("context/setApiLanguageId",e),this.loadEntityData()},saveFinish(){this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.mail.template.index"})},onSave(){let e=[],t=this.mailTemplate.subject||this.placeholder(this.mailTemplate,"subject");return this.isSaveSuccessful=!1,this.isLoading=!0,e.push(this.mailTemplateRepository.save(this.mailTemplate).then(()=>{Promise.all(e).then(()=>{this.loadEntityData(),this.saveFinish()})}).catch(e=>{let a="";if(this.isLoading=!1,e.response.data.errors.length>0){let t=e.response.data.errors[0].detail;a=`<br/> ${this.$tc("sw-mail-template.detail.textErrorMessage")}: "${t}"`}this.createNotificationError({message:this.$tc("sw-mail-template.detail.messageSaveError",0,{subject:t})+a})})),Promise.all(e)},onClickTestMailTemplate(){let e={message:this.$tc("sw-mail-template.general.notificationTestMailSuccessMessage")},t={message:this.$tc("sw-mail-template.general.notificationTestMailErrorMessage")},a={message:this.$tc("sw-mail-template.general.notificationTestMailSalesChannelErrorMessage")};if(!this.testMailSalesChannelId){this.createNotificationError(a);return}this.mailService.testMailTemplate(this.testerMail,this.mailPreviewContent(),this.mailTemplateMedia,this.testMailSalesChannelId).then(t=>{if(!(t?.size!==0)){this.createNotificationError({message:this.$tc("sw-mail-template.general.notificationGeneralSyntaxValidationErrorMessage")});return}this.createNotificationSuccess(e)}).catch(e=>{this.createNotificationError(t),m(this._name,e.message,e.response)})},onClickShowPreview(){this.isLoading=!0,this.mailPreview=this.mailService.buildRenderPreview(this.mailTemplateType,this.mailPreviewContent()).then(e=>{this.mailPreview=e}).catch(e=>{this.mailPreview=null,e.response?.data?.errors?.[0]?.detail?this.createNotificationError({message:this.$tc("sw-mail-template.general.notificationSyntaxValidationErrorMessage",0,{errorMsg:e.response?.data?.errors?.[0]?.detail})}):this.createNotificationError({message:this.$tc("sw-mail-template.general.notificationGeneralSyntaxValidationErrorMessage")})}).finally(()=>{this.isLoading=!1})},mailPreviewContent(){let e={...this.mailTemplate};return e.contentHtml&&(e.contentHtml=this.replaceContent(e.contentHtml)),e.translated?.contentHtml&&(e.translated.contentHtml=this.replaceContent(e.translated.contentHtml)),e.contentPlain&&(e.contentPlain=this.replaceContent(e.contentPlain)),e.translated?.contentPlain&&(e.translated.contentPlain=this.replaceContent(e.translated.contentPlain)),e},replaceContent(e){return e.replace(/\.at\(([0-9]*)\)\./g,e=>{let t=parseInt(e.match(/[0-9]/g).join(""),10);return`.${t}.`}).replace(/\.first\./g,".0.")},onCancelShowPreview(){this.mailPreview=null},async onCopyVariable(e){try{await l.vz.copyStringToClipboard(e)}catch(t){let e="";if(t.response.data.errors.length>0){let a=t.response.data.errors[0].detail;e=`<br/> ${this.$tc("sw-mail-template.detail.textErrorMessage")}: "${a}"`}this.createNotificationError({message:e})}},async onChangeType(e){if(!e){this.selectedType={};return}this.isLoading=!0;try{await this.getMailTemplateType(),this.selectedType=await this.mailTemplateTypeRepository.get(e),this.loadInitialAvailableVariables(),this.outerCompleterFunction()}catch(t){let e=t.message??"";if(t.response?.data?.errors?.length>0){let a=t.response.data.errors[0].detail;e=`<br/> ${this.$tc("sw-mail-template.detail.textErrorMessage")}: "${a}"`}this.createNotificationError({message:e})}finally{this.isLoading=!1}},getMediaColumns(){return[{property:"fileName",label:"sw-mail-template.list.columnFilename"}]},successfulUpload({targetId:e}){this.mailTemplate.media.find(t=>t.mediaId===e)||this.mediaRepository.get(e).then(e=>{this.createMailTemplateMediaAssoc(e)})},onMediaDrop(e){this.successfulUpload({targetId:e.id})},createMailTemplateMediaAssoc(e){let t=this.mailTemplateMediaRepository.create();t.mailTemplateId=this.mailTemplateId,t.languageId=Shopware.Context.api.languageId,t.mediaId=e.id,this.mailTemplate.media.length<=0?t.position=0:t.position=this.mailTemplate.media.length,this.mailTemplate.media.push(t),this.mailTemplateMedia.push(e)},openMediaSidebar(){this.$refs.mediaSidebarItem.openContent()},onDeleteMedia(e){let t=this.mailTemplate.media.find(t=>t.mediaId===e);t&&(this.mailTemplate.media.remove(t.id),this.getMailTemplateMedia())},onSelectionChanged(e){this.selectedItems=e},onDeleteSelectedMedia(){Object.keys(this.selectedItems).forEach(e=>{this.onDeleteMedia(e)})},_checkIfMediaIsAlreadyUsed(e){return this.mailTemplate.media.some(t=>t.mediaId===e&&t.languageId===Shopware.Context.api.languageId)},onAddItemToAttachment(e){return this._checkIfMediaIsAlreadyUsed(e.id)?(this.createNotificationInfo({message:this.$tc("sw-mail-template.list.errorMediaItemDuplicated")}),!1):(this.createMailTemplateMediaAssoc(e),!0)},loadAvailableVariables(e,t){if(!this.mailTemplateType||!this.mailTemplateType.availableEntities)return[];let a=e.concat("."),l=t.concat("."),i=Object.keys(Shopware.Utils.get(this.mailTemplateType.templateData,e)).map(t=>{let i=Shopware.Utils.get(this.mailTemplateType.templateData,a.concat(t)),n="object"==typeof i&&null!==i?Object.values(i).length:0,s=this.isToManyAssociationVariable(e)?`${l}at(${parseInt(t,10)})`:l+t;return{id:a+t,schema:s,name:t,childCount:n,parentId:e,afterId:null}});return this.addVariables(i),!0},isToManyAssociationVariable(e){if(!e)return!1;let t=e.split(".");t.splice(1,0,"properties");let a=Shopware.Utils.get(this.entitySchema,`${t.join(".")}`);return a&&"association"===a.type&&["one_to_many","many_to_many"].includes(a.relation)},onGetTreeItems(e,t){this.loadAvailableVariables(e,t)},addVariables(e){e.forEach(e=>{this.$set(this.availableVariables,e.id,e)})},loadInitialAvailableVariables(){this.availableVariables={},this.hasTemplateData&&Object.keys(this.mailTemplateType.templateData).forEach(e=>{let t=Shopware.Utils.get(this.mailTemplateType.templateData,e),a=0;"object"==typeof t&&null!==t&&(a=Object.values(t).length),this.addVariables([{id:e,schema:e,name:e,childCount:a,parentId:null,afterId:null}])})}}}},778016:function(e,t,a){var l=a(953921);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),(0,a(745346).Z)("3c5b87b4",l,!0,{})}}]);