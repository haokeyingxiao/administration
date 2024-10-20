(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[87869],{314699:function(){},943271:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}}),n(227095);let{Filter:o}=Shopware,{Criteria:i}=Shopware.Data;var l={template:'\n{% block sw_order_send_document_modal %}\n<sw-modal\n    class="sw-order-send-document-modal"\n    :title="$tc(\'sw-order.documentCard.labelSendDocument\')"\n    :is-loading="isLoading"\n    @modal-close="$emit(\'modal-close\')"\n>\n    \n    {% block sw_order_send_document_modal_info %}\n    <sw-container\n        class="sw-order-send-document-modal__info-container"\n        columns="1fr 1fr 1fr"\n    >\n        \n        {% block sw_order_send_document_modal_info_number %}\n        <sw-description-list>\n            <dt>{{ $tc(\'sw-order.documentSendModal.labelNumber\') }}</dt>\n            <dd>{{ document.config.documentNumber }}</dd>\n        </sw-description-list>\n        {% endblock %}\n\n        \n        {% block sw_order_send_document_modal_info_type %}\n        <sw-description-list>\n            <dt>{{ $tc(\'sw-order.documentSendModal.labelType\') }}</dt>\n            <dd>{{ document.documentType.name }}</dd>\n        </sw-description-list>\n        {% endblock %}\n\n        \n        {% block sw_order_send_document_modal_info_date %}\n        <sw-description-list>\n            <dt>{{ $tc(\'sw-order.documentSendModal.labelDate\') }}</dt>\n            <dd>{{ dateFilter(document.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}</dd>\n        </sw-description-list>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_mail_template_select %}\n    <sw-entity-single-select\n        v-model:value="mailTemplateId"\n        class="sw-order-send-document-modal__mail-template-select"\n        entity="mail_template"\n        :criteria="mailTemplateCriteria"\n        label-property="mailTemplateType.name"\n        :label="$tc(\'sw-order.documentSendModal.labelMailTemplate\')"\n        description-position="bottom"\n        required\n        @update:value="onMailTemplateChange"\n    >\n        <template #result-description-property="{ item }">\n            {{ truncateFilter(item.description, 160) }}\n        </template>\n    </sw-entity-single-select>\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_customer_mail_select %}\n    <sw-text-field\n        v-model:value="recipient"\n        :label="$tc(\'sw-order.documentSendModal.labelRecipient\')"\n        required\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_subject %}\n    <sw-text-field\n        v-model:value="subject"\n        class="sw-order-send-document-modal__subject"\n        :label="$tc(\'sw-order.documentSendModal.labelSubject\')"\n        required\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_mail_content %}\n    <div\n        class="sw-order-send-document-modal__email-content-label"\n    >\n        {{ $tc(\'sw-order.documentSendModal.labelContent\') }}\n    </div>\n\n    <div\n        class="sw-order-send-document-modal__email-content"\n        v-html="$sanitize(content)"\n    >\n    </div>\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_order_send_document_modal_secondary_action %}\n        <sw-button\n            @click="$emit(\'modal-close\')"\n        >\n            {{ $tc(\'sw-order.documentSendModal.labelClose\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_send_document_modal_primary_action %}\n        <sw-button\n            :disabled="primaryActionDisabled"\n            variant="primary"\n            @click="onSendDocument"\n        >\n            {{ $tc(\'sw-order.documentCard.labelSendDocument\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["mailService","repositoryFactory"],emits:["modal-close","document-sent"],mixins:["notification"],props:{document:{type:Object,required:!0},order:{type:Object,required:!0}},data(){return{isLoading:!1,mailTemplateId:null,subject:"",recipient:"",content:""}},computed:{truncateFilter(){return o.getByName("truncate")},mailTemplateRepository(){return this.repositoryFactory.create("mail_template")},mailHeaderFooterRepository(){return this.repositoryFactory.create("mail_header_footer")},mailTemplateCriteria(){let e=new i(1,25);return e.addAssociation("mailTemplateType"),e.addFilter(i.equalsAny("mailTemplateType.technicalName",["delivery_mail","invoice_mail","credit_note_mail","cancellation_mail"])),e},mailTemplateSendCriteria(){let e=new i(1,25);return e.addAssociation("mailTemplateType"),e},primaryActionDisabled(){return null===this.mailTemplateId||this.subject.length<=0||this.recipient.length<=0},dateFilter(){return Shopware.Filter.getByName("date")}},created(){this.createdComponent()},methods:{createdComponent(){this.recipient=this.order.orderCustomer.email,this.setEmailTemplateAccordingToDocumentType()},setEmailTemplateAccordingToDocumentType(){let e={invoice:"invoice_mail",credit_note:"credit_note_mail",delivery_note:"delivery_mail",storno:"cancellation_mail"};e.hasOwnProperty(this.document.documentType.technicalName)&&this.mailTemplateRepository.search(this.mailTemplateCriteria,Shopware.Context.api).then(t=>{let n=t.filter(t=>t.mailTemplateType.technicalName===e[this.document.documentType.technicalName]).first();n&&(this.mailTemplateId=n.id,this.onMailTemplateChange(n.id,n))})},onMailTemplateChange(e,t){if(null===e)return this.subject="",this.content="",Promise.resolve();if(this.subject=t.subject,!this.order.salesChannel||!this.order.salesChannel.mailHeaderFooterId)return this.mailService.buildRenderPreview(t.mailTemplateType,t).then(e=>{this.content=e});let n={...t};return this.mailHeaderFooterRepository.search(new i(1,1).addFilter(i.equals("id",this.order.salesChannel.mailHeaderFooterId))).then(e=>(e[0].headerHtml&&(n.contentHtml=e[0].headerHtml+n.contentHtml),e[0].footerHtml&&(n.contentHtml+=e[0].footerHtml),this.mailService.buildRenderPreview(n.mailTemplateType,n))).then(e=>{this.content=e})},onSendDocument(){this.isLoading=!0,this.mailTemplateRepository.get(this.mailTemplateId,Shopware.Context.api,this.mailTemplateSendCriteria).then(e=>{this.mailService.sendMailTemplate(this.recipient,`${this.order.orderCustomer.firstName} ${this.order.orderCustomer.lastName}`,{...e,subject:this.subject,recipient:this.recipient},{getIds:()=>{}},this.order.salesChannelId,!1,[this.document.id],{order:this.order,salesChannel:this.order.salesChannel}).catch(()=>{this.createNotificationError({message:this.$tc("sw-order.documentSendModal.errorMessage")}),this.$emit("modal-close")}).then(()=>{this.$emit("document-sent")}).finally(()=>{this.isLoading=!1})})}}}},227095:function(e,t,n){var o=n(314699);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,n(745346).Z)("699285aa",o,!0,{})}}]);