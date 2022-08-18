MyPlace.Views = MyPlace.Views || {};

(function () {
    'use strict';

    MyPlace.Views.Login = Backbone.View.extend({
        //template: JST['MyPlace.Config.templates.loginTpl'],
        //template: _.template($('#tpl_login').html()),
        template: _.template($('tpl_login').html()),

       tagName: 'div',

        className: 'login-container',

        events: {
            'submit': 'onFormSubmit',
            //'keyup #userId' : 'hideErrorMsg',
            //'keyup #userPassword' : 'hideErrorMsg'
        },

        initialize: function ( options ) {
            console.log("MyPlace.login.initialize  ->  " +options.parent);
            this.options = options;
            this.render();
        },
        render: function () {
            console.log("MyPlace.login.render  ->  "+ this.options.parent);
            var data = MyPlace.constants.labels.login;
            this.$el.append(this.template(data));
            this.options.parent.append( this.$el );
            
            //$("#mainContainer").append(this.template(data));

            //console.log("this is login template" +template);

            
            //$("#mainContainer").html('<h1>JUMBOoooo</h1>');
            
            // Appending $el to Parent ie. ViewHolder received as an argument from router.

            //$('#footer').hide();
           // this.options.parent.append( this.$el );
            //calling the applyParsley to apply validation using parsley on form/*
            //this.applyParsley();
            //$("#loginForm").applyParsley();
        },

        /**
        * @name         : onFormSubmit
        * @params       : Submit Event
        * @description  : on submit of login, Does and Ajax call.
        *                 on successful login triggrs a login success message. 
        * @returns      : none
        */

        onFormSubmit: function(e) {
            console.log('PeopleTracker.Views.Login.onFormSubmit');

            // Prevents Default action of submit button.
            e.preventDefault();

            // Ajax call to server, login- credentials sent to server.
            $.ajax({
                url: 'https://myblogplace.herokuapp.com/api/users/login',
                type: 'POST',
                crossDomain: true,
                data: {
                    email: $('#userId').val(),
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
                    console.log('login.onformsubmit.success');
                    console.log(data.token);
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
        

    });

})();
