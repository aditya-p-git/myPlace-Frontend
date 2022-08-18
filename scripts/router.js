(function () {
    'use strict';
    MyPlace.Router = Backbone.Router.extend({
        routes: {
            '*pageUrl'      : 'defaultRoute'
        },
       
        // Reference of Main Cointainer.
        viewHolder: $("#mainContainer"),

        defaultRoute: function(){
            console.log("MyPlace.router.defaultRoute");
            this.currentView = new MyPlace.Views.Login ({
                parent: this.viewHolder
            });
        }
    });

})();