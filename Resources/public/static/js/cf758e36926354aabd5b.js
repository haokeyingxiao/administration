(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[85083],{696110:function(){},485083:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}}),t(970519);let{Data:n,Mixin:i,State:r}=Shopware,{Criteria:o}=n;var a={template:'\n{% block sw_settings_user_list %}\n<sw-card\n    class="sw-users-permissions-user-listing sw-settings-user-list"\n    position-identifier="sw-users-permissions-user-listing"\n    :title="$tc(\'sw-users-permissions.users.general.cardLabel\')"\n>\n\n    <div class="sw-users-permissions-user-listing__toolbar">\n        <sw-container\n            columns="1fr minmax(100px, 200px)"\n            gap="0 10px"\n        >\n            \n            {% block sw_settings_user_list_smart_bar_actions %}\n            \n            {% block sw_settings_user_list_search_bar %}\n            <sw-simple-search-field\n                v-model:value="term"\n                size="small"\n                variant="form"\n                @search-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_user_list_actions_create_user %}\n            <sw-button\n                :router-link="{ name: \'sw.users.permissions.user.create\' }"\n                variant="ghost"\n                size="small"\n                :disabled="!acl.can(\'users_and_permissions.creator\') || undefined"\n                class="sw-users-permissions-user-listing__add-user-button"\n            >\n                {{ $tc(\'sw-users-permissions.users.general.labelCreateNewUser\') }}\n            </sw-button>\n            {% endblock %}\n            {% endblock %}\n        </sw-container>\n    </div>\n\n    \n    {% block sw_settings_user_list_content %}\n    \n    {% block sw_settings_user_list_content_grid %}\n    <sw-data-grid\n        :data-source="user"\n        :columns="userColumns"\n        identifier="user-grid"\n        :show-settings="true"\n        :show-selection="false"\n        :is-loading="isLoading"\n        @column-sort="onSortColumn"\n    >\n\n        \n        {% block sw_settings_user_list_content_grid_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_settings_user_list_actions_edit %}\n            <sw-context-menu-item\n                class="sw-settings-user-list__user-view-action"\n                :disabled="!acl.can(\'users_and_permissions.editor\') || undefined"\n                :router-link="{ name: \'sw.users.permissions.user.detail\', params: { id: item.id } }"\n            >\n                {{ $tc(\'sw-users-permissions.users.user-grid.contextMenuEdit\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_settings_user_list_actions_delete %}\n            <sw-context-menu-item\n                class="sw-settings-user-list__user-delete-action"\n                variant="danger"\n                :disabled="!acl.can(\'users_and_permissions.deleter\') || undefined"\n                @click="onDelete(item)"\n            >\n                {{ $tc(\'sw-users-permissions.users.user-grid.contextMenuDelete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_user_list_column_username_preview %}\n        <template #preview-username="{ item, compact }">\n            <sw-avatar\n                :size="compact ? \'32px\' : \'48px\'"\n                :first-name="item.firstName"\n                :last-name="item.lastName"\n                variant="square"\n                :source-context="item"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_user_list_column_username %}\n        <template #column-username="{ item }">\n            \n            {% block sw_settings_user_list_column_username_content %}\n            <router-link\n                class="sw-settings-user-list__columns"\n                :to="{ name: \'sw.users.permissions.user.detail\', params: { id: item.id } }"\n            >\n                {{ item.username }}\n            </router-link>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_user_list_column_username_acl_roles %}\n        <template #column-aclRoles="{ item, compact }">\n            <template v-if="item.aclRoles && item.aclRoles.length > 0">\n                <span\n                    v-for="(role, index) in item.aclRoles"\n                    :key="index"\n                >\n                    {{ role.name }}<template v-if="index + 1 < item.aclRoles.length">,&nbsp;</template>\n                </span>\n            </template>\n            <span v-else-if="item.admin">\n                {{ $tc(\'sw-users-permissions.users.user-detail.labelAdministrator\') }}\n            </span>\n            <span v-else></span>\n        </template>\n        {% endblock %}\n\n        <template #pagination>\n            \n            {% block sw_settings_user_list_grid_pagination %}\n            <sw-pagination\n                :page="page"\n                :limit="limit"\n                :total="total"\n                :auto-hide="true"\n                @page-change="onPageChange"\n            />\n            {% endblock %}\n        </template>\n\n        <template #action-modals="{ item }">\n            \n            {% block sw_settings_user_list_delete_modal %}\n            <sw-modal\n                v-if="getItemToDelete(item)"\n                :title="$tc(\'global.default.warning\')"\n                variant="small"\n                @modal-close="onCloseDeleteModal"\n            >\n                \n                {% block sw_settings_user_list_delete_modal_confirm_delete_text %}\n                <p class="sw-settings-user-list__confirm-delete-text">\n                    {{ $tc(\'sw-users-permissions.users.user-grid.textModalDelete\', 0, { name: salutation(item) }) }}\n                </p>\n                {% endblock %}\n\n                \n                {% block sw_settings_user_list_delete_modal_input__confirm_password %}\n                <sw-password-field\n                    v-model:value="confirmPassword"\n                    class="sw-settings-user-detail__confirm-password"\n                    required\n                    name="sw-field--confirm-password"\n                    :password-toggle-able="true"\n                    :label="$tc(\'sw-users-permissions.users.user-detail.passwordConfirmation.labelConfirmPassword\')"\n                    :placeholder="$tc(\'sw-users-permissions.users.user-detail.passwordConfirmation.placeholderConfirmPassword\')"\n                    autocomplete="off"\n                    @keypress.enter="onConfirmDelete(item)"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_user_list_delete_modal_footer %}\n                <template #modal-footer>\n                    \n                    {% block sw_settings_user_list_delete_modal_cancel %}\n                    <sw-button\n                        size="small"\n                        @click="onCloseDeleteModal"\n                    >\n                        {{ $tc(\'sw-users-permissions.users.user-grid.labelButtonCancel\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_user_list_delete_modal_confirm %}\n                    <sw-button\n                        :disabled="!confirmPassword || undefined"\n                        :is-loading="isConfirmingPassword"\n                        variant="danger"\n                        size="small"\n                        @click="onConfirmDelete(item)"\n                    >\n                        {{ $tc(\'sw-users-permissions.users.user-grid.labelButtonDelete\') }}\n                    </sw-button>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n            </sw-modal>\n            {% endblock %}\n        </template>\n    </sw-data-grid>\n    {% endblock %}\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["userService","loginService","repositoryFactory","acl"],emits:["get-list"],mixins:[i.getByName("listing"),i.getByName("notification"),i.getByName("salutation")],data(){return{user:[],isLoading:!1,itemToDelete:null,disableRouteParams:!0,confirmPassword:"",sortBy:"username",isConfirmingPassword:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{userRepository(){return this.repositoryFactory.create("user")},currentUser:{get(){return r.get("session").currentUser}},userCriteria(){let e=new o(this.page,this.limit);return this.term&&e.setTerm(this.term),this.sortBy&&e.addSorting(o.sort(this.sortBy,this.sortDirection||"ASC")),e.addAssociation("aclRoles"),e.addAssociation("avatarMedia"),e},userColumns(){return[{property:"username",label:this.$tc("sw-users-permissions.users.user-grid.labelUsername")},{property:"firstName",label:this.$tc("sw-users-permissions.users.user-grid.labelFirstName")},{property:"lastName",label:this.$tc("sw-users-permissions.users.user-grid.labelLastName")},{property:"aclRoles",sortable:!1,label:this.$tc("sw-users-permissions.users.user-grid.labelRoles")},{property:"email",label:this.$tc("sw-users-permissions.users.user-grid.labelEmail")}]}},methods:{getItemToDelete(e){return!!this.itemToDelete&&this.itemToDelete.id===e.id},onSearch(e){this.term=e,this.getList()},getList(){return this.isLoading=!0,this.user=[],this.$emit("get-list"),this.userRepository.search(this.userCriteria).then(e=>{this.total=e.total,this.user=e}).finally(()=>{this.isLoading=!1})},onDelete(e){this.itemToDelete=e},async onConfirmDelete(e){let s;let t=`${e.firstName} ${e.lastName} `,n=this.$tc("global.default.success"),i=this.$tc("sw-users-permissions.users.user-grid.notification.deleteSuccess.message",0,{name:t}),r=this.$tc("global.default.error"),o=this.$tc("sw-users-permissions.users.user-grid.notification.deleteError.message",0,{name:t});if(e.id===this.currentUser.id){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-users-permissions.users.user-grid.notification.deleteUserLoggedInError.message")});return}try{this.isConfirmingPassword=!0,s=await this.loginService.verifyUserToken(this.confirmPassword)}catch(e){this.createNotificationError({title:this.$tc("sw-users-permissions.users.user-detail.passwordConfirmation.notificationPasswordErrorTitle"),message:this.$tc("sw-users-permissions.users.user-detail.passwordConfirmation.notificationPasswordErrorMessage")})}finally{this.confirmPassword="",this.isConfirmingPassword=!1}if(!s)return;this.confirmPasswordModal=!1;let a={...Shopware.Context.api};a.authToken.access=s,this.userRepository.delete(e.id,a).then(()=>{this.createNotificationSuccess({title:n,message:i}),this.getList()}).catch(()=>{this.createNotificationError({title:r,message:o})}),this.onCloseDeleteModal()},onCloseDeleteModal(){this.itemToDelete=null}}}},970519:function(e,s,t){var n=t(696110);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,t(745346).Z)("4231d5d4",n,!0,{})}}]);