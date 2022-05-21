const firebaseConfig = {
    apiKey: "AIzaSyC87A38QuE8E06DE9ceJc95G724zz0Ledw",
    authDomain: "anhuynhsmarthome.firebaseapp.com",
    databaseURL: "https://anhuynhsmarthome-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "anhuynhsmarthome",
    storageBucket: "anhuynhsmarthome.appspot.com",
    messagingSenderId: "451784600525",
    appId: "1:451784600525:web:889e6bfbcdc29ca791f284"
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();



let liv_light = document.getElementById('liv_light');
let wifi = document.getElementById('wifi');
let a = 0, b =0;

liv_light.onclick = function(){
	a+=0.5;
	if (a%2 == 1) {
		console.log("Light on");
		database.ref("/LivingRoom").update({
            "Led_1" : 1
        });
		popup_wipeup();
	 	popup_msg.innerHTML = "Light is on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	if (a%2 ==0) {
		console.log("Light off");
		database.ref("/LivingRoom").update({
            "Led_1" : 0
        });
		popup_wipeup();
	 	popup_msg.innerHTML = "Light is off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}

wifi.onclick = function(){
	b+=0.5;
	
	if (b%2 == 1) {
		console.log("Wifi on");
		database.ref("/LivingRoom").update({
            "Led_2" : 1
        });
		popup_wipeup();
	 	popup_msg.innerHTML = "Wifi is on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	if (b%2 ==0) {
		console.log("Wifi off");
		database.ref("/LivingRoom").update({
            "Led_2" : 0
        });
		popup_wipeup();
	 	popup_msg.innerHTML = "Wifi is off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}

let popup = document.getElementById('popup');
let close_popup = document.getElementById('close_popup');
let popup_msg = document.getElementById('popup_msg');

close_popup.onclick = function(){
	popup_wipedown();
}
popup_wipedown = function(){
	popup.style.opacity = 0;
	popup.style.marginTop = "10px";
}
popup_wipeup = function(){
	popup.style.opacity = 1;
	popup.style.marginTop = "400px";
}


let set_up_threshold = document.getElementById('set_up_threshold');
let set_down_threshold = document.getElementById('set_down_threshold');
let up_threshold = document.getElementById('up_threshold');
let down_threshold = document.getElementById('down_threshold');



set_up_threshold.oninput = function(){
	up_threshold.innerHTML = set_up_threshold.value;
	console.log("Temperature threshold: " + Number(set_up_threshold.value));
	database.ref("/LivingRoom").update({
		"TempThres" : Number(set_up_threshold.value)
	});
}
set_down_threshold.oninput = function(){
	down_threshold.innerHTML = set_down_threshold.value;
	console.log("Humidity threshold: " + Number(set_down_threshold.value));
	database.ref("/LivingRoom").update({
		"HumThres" : Number(set_down_threshold.value)
	});
}
