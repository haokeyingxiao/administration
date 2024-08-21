(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[31981],{754295:function(){},231981:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}}),a(262206);let{Mixin:c}=Shopware;var n={template:'\n{% block sw_settings_captcha_select_v2 %}\n<sw-container class="sw-settings-captcha-select-v2">\n\n    \n    {% block sw_settings_captcha_select_v2_multi_select %}\n    <sw-multi-select\n        v-model:value="activeCaptchaSelect"\n        v-bind="attributes"\n        :options="availableCaptchas"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_captcha_select_v2_google_recaptcha_v2 %}\n    <sw-container\n        v-if="currentValue.googleReCaptchaV2.isActive"\n        class="sw-settings-captcha-select-v2__google-recaptcha-v2"\n    >\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v2_description %}\n        <p class="sw-settings-captcha-select-v2__description sw-settings-captcha-select-v2__google-recaptcha-v2-description">\n            {{ $tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV2CheckboxDescription\') }}\n        </p>\n\n        <p class="sw-settings-captcha-select-v2__description sw-settings-captcha-select-v2__google-recaptcha-v2-description">\n            {{ $tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV2InvisibleDescription\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v2_site_key %}\n        <sw-text-field\n            v-model:value="currentValue.googleReCaptchaV2.config.siteKey"\n            name="googleReCaptchaV2SiteKey"\n            :label="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV2SiteKey\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v2_secret_key %}\n        <sw-text-field\n            v-model:value="currentValue.googleReCaptchaV2.config.secretKey"\n            name="googleReCaptchaV2SecretKey"\n            :label="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV2SecretKey\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v2_invisible %}\n        <sw-switch-field\n            v-model:value="currentValue.googleReCaptchaV2.config.invisible"\n            bordered\n            name="googleReCaptchaV2Invisible"\n            :label="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV2Invisible\')"\n        />\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_captcha_select_v2_google_recaptcha_v3 %}\n    <sw-container\n        v-if="currentValue.googleReCaptchaV3.isActive"\n        class="sw-settings-captcha-select-v2__google-recaptcha-v3"\n    >\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v3_description %}\n        <p class="sw-settings-captcha-select-v2__description sw-settings-captcha-select-v2__google-recaptcha-v3-description">\n            {{ $tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV3Description\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v3_site_key %}\n\n        <sw-text-field\n            v-model:value="currentValue.googleReCaptchaV3.config.siteKey"\n            name="googleReCaptchaV3SiteKey"\n            :label="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV3SiteKey\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v3_secret_key %}\n        <sw-text-field\n            v-model:value="currentValue.googleReCaptchaV3.config.secretKey"\n            name="googleReCaptchaV3SecretKey"\n            :label="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV3SecretKey\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_captcha_select_v2_google_recaptcha_v3_threshold_score %}\n        <sw-number-field\n            v-model:value="currentValue.googleReCaptchaV3.config.thresholdScore"\n            name="googleReCaptchaV3ThresholdScore"\n            number-type="float"\n            :min="0"\n            :max="1"\n            :step="0.1"\n            :label="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV3ThresholdScore\')"\n            :help-text="$tc(\'sw-settings-basic-information.captcha.label.googleReCaptchaV3DescriptionThresholdScore\')"\n        />\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n</sw-container>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature","captchaService"],emits:["update:value"],mixins:[c.getByName("sw-inline-snippet")],props:{value:{type:Object,required:!1,default:null}},data(){return{availableCaptchas:[]}},computed:{attributes(){return{...this.$attrs,...this.getTranslations()}},currentValue:{get(){return this.value},set(e){this.$emit("update:value",e)}},activeCaptchaSelect:{get(){let e=[];return Object.keys(this.currentValue).forEach(t=>{this.currentValue[t].isActive&&e.push(t)}),e},set(e){e!==this.activeCaptchaSelect&&Object.keys(this.currentValue).forEach(t=>{this.currentValue[t].isActive=e.includes(t)})}}},watch:{currentValue:{deep:!0,handler(e){this.$emit("update:value",e)}}},created(){this.createdComponent()},methods:{createdComponent(){this.captchaService.list(this.setCaptchaOptions)},setCaptchaOptions(e){this.availableCaptchas=e.map(e=>this.renderCaptchaOption(e))},renderCaptchaOption(e){return{label:this.$tc(`sw-settings-basic-information.captcha.label.${e}`),value:e}},getTranslations(){return["label","placeholder","helpText"].filter(e=>!!this.$attrs[e]).reduce((e,t)=>({...e,[t]:this.getInlineSnippet(this.$attrs[t])}),{})}}}},262206:function(e,t,a){var c=a(754295);c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[e.id,c,""]]),c.locals&&(e.exports=c.locals),(0,a(745346).Z)("030be72a",c,!0,{})}}]);