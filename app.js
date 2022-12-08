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

const rootRef = database.ref('plants');

// ===============connect====================
const temp = document.getElementById("temperature");
const id = document.getElementById("id");
const huni = document.getElementById("humidity");
const time = document.getElementById("real_time");
const TEN1 = document.getElementById("name1");
const TEN2 = document.getElementById("name2");
const TEN3 = document.getElementById("name3");

const addbtn = document.getElementById("addbtn");
const updatebtn = document.getElementById("updatebtn");
const removebtn = document.getElementById("removebtn");


let pump = document.getElementById('pump');

let status = document.getElementById('status');

let  a=0, b=0, c=0, d=0;


status.onclick = function(){
	d+=1;
	if (d%2 == 1) {
		console.log("Auto");
		database.ref("/LivingRoom").update({
            "mode" : 1
        });
	}
	if (d%2 ==0) {
		console.log("Manual");
		database.ref("/LivingRoom").update({
            "mode" : 0
        });
	}
}


pump.onclick = function(){
	c+=0.5;
	if (c%2 == 1) {
		console.log("Pump on");
		database.ref("/LivingRoom").update({
            "Pump" : 1
        });
	}
	if (c%2 ==0) {
		console.log("Pump off");
		database.ref("/LivingRoom").update({
            "Pump" : 0
        });
	}
}










var tab1 = document.getElementById("tab1");
tab1.onclick = function(){
    console.log("plant 1");
    database.ref("/LivingRoom").update({
        "Plant" : 1
    });
}

var tab2 = document.getElementById("tab2");
tab2.onclick = function(){
    console.log("plant 2");
    database.ref("/LivingRoom").update({
        "Plant" : 2
    });
}

var tab3 = document.getElementById("tab3");
tab3.onclick = function(){
    console.log("plant 3");
    database.ref("/LivingRoom").update({
        "Plant" : 3
    });
}

database.ref("/LivingRoom/Temperature").on("value", function(snapshot) {
	var Temp=snapshot.val();
	document.getElementById("temperature").innerHTML=Temp;
	console.log("Temp is: " + Temp);
});

database.ref("/LivingRoom/Humidity").on("value", function(snapshot) {
	var Hum=snapshot.val();
	document.getElementById("humidity").innerHTML=Hum;
	console.log("Hum is: " +Hum);
});

database.ref("/LivingRoom/soilMos").on("value", function(snapshot) {
	var mois=snapshot.val();
	document.getElementById("soilMois").innerHTML=mois;
	console.log("soil mois is: " +mois);
});