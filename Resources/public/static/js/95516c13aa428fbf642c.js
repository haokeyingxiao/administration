"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77835],{77835:function(e,n,t){t.r(n),t.d(n,{default:function(){return r}});let{Component:o}=Shopware,{mapPropertyErrors:i}=o.getComponentHelper();var r={template:'\n{% block sw_property_option_detail %}\n<sw-modal\n    :title="currentOption.name ? currentOption.name : $tc(\'sw-property.detail.textOptionHeadline\')"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_property_option_detail_name %}\n    <sw-text-field\n        v-model:value="currentOption.name"\n        name="sw-field--currentOption-name"\n        validation="required"\n        :label="$tc(\'sw-property.detail.labelOptionName\')"\n        :disabled="!allowEdit"\n        :placeholder="$tc(\'sw-property.detail.placeholderOptionName\')"\n        :error="currentOptionNameError"\n        required\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_option_detail_position %}\n    <sw-number-field\n        v-model:value="currentOption.position"\n        name="sw-field--currentOption-position"\n        pattern="[0-9]"\n        :step="1"\n        :disabled="!allowEdit"\n        :label="$tc(\'sw-property.detail.labelOptionPosition\')"\n        :placeholder="$tc(\'sw-property.detail.placeholderOptionPosition\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_option_detail_color %}\n    <sw-colorpicker\n        v-model:value="currentOption.colorHexCode"\n        name="sw-field--currentOption-colorHexCode"\n        color-output="hex"\n        :disabled="!allowEdit"\n        :label="$tc(\'sw-property.detail.labelOptionColor\')"\n        :z-index="1000"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_option_detail_media %}\n    <sw-upload-listener\n        :upload-tag="currentOption.id"\n        auto-upload\n        @media-upload-finish="successfulUpload"\n    />\n    <sw-media-compact-upload-v2\n        default-folder="product"\n        :label="$tc(\'sw-property.detail.labelMediaUpload\')"\n        :source="currentOption.mediaId"\n        :upload-tag="currentOption.id"\n        :disabled="!allowEdit"\n        @media-upload-remove-image="removeMedia"\n        @selection-change="setMedia"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_option_detail_footer %}\n    <template #modal-footer>\n        \n        {% block sw_property_option_detail_footer_cancel %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-property.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_property_option_detail_footer_save %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'property.editor\'),\n                showOnDisabledElements: true\n            }"\n            variant="primary"\n            size="small"\n            :disabled="!allowEdit"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-property.detail.buttonApply\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],props:{currentOption:{type:Object,default(){return{}}},allowEdit:{type:Boolean,required:!1,default:!0}},emits:["cancel-option-edit","save-option-edit"],computed:{mediaRepository(){return this.repositoryFactory.create("media")},...i("currentOption",["name"])},methods:{onCancel(){Shopware.State.dispatch("error/removeApiError",{expression:"property_group_option"}),this.$emit("cancel-option-edit",this.currentOption)},onSave(){this.$emit("save-option-edit",this.currentOption)},async successfulUpload({targetId:e}){this.currentOption.mediaId=e,await this.mediaRepository.get(e)},removeMedia(){this.currentOption.mediaId=null},setMedia(e){this.currentOption.mediaId=e[0].id}}}}}]);