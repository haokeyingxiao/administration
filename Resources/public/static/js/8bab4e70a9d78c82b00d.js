(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[91424],{803471:function(){},491424:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}}),n(875027);var a={template:'\n{% block sw_media_tag %}\n<div class="sw-media-tag">\n    <sw-media-collapse\n        :title="$tc(\'global.sw-tag-field.title\')"\n        :expand-on-loading="true"\n    >\n        \n        {% block sw_media_tag_input %}\n        <template #content>\n            <sw-entity-tag-select\n                v-model:entityCollection="media.tags"\n                :disabled="disabled"\n                @update:entity-collection="handleChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],props:{media:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{mediaRepository(){return this.repositoryFactory.create("media")}},methods:{handleChange(){this.mediaRepository.save(this.media)}}}},875027:function(e,t,n){var a=n(803471);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(745346).Z)("709c3473",a,!0,{})}}]);