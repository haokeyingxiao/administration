import template from './sw-card-view.html.twig';
import './sw-card-view.scss';

const { Component } = Shopware;

/**
 * @package admin
 *
 * @private
 * @description
 * Container for the <sw-card> component.
 * @status ready
 * @example-type static
 * @component-example
 * <sw-card-view
 *    style="position: relative; height: 400px;"
 *    :show-error-summary="false"
 * >
 *    <sw-card title="Card-1" large>
 *        Lorem ipsum dolor sit amet
 *    </sw-card>
 *    <sw-card title="Card-2" large>
 *        Lorem ipsum dolor sit amet
 *    </sw-card>
 * </sw-card-view>
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Component.register('sw-card-view', {
    template,

    compatConfig: Shopware.compatConfig,

    props: {
        showErrorSummary: {
            type: Boolean,
            require: false,
            // eslint-disable-next-line vue/no-boolean-default
            default: true,
        },
    },
});
