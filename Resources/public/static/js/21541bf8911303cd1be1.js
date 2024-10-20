(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[30457],{950035:function(){},330457:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(912674);let{Mixin:i}=Shopware;var l={template:'\n{% block sw_cms_element_youtube_video_config %}\n<div class="sw-cms-el-config-youtube-video">\n\n    \n    {% block sw_cms_element_youtube_video_config_video_id %}\n    <sw-text-field\n        v-model:value="videoID"\n        class="sw-cms-el-config-youtube-video__video-id"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.videoId\')"\n        :placeholder="$tc(\'sw-cms.elements.vimeoVideo.config.placeholder.videoId\')"\n    />\n    {% endblock %}\n\n    <div class="sw-cms-el-config-youtube-video__switches">\n\n        \n        {% block sw_cms_element_youtube_video_config_autoplay %}\n        <sw-switch-field\n            v-model:value="element.config.autoPlay.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.autoPlay\')"\n            :help-text="$tc(\'sw-cms.elements.vimeoVideo.config.helpText.autoPlay\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_loop %}\n        <sw-switch-field\n            v-model:value="element.config.loop.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.loop\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_show_controls %}\n        <sw-switch-field\n            v-model:value="element.config.showControls.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.showControls\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_advanced_privacy_mode %}\n        <sw-switch-field\n            v-model:value="element.config.advancedPrivacyMode.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.advancedPrivacy\')"\n            :help-text="$tc(\'sw-cms.elements.vimeoVideo.config.helpText.advancedPrivacy\')"\n        />\n        {% endblock %}\n    </div>\n\n    <div class="sw-cms-el-config-youtube-video__start-and-end">\n\n        \n        {% block sw_cms_element_youtube_video_config_start %}\n        <sw-text-field\n            :value="startValue"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.start\')"\n            placeholder="0:00"\n            @update:value="setTimeValue($event, \'start\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_end %}\n        <sw-text-field\n            :value="endValue"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.end\')"\n            placeholder="0:00"\n            @update:value="setTimeValue($event, \'end\')"\n        />\n        {% endblock %}\n    </div>\n\n    \n    {% block sw_cms_element_youtube_video_config_display_mode %}\n    <sw-select-field\n        v-model:value="element.config.displayMode.value"\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n    >\n        <option value="standard">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n        </option>\n        <option value="streched">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStretch\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_youtube_video_config_needs_confirmation %}\n    <div class="sw-cms-el-config-youtube-video__confirmation">\n        <sw-switch-field\n            v-model:value="element.config.needsConfirmation.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.needsConfirmation\')"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_youtube_video_config_preview_media %}\n    <sw-cms-mapping-field\n        v-if="element.config.needsConfirmation.value"\n        v-model:config="element.config.previewMedia"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.previewImage\')"\n        value-types="entity"\n        entity="media"\n    >\n        <sw-media-upload-v2\n            variant="regular"\n            :upload-tag="uploadTag"\n            :source="previewSource"\n            :allow-multi-select="false"\n            :default-folder="cmsPageState.pageEntityName"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            @media-upload-sidebar-open="onOpenMediaModal"\n            @media-upload-remove-image="onImageRemove"\n        />\n\n        \n        {% block sw_cms_element_youtube_video_config_preview_media_display %}\n        <template #preview="{ demoValue }">\n            <div class="sw-cms-el-config-image__mapping-preview">\n                <img\n                    v-if="demoValue.url"\n                    :src="demoValue.url"\n                    alt=""\n                >\n                <sw-alert\n                    v-else\n                    class="sw-cms-el-config-image__preview-info"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </template>\n        {% endblock %}\n    </sw-cms-mapping-field>\n\n    \n    {% block sw_cms_element_youtube_video_config_preview_media_upload_listener %}\n    <sw-upload-listener\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_youtube_video_config_preview_media_modal %}\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        variant="full"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :entity-context="cmsPageState.entityName"\n        :allow-multi-select="false"\n        :initial-folder-id="cmsPageState.defaultMediaFolderId"\n        @media-upload-remove-image="onImageRemove"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["element-update"],mixins:[i.getByName("cms-element")],data(){return{mediaModalIsOpen:!1,initialFolderId:null}},computed:{startValue(){return this.convertTimeToInputFormat(this.element.config.start.value).string},endValue(){return this.convertTimeToInputFormat(this.element.config.end.value).string},videoID:{get(){return this.element.config.videoID.value},set(e){this.element.config.videoID.value=this.shortenLink(e)}},mediaRepository(){return this.repositoryFactory.create("media")},uploadTag(){return`cms-element-youtube-video-config-${this.element.id}`},previewSource(){return this.element.data&&this.element.data.previewMedia&&this.element.data.previewMedia.id?this.element.data.previewMedia:this.element.config.previewMedia.value}},created(){this.createdComponent()},methods:{setTimeValue(e,n){this.element.config[n].value=this.convertTimeToUrlFormat(e).string},createdComponent(){this.initElementConfig("youtube-video")},convertTimeToInputFormat(e){let n={},t=e;/^[0-9]*$/.test(e)||(t=0);let i=Math.floor(t/60),l=t-60*i;return n.minutes=i,n.seconds=l,1===l.toString().length&&(l=`0${l}`),n.string=`${i}:${l}`,n},convertTimeToUrlFormat(e){let n={},t=e;/[0-9]?[0-9]:[0-9][0-9]/.test(t)||(t="00:00");let i=t.split(":");return n.minutes=Number(i[0]),n.seconds=Number(i[1]),n.string=60*n.minutes+n.seconds,n},shortenLink(e){let n=new URL(e);switch(n.hostname){case"www.youtu.be":case"youtu.be":return n.pathname.substring(1);case"www.youtube.com":case"youtube.com":return n.searchParams.get("v");default:return e}},async onImageUpload({targetId:e}){let n=await this.mediaRepository.get(e);this.element.config.previewMedia.value=n.id,this.updateElementData(n),this.$emit("element-update",this.element)},onImageRemove(){this.element.config.previewMedia.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal(){this.mediaModalIsOpen=!1},onSelectionChanges(e){let n=e[0];this.element.config.previewMedia.value=n.id,this.updateElementData(n),this.$emit("element-update",this.element)},updateElementData(e=null){this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.element.data,"previewMediaId",null===e?null:e.id),this.$set(this.element.data,"previewMedia",e)):(this.element.data.previewMediaId=null===e?null:e.id,this.element.data.previewMedia=e)},onOpenMediaModal(){this.mediaModalIsOpen=!0}}}},912674:function(e,n,t){var i=t(950035);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,t(745346).Z)("09bbcd9c",i,!0,{})}}]);