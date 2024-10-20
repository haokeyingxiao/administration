(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[23092],{961353:function(){},23092:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}}),i(27874);var n={template:'\n{% block sw_media_base_item %}\n<div\n    class="sw-media-base-item"\n    :class="mediaItemClasses"\n    role="button"\n    tabindex="0"\n    @click="handleItemClick"\n    @keydown.enter="handleItemClick"\n>\n\n    \n    {% block sw_media_base_item_selected_indicator %}\n    <mt-checkbox\n        v-if="!isList && allowEdit"\n        v-model:checked="listSelected"\n        class="sw-media-base-item__selected-indicator"\n        :class="selectionIndicatorClasses"\n        @update:checked="onClickedItem"\n    />\n    {# @deprecated tag:v6.7.0 - Remove the block #}\n    \n    {% block sw_media_base_item_selection_indicator_icon %}\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_media_base_item_preview %}\n    <div class="sw-media-base-item__preview-container">\n        <slot\n            name="preview"\n            v-bind="{ item }"\n        >\n            \n            {% block sw_media_base_item_slot_media_preview %}{% endblock %}\n        </slot>\n\n        {# @experimental stableVersion:v6.7.0 feature:SPATIAL_BASES #}\n        {% block sw_media_base_spatial_label_indicator %}\n        <div\n            v-if="isSpatial"\n            class="sw-media-base-item__labels"\n        >\n            <sw-label\n                variant="neutral-reversed"\n                appearance="pill"\n                size="medium"\n            >\n                <sw-icon\n                    v-if="item.config?.spatial?.arReady ?? defaultArReady"\n                    name="regular-AR"\n                    small\n                />\n                <sw-icon\n                    v-else\n                    name="regular-3d"\n                    small\n                />\n\n                <span class="sw-media-base-item__labels-text">{{ (item.config?.spatial?.arReady ?? defaultArReady) ? $tc(\'sw-product.mediaForm.arSubline\') : $tc(\'sw-product.mediaForm.spatialSubline\') }}</span>\n            </sw-label>\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_base_item_name_container %}\n    <div\n        class="sw-media-base-item__name-container"\n        :class="mediaNameContainerClasses"\n    >\n        <slot\n            name="name"\n            v-bind="{ item, isInlineEdit, startInlineEdit, endInlineEdit }"\n        ></slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_base_item_metadata_container %}\n    <div\n        v-if="isList && showContextMenuButton"\n        class="sw-media-base-item__metadata-container"\n    >\n        \n        {% block sw_media_base_item_metadata %}\n        <slot\n            name="metadata"\n            v-bind="{ item }"\n        >\n            \n            {% block sw_media_base_item_slot_media_item_metadata %}{% endblock %}\n        </slot>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_base_item_context_menu %}\n    <sw-context-button\n        v-if="showContextMenuButton && !isLoading"\n        ref="swContextButton"\n    >\n        \n        {% block sw_media_base_item_context_items %}\n        <slot\n            name="context-menu"\n            v-bind="{ item, startInlineEdit, allowEdit, allowDelete }"\n        >\n            \n            {% block sw_media_base_item_slot_media_item_context_menu %}{% endblock %}\n        </slot>\n    {% endblock %}\n    </sw-context-button>\n    {% endblock %}\n\n    \n    {% block sw_media_base_item_list_selected_indicator %}\n    <mt-checkbox\n        v-if="isList && showSelectionIndicator && allowMultiSelect"\n        v-model:checked="listSelected"\n        class="sw-media-base-item__selected-indicator"\n        :class="selectionIndicatorClasses"\n        @update:checked="onClickedItem"\n    />\n    {# @deprecated tag:v6.7.0 - Remove the block #}\n    \n    {% block sw_media_base_item_list_selection_indicator_icon %}\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_media_base_item_loading_indicator %}\n    <sw-icon\n        v-if="isLoading"\n        class="sw-media-base-item__loader"\n        name="regular-spinner-star"\n        size="16px"\n    />\n    {% endblock %}\n\n    <slot\n        name="modal-windows"\n        v-bind="{ item, allowEdit, allowDelete }"\n    ></slot>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["systemConfigApiService"],emits:["media-item-click","media-item-selection-add","media-item-selection-remove"],props:{item:{type:Object,required:!0},isList:{type:Boolean,required:!1,default:!1},showSelectionIndicator:{required:!1,type:Boolean,default:!1},showContextMenuButton:{type:Boolean,required:!1,default:!0},selected:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},allowMultiSelect:{type:Boolean,required:!1,default:!0},truncateRight:{type:Boolean,required:!1,default:!1},allowEdit:{type:Boolean,required:!1,default:!0},allowDelete:{type:Boolean,required:!1,default:!0}},data(){return{isInlineEdit:!1,defaultArReady:!1}},created(){this.createdComponent()},computed:{mediaItemClasses(){return{"is--list":this.isList,"is--selected":this.selected||this.isInlineEdit}},mediaNameContainerClasses(){return{"is--truncate-right":this.truncateRight}},listSelected(){return this.selected&&this.showSelectionIndicator},selectionIndicatorClasses(){return{"selected-indicator--visible":this.showSelectionIndicator,"selected-indicator--list":this.isList,"selected-indicator--checked":this.listSelected,"selected-indicator--is-allowed":this.allowMultiSelect}},isLoading(){return this.item.isLoading},isSpatial(){return"glb"===this.item.fileExtension||!!this.item?.url?.endsWith(".glb")}},methods:{createdComponent(){this.systemConfigApiService.getValues("core.media").then(e=>{this.defaultArReady=e["core.media.defaultEnableAugmentedReality"]})},handleItemClick(e){this.isSelectionIndicatorClicked(e.composedPath())||this.$emit("media-item-click",{originalDomEvent:e,item:this.item})},isSelectionIndicatorClicked(e){return e.some(e=>e.classList&&(e.classList.contains("sw-media-base-item__selected-indicator")||e.classList.contains("sw-context-button")))},onClickedItem(e){if(!this.listSelected||!this.allowMultiSelect){this.selectItem(e);return}this.removeFromSelection(e)},selectItem(e){this.$emit("media-item-selection-add",{originalDomEvent:e,item:this.item})},removeFromSelection(e){this.$emit("media-item-selection-remove",{originalDomEvent:e,item:this.item})},startInlineEdit(){this.editable&&this.allowEdit&&(this.isInlineEdit=!0)},endInlineEdit(){this.isInlineEdit=!1}}}},27874:function(e,t,i){var n=i(961353);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,i(745346).Z)("c5cafeda",n,!0,{})}}]);