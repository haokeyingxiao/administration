(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[23428],{323669:function(){},923428:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return i}}),o(603593);let{Mixin:n}=Shopware;var i={template:'\n{% block sw_cms_element_youtube_video %}\n<div\n    class="sw-cms-el-youtube-video"\n    :class="displayModeClass"\n>\n    \n    <iframe\n        class="sw-cms-el-youtube-video__video"\n        :src="videoUrl"\n    ></iframe>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,mixins:[n.getByName("cms-element")],computed:{videoID(){return this.element.config.videoID.value},relatedVideos(){return"rel=0&"},loop(){return this.element.config.loop.value?`loop=1&playlist=${this.videoID}&`:""},showControls(){return this.element.config.showControls.value?"":"controls=0&"},start(){return 0===this.element.config.start.value?"":`start=${this.element.config.start.value}&`},end(){return this.element.config.end.value?`end=${this.element.config.end.value}&`:""},disableKeyboard(){return"disablekb=1"},videoUrl(){return`https://www.youtube-nocookie.com/embed/\
            ${this.videoID}?\
            ${this.relatedVideos}\
            ${this.loop}\
            ${this.showControls}\
            ${this.start}\
            ${this.end}\
            ${this.disableKeyboard}`.replace(/ /g,"")},displayModeClass(){return"standard"===this.element.config.displayMode.value?"":`is--${this.element.config.displayMode.value}`}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("youtube-video"),this.initElementData("youtube-video")}}}},603593:function(e,t,o){var n=o(323669);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,o(745346).Z)("71269052",n,!0,{})}}]);