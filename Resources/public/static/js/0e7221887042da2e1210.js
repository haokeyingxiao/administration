(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[3246],{97190:function(){},603246:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return n}}),s(412085);var n={template:'\n{% block sw_users_permissions_additional_permissions %}\n<sw-card\n    class="sw-users-permissions-additional-permissions"\n    position-identifier="sw-users-permissions-additional-permissions"\n    :title="$tc(\'sw-users-permissions.roles.additional-permissions.title\')"\n>\n    \n    {% block sw_users_permissions_additional_permissions_additional_privileges %}\n    <template\n        v-for="privilege in additionalPermissions"\n        :key="`head-${privilege.key}`"\n    >\n        \n        {% block sw_users_permissions_additional_permissions_additional_privileges_headline %}\n        <h4\n            :class="\'sw-users-permissions-additional-permissions_\' + privilege.key"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_additional_privileges_headline_content %}\n            <strong>\n                {{ $tc(\'sw-privileges.additional_permissions.\' + privilege.key + \'.label\') }}\n            </strong>\n            {% endblock %}\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_additional_permissions_additional_privileges_switches %}\n        <div\n            class="sw-users-permissions-additional-permissions__switches"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_additional_privileges_switches_content %}\n            <template\n                v-for="(value, roleName) in privilege.roles"\n                :key="roleName"\n            >\n                \n                {% block sw_users_permissions_additional_permissions_additional_privileges_switches_content_switch %}\n                <sw-switch-field\n                    :disabled="disabled"\n                    :class="\'sw_users_permissions_additional_permissions_\' + privilege.key + \'_\' + roleName"\n                    :value="isPrivilegeSelected(privilege.key + \'.\' + roleName)"\n                    :label="$tc(\'sw-privileges.additional_permissions.\' + privilege.key + \'.\' + roleName)"\n                    :bordered="true"\n                    @update:value="onSelectPrivilege(privilege.key + \'.\' + roleName, $event)"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_additional_permissions_app_privileges %}\n    <template\n        v-for="privilege in appPermissions"\n        :key="privilege.key"\n    >\n        \n        {% block sw_users_permissions_additional_permissions_app_privileges_headline %}\n        <h4\n            class="sw-users-permissions-additional-permissions-app"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_app_privileges_headline_content %}\n            <strong>\n                {{ $tc(\'sw-privileges.additional_permissions.app.label\') }}\n            </strong>\n            {% endblock %}\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_additional_permissions_app_privileges_switches %}\n        <div\n            class="sw-users-permissions-additional-permissions__switches"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_app_privileges_switches_content %}\n            <template\n                v-for="(key, roleName) in privilege.roles"\n                :key="roleName"\n            >\n                \n                {% block sw_users_permissions_additional_permissions_app_privileges_switches_content_switch %}\n                <sw-switch-field\n                    v-if="roleName === \'all\'"\n                    :disabled="disabled"\n                    class="sw_users_permissions_additional_permissions_app_all"\n                    :value="isPrivilegeSelected(\'app.\' + roleName)"\n                    :label="$tc(\'sw-privileges.additional_permissions.app.all\')"\n                    :bordered="true"\n                    @update:value="changeAllAppPermissionsForKey(\'app.\' + roleName, $event)"\n                />\n\n                <sw-switch-field\n                    v-else\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.additional_permissions.app.disabledCheckboxMessage\'),\n                        disabled: !isPrivilegeSelected(\'app.all\') || disabled,\n                        showOnDisabledElements: false\n                    }"\n                    :disabled="isPrivilegeSelected(\'app.all\') || disabled"\n                    :class="\'sw_users_permissions_additional_permissions_app_\' + roleName"\n                    :value="isPrivilegeSelected(\'app.\' + roleName)"\n                    :label="roleName"\n                    :bordered="true"\n                    @update:value="onSelectPrivilege(\'app.\' + roleName, $event)"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["privileges"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data(){return{}},computed:{additionalPermissions(){return this.privileges.getPrivilegesMappings().filter(e=>"additional_permissions"===e.category&&"app"!==e.key)},appPermissions(){return this.privileges.getPrivilegesMappings().filter(e=>"additional_permissions"===e.category&&"app"===e.key)}},methods:{isPrivilegeSelected(e){return!!this.role.privileges&&this.role.privileges.includes(e)},onSelectPrivilege(e,i){i?this.role.privileges.push(e):this.role.privileges=this.role.privileges.filter(i=>i!==e)},changeAllAppPermissionsForKey(e,i){this.appPermissions.forEach(e=>{Object.keys(e.roles).forEach(e=>{let s=`app.${e}`;if(i){if(this.role.privileges.includes(s))return;this.role.privileges.push(s)}else this.role.privileges=this.role.privileges.filter(e=>e!==s)})})}}}},412085:function(e,i,s){var n=s(97190);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(745346).Z)("0c267fc2",n,!0,{})}}]);