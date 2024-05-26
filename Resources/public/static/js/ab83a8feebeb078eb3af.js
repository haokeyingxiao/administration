(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[64214],{584690:function(){},564214:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}}),a(843270);var l={template:'\n{% block sw_media_upload_v2 %}\n<div class="sw-media-upload-v2 sw-media-compact-upload-v2">\n    \n    {% block sw_media_upload_v2_compact %}\n    \n    {% block sw_media_upload_v2_compact_label %}\n    \n    <label\n        v-if="label"\n        class="sw-media-compact-upload-v2__label"\n    >\n        {{ label }}\n    </label>\n    {% endblock %}\n\n    <div\n        v-if="variant == \'compact\'"\n        class="sw-media-upload-v2__content"\n    >\n        <sw-button-group split-button>\n            \n            {% block sw_media_upload_v2_compact_button_file_upload %}\n            <sw-button\n                :disabled="disabled"\n                class="sw-media-upload-v2__button-compact-upload"\n                variant="primary"\n                @click="onClickUpload"\n            >\n                {{ buttonFileUploadLabel }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_compact_button_context_menu %}\n            <sw-context-button\n                v-if="uploadUrlFeatureEnabled"\n                :disabled="disabled"\n            >\n                <template #button>\n                    <sw-button\n                        :disabled="disabled"\n                        square\n                        variant="primary"\n                        class="sw-media-upload-v2__button-context-menu"\n                    >\n                        <sw-icon\n                            name="regular-chevron-down-xs"\n                            size="16"\n                        />\n                    </sw-button>\n                </template>\n\n                <sw-context-menu-item\n                    class="sw-media-upload-v2__button-url-upload"\n                    @click="useUrlUpload"\n                >\n                    {{ $tc(\'global.sw-media-upload-v2.buttonUrlUpload\') }}\n                </sw-context-menu-item>\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n\n        \n        {% block sw_media_upload_v2_compact_url_form %}\n        <sw-media-url-form\n            v-if="isUrlUpload"\n            variant="modal"\n            @modal-close="useFileUpload"\n            @media-url-form-submit="onUrlUpload"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_upload_v2_regular %}\n    <div\n        v-if="variant == \'regular\'"\n        class="sw-media-upload-v2__content"\n    >\n        \n        {% block sw_media_upload_v2_regular_header %}\n        {% endblock %}\n\n        \n        {% block sw_media_upload_v2_regular_drop_zone %}\n        <div\n            ref="dropzone"\n            class="sw-media-upload-v2__dropzone"\n            :class="isDragActiveClass"\n        >\n\n            \n            {% block sw_media_upload_v2_preview %}\n            <div class="sw-media-compact-upload-v2__preview-wrapper">\n                <template v-if="allowMultiSelect && mediaPreview">\n                    <div\n                        v-for="item in mediaPreview"\n                        :key="item.name"\n                        class="sw-media-compact-upload-v2__preview-item"\n                    >\n                        <sw-media-preview-v2\n                            class="sw-media-upload-v2__preview"\n                            :source="item"\n                            :media-is-private="privateFilesystem"\n                        />\n\n                        <sw-context-button>\n                            <slot name="context-menu-items">\n                                <sw-context-menu-item variant="headline">\n                                    {{ getFileName(item) }}\n                                </sw-context-menu-item>\n                                <sw-context-menu-divider />\n                                <sw-context-menu-item\n                                    v-tooltip.top="{\n                                        message: disableDeletionForLastItem.helpText,\n                                        disabled: !isDeletionDisabled || !disableDeletionForLastItem.helpText,\n                                        showOnDisabledElements: true\n                                    }"\n                                    class="sw-media-upload-v2__delete-item-button sw-context-menu-item__buttonRemove"\n                                    :disabled="isDeletionDisabled"\n                                    variant="danger"\n                                    @click="$emit(\'delete-item\', item)"\n                                >\n                                    {{ removeFileButtonLabel }}\n                                </sw-context-menu-item>\n                            </slot>\n                        </sw-context-button>\n                    </div>\n                </template>\n\n                <template v-else-if="!allowMultiSelect && (preview || source)">\n                    \n                    {% block sw_media_upload_v2_regular_preview_file %}\n                    <sw-media-preview-v2\n                        v-if="source || preview"\n                        class="sw-media-upload-v2__preview"\n                        :source="source || preview"\n                        :media-is-private="privateFilesystem"\n                    />\n                    {% endblock %}\n                </template>\n\n                \n                {% block sw_media_upload_v2_regular_preview_fallback %}\n                <div\n                    v-else\n                    class="sw-media-upload-v2__preview is--fallback"\n                >\n                    <sw-icon\n                        class="sw-media-upload-v2__fallback-icon"\n                        name="regular-image"\n                    />\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_actions %}\n            <div\n                class="sw-media-upload-v2__actions"\n                :class="{ \'has--source\': source }"\n            >\n                <div\n                    v-if="source"\n                    class="sw-media-upload-v2__file-info"\n                >\n                    <div class="sw-media-upload-v2__file-headline">\n                        {{ mediaNameFilter(source) }}\n                    </div>\n                    <sw-icon\n                        class="sw-media-upload-v2__remove-icon"\n                        name="regular-times-xs"\n                        @click="onRemoveMediaItem"\n                    />\n                </div>\n\n                <template v-else>\n                    \n                    {% block sw_media_upload_v2_regular_actions_url %}\n                    <sw-media-url-form\n                        v-if="isUrlUpload"\n                        class="sw-media-upload-v2__url-form"\n                        variant="inline"\n                        @media-url-form-submit="onUrlUpload"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_upload_v2_regular_actions_add %}\n                    <template v-if="!isUrlUpload">\n                        \n                        {% block sw_media_upload_v2_regular_upload_button %}\n                        <sw-button\n                            class="sw-media-upload-v2__button upload"\n                            :disabled="isLoading || disabled"\n                            variant="ghost"\n                            size="small"\n                            @click="onClickUpload"\n                        >\n                            {{ buttonFileUploadLabel }}\n                        </sw-button>\n                        {% endblock %}\n\n                        <template v-if="!privateFilesystem">\n                            <sw-button\n                                variant="primary"\n                                :disabled="disabled"\n                                class="sw-media-compact-upload-v2__browse-button"\n                                @click="mediaModalIsOpen = true"\n                            >\n                                <sw-icon\n                                    class="sw-media-compact-upload-v2__browse-icon"\n                                    name="regular-image"\n                                />\n                            </sw-button>\n\n                            <sw-media-modal-v2\n                                v-if="mediaModalIsOpen"\n                                :allow-multi-select="false"\n                                @modal-close="closeModal()"\n                                @media-modal-selection-change="onModalClosed"\n                            />\n                        </template>\n\n                        \n                        {% block sw_media_upload_v2_regular_media_sidebar_button %}{% endblock %}\n                    </template>\n                    {% endblock %}\n                </template>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_upload_v2_file_input %}\n    <form\n        ref="fileForm"\n        class="sw-media-upload-v2__form"\n    >\n        <input\n            id="files"\n            ref="fileInput"\n            class="sw-media-upload-v2__file-input"\n            type="file"\n            :accept="fileAccept"\n            :multiple="multiSelect"\n            @change="onFileInputChange"\n        >\n    </form>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{allowMultiSelect:{type:Boolean,required:!1,default:!1},disableDeletionForLastItem:{type:Object,validator(e){return Object(e).hasOwnProperty("value")&&Object(e).hasOwnProperty("helpText")},required:!1,default:()=>({value:!1,helpText:null})},variant:{type:String,required:!1,validValues:["compact","regular"],validator(e){return["compact","regular"].includes(e)},default:"regular"},source:{type:[String,Object],required:!1,default:""},sourceMultiselect:{type:Array,required:!1,default:()=>[]},fileAccept:{type:String,required:!1,default:"image/*"},removeButtonLabel:{type:String,required:!1,default:""}},data(){return{mediaModalIsOpen:!1}},computed:{mediaPreview(){return this.allowMultiSelect?this.sourceMultiselect?this.sourceMultiselect:null:this.source?this.source:this.preview},removeFileButtonLabel(){return""===this.removeButtonLabel?this.$tc("global.sw-product-image.context.buttonRemove"):this.removeButtonLabel},isDeletionDisabled(){return!!this.disableDeletionForLastItem.value&&this.sourceMultiselect.length<=1},mediaNameFilter(){return Shopware.Filter.getByName("mediaName")}},methods:{closeModal(){this.mediaModalIsOpen=!1},onModalClosed(e){this.$emit("selection-change",e,this.uploadTag)},getFileName(e){return e.name?e.name:`${e.fileName}.${e.fileExtension}`}}}},843270:function(e,n,a){var l=a(584690);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),a(745346).Z("9250bc42",l,!0,{})}}]);