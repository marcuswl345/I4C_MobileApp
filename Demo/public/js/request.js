// Processes the request for charity categories
function sendSocketCat(){
	checkConnection();
	var socket = io();
	socket.emit('Get Categories', "hello");
}

// Sends Request for charities under category
function sendSocketChar(){
	// Send to socket for server
	checkConnection();
	var socket = io();
	if(sessionStorage.getItem('category') == "null"){
		var val = sessionStorage.getItem('charityName');
		socket.emit('Get Search', val);
	}
	else if(sessionStorage.getItem('revenue').length > 0){
		var val = sessionStorage.getItem('category') + ":" + sessionStorage.getItem('revenue');
		socket.emit('Get List', val);
	}else{
		var val = sessionStorage.getItem('category');
		socket.emit('Get List', val);
	}
}

// Request user information
function userInfo(){
	// Send to socket for server
	checkConnection();
	var socket = io();
	var val = sessionStorage.getItem('user');
	socket.emit('User Info', val);
}
// Change Password
function passwordChange(){
	var password = prompt("Please enter your new password", "Password.....");
    if (password != null) {
		checkConnection();
		var socket = io();
		var val = password + ":" + sessionStorage.getItem('user');;
		socket.emit('Change Password', val);
		alert("Password has been changed");
		location.reload();
    }else{
		alert("Password can't to empty");
	}
}

//Change email
function emailChange(){
	var email = prompt("Please enter your new email", "Email.....");
    if (email != null) {
		checkConnection();
		var socket = io();
		var val = email + ":" + sessionStorage.getItem('user');;
		socket.emit('Change Email', val);
		alert("Email has been changed");
		location.reload();
    }else{
		alert("Email can't to empty");
	}
}

// Sends request for list of voted charities
function sendVoteChar(){
	checkConnection();
	var socket = io();
	var val = sessionStorage.getItem('user');
	socket.emit('Get Voted Charities', val);
}