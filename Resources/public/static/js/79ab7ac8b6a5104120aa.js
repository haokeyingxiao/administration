(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[30900],{664975:function(){},527183:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return r}}),o(814013);var r={template:'\n{% block sw_sales_channel_detail_product_comparison_preview %}\n<div class="sw-sales-channel-detail-product-comparison-preview">\n\n    \n    {% block sw_sales_channel_detail_product_comparison_preview_modal %}\n    <sw-modal\n        v-if="content"\n        variant="large"\n        :title="$tc(\'sw-sales-channel.detail.titleProductComparisonPreview\')"\n        @modal-close="onModalClose"\n    >\n\n        \n        {% block sw_sales_channel_detail_product_comparison_preview_modal_errors %}\n        <div v-if="displayErrors">\n            <h3>{{ $tc(\'sw-sales-channel.detail.titleProductComparisonPreviewErrors\') }}</h3>\n            <div class="sw-sales-channel-detail-product-comparison-preview__scrollable-container">\n                <p\n                    v-for="error in errors"\n                    :key="error.message"\n                >\n                    \n                    <a\n                        href="#"\n                        @click.prevent="navigateToLine(error.line)"\n                    >\n                        <sw-icon\n                            name="regular-times-hexagon"\n                            color="#c0392b"\n                            small\n                        />\n                    </a>\n                    {{ error.message }}\n                </p>\n            </div>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_product_comparison_preview_modal_content %}\n        <sw-code-editor\n            ref="previewEditor"\n            mode="text"\n            :editor-config="editorConfig"\n            :soft-wraps="true"\n            :set-focus="false"\n            :value="content"\n        />\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["close"],props:{content:{type:String,required:!1,default:null},errors:{type:Array,required:!1,default:()=>[]}},computed:{editorConfig(){return{readOnly:!0}},displayErrors(){return this.errors.length>0}},methods:{onModalClose(){this.$emit("close")},navigateToLine(e){e&&(this.$refs.previewEditor.editor.scrollToLine(e,!0,!0,()=>{}),this.$refs.previewEditor.editor.gotoLine(e,0,!0))}}}},814013:function(e,n,o){var r=o(664975);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,o(745346).Z)("1cf282dc",r,!0,{})}}]);