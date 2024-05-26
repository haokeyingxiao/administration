(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[12451],{51123:function(){},612451:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(435856);let{Mixin:i}=Shopware,{Criteria:l}=Shopware.Data;var s={template:'\n{% block sw_newsletter_recipient_detail %}\n<sw-page class="sw-newsletter-recipient-detail">\n    \n    {% block sw_newsletter_recipient_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="newsletterRecipient">\n            {{ newsletterRecipient.email }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_newsletter_recipient_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_newsletter_recipient_detail_actions_edit %}\n        <sw-button\n            class="sw-newsletter-recipient-detail__open-edit-mode-action"\n            variant="primary"\n            :disabled="isLoading || !acl.can(\'newsletter_recipient.editor\')"\n            @click="onClickSave"\n        >\n            {{ $tc(\'sw-newsletter-recipient.general.buttonSave\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_newsletter_recipient_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <sw-card\n                v-else-if="newsletterRecipient"\n                position-identifier="sw-newsletter-recipient-detail"\n                :title="$tc(\'sw-newsletter-recipient.general.information\')"\n            >\n                \n                {% block sw_newsletter_recipient_detail_form %}\n\n                <sw-container\n                    columns="1fr 1fr"\n                    gap="10px"\n                >\n                    \n                    {% block sw_newsletter_recipient_detail_form_salutation %}\n                    <sw-entity-single-select\n                        v-model:value="newsletterRecipient.salutationId"\n                        :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                        :label="$tc(\'sw-newsletter-recipient.general.salutation\')"\n                        label-property="displayName"\n                        entity="salutation"\n                        show-clearable-button\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_newsletter_recipient_detail_form_title %}\n                    <sw-text-field\n                        v-model:value="newsletterRecipient.title"\n                        :label="$tc(\'sw-newsletter-recipient.list.title\')"\n                        :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                    />\n                    {% endblock %}\n                </sw-container>\n\n                <sw-container\n                    columns="1fr 1fr"\n                    gap="10px"\n                >\n                    \n                    {% block sw_newsletter_recipient_detail_form_first_name %}\n                    <sw-text-field\n                        v-model:value="newsletterRecipient.firstName"\n                        :label="$tc(\'sw-newsletter-recipient.list.firstName\')"\n                        :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_newsletter_recipient_detail_form_last_name %}\n                    <sw-text-field\n                        v-model:value="newsletterRecipient.lastName"\n                        :label="$tc(\'sw-newsletter-recipient.list.lastName\')"\n                        :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                    />\n                    {% endblock %}\n                </sw-container>\n\n                \n                {% block sw_newsletter_recipient_detail_form_email %}\n                <sw-text-field\n                    v-model:value="newsletterRecipient.email"\n                    :label="$tc(\'sw-newsletter-recipient.list.email\')"\n                    :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipient_detail_form_street %}\n                <sw-text-field\n                    v-model:value="newsletterRecipient.street"\n                    :label="$tc(\'sw-newsletter-recipient.list.street\')"\n                    :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                />\n                {% endblock %}\n\n                <sw-container\n                    columns="1fr 1fr"\n                    gap="10px"\n                >\n                    \n                    {% block sw_newsletter_recipient_detail_form_zip_code %}\n                    <sw-text-field\n                        v-model:value="newsletterRecipient.zipCode"\n                        :label="$tc(\'sw-newsletter-recipient.list.zipCode\')"\n                        :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_newsletter_recipient_detail_form_city %}\n                    <sw-text-field\n                        v-model:value="newsletterRecipient.city"\n                        :label="$tc(\'sw-newsletter-recipient.list.city\')"\n                        :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                    />\n                    {% endblock %}\n                </sw-container>\n\n                \n                {% block sw_newsletter_recipient_detail_form_language %}\n                <sw-entity-single-select\n                    v-model:value="newsletterRecipient.languageId"\n                    :label="$tc(\'sw-newsletter-recipient.general.language\')"\n                    :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                    entity="language"\n                    show-clearable-button\n                />\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipient_detail_form_sales_channel %}\n                <sw-entity-single-select\n                    v-model:value="newsletterRecipient.salesChannelId"\n                    :label="$tc(\'sw-newsletter-recipient.general.salesChannel\')"\n                    label-property="name"\n                    :disabled="true"\n                    entity="sales_channel"\n                    show-clearable-button\n                />\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipient_detail_form_tags %}\n                <sw-entity-tag-select\n                    v-model:entityCollection="newsletterRecipient.tags"\n                    :label="$tc(\'sw-newsletter-recipient.general.tags\')"\n                    :disabled="!acl.can(\'newsletter_recipient.editor\')"\n                />\n                {% endblock %}\n\n                {% endblock %}\n            </sw-card>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[i.getByName("notification"),i.getByName("salutation")],data(){return{newsletterRecipient:null,salutations:[],languages:[],salesChannels:[],isLoading:!1}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return null!==this.newsletterRecipient?this.salutation(this.newsletterRecipient):""},newsletterRecipientStore(){return this.repositoryFactory.create("newsletter_recipient")}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-newsletter-recipient-detail__newsletterRecipient",path:"newsletterRecipient",scope:this}),this.isLoading=!0;let e=new l(1,1);e.addFilter(l.equals("id",this.$route.params.id)),e.addAssociation("tags"),this.newsletterRecipientStore.search(e).then(e=>{this.newsletterRecipient=e.first(),this.$nextTick(()=>{this.isLoading=!1})})},onClickSave(){this.newsletterRecipientStore.save(this.newsletterRecipient,Shopware.Context.api).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-newsletter-recipient.detail.messageSaveSuccess",0,{key:this.newsletterRecipient.email})})})}}}},435856:function(e,t,n){var i=n(51123);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(745346).Z("55b3f76a",i,!0,{})}}]);