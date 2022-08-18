/*!
 * XXSPubSub
 * Copyright (c) 2012 Denis Ciccale (@tdecs)
 * Released under MIT license (https://raw.github.com/dciccale/xxspubsub/master/LICENSE.txt)
 */

MyPlace.MessageBus = MyPlace.MessageBus || {};

(function(){
    'use strict';

    MyPlace.MessageBus = _.extend({}, Backbone.Events);

    return {
        on: function(events, callback, context) {
            MyPlace.MessageBus.on(events, callback, context);
        },

        off: function(events, callback, context) {
            MyPlace.MessageBus.off(events, callback, context);
        },

        trigger: function(/*events*/) {
            MyPlace.MessageBus.trigger.apply(_messageBus, arguments);
        }
    };
}());