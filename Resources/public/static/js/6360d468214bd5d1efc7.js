(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67e3],{43297:function(){},67e3:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return t}}),i(773692);let n=Shopware.Utils.createId;var t=Shopware.Component.wrapComponentConfig({template:'<sw-card\n    class="sw-generic-social-media-card"\n    position-identifier="sw-generic-social-media-card"\n    :title="$tc(\'sw-landing-page.base.seo.titleSocialMedia\')"\n>\n    <sw-text-field\n        class="sw-generic-social-media-card__og-title-input"\n        maxlength="255"\n        :value="ogTitle"\n        :label="$tc(\'sw-landing-page.base.seo.labelSocialMediaTitle\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaTitle\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSocialMediaTitle\')"\n        @update:value="emitOgTitle"\n    />\n\n    <sw-textarea-field\n        class="sw-generic-social-media-card__og-description-input"\n        :value="ogDescription"\n        maxlength="255"\n        :label="$tc(\'sw-landing-page.base.seo.labelSocialMediaDescription\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaDescription\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSocialMediaDescription\')"\n        @update:value="emitOgDescription"\n    />\n\n    <sw-media-upload-v2\n        class="sw-generic-social-media-card__og-image-upload"\n        variant="regular"\n        :upload-tag="uploadTag"\n        :source="ogImageEntity"\n        :allow-multi-select="false"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        @media-upload-sidebar-open="onOpenMediaModal"\n        @media-upload-remove-image="removeOgImage"\n    />\n\n    <sw-upload-listener\n        class="sw-generic-social-media-card__og-image-upload-listener"\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n\n    <div class="sw-generic-social-media-card__media-preview">\n        <div class="sw-generic-social-media-card__media-preview-title">\n            {{ $tc(\'sw-landing-page.base.seo.socialMediaPreview\') }} &lt;= 600px\n        </div>\n\n        <div\n            class="sw-generic-social-media-card__media-preview-container media-preview--sm"\n        >\n            <img\n                v-if="ogImageEntity?.url"\n                class="sw-generic-social-media-card__media-preview-image"\n                :src="ogImageEntity?.url"\n                :alt="ogImageEntity?.alt"\n            >\n            <div class="sw-generic-social-media-card__media-preview-content">\n                <a\n                    class="sw-generic-social-media-card__media-preview-content-link"\n                    href="#"\n                >example.com</a>\n                <h3 class="sw-generic-social-media-card__media-preview-content-title">\n                    {{ ogTitle }}\n                </h3>\n                <p class="sw-generic-social-media-card__media-preview-content-description">\n                    {{ ogDescription }}\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class="sw-generic-social-media-card__media-preview">\n        <div class="sw-generic-social-media-card__media-preview-title">\n            {{ $tc(\'sw-landing-page.base.seo.socialMediaPreview\') }} &gt; 600px\n        </div>\n\n        <div class="sw-generic-social-media-card__media-preview-container media-preview--lg">\n            <img\n                v-if="ogImageEntity?.url"\n                class="sw-generic-social-media-card__media-preview-image"\n                :src="ogImageEntity?.url"\n                :alt="ogImageEntity?.alt"\n            >\n            <div class="sw-generic-social-media-card__media-preview-content">\n                <a\n                    class="sw-generic-social-media-card__media-preview-content-link"\n                    href="#"\n                >\n                    example.com\n                </a>\n                <h3 class="sw-generic-social-media-card__media-preview-content-title">\n                    {{ ogTitle }}\n                </h3>\n            </div>\n        </div>\n    </div>\n\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        class="sw-generic-social-media-card__media-modal"\n        variant="regular"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :allow-multi-select="false"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseMediaModal"\n    />\n</sw-card>\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],props:{ogTitle:{type:String,required:!1,default:""},ogDescription:{type:String,required:!1,default:""},ogImageId:{type:String,required:!1,default:null}},data(){return{ogImageEntity:null,mediaModalIsOpen:!1}},created(){this.onCreated()},watch:{ogImageId:{handler(){this.loadOgImage()}}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},uploadTag(){return`sw-generic-social-media-card-${n().substring(0,8)}`}},methods:{onCreated(){this.loadOgImage()},async loadOgImage(){this.ogImageId&&this.ogImageId!==this.ogImageEntity?.id&&(this.ogImageEntity=await this.mediaRepository.get(this.ogImageId))},removeOgImage(){this.ogImageEntity=null,this.emitMediaId(null)},onOpenMediaModal(){this.mediaModalIsOpen=!0},onCloseMediaModal(){this.mediaModalIsOpen=!1},onImageUpload({targetId:e}){this.emitMediaId(e)},onSelectionChanges(e){if(1!==e.length){this.removeOgImage();return}let a=e[0];this.ogImageEntity=a,this.emitMediaId(a.id)},emitMediaId(e){this.$emit("update:og-image-id",e)},emitOgTitle(e){this.$emit("update:og-title",e)},emitOgDescription(e){this.$emit("update:og-description",e)}}})},773692:function(e,a,i){var n=i(43297);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,i(745346).Z)("4b60aefb",n,!0,{})}}]);