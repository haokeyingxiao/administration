(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[79770],{729388:function(){},579770:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}}),t(73818);var s={template:'\n{% block sw_settings_item %}\n<router-link\n    :to="to"\n    class="sw-settings-item"\n    :class="classes"\n>\n    \n    {% block sw_settings_item_icon %}\n    <div\n        class="sw-settings-item__icon"\n        :class="{ \'background--enabled\': backgroundEnabled === true }"\n    >\n        <slot name="icon"></slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_item_label %}\n    <div class="sw-settings-item__label">\n        <slot name="label">\n            {{ label }}\n        </slot>\n    </div>\n    {% endblock %}\n</router-link>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{label:{required:!0,type:String},to:{required:!0,type:Object,default(){return{}}},disabled:{required:!1,type:Boolean,default:!1},backgroundEnabled:{required:!1,type:Boolean,default:!0}},computed:{classes(){return{"is--disabled":this.disabled}}}}},73818:function(n,e,t){var s=t(729388);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),(0,t(745346).Z)("46e0cda4",s,!0,{})}}]);