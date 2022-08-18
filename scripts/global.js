/**
*	Global functions 
*/

(function(){
    var MessageBus = MyPlace.MessageBus;
    var Msg = MyPlace.constants.msg; 

    // stores Authorization code to variable loginData and also sets loginData to session storage.
MyPlace.isLoggedIn = (function(){
		var loginData = null;

		MessageBus.on( Msg.login.success, function( data ){
			loginData = data;
			sessionStorage.setItem('pt.profile', JSON.stringify( loginData ));
		})

		//Resets LoginData to null at the time of Log-out, and also removes it from session storage.
		MessageBus.on( Msg.logout.success, function( data ){
			loginData = null;
            sessionStorage.setItem('pt.profile', null);
            sessionStorage.setItem('supervisorInfo', null);
		})

		return function(){
			var lData;

			// Attempt to retrieve loginData from session storage.
			if ( !loginData ){
				lData = sessionStorage.getItem('pt.profile');
				loginData = lData && JSON.parse( lData ) || null;
			}
			
			return loginData;
		}
	}());
}());