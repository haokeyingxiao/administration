(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77334],{897610:function(){},977334:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return s}}),a(182810);let{Criteria:r}=Shopware.Data;var s=Shopware.Component.wrapComponentConfig({template:'\n{# @deprecated tag:v6.7.0 - The component sw-dashboard-statistics will be removed #}\n{% block sw_dashboard_statistics %}\n<div\n    v-if="acl.can(\'order.viewer\')"\n    class="sw-dashboard-statistics"\n>\n    <template v-if="isLoading">\n        <sw-skeleton variant="detail" />\n        <sw-skeleton variant="detail" />\n    </template>\n\n    <template v-else>\n        <template v-if="hasOrderToday">\n            \n            {% block sw_dashboard_statistics_intro_stats_headline %}\n            <div class="sw-dashboard-statistics__card-headline">\n                \n                {% block sw_dashboard_index_content_intro_stats_headline_title %}\n                <h1>{{ $tc(\'sw-dashboard.todayStats.headline\') }}</h1>\n                {% endblock %}\n\n                \n                {% block sw_dashboard_statistics_intro_stats_headline_date %}\n                <span class="sw-dashboard-statistics__card-headline-timerange">\n                    {{ formatChartHeadlineDate(today) }}\n                </span>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            <sw-card position-identifier="sw-dashboard-statistics-stats-today">\n                \n                {% block sw_dashboard_statistics_intro_stats_today %}\n                <div class="sw-dashboard-statistics__intro-stats-today">\n                    \n                    {% block sw_dashboard_statistics_intro_stats_today_stats %}\n                    <div\n                        v-if="hasOrderToday"\n                        class="sw-dashboard-statistics__intro-stats-today-stats"\n                    >\n                        \n                        {% block sw_dashboard_statistics_intro_stats_today_stats_single_count %}\n                        <div class="sw-dashboard-statistics__intro-stats-today-single-stat">\n                            <span class="sw-dashboard-statistics__intro-stats-today-single-stat-number-type">{{ $tc(\'sw-dashboard.todayStats.orders\') }}</span>\n                            <span class="sw-dashboard-statistics__intro-stats-today-single-stat-number-value">{{ orderCountToday }}</span>\n                        </div>\n                        {% endblock %}\n\n                        \n                        {% block sw_dashboard_statistics_intro_stats_today_stats_single_sum %}\n                        <div class="sw-dashboard-statistics__intro-stats-today-single-stat">\n                            <span class="sw-dashboard-statistics__intro-stats-today-single-stat-number-type">{{ $tc(\'sw-dashboard.todayStats.turnover\') }}</span>\n                            {# price aggregations do not support currencies yet, see NEXT-5069 #}\n                            <span class="sw-dashboard-statistics__intro-stats-today-single-stat-number-value">{{ currencyFilter(orderSumToday, systemCurrencyISOCode, 2) }}</span>\n                        </div>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_dashboard_statistics_grid %}\n                <template #grid>\n                    <sw-entity-listing\n                        v-if="todayOrderDataLoaded"\n                        :sort-by="todayOrderDataSortBy"\n                        :sort-direction="todayOrderDataSortDirection"\n                        :repository="orderRepository"\n                        :items="todayOrderData"\n                        :columns="orderGridColumns()"\n                        :show-selection="false"\n                        :allow-column-edit="false"\n                        :full-page="false"\n                    >\n                        \n                        {% block sw_dashboard_statistics_grid_created_at %}\n                        <template\n                            #column-orderDateTime="{ item }"\n                        >\n                            {{ dateFilter(item.orderDateTime, {\n                            hour: \'2-digit\',\n                            minute: \'2-digit\',\n                            year: undefined,\n                            month: undefined,\n                            day: undefined\n                            }) }}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_dashboard_statistics_grid_first_name %}\n                        <template #column-orderCustomer.firstName="{ item }">\n                            <router-link\n                                :to="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                                class="sw-data-grid__cell-value"\n                            >\n                                {{ item.orderCustomer.firstName }} {{ item.orderCustomer.lastName }}\n                            </router-link>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_dashboard_statistics_grid_short_name %}\n                        <template\n                            #column-amountTotal="{ item }"\n                        >\n                            {{ currencyFilter(item.amountTotal, item.currency.isoCode) }}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_dashboard_statistics_grid_state %}\n                        <template #column-stateMachineState.name="{ item }">\n                            <sw-label\n                                :variant="getVariantFromOrderState(item)"\n                                appearance="pill"\n                            >\n                                {{ item?.stateMachineState?.translated?.name }}\n                            </sw-label>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_dashboard_statistics_grid_actions %}\n                        <template\n                            #actions="{ item }"\n                        >\n                            \n                            {% block sw_dashboard_statistics_grid_actions_view %}\n                            <sw-context-menu-item\n                                class="sw-order-list__order-view-action"\n                                :router-link="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                            >\n                                {{ $tc(\'sw-order.list.contextMenuView\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                        </template>\n                        {% endblock %}\n\n                    </sw-entity-listing>\n\n                    <sw-loader v-else-if="!todayOrderDataLoaded" />\n                </template>\n                {% endblock %}\n            </sw-card>\n        </template>\n\n        <sw-extension-component-section\n            position-identifier="sw-chart-card__before"\n            deprecation-message="Use sw-dashboard__before-content or sw-dashboard__after-content instead."\n            :deprecated="true"\n        />\n\n        <template v-if="hasOrderInMonth">\n            \n            {% block sw_dashboard_statistics_count %}\n            <sw-chart-card\n                class="sw-dashboard-statistics__statistics-count"\n                :available-ranges="availableRanges"\n                :card-subtitle="getCardSubtitle(ordersDateRange)"\n                :series="orderCountSeries"\n                :options="chartOptionsOrderCount"\n                :fill-empty-values="ordersDateRange.aggregate"\n                type="line"\n                sort\n                position-identifier="sw-chart-card__statistics-count"\n                @sw-chart-card-range-update="onOrdersRangeUpdate"\n            >\n                \n                {% block sw_dashboard_statistics_count_title %}\n                <template #header-title>\n                    {{ $tc(\'sw-dashboard.monthStats.orderNumber\') }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_dashboard_statistics_count_range_select %}\n                <template #range-option="{ range }">\n                    {{ $tc(`sw-dashboard.monthStats.dateRanges.${range}`) }}\n                </template>\n                {% endblock %}\n            </sw-chart-card>\n            {% endblock %}\n\n            \n            {% block sw_dashboard_statistics_sum %}\n            <sw-chart-card\n                class="sw-dashboard-statistics__statistics-sum"\n                :available-ranges="availableRanges"\n                :card-subtitle="getCardSubtitle(turnoverDateRange)"\n                :series="orderSumSeries"\n                :options="chartOptionsOrderSum"\n                :fill-empty-values="turnoverDateRange.aggregate"\n                type="line"\n                sort\n                position-identifier="sw-chart-card__statistics-sum"\n                @sw-chart-card-range-update="onTurnoverRangeUpdate"\n            >\n                \n                {% block sw_dashboard_statistics_sum_title %}\n                <template #header-title>\n                    {{ $tc(\'sw-dashboard.monthStats.turnover\') }}\n                    <sw-help-text\n                        class="sw-dashboard-index__help-text"\n                        :text="$tc(\'sw-dashboard.monthStats.helperText\')"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_dashboard_statistics_sum_range_select %}\n                <template #range-option="{ range }">\n                    {{ $tc(`sw-dashboard.monthStats.dateRanges.${range}`) }}\n                </template>\n                {% endblock %}\n            </sw-chart-card>\n            {% endblock %}\n        </template>\n\n        <sw-extension-component-section\n            position-identifier="sw-chart-card__after"\n            deprecation-message="Use sw-dashboard__before-content or sw-dashboard__after-content instead."\n            :deprecated="true"\n        />\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","stateStyleDataProviderService","acl"],data(){return{historyOrderDataCount:null,historyOrderDataSum:null,todayOrderData:null,todayOrderDataLoaded:!1,todayOrderDataSortBy:"orderDateTime",todayOrderDataSortDirection:"DESC",ordersDateRange:{label:"30Days",range:30,interval:"day",aggregate:"day"},turnoverDateRange:{label:"30Days",range:30,interval:"day",aggregate:"day"},isLoading:!0}},computed:{rangesValueMap(){return[{label:"30Days",range:30,interval:"day",aggregate:"day"},{label:"14Days",range:14,interval:"day",aggregate:"day"},{label:"7Days",range:7,interval:"day",aggregate:"day"},{label:"24Hours",range:24,interval:"hour",aggregate:"hour"},{label:"yesterday",range:1,interval:"day",aggregate:"hour"}]},availableRanges(){return this.rangesValueMap.map(t=>t.label)},chartOptionsOrderCount(){return{xaxis:{type:"datetime",min:this.getDateAgo(this.ordersDateRange).getTime(),labels:{datetimeUTC:!1}},yaxis:{min:0,tickAmount:3,labels:{formatter:t=>parseInt(t,10)}}}},chartOptionsOrderSum(){return{xaxis:{type:"datetime",min:this.getDateAgo(this.turnoverDateRange).getTime(),labels:{datetimeUTC:!1}},yaxis:{min:0,tickAmount:5,labels:{formatter:t=>Shopware.Utils.format.currency(Number.parseFloat(t),Shopware.Context.app.systemCurrencyISOCode,2)}}}},orderRepository(){return this.repositoryFactory.create("order")},orderCountSeries(){if(!this.historyOrderDataCount)return[];let t=this.historyOrderDataCount.buckets.map(t=>({x:this.parseDate(t.key),y:t.count}));return this.todayBucketCount||t.push({x:this.today.getTime(),y:0}),[{name:this.$tc("sw-dashboard.monthStats.numberOfOrders"),data:t}]},orderCountToday(){return this.todayBucketCount?this.todayBucketCount.count:0},orderSumMonthSeries(){return this.orderSumSeries},orderSumSeries(){if(!this.historyOrderDataSum)return[];let t=this.historyOrderDataSum.buckets.map(t=>({x:this.parseDate(t.key),y:t.totalAmount.sum}));return this.todayBucketSum||t.push({x:this.today.getTime(),y:0}),[{name:this.$tc("sw-dashboard.monthStats.totalTurnover"),data:t}]},orderSumToday(){return this.todayBucketCount?this.todayBucketCount.totalAmount.sum:0},hasOrderToday(){return this.todayOrderData&&this.todayOrderData.length>0},hasOrderInMonth(){return!!this.historyOrderDataCount&&!!this.historyOrderDataSum},today(){let t=Shopware.Utils.format.dateWithUserTimezone();return t.setHours(0,0,0,0),t},todayBucketCount(){return this.calculateTodayBucket(this.historyOrderDataCount)},todayBucketSum(){return this.calculateTodayBucket(this.historyOrderDataSum)},systemCurrencyISOCode(){return Shopware.Context.app.systemCurrencyISOCode},isSessionLoaded(){return!Shopware.State.get("session")?.userPending},currencyFilter(){return Shopware.Filter.getByName("currency")},dateFilter(){return Shopware.Filter.getByName("date")}},watch:{isSessionLoaded:{immediate:!0,async handler(){this.isSessionLoaded&&await this.initializeOrderData()}}},methods:{calculateTodayBucket(t){let e=t?.buckets;if(!e)return null;let a=this.today;return e.find(t=>!!t.key&&new Date(t.key).setHours(0,0,0,0)===a.setHours(0,0,0,0))||null},async initializeOrderData(){if(!this.acl.can("order.viewer")){this.isLoading=!1;return}this.todayOrderDataLoaded=!1,await this.getHistoryOrderData(),this.todayOrderData=await this.fetchTodayData(),this.todayOrderDataLoaded=!0,this.isLoading=!1},getHistoryOrderData(){return Promise.all([this.fetchHistoryOrderDataCount().then(t=>{this.historyOrderDataCount=t}),this.fetchHistoryOrderDataSum().then(t=>{this.historyOrderDataSum=t})])},fetchHistoryOrderDataCount(){return this.fetchHistory(!1,this.formatDateToISO(this.getDateAgo(this.ordersDateRange)))},fetchHistoryOrderDataSum(){return this.fetchHistory(!0,this.formatDateToISO(this.getDateAgo(this.turnoverDateRange)))},fetchHistory(t,e){let a=this.orderRepository.buildHeaders(),r=Shopware.Application.getContainer("init").httpClient,s=Shopware.State.get("session").currentUser?.timeZone??"Asia/Shanghai";return r.get(`/_admin/dashboard/order-amount/${e}?timezone=${s}&paid=${t.toString()}`,{headers:a}).then(t=>({name:"order_sum_bucket",buckets:t.data.statistic.map(t=>({key:t.date,count:t.count,apiAlias:"aggregation_bucket",totalAmount:{sum:t.amount,name:"totalAmount"}})),apiAlias:"order_sum_bucket_aggregation"}))},fetchTodayData(){let t=new r(1,10);return t.addAssociation("currency"),t.addAssociation("stateMachineState"),t.addFilter(r.equals("orderDate",this.formatDateToISO(new Date))),t.addSorting(r.sort(this.todayOrderDataSortBy,this.todayOrderDataSortDirection)),this.orderRepository.search(t)},formatDateToISO(t){return Shopware.Utils.format.toISODate(t,!1)},formatChartHeadlineDate(t){let e=Shopware.Application.getContainer("factory").locale.getLastKnownLocale();return t.toLocaleDateString(e,{day:"numeric",month:"short"})},orderGridColumns(){return[{property:"orderNumber",label:"sw-order.list.columnOrderNumber",routerLink:"sw.order.detail",allowResize:!0,primary:!0},{property:"orderDateTime",dataIndex:"orderDateTime",label:"sw-dashboard.todayStats.orderTime",allowResize:!0,primary:!1},{property:"orderCustomer.firstName",dataIndex:"orderCustomer.firstName,orderCustomer.lastName",label:"sw-order.list.columnCustomerName",allowResize:!0},{property:"stateMachineState.name",label:"sw-order.list.columnState",allowResize:!0},{property:"amountTotal",label:"sw-order.list.columnAmount",align:"right",allowResize:!0}]},getVariantFromOrderState(t){let e=t.stateMachineState?.technicalName;return e?this.stateStyleDataProviderService.getStyle("order.state",e).variant:""},parseDate(t){return new Date(t.replace(/-/g,"/").replace("T"," ").replace(/\..*|\+.*/,"")).valueOf()},async onOrdersRangeUpdate(t){let e=this.rangesValueMap.find(e=>e.label===t);if(!e)throw Error("Range not found");this.ordersDateRange=e,this.historyOrderDataCount=await this.fetchHistoryOrderDataCount()},async onTurnoverRangeUpdate(t){let e=this.rangesValueMap.find(e=>e.label===t);if(!e)throw Error("Range not found");this.turnoverDateRange=e,this.historyOrderDataSum=await this.fetchHistoryOrderDataSum()},getCardSubtitle(t){return`${this.formatChartHeadlineDate(this.getDateAgo(t))} - ${this.formatChartHeadlineDate(this.today)}`},getDateAgo(t){let e=Shopware.Utils.format.dateWithUserTimezone();return"hour"===t.interval?e.setHours(e.getHours()-t.range):(e.setDate(e.getDate()-t.range),e.setHours(0,0,0,0)),e}}})},182810:function(t,e,a){var r=a(897610);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals),(0,a(745346).Z)("a75cf7ac",r,!0,{})}}]);