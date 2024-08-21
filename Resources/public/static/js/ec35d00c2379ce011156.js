(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[45829],{980642:function(){},45829:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return i}}),o(962604);let{Mixin:t,Utils:d}=Shopware,{isEmpty:l}=d.types;var i={template:'\n\n{% block sw_order_document_settings_modal %}\n<sw-modal\n    :title="modalTitle"\n    class="sw-order-document-settings-modal"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_order_document_settings_modal_form_first_row %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 14px"\n    >\n        \n        {% block sw_order_document_settings_modal_form_document_number %}\n        <sw-text-field\n            v-model:value="documentConfig.documentNumber"\n            :label="$tc(\'sw-order.documentModal.labelDocumentNumber\')"\n        />\n        {% endblock %}\n        \n        {% block sw_order_document_settings_modal_form_document_date %}\n        <sw-datepicker\n            v-model:value="documentConfig.documentDate"\n            date-type="date"\n            required\n            hide-hint\n            :label="$tc(\'sw-order.documentModal.labelDocumentDate\')"\n            :placeholder="$tc(\'sw-datepicker.date.placeholder\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_file_upload %}\n    \n    {% block sw_order_document_settings_modal_form_file_upload_toggle %}\n    <sw-switch-field\n        v-model:value="uploadDocument"\n        name="sw-field--uploadDocument"\n        class="sw-order-document-settings-modal__file-toggle"\n        :label="$tc(\'sw-order.documentModal.fileInputLabel\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_file_upload_input %}\n    <sw-upload-listener\n        v-if="uploadDocument"\n        auto-upload\n        :upload-tag="order.id"\n        @media-upload-finish="successfulUploadFromUrl"\n    />\n    <sw-media-upload-v2\n        v-if="uploadDocument"\n        ref="fileInput"\n        variant="small"\n        class="sw-order-document-settings-modal__file-input"\n        use-file-data\n        :source="selectedDocumentFile"\n        :allow-multi-select="false"\n        :file-accept="features.fileAcceptTypes"\n        :max-file-size="features.uploadFileSizeLimit"\n        default-folder="document"\n        :upload-tag="order.id"\n        @media-upload-add-file="onAddDocument"\n        @media-upload-sidebar-open="openMediaModal"\n        @media-upload-remove-image="removeCustomDocument"\n    />\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_media_modal %}\n    <sw-media-modal-v2\n        v-if="showMediaModal"\n        :allow-multi-select="false"\n        :file-accept="features.fileAcceptTypes"\n        @media-modal-selection-change="onAddMediaFromLibrary"\n        @modal-close="closeMediaModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_additional_content %}{% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_document_comment %}\n    <sw-textarea-field\n        v-model:value="documentConfig.documentComment"\n        name="sw-field--documentConfig-documentComment"\n        class="sw-order-document-settings-modal__comment"\n        :label="$tc(\'sw-order.documentModal.labelDocumentComment\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_document_footer %}\n    <template #modal-footer>\n        \n        {% block sw_order_document_settings_modal_form_document_footer_preview %}\n        <sw-button\n            class="sw-order-document-settings-modal__preview-button"\n            size="small"\n            :disabled="isLoadingDocument"\n            :is-loading="isLoadingPreview"\n            @click="onPreview"\n        >\n            {{ $tc(\'sw-order.documentModal.labelPreview\') }}\n        </sw-button>\n        {% endblock %}\n\n        <div>\n            \n            {% block sw_order_document_settings_modal_form_document_footer_cancel %}\n            <sw-button\n                size="small"\n                @click="onCancel"\n            >\n                {{ $tc(\'sw-order.documentModal.labelCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_order_document_settings_modal_form_document_footer_split_button %}\n            <sw-button-group split-button>\n                \n                {% block sw_order_document_settings_modal_form_document_footer_split_button_create %}\n                <sw-button\n                    class="sw-order-document-settings-modal__create"\n                    variant="primary"\n                    size="small"\n                    :disabled="!documentPreconditionsFulfilled || isLoadingPreview"\n                    :is-loading="isLoadingDocument"\n                    @click="onCreateDocument"\n                >\n                    {{ $tc(\'sw-order.documentModal.labelCreate\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_document_settings_modal_form_document_footer_split_button_context %}\n                <sw-context-button\n                    :disabled="!documentPreconditionsFulfilled"\n                >\n                    \n                    {% block sw_order_document_settings_modal_form_document_footer_split_button_context_arrow %}\n                    <template #button>\n                        <sw-button\n                            square\n                            variant="primary"\n                            size="small"\n                            :disabled="!documentPreconditionsFulfilled"\n                        >\n                            <sw-icon\n                                name="regular-chevron-down-xs"\n                                size="16"\n                            />\n                        </sw-button>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_document_settings_modal_form_document_footer_split_button_context_create_send %}\n                    <sw-context-menu-item\n                        class="sw-order-document-settings-modal__send-button"\n                        @click="onCreateDocument(\'send\')"\n                    >\n                        {{ $tc(\'sw-order.documentModal.labelCreateSend\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_document_settings_modal_form_document_footer_split_button_context_create_download %}\n                    <sw-context-menu-item\n                        class="sw-order-document-settings-modal__download-button"\n                        @click="onCreateDocument(\'download\')"\n                    >\n                        {{ $tc(\'sw-order.documentModal.labelCreateDownloadPdf\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </sw-context-button>\n                {% endblock %}\n            </sw-button-group>\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["numberRangeService","feature","repositoryFactory"],emits:["loading-document","document-create","preview-show","page-leave-confirm","page-leave"],mixins:[t.getByName("notification")],props:{order:{type:Object,required:!0},currentDocumentType:{type:Object,required:!0},isLoadingDocument:{type:Boolean,required:!0},isLoadingPreview:{type:Boolean,required:!0}},data(){return{showModal:!1,selectedDocumentFile:null,uploadDocument:!1,documentConfig:{custom:{},documentNumber:0,documentComment:"",documentDate:""},documentNumberPreview:!1,features:{uploadFileSizeLimit:52428800,fileAcceptTypes:"application/pdf"},showMediaModal:!1}},computed:{documentPreconditionsFulfilled(){return!0},modalTitle(){if(this.currentDocumentType){let e=this.currentDocumentType?.translated?.name||this.currentDocumentType?.name;return`${this.$tc("sw-order.documentModal.modalTitle")} - ${e}`}return this.$tc("sw-order.documentModal.modalTitle")},mediaRepository(){return this.repositoryFactory.create("media")}},created(){this.createdComponent()},methods:{async createdComponent(){this.documentConfig.documentNumber=await this.reserveDocumentNumber(!0),this.documentNumberPreview=this.documentConfig.documentNumber,this.documentConfig.documentDate=new Date().toISOString()},async onCreateDocument(e=!1){if(this.$emit("loading-document"),this.documentNumberPreview===this.documentConfig.documentNumber){let e=await this.reserveDocumentNumber(!1);e!==this.documentConfig.documentNumber&&this.createNotificationInfo({message:this.$tc("sw-order.documentCard.info.DOCUMENT__NUMBER_WAS_CHANGED")}),this.documentConfig.documentNumber=e}await this.addAdditionalInformationToDocument(),this.callDocumentCreate(e)},callDocumentCreate(e,n=null){this.$emit("document-create",this.documentConfig,e,n,this.uploadDocument?this.selectedDocumentFile:null)},async reserveDocumentNumber(e){let{number:n}=await this.numberRangeService.reserve(`document_${this.currentDocumentType.technicalName}`,this.order.salesChannelId,e);return n},addAdditionalInformationToDocument(){},onPreview(){this.$emit("preview-show",this.documentConfig)},onConfirm(){this.$emit("page-leave-confirm")},onCancel(){this.$emit("page-leave")},openMediaModal(){this.showMediaModal=!0},closeMediaModal(){this.showMediaModal=!1},async onAddMediaFromLibrary(e){l(e)||this.validateFile(e[0])},successfulUploadFromUrl(e){this.mediaRepository.get(e.targetId).then(e=>{this.validateFile(e)})},validateFile(e){this.$refs.fileInput.checkFileSize(e)&&this.$refs.fileInput.checkFileType(e)&&(this.selectedDocumentFile=e,this.documentConfig.documentMediaFileId=e.id)},removeCustomDocument(){this.documentConfig.documentMediaFileId=null,this.selectedDocumentFile=null,this.sourceDocument=null},onAddDocument(e){this.selectedDocumentFile=e[0]}}}},962604:function(e,n,o){var t=o(980642);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),(0,o(745346).Z)("6b7e34e4",t,!0,{})}}]);