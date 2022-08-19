/*global MyPlace, $*/


window.MyPlace = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Config:{},

    MessageBus: {},
    init: function () {
        'use strict';

        // Instance of router
        console.log("inside window function");
        var router = new MyPlace.Router();

        // Start Backbone history a necessary step for bookmarkable URL's
        Backbone.history.start();
    }   
};

$(document).ready(function () {
    'use strict';
    console.log("inside document function");
   MyPlace.init();
});
