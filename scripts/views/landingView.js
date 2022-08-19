MyPlace.Views = MyPlace.Views || {};

(function () {
    'use strict';

    MyPlace.Views.Landing = Backbone.View.extend({

        template: _.template($('#Landing_Page').html()),

        tagName: 'div',

        events: {
            'click #landingReg': 'registerPage',
            'click #landingLogin': 'loginPage',
            'click #landingGuest': 'guestPage',
            //'keyup #userId' : 'hideErrorMsg',
            //'keyup #userPassword' : 'hideErrorMsg'
        },

        initialize: function ( options ) {
            console.log("MyPlace.landing.initialize  ->  " +options.parent);
            this.options = options;
            this.render();
        },

        render: function () {
            console.log("MyPlace.landing.render  ->  "+ this.options.parent);
            //var data = MyPlace.constants.labels.login;
            this.$el.append(this.template());
            this.options.parent.append( this.$el );

        },

        registerPage: function(){
            console.log("Inside landing register page");
            // Redirect to Home Page
            location.hash = "/registerPage";
        },

        loginPage: function(){
            console.log("Inside landing login page");
            // Redirect to Home Page
            location.hash = "/loginPage";
        },

        guestPage: function(){
            console.log("Inside landing GUEST page");
            // Redirect to Home Page
            location.hash = "/guestBlogPage";
        }

    })
})();