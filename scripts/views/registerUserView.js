MyPlace.Views = MyPlace.Views || {};

(function () {
    'use strict';

    MyPlace.Views.registerUser = Backbone.View.extend({
        template: _.template($('#tpl_Register').html()),

        tagName: 'div',

        events: {
            'submit': 'onFormSubmit',
        },

        initialize: function ( options ) {
            console.log("MyPlace. REFISTER USER initialize  ->  " );
            this.options = options;
            this.render();
        },
        render: function () {
            console.log("MyPlace.REGISTER USER.render  ->  ");
            //var data = MyPlace.constants.labels.login;
            this.$el.append(this.template());
            this.options.parent.append( this.$el );
            
        },
        onFormSubmit: function(e) {
            console.log('myPlace.Views.Login.onFormSubmit');

            // Prevents Default action of submit button.
            e.preventDefault();

            // Ajax call to server, login- credentials sent to server.
            $.ajax({
                url: 'https://myblogplace.herokuapp.com/api/users/',
                type: 'POST',
                crossDomain: true,
                data: {
                    name: $('#userName').val(),
                    email: $('#userEmail').val(),
                    password: $('#userPassword').val(),
                },

                /**
                * @name        : success
                * @params      : data
                * @description : on successful login triggers "login success" message
                *                on unsuccessful displays error message - "invalid credentials"
                * @returns     : none
                */
                success: function( data ){
                    console.log('REGISTER.onformsubmit.success');
                    console.log(data.token);
                    location.hash = "/personalBlogPage";
                    /*$.ajaxSetup(
                        {
                            beforeSend : function( xhr ) {
                               xhr.setRequestHeader('x-access-token',data.token);
                            }
                        }
                    )*/
                    // if server returns an object.
                    if ( data ){
                        
                        // on successful login, execution goes inside "if condition"
                        if ( data.success ){
                            MessageBus.trigger( Msg.login.success, data );
                            
                        }

                        // on Unsuccessful login attempt, execution goes inside "else condition"
                        else{

                            // display error message  
                            $('.login-container p').addClass('login-error');
                        }
                    }
                },

                /**
                * @name            : error
                * @params          : error
                * @description     : On login form submit error, displays an alert message
                * @returns         : none
                */
                error: function( err ){
                    alert('login.onformsubmit.error');
                    console.log(err);
                }
            });
        },
    })
})();