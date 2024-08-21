(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[35568],{362492:function(){},435568:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(449023);let{Mixin:i}=Shopware;var l={template:'\n{% block sw_cms_el_config_form %}\n<sw-tabs\n    position-identifier="sw-cms-element-config-form"\n    class="sw-cms-el-config-form__tabs"\n    default-item="content"\n>\n\n    <template #default="{ active }">\n        \n        {% block sw_cms_el_config_form_tab_content %}\n        <sw-tabs-item\n            :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n            name="content"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_form_config_tab_options %}\n        <sw-tabs-item\n            v-if="element.config.type.value === \'contact\'"\n            :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n            name="options"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n        </sw-tabs-item>\n        {% endblock %}\n    </template>\n\n    <template\n        #content="{ active }"\n    >\n        \n        {% block sw_cms_el_form_config_content %}\n        <sw-container\n            v-if="active === \'content\'"\n            class="sw-cms-el-config-form__tab-content"\n        >\n\n            \n            {% block sw_cms_el_form_config_content_form_type %}\n            <sw-select-field\n                v-model:value="element.config.type.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.type\')"\n            >\n                \n                {% block sw_cms_el_form_config_content_form_type_options %}\n                <option\n                    value=""\n                    disabled\n                >\n                    {{ $tc(\'sw-cms.elements.form.config.label.type\') }}\n                </option>\n                <option value="contact">\n                    {{ $tc(\'sw-cms.elements.form.config.label.typeContact\') }}\n                </option>\n                <option value="newsletter">\n                    {{ $tc(\'sw-cms.elements.form.config.label.typeNewsletter\') }}\n                </option>\n                {% endblock %}\n            </sw-select-field>\n            {% endblock %}\n\n            \n            {% block sw_cms_el_form_config_content_form_title %}\n            <sw-text-field\n                v-model:value="element.config.title.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.title\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_cms_el_form_config_content_form_confirmation_text %}\n            <sw-textarea-field\n                v-if="element.config.type.value === \'contact\'"\n                v-model:value="element.config.confirmationText.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.confirmationText\')"\n            />\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_form_config_options %}\n        <sw-container\n            v-else-if="active === \'options\' && element.config.type.value === \'contact\'"\n            class="sw-cms-el-config-form__tab-options"\n        >\n            <sw-tagged-field\n                :value="element.config.mailReceiver.value"\n                :class="getLastMailClass"\n                :label="$tc(\'sw-cms.elements.form.config.label.receiverEmail\')"\n                name="mailReceiver"\n                placeholder="john@doe.com"\n                @update:value="updateMailReceiver"\n            />\n        </sw-container>\n        {% endblock %}\n    </template>\n</sw-tabs>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["systemConfigApiService"],mixins:[i.getByName("cms-element")],computed:{getLastMailClass(){return 1===this.element.config.mailReceiver.value.length?"is--last":""}},created(){this.createdComponent(),this.setShopMail()},methods:{createdComponent(){this.initElementConfig("form")},async getShopMail(){return(await this.systemConfigApiService.getValues("core.basicInformation"))["core.basicInformation.email"]},async setShopMail(){let e=await this.getShopMail();this.element.config.defaultMailReceiver.value&&!this.element.config.mailReceiver.value.includes(e)&&this.element.config.mailReceiver.value.push(e)},async updateMailReceiver(e){if(this.element.config.mailReceiver.value=e,!this.validateMail())return;let n=await this.getShopMail();this.element.config.defaultMailReceiver.value=this.element.config.mailReceiver.value.includes(n)},validateMail(){let e=this.element.config.mailReceiver.value.at(-1);return!e||!!e.includes("@")||(this.element.config.mailReceiver.value.pop(),!1)}}}},449023:function(e,n,t){var i=t(362492);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,t(745346).Z)("4f296c70",i,!0,{})}}]);