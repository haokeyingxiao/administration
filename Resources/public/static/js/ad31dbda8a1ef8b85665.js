"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[72031],{872031:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var i={template:'\n{% block sw_form_field_renderer %}\n<component\n    :is="componentName"\n    v-if="!config.hidden"\n    v-bind="bind"\n    ref="component"\n    v-model:value="currentValue"\n    v-model:entity-collection="currentValue"\n    class="sw-form-field-renderer"\n    @update:value="emitUpdate"\n    @update:ids="emitUpdate"\n    @update:entity-collection="emitUpdate"\n>\n    \n    {% block sw_form_field_renderer_inner %}\n    {% parent %}\n\n    <template\n        v-if="suffixLabel"\n        #suffix\n    >\n        <span>{{ suffixLabel }}</span>\n    </template>\n    {% endblock %}\n</component>\n{% endblock %}\n',computed:{suffixLabel(){return this.config?.suffixLabel?this.config.suffixLabel:null}}}}}]);