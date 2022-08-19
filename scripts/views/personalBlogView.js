MyPlace.Views = MyPlace.Views || {};

(function () {
    'use strict';

    MyPlace.Views.PersonalBlog = Backbone.View.extend({

        template: _.template($('#tpl_Personal_Blog_VIew').html()),

        tagName: 'div',

        events: {
        },

        initialize: function ( options ) {
            console.log("MyPlace.Personal Blog.initialize  ->  " );
            this.options = options;
            this.render();
        },

        render: function () {
            console.log("MyPlace.Personal Blog.render  ->  ");
            //var data = MyPlace.constants.labels.login;
            this.$el.append(this.template());
            this.options.parent.append( this.$el );

        },


    })
})();