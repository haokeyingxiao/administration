(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[56618],{457117:function(){},256618:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}}),s(95849);var t={template:'\n{% block sw_extension_ratings_card %}\n<sw-meteor-card\n    class="sw-extension-ratings-card"\n    :is-loading="isLoading"\n    :title="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.cardTitle\')"\n>\n    \n    {% block sw_extension_ratings_card_has_reviews %}\n    <template v-if="hasReviews">\n        \n        {% block sw_extension_ratings_card_has_reviews_summary %}\n        <sw-extension-ratings-summary :summary="summary" />\n        {% endblock %}\n\n        \n        {% block sw_extension_ratings_card_has_reviews_wrapper %}\n        <div class="sw-extension-ratings-card__reviews">\n            \n            {% block sw_extension_ratings_card_has_reviews_wrapper_review %}\n            <sw-extension-review\n                v-for="(review, index) in reviews"\n                :key="`sw-extension-ratings-card__reviews-review-${index}`"\n                :producer-name="producerName"\n                :review="review"\n            />\n            {% endblock %}\n\n            \n            {% block sw_extension_ratings_card_has_reviews_wrapper_more_button %}\n            <sw-button\n                v-if="canShowMore"\n                size="small"\n                @click="loadMoreReviews"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.labelMoreReviewsBtn\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_ratings_card_empty_state %}\n    <template v-else>\n        \n        {% block sw_extension_ratings_card_empty_state_content %}\n        {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.labelNoReviews\') }}\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_ratings_card_installed_and_licensed_headline %}\n    <h3\n        v-if="isInstalledAndLicensed && !isLoading"\n        class="sw-extension-ratings-card__footer-headline"\n    >\n        {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.footerHeadline\') }}\n    </h3>\n    {% endblock %}\n\n    \n    {% block sw_extension_ratings_card_footer %}\n    <template\n        v-if="isInstalledAndLicensed && !isLoading"\n        #footer\n    >\n        \n        {% block sw_extension_ratings_card_footer_review_creation %}\n        <sw-extension-review-creation\n            :extension="extension"\n            @created="$emit(\'update-extension\')"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-meteor-card>\n{% endblock %}\n',mixins:["sw-extension-error"],props:{extension:{type:Object,required:!0},producerName:{type:String,required:!0},isInstalledAndLicensed:{type:Boolean,required:!1,default:!1}},data(){return{reviews:[],isLoading:!1,criteriaPage:1,criteriaLimit:4,summary:null,numberOfRatings:0}},computed:{canShowMore(){return this.summary.numberOfRatings>this.reviews.length},numberOfRatingsHasChanged(){return this.numberOfRatings!==this.summary.numberOfRatings},extensionStoreDataService(){return Shopware.Service("extensionStoreDataService")},hasReviews(){return this.reviews.length>0}},watch:{extension(){this.fetchReviews()}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchReviews()},async fetchReviews(e=!1){this.isLoading=!0;try{let{reviews:n,summary:s}=await this.getReviews();if(this.summary=s,e&&this.numberOfRatingsHasChanged){this.criteriaPage=1,this.criteriaLimit=4,this.reviews=[],await this.fetchReviews();return}this.numberOfRatings=this.summary.numberOfRatings,this.reviews=this.reviews.concat(n)}catch(e){"function"==typeof this.showExtensionErrors&&this.showExtensionErrors(e)}finally{this.isLoading=!1}},async loadMoreReviews(){this.criteriaPage+=1,await this.fetchReviews(!0)},async getReviews(){return this.extensionStoreDataService.getReviews(this.criteriaPage,this.criteriaLimit,this.extension.id)}}}},95849:function(e,n,s){var t=s(457117);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),s(745346).Z("e086bb96",t,!0,{})}}]);