(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[48625],{301053:function(){},648625:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return n}}),s(210356);var n={template:'<div class="sw-users-permissions-role-view-detailed">\n    <sw-alert>\n        {{ $tc(\'sw-users-permissions.roles.view.detailed.alertText\') }}\n    </sw-alert>\n\n    <sw-users-permissions-detailed-permissions-grid\n        :role="role"\n        :detailed-privileges="detailedPrivileges"\n        :disabled="!acl.can(\'users_and_permissions.editor\') || undefined"\n    />\n\n    \n    {% block sw_users_permissions_role_role_view_general_card_view_additional_permissions %}\n    <sw-users-permissions-detailed-additional-permissions\n        :role="role"\n        :detailed-privileges="detailedPrivileges"\n        :disabled="!acl.can(\'users_and_permissions.editor\') || undefined"\n    />\n    {% endblock %}\n</div>\n',compatConfig:Shopware.compatConfig,inject:["acl"],props:{role:{type:Object,required:!0},detailedPrivileges:{type:Array,required:!0}}}},210356:function(e,i,s){var n=s(301053);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(745346).Z)("415cec8a",n,!0,{})}}]);