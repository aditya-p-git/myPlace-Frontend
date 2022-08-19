MyPlace.Views = MyPlace.Views || {};

(function () {
    'use strict';

    MyPlace.Views.GuestBlog = Backbone.View.extend({

        template: _.template($('#tpl_General_Blog_VIew').html()),

        tagName: 'div',

        events: {
        },

        initialize: function ( options ) {
            console.log("MyPlace.GUEST Blog.initialize  ->  " );
            this.options = options;
            this.render();
        },

        render: function () {
            console.log("MyPlace.GUEST Blog.render  ->  ");
            //var data = MyPlace.constants.labels.login;
            this.$el.append(this.template());
            this.options.parent.append( this.$el );

        },


    })
})();