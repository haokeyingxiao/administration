(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[18798],{957663:function(e,t,s){var n={"./ar.json":28048,"./ca.json":66902,"./cs.json":303706,"./de.json":576059,"./el.json":584947,"./en.json":835969,"./es.json":869169,"./et.json":405080,"./fa.json":336362,"./fi.json":79124,"./fr.json":765196,"./he.json":98766,"./hi.json":671012,"./hr.json":326815,"./hu.json":816867,"./hy.json":219550,"./id.json":920304,"./it.json":422291,"./ja.json":307192,"./ka.json":830462,"./ko.json":771089,"./lt.json":489244,"./lv.json":328221,"./nb.json":218296,"./nl.json":361929,"./pl.json":123820,"./pt-br.json":539191,"./pt.json":256093,"./rs.json":543749,"./ru.json":121027,"./se.json":766740,"./sk.json":590727,"./sl.json":270463,"./sq.json":436679,"./th.json":230185,"./tr.json":368960,"./ua.json":229764,"./zh-cn.json":271330,"./zh-tw.json":824368};function o(e){return Promise.resolve().then(function(){if(!s.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var o=n[e];return s.t(o,19)})}o.keys=function(){return Object.keys(n)},o.id=957663,e.exports=o},24703:function(e,t,s){var n={"./ar.json":28048,"./ca.json":66902,"./cs.json":303706,"./de.json":576059,"./el.json":584947,"./en.json":835969,"./es.json":869169,"./et.json":405080,"./fa.json":336362,"./fi.json":79124,"./fr.json":765196,"./he.json":98766,"./hi.json":671012,"./hr.json":326815,"./hu.json":816867,"./hy.json":219550,"./id.json":920304,"./it.json":422291,"./ja.json":307192,"./ka.json":830462,"./ko.json":771089,"./lt.json":489244,"./lv.json":328221,"./nb.json":218296,"./nl.json":361929,"./pl.json":123820,"./pt-br.json":539191,"./pt.json":256093,"./rs.json":543749,"./ru.json":121027,"./se.json":766740,"./sk.json":590727,"./sl.json":270463,"./sq.json":436679,"./th.json":230185,"./tr.json":368960,"./ua.json":229764,"./zh-cn.json":271330,"./zh-tw.json":824368};function o(e){return s(i(e))}function i(e){if(!s.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=24703},958716:function(){},918798:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var n=s(767166),o=s.n(n);s(437943);let{object:i}=Shopware.Utils,{warn:a}=Shopware.Utils.debug;var r={template:'\n{% block sw_line_chart %}\n<div\n    v-if="!isLoading"\n    class="sw-chart"\n>\n    \n    {% block sw_line_chart_multiple %}\n    <template\n        v-if="needOneDimensionalArray"\n    >\n        \n        {% block sw_line_chart_multiple_chart %}\n        <template\n            v-for="(serie, index) in optimizedSeries"\n            :key="`multiple-chart-${index}`"\n        >\n            <apexchart\n                v-bind="$attrs"\n                :type="type"\n                :options="mergedOptions"\n                :series="serie.data"\n                :height="height"\n                v-on="listeners"\n            />\n        </template>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_line_chart_single %}\n    <apexchart\n        v-else\n        v-bind="$attrs"\n        :type="type"\n        :options="mergedOptions"\n        :series="optimizedSeries"\n        :height="height"\n        v-on="listeners"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inheritAttrs:!1,compatConfig:Shopware.compatConfig,components:{apexchart:o()},inject:["feature"],props:{type:{type:String,required:!0,validValues:["line","area","bar","radar","histogram","pie","donut","scatter","bubble","heatmap"]},options:{type:Object,required:!0},series:{type:Array,required:!0},height:{type:Number,required:!1,default:400},fillEmptyValues:{type:String,required:!1,default:null,validator(e){return["minute","hour","day"].includes(e)}},sort:{type:Boolean,required:!1,default:!1}},data(){return{localeConfig:null,isLoading:!0}},computed:{mergedOptions(){return i.merge({},this.defaultOptions,this.options,{labels:this.mergedLabels})},mergedLabels(){return this.options.labels?[...this.options.labels,...this.generatedLabels]:this.generatedLabels},optimizedSeries(){if(this.needOneDimensionalArray)return this.convertedSeriesStructure;let e=i.deepCopyObject(this.series);return this.fillEmptyValues&&(e=this.addZeroValuesToSeries(e)),this.sort&&(e=this.sortSeries(e)),e},convertedSeriesStructure(){return this.series.map(e=>{let t=e.data.map(e=>e.y);return{name:e.name,data:t}})},generatedLabels(){return this.series.map(e=>e.data.map(e=>e.x)).flat()},needOneDimensionalArray(){return["pie","donut"].indexOf(this.type)>=0},defaultLocale(){let e=Shopware.State.getters.adminLocaleLanguage;return(this.feature.isActive("ADMIN_VITE")?Object.keys(({}).glob("./../../../../../node_modules/apexcharts/dist/locales/*.json",{eager:!0})).map(e=>e.replace("../../../../../node_modules/apexcharts/dist/locales/","")).map(e=>e.replace(".json","")):s(24703).keys().map(e=>e.replace("./","")).map(e=>e.replace(".json",""))).includes(e)?e:"en"},defaultOptions(){return{chart:{fontFamily:"Inter, San Francisco, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif",toolbar:{show:!1},defaultLocale:this.defaultLocale,locales:[...this.localeConfig?[this.localeConfig]:[]],zoom:!1},markers:{size:4,strokeWidth:0,hover:{size:8}},stroke:{width:2},title:{margin:0,style:{color:"#52667a",fontSize:"24px"}},tooltip:{theme:"dark"},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:"#52667a"}},tooltip:{enabled:!0,offsetY:10}},yaxis:{labels:{style:{color:"#52667a"}}}}},listeners(){let e={};return this.isCompatEnabled("INSTANCE_LISTENERS")&&(e=this.$listeners),e}},created(){this.createdComponent()},methods:{createdComponent(){return this.loadLocaleConfig().finally(()=>{this.isLoading=!1})},sortSeries(e){let t=i.deepCopyObject(e);return t.forEach(e=>{e.data=e.data.sort((e,t)=>e.x&&t.x?e.x-t.x:e-t)}),t},addZeroValuesToSeries(e){let t=this.getZeroValues(),s=i.deepCopyObject(e);return s.forEach(e=>{t.forEach(t=>{e.data.find(e=>e.x===t.x)||e.data.push(t)})}),s},setDateTime(e){switch(this.fillEmptyValues){case"minute":e.setSeconds(0,0);break;case"hour":e.setMinutes(0,0,0);break;default:e.setHours(0,0,0,0)}return e},incrementByTimeUnit(e){switch(this.fillEmptyValues){case"hour":e.setHours(e.getHours()+1);break;case"minute":e.setMinutes(e.getMinutes()+1);break;default:e.setDate(e.getDate()+1)}return e},getZeroValues(){let e;if(!(this.fillEmptyValues&&this.options.xaxis&&"datetime"===this.options.xaxis.type))return[];if(!this.options.xaxis.min)return a("To fill dates without values you have to set a min value timestamp for the xaxis"),[];let t=Shopware.Utils.format.dateWithUserTimezone();t.setTime(this.options.xaxis.min),this.setDateTime(t);let s=t.getTime();if(this.options.xaxis.max)e=this.options.xaxis.max;else{let t=Shopware.Utils.format.dateWithUserTimezone();this.setDateTime(t),t.getTime(),e=t.getTime()}let n=[],o=new Date(s);for(;o.getTime()<e;)n.push({x:o.getTime(),y:0}),this.incrementByTimeUnit(o);return n},async loadLocaleConfig(){let e=this.defaultLocale,t=await s(957663)("./"+e+".json");this.localeConfig=t?.default}}}},437943:function(e,t,s){var n=s(958716);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(745346).Z)("2930fa9e",n,!0,{})}}]);