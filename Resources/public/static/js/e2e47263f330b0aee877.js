(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[12206],{418463:function(){},812206:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var l=i(463350);i(894283);let{Component:n,Utils:a,Classes:{ShopwareError:s}}=Shopware,{Criteria:r}=Shopware.Data,{mapState:o}=n.getComponentHelper();var c={template:'\n{% block sw_flow_mail_send_modal %}\n<sw-modal\n    class="sw-flow-mail-send-modal"\n    :title="$tc(\'sw-flow.modals.mail.titleSendMail\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    <sw-single-select\n        :value="replyToSelection"\n        class="sw-flow-mail-send-modal__use-different-reply-to"\n        :options="replyToOptions"\n        :label="$tc(\'sw-flow.modals.mail.useDifferentReplyToLabel\')"\n        :help-text="buildReplyToTooltip(\'sw-flow.modals.mail.tooltipDifferentReplyTo\')"\n        @update:value="changeShowReplyToField"\n    />\n\n    <sw-text-field\n        v-if="showReplyToField"\n        v-model:value="replyTo"\n        name="sw-field--replyTo"\n        class="sw-flow-mail-send-modal__reply-to"\n        :label="$tc(\'sw-flow.modals.mail.labelReplyTo\')"\n        :placeholder="$tc(\'sw-flow.modals.mail.placeholderReplyTo\')"\n        :error="replyToError"\n        required\n        @update:value="replyToError = null"\n    />\n\n    \n    {% block sw_flow_mail_send_modal_recipient %}\n    <sw-single-select\n        v-model:value="mailRecipient"\n        name="sw-field--mailRecipient"\n        class="sw-flow-mail-send-modal__recipient"\n        :options="recipientOptions"\n        :label="$tc(\'sw-flow.modals.mail.labelRecipient\')"\n        :placeholder="$tc(\'sw-flow.modals.mail.placeholderRecipient\')"\n        @update:value="onChangeRecipient"\n    />\n    {% endblock %}\n    \n    {% block sw_flow_mail_send_modal_recipient_emails_grid %}\n    <sw-data-grid\n        v-if="showRecipientEmails"\n        ref="recipientsGrid"\n        class="sw-flow-mail-send-modal__recipient-grid"\n        :class="recipientGridError ? \'has--error\' : \'\'"\n        :data-source="recipients"\n        :columns="recipientColumns"\n        :show-selection="false"\n        :plain-appearance="true"\n        @inline-edit-save="saveRecipient"\n        @inline-edit-cancel="cancelSaveRecipient"\n    >\n\n        \n        {% block sw_event_action_detail_recipients_grid_column_email %}\n        <template #column-email="{ item, column, isInlineEdit, compact }">\n            <sw-text-field\n                v-if="isInlineEdit"\n                v-model:value="item.email"\n                name="sw-field--item-email"\n                class="sw-flow-mail-send-modal__recipient-email"\n                :size="compact ? \'small\' : \'default\'"\n                :error="item.errorMail"\n                :placeholder="$tc(\'sw-flow.modals.mail.placeholderRecipientEmailAddress\')"\n            />\n            <template v-else>\n                {{ item.email }}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_event_action_detail_recipients_grid_column_name %}\n        <template #column-name="{ item, column, isInlineEdit, compact }">\n            <sw-text-field\n                v-if="isInlineEdit"\n                v-model:value="item.name"\n                name="sw-field--item-name"\n                class="sw-flow-mail-send-modal__recipient-name"\n                :size="compact ? \'small\' : \'default\'"\n                :error="item.errorName"\n                :placeholder="$tc(\'sw-flow.modals.mail.placeholderRecipientName\')"\n            />\n            <template v-else>\n                {{ item.name }}\n            </template>\n        </template>\n        {% endblock %}\n\n        <template #actions="{ item, itemIndex }">\n            \n            {% block sw_event_action_detail_recipients_grid_action_edit %}\n            <sw-context-menu-item\n                class="sw-flow-mail-send-modal__grid-action-edit"\n                @click="onEditRecipient(item)"\n            >\n                {{ $tc(\'global.default.edit\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_event_action_detail_recipients_grid_action_delete %}\n            <sw-context-menu-item\n                class="sw-flow-mail-send-modal__grid-action-delete"\n                variant="danger"\n                :disabled="!allowDeleteRecipient(itemIndex)"\n                @click="onDeleteRecipient(itemIndex)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_modal_mail_template_select %}\n    <sw-entity-single-select\n        v-model:value="mailTemplateId"\n        name="sw-field--mailTemplateId"\n        class="sw-flow-mail-send-modal__mail-template-select"\n        required\n        entity="mail_template"\n        value-property="title"\n        label-property="description"\n        :criteria="mailTemplateCriteria"\n        :label="$tc(\'sw-flow.modals.mail.labelEmailTemplate\')"\n        :placeholder="$tc(\'sw-flow.modals.mail.placeholderEmailTemplate\')"\n        :error="mailTemplateIdError"\n        @update:value="(id, template) => onChangeMailTemplate(id, template)"\n    >\n\n        <template #before-item-list>\n\n            \n            {% block sw_flow_mail_send_modal_mail_template_select_before_list %}\n            <ul class="sw-select-result__item-list">\n                <li\n                    class="sw-select-result sw-select-result__create-new-template"\n                    role="button"\n                    tabindex="0"\n                    @click="onCreateMailTemplate"\n                    @keydown.enter="onCreateMailTemplate"\n                >\n                    {{ $tc(\'sw-flow.modals.mail.titleNewEmailTemplate\') }}\n                </li>\n            </ul>\n            {% endblock %}\n        </template>\n\n        <template #selection-label-property="{ item }">\n            <strong>{{ item.translated.description }}</strong>\n            <template v-if="item.translated.description">\n                -\n            </template>\n            {{ item.mailTemplateType.translated.name }}\n        </template>\n\n        <template #result-label-property="{ item, highlightSearchTerm, labelProperty, searchTerm }">\n            <strong>\n                <sw-highlight-text\n                    :text="item.translated.description"\n                    :search-term="searchTerm"\n                />\n            </strong>\n            {{ item.mailTemplateType.translated.name }}\n        </template>\n    </sw-entity-single-select>\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_modal_mail_template_detail_link %}\n    <div class="sw-flow-mail-send-modal__mail-template-detail">\n        <router-link\n            v-if="mailTemplateId"\n            target="_blank"\n            rel="noopener"\n            :to="{ name: \'sw.mail.template.detail\', params: { id: mailTemplateId } }"\n        >\n            {{ $tc(\'sw-flow.modals.mail.fieldMailTemplateDetailLink\') }}\n        </router-link>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_modal_document_types %}\n    <sw-entity-multi-id-select\n        v-model:value="documentTypeIds"\n        name="sw-field--documentTypeIds"\n        :repository="documentTypeRepository"\n        class="sw-flow-mail-send-modal__document-types"\n        :label="$tc(\'sw-flow.modals.mail.labelLatestDocuments\')"\n        :placeholder="$tc(\'sw-flow.modals.mail.placeholderLatestDocuments\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_create_new_template %}\n    <sw-flow-create-mail-template-modal\n        v-if="showCreateMailTemplateModal"\n        class="sw-flow-mail-send-modal__create-mail-template"\n        @process-finish="onCreateMailTemplateSuccess"\n        @modal-close="onCloseCreateMailTemplateModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_modal_document_warning %}\n    <sw-alert\n        class="sw-flow-mail-send-modal__document_warning"\n        variant="info"\n    >\n        {{ $tc(\'sw-flow.modals.mail.documentDescription\') }}\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_modal_custom %}\n    {% endblock %}\n\n    \n    {% block sw_flow_mail_send_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_mail_send_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-mail-send-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_mail_send_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-mail-send-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["modal-close","process-finish"],props:{sequence:{type:Object,required:!0}},data(){return{showCreateMailTemplateModal:!1,mailTemplateId:"",showRecipientEmails:!1,mailRecipient:null,documentTypeIds:[],recipients:[],selectedRecipient:null,mailTemplateIdError:null,recipientGridError:null,replyTo:null,replyToError:null}},computed:{mailTemplateCriteria(){let e=new r(1,25);return e.addAssociation("mailTemplateType"),e},documentTypeRepository(){return this.repositoryFactory.create("document_type")},isNewMail(){return!this.sequence?.id},recipientCustomer(){return[{value:"default",label:this.$tc("sw-flow.modals.mail.labelCustomer")}]},recipientAdmin(){return[{value:"admin",label:this.$tc("sw-flow.modals.mail.labelAdmin")}]},recipientCustom(){return[{value:"custom",label:this.$tc("sw-flow.modals.mail.labelCustom")}]},recipientDefault(){return[{value:"default",label:this.$tc("sw-flow.modals.mail.labelDefault")}]},recipientContactFormMail(){return[{value:"contactFormMail",label:this.$tc("sw-flow.modals.mail.labelContactFormMail")}]},entityAware(){return["CustomerAware","UserAware","OrderAware","CustomerGroupAware"]},recipientOptions(){let e=this.triggerEvent.aware??[],t=[];return(e.forEach(e=>{let i=(e=e.slice(e.lastIndexOf("\\")+1)).charAt(0).toUpperCase()+e.slice(1);t.includes(i)||t.push(i)}),0===t.length)?this.recipientCustom:"contact_form.send"===this.triggerEvent.name?[...this.recipientDefault,...this.recipientContactFormMail,...this.recipientAdmin,...this.recipientCustom]:["newsletter.confirm","newsletter.register","newsletter.unsubscribe"].includes(this.triggerEvent.name)||t.some(e=>this.entityAware.includes(e))?[...this.recipientCustomer,...this.recipientAdmin,...this.recipientCustom]:[...this.recipientAdmin,...this.recipientCustom]},recipientColumns(){return[{property:"email",label:"sw-flow.modals.mail.columnRecipientMail",inlineEdit:"string"},{property:"name",label:"sw-flow.modals.mail.columnRecipientName",inlineEdit:"string"}]},replyToOptions(){return"contact_form.send"===this.triggerEvent.name?[...this.recipientDefault,...this.recipientContactFormMail,...this.recipientCustom]:[...this.recipientDefault,...this.recipientCustom]},replyToSelection(){switch(this.replyTo){case null:return"default";case"contactFormMail":return"contactFormMail";default:return"custom"}},showReplyToField(){return!(null===this.replyTo||"contactFormMail"===this.replyTo)},...o("swFlowState",["mailTemplates","triggerEvent","triggerActions"])},created(){this.createdComponent()},methods:{createdComponent(){if(this.mailRecipient=this.recipientOptions[0].value,!this.isNewMail){let{config:e}=this.sequence;this.mailRecipient=e.recipient?.type,e.recipient?.type==="custom"&&(Object.entries(e.recipient.data).forEach(([e,t])=>{let i=a.createId();this.recipients.push({id:i,email:e,name:t,isNew:!1})}),this.addRecipient(),this.showRecipientEmails=!0),e.replyTo&&(this.replyTo=e.replyTo),this.mailTemplateId=e.mailTemplateId,this.documentTypeIds=e.documentTypeIds}},onClose(){this.$emit("modal-close")},getRecipientData(){let e={};return"custom"!==this.mailRecipient||this.recipients.forEach(t=>{(t.email||t.name)&&Object.assign(e,{[t.email]:t.name})}),e},isRecipientGridError(){if("custom"!==this.mailRecipient)return!1;if(1===this.recipients.length&&!this.recipients[0].email&&!this.recipients[0].name)return this.validateRecipient(this.recipients[0],0),!0;let e=this.recipients.filter(e=>!e.isNew).findIndex(e=>!e.name||!e.email||!(0,l.Do)(e.email));return e>=0&&this.validateRecipient(this.recipients[e],e),e>=0},onAddAction(){if(this.mailTemplateIdError=this.mailTemplateError(this.mailTemplateId),this.showReplyToField&&(this.replyToError=this.setMailError(this.replyTo)),this.recipientGridError=this.isRecipientGridError(),this.mailTemplateIdError||this.replyToError||this.recipientGridError)return;this.resetError();let e={...this.sequence,config:{mailTemplateId:this.mailTemplateId,documentTypeIds:this.documentTypeIds,recipient:{type:this.mailRecipient,data:this.getRecipientData()},replyTo:this.replyTo}};this.$nextTick(()=>{this.$emit("process-finish",e)})},onCreateMailTemplate(){this.showCreateMailTemplateModal=!0},onCloseCreateMailTemplateModal(){this.showCreateMailTemplateModal=!1},onCreateMailTemplateSuccess(e){this.mailTemplateId=e.id,this.onChangeMailTemplate(e.id,e)},onChangeMailTemplate(e,t){e&&(this.mailTemplateIdError=null),!this.mailTemplates.find(t=>t.id===e)&&t&&Shopware.State.commit("swFlowState/setMailTemplates",[...this.mailTemplates,t])},onChangeRecipient(e){"custom"===e?(this.showRecipientEmails=!0,this.addRecipient()):this.showRecipientEmails=!1},addRecipient(){let e=a.createId();this.recipients.push({id:e,email:"",name:"",isNew:!0}),this.$nextTick().then(()=>{this.$refs.recipientsGrid.currentInlineEditId=e,this.$refs.recipientsGrid.enableInlineEdit()})},saveRecipient(e){let t=this.recipients.findIndex(t=>t.id===e.id);if(this.validateRecipient(e,t)){this.$nextTick(()=>{this.$refs.recipientsGrid.currentInlineEditId=e.id,this.$refs.recipientsGrid.enableInlineEdit()});return}e.isNew&&(this.addRecipient(),this.recipients[t].isNew=!1),this.resetError()},cancelSaveRecipient(e){if(e.isNew)e.name="",e.email="";else{let e=this.recipients.findIndex(e=>e.id===this.selectedRecipient.id);this.recipients[e]=this.selectedRecipient}this.resetError()},onEditRecipient(e){let t=this.recipients.findIndex(t=>e.id===t.id);e.name||e.email?this.validateRecipient(e,t):this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.recipients,t,{...e,errorName:null}),this.$set(this.recipients,t,{...e,errorMail:null})):(this.recipients[t]={...e,errorName:null},this.recipients[t]={...e,errorMail:null}),this.$refs.recipientsGrid.currentInlineEditId=e.id,this.$refs.recipientsGrid.enableInlineEdit(),this.selectedRecipient={...e}},onDeleteRecipient(e){this.recipients.splice(e,1)},mailTemplateError(e){return e?null:new s({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},setNameError(e){return e?null:new s({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},setMailError(e){let t=null;return e||(t=new s({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})),(0,l.Do)(e)||(t=new s({code:"INVALID_MAIL"})),t},validateRecipient(e,t){let i=this.setNameError(e.name),l=this.setMailError(e.email);return this.isCompatEnabled("INSTANCE_SET")?this.$set(this.recipients,t,{...e,errorName:i,errorMail:l}):this.recipients[t]={...e,errorName:i,errorMail:l},i||l},resetError(){this.recipientGridError=null,this.recipients.forEach(e=>{e.errorName=null,e.errorMail=null})},allowDeleteRecipient(e){return e!==this.recipients.length-1},changeShowReplyToField(e){switch(e){case"default":this.replyToError=null,this.replyTo=null;return;case"contactFormMail":this.replyToError=null,this.replyTo="contactFormMail";return;default:this.replyTo=""}},buildReplyToTooltip(e){let t={settingsLink:this.$router.resolve({name:"sw.settings.basic.information.index"}).href};return this.$tc(e,0,t)}}}},894283:function(e,t,i){var l=i(418463);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),(0,i(745346).Z)("0fd14454",l,!0,{})}}]);