(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[15692],{935989:function(){},315692:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l}}),i(635693);let{Mixin:o}=Shopware;var l={template:'\n{% block sw_cms_element_vimeo_video_config %}\n<div class="sw-cms-el-config-vimeo-video">\n\n    \n    {% block sw_cms_element_vimeo_video_config_video_id %}\n    <sw-text-field\n        v-model:value="videoID"\n        class="sw-cms-el-config-vimeo-video__video-id"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.videoId\')"\n        :placeholder="$tc(\'sw-cms.elements.vimeoVideo.config.placeholder.videoId\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_vimeo_video_config_player_controls %}\n    <div class="sw-cms-el-config-vimeo-video__player-controls">\n\n        \n        {% block sw_cms_element_vimeo_video_config_autoplay %}\n        <sw-switch-field\n            v-model:value="element.config.autoplay.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.autoPlay\')"\n            :help-text="$tc(\'sw-cms.elements.vimeoVideo.config.helpText.autoPlay\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_vimeo_video_config_do_not_track %}\n        <sw-switch-field\n            v-model:value="element.config.doNotTrack.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.advancedPrivacy\')"\n            :help-text="$tc(\'sw-cms.elements.vimeoVideo.config.helpText.advancedPrivacy\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_vimeo_video_config_loop %}\n        <sw-switch-field\n            v-model:value="element.config.loop.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.loop\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_vimeo_video_config_controls %}\n        <sw-switch-field\n            v-model:value="element.config.controls.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.showControls\')"\n        />\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_vimeo_video_config_color %}\n    <sw-colorpicker\n        v-model:value="element.config.color.value"\n        class="sw-cms-el-config-vimeo-video__color"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.controlsColor\')"\n        color-output="hex"\n        :z-index="1001"\n        :alpha="false"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_vimeo_video_config_artist_information %}\n    <div class="sw-cms-el-config-vimeo-video__artist-information">\n\n        \n        {% block sw_cms_element_vimeo_video_config_byline %}\n        <sw-switch-field\n            v-model:value="element.config.byLine.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.byLine\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_vimeo_video_config_portrait %}\n        <sw-switch-field\n            v-model:value="element.config.portrait.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.showPortrait\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_vimeo_video_config_title %}\n        <sw-switch-field\n            v-model:value="element.config.title.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.showTitle\')"\n        />\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_vimeo_video_config_needs_confirmation %}\n    <div class="sw-cms-el-config-vimeo-video__confirmation">\n        <sw-switch-field\n            v-model:value="element.config.needsConfirmation.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.needsConfirmation\')"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_vimeo_video_config_preview_media %}\n    <sw-cms-mapping-field\n        v-if="element.config.needsConfirmation.value"\n        v-model:config="element.config.previewMedia"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.previewImage\')"\n        value-types="entity"\n        entity="media"\n    >\n        <sw-media-upload-v2\n            variant="regular"\n            :upload-tag="uploadTag"\n            :source="previewSource"\n            :allow-multi-select="false"\n            :default-folder="cmsPageState.pageEntityName"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            @media-upload-sidebar-open="onOpenMediaModal"\n            @media-upload-remove-image="onImageRemove"\n        />\n\n        \n        {% block sw_cms_element_vimeo_video_config_preview_media_display %}\n        <template #preview="{ demoValue }">\n            <div class="sw-cms-el-config-image__mapping-preview">\n                <img\n                    v-if="demoValue.url"\n                    :src="demoValue.url"\n                    alt=""\n                >\n                <sw-alert\n                    v-else\n                    class="sw-cms-el-config-image__preview-info"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </template>\n        {% endblock %}\n    </sw-cms-mapping-field>\n\n    \n    {% block sw_cms_element_vimeo_video_config_preview_media_upload_listener %}\n    <sw-upload-listener\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_vimeo_video_config_preview_media_modal %}\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        variant="full"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :entity-context="cmsPageState.entityName"\n        :allow-multi-select="false"\n        :initial-folder-id="cmsPageState.defaultMediaFolderId"\n        @media-upload-remove-image="onImageRemove"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["element-update"],mixins:[o.getByName("cms-element")],data(){return{mediaModalIsOpen:!1,initialFolderId:null}},computed:{videoID:{get(){return this.element.config.videoID.value},set(e){this.element.config.videoID.value=this.shortenLink(e)}},mediaRepository(){return this.repositoryFactory.create("media")},uploadTag(){return`cms-element-vimeo-video-config-${this.element.id}`},previewSource(){return this.element.data&&this.element.data.previewMedia&&this.element.data.previewMedia.id?this.element.data.previewMedia:this.element.config.previewMedia.value}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("vimeo-video")},shortenLink(e){let n=/#/,i=e.replace(/https:\/\/vimeo\.com\//,"");if(n.test(i)){let e=n.exec(i).index;i=i.substring(0,e)}return i},async onImageUpload({targetId:e}){let n=await this.mediaRepository.get(e);this.element.config.previewMedia.value=n.id,this.updateElementData(n),this.$emit("element-update",this.element)},onImageRemove(){this.element.config.previewMedia.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal(){this.mediaModalIsOpen=!1},onSelectionChanges(e){let n=e[0];this.element.config.previewMedia.value=n.id,this.updateElementData(n),this.$emit("element-update",this.element)},updateElementData(e=null){if(this.isCompatEnabled("INSTANCE_SET")){this.$set(this.element.data,"previewMediaId",null===e?null:e.id),this.$set(this.element.data,"previewMedia",e);return}this.element.data.previewMediaId=null===e?null:e.id,this.element.data.previewMedia=e},onOpenMediaModal(){this.mediaModalIsOpen=!0}}}},635693:function(e,n,i){var o=i(935989);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,i(745346).Z)("614e47f4",o,!0,{})}}]);