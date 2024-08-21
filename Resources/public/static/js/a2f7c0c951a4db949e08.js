(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[83231],{426731:function(){},483231:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}}),i(179289);var l={template:'\n{% block sw_bulk_edit_save_modal_confirm %}\n<div class="sw-bulk-edit-save-modal-confirm">\n    <p class="sw-bulk-edit-save-modal__help-text">\n        {{ $tc(\'sw-bulk-edit.modal.confirm.description\', itemTotal, {itemCount: itemTotal}) }}\n    </p>\n\n    \n    {% block sw_bulk_edit_save_modal_confirm_trigger_flows %}\n    <div\n        v-if="triggeredFlows.length > 0"\n        class="sw-bulk-edit-save-modal-confirm__trigger-flows"\n    >\n        \n        {% block sw_bulk_edit_save_modal_confirm_trigger_flows_switch %}\n        <sw-switch-field\n            v-if="!bulkEditData?.statusMails?.isChanged"\n            v-model:value="isFlowTriggered"\n            name="sw-bulk-edit-save-modal-confirm-trigger-flows-switch"\n            class="sw-bulk-edit-save-modal-confirm__trigger-flows-switch"\n            :label="$tc(\'sw-bulk-edit.modal.confirm.switchLabel\')"\n            :help-text="$tc(\'sw-bulk-edit.modal.confirm.switchHelpText\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_bulk_edit_save_modal_confirm_trigger_flows_alert %}\n        <sw-alert\n            v-show="isFlowTriggered"\n            class="sw-bulk-edit-save-modal-confirm__trigger-flows-alert"\n        >\n            <p>{{ $tc(\'sw-bulk-edit.modal.confirm.alertTitle\') }}</p>\n            <span>{{ triggeredFlows.join(\', \') }}</span>\n        </sw-alert>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    <sw-alert\n        variant="warning"\n        class="sw-bulk-edit-save-modal__warning"\n    >\n        {{ $tc(\'sw-bulk-edit.modal.warningText\') }}\n    </sw-alert>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["title-set","buttons-update"],props:{itemTotal:{required:!0,type:Number},bulkEditData:{type:Object,required:!1,default:()=>({})}},computed:{isFlowTriggered:{get(){return Shopware.State.get("swBulkEdit").isFlowTriggered},set(t){Shopware.State.commit("swBulkEdit/setIsFlowTriggered",t)}},triggeredFlows(){let t=[];return Object.entries(this.bulkEditData).forEach(([e,i])=>{e===this.$tc(`sw-bulk-edit.modal.confirm.triggeredFlows.${e}.key`)&&!0===i.isChanged&&t.push(this.$tc(`sw-bulk-edit.modal.confirm.triggeredFlows.${e}.label`))}),t}},created(){this.createdComponent()},methods:{createdComponent(){this.updateButtons(),this.setTitle()},setTitle(){this.$emit("title-set",this.$tc("sw-bulk-edit.modal.confirm.title"))},updateButtons(){let t=[{key:"cancel",label:this.$tc("global.sw-modal.labelClose"),position:"left",action:"",disabled:!1},{key:"next",label:this.$tc("sw-bulk-edit.modal.confirm.buttons.applyChanges"),position:"right",variant:"primary",action:"process",disabled:!1}];this.$emit("buttons-update",t)}}}},179289:function(t,e,i){var l=i(426731);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.id,l,""]]),l.locals&&(t.exports=l.locals),(0,i(745346).Z)("10a3c106",l,!0,{})}}]);