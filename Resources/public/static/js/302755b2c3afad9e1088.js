(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[88273],{459026:function(){},88273:function(n,d,s){"use strict";s.r(d),s.d(d,{default:function(){return c}}),s(792370);var c={template:'\n{% block sw_cms_add_block %}\n<div\n    class="sw-cms-stage-add-block"\n    role="button"\n    tabindex="0"\n    @click="$emit(\'stage-block-add\')"\n    @keydown.enter="$emit(\'stage-block-add\')"\n>\n    \n    {% block sw_cms_add_block_handle %}\n    <div class="sw-cms-stage-add-block__handle"></div>\n    {% endblock %}\n\n    \n    {% block sw_cms_add_block_button %}\n    <div class="sw-cms-stage-add-block__button">\n        <sw-icon\n            name="regular-plus"\n            size="16"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n'}},792370:function(n,d,s){var c=s(459026);c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[n.id,c,""]]),c.locals&&(n.exports=c.locals),s(745346).Z("39235ee1",c,!0,{})}}]);