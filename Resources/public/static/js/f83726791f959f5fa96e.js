(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[31517],{830324:function(){},231517:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(548891);let{date:r}=Shopware.Utils.format;var i={template:'\n{% block sw_extension_review_reply %}\n<div class="sw-extension-review-reply">\n    \n    {% block sw_extension_review_reply_head %}\n    <div class="sw-extension-review-reply__head">\n        \n        {% block sw_extension_review_reply_head_producer_name %}\n        <span class="sw-extension-review-reply__producer-name">{{ producerName }}</span>\n        {% endblock %}\n\n        \n        {% block sw_extension_review_reply_head_reply_date %}\n        <span\n            v-if="creationDate"\n            class="sw-extension-review-reply__date"\n        >\n            {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-reply.labelCreationDate\', 0, { creationDate: creationDate }) }}\n        </span>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_extension_review_reply_text %}\n    <p\n        v-if="reply.text"\n        class="sw-extension-review-reply__text"\n    >\n        {{ reply.text }}\n    </p>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{reply:{type:Object,required:!0},producerName:{type:String,required:!0}},computed:{creationDate(){return null!==this.reply.creationDate?r(this.reply.creationDate):null}}}},548891:function(e,n,t){var r=t(830324);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),t(745346).Z("43373a6b",r,!0,{})}}]);