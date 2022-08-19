(function () {
    'use strict';
    MyPlace.Router = Backbone.Router.extend({
        routes: {

            'loginPage'    :     'loadLoginPage',
            'registerPage' :    'loadRegisterPage',
            'landingPage'  :    'loadLandingPage',
            'personalBlogPage': 'loadPersonalBlogPage',
            'guestBlogPage':    'loadGuestBlogPage',
            '*pageUrl'     :    'defaultRoute'

        },

        initialize : function () {
            
       },
       
        // Reference of Main Cointainer.
        viewHolder: $("#mainContainer"),

        defaultRoute: function(){
            console.log("Inside --Router load DEFAULT (landing) function  - - ");
            this.loadLandingPage();
            
            
        },


        loadLandingPage: function(){
            console.log("Inside --Router load LANDING function  - - ");

            if ( this.currentView ){
                // destroying current view from load register
                this.currentView.remove();
            }
            this.currentView = new MyPlace.Views.Landing ({
                parent: this.viewHolder
            });
        },

        loadRegisterPage: function(){
            console.log("Inside Router load REGISTER function  - - ");
            if ( this.currentView ){
                // destroying current view from load register
                this.currentView.remove();
            }
            this.currentView = new MyPlace.Views.registerUser ({
                parent: this.viewHolder
            });
        },

        loadLoginPage: function(){
            console.log("Inside Router load LOGIN function  - - ")
            // Destroying current view fromloadlogin, if present.
            if ( this.currentView ){
                this.currentView.remove();
            }
            this.currentView = new MyPlace.Views.Login({
                parent: this.viewHolder
            });
        },
        loadPersonalBlogPage: function(){
            console.log("Inside Router load PERSONAL Blog function  - - ");
             // Destroying current view fromloadlogin, if present.
             if ( this.currentView ){
                this.currentView.remove();
            }
            this.currentView = new MyPlace.Views.PersonalBlog({
                parent: this.viewHolder
            });
        },
        loadGuestBlogPage: function(){
            console.log("Inside Router load GUEST Blog function  - - ");
             // Destroying current view fromloadlogin, if present.
             if ( this.currentView ){
                this.currentView.remove();
            }
            this.currentView = new MyPlace.Views.GuestBlog({
                parent: this.viewHolder
            });
        }
    });

})();