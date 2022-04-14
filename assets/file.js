// Set the date we're counting down to
var countDownDate = new Date(config.Fecha).getTime();
document.getElementById("Titulo").innerHTML = config.Titulo;

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("demo").innerHTML = days + "d " + hours + "h: "+ minutes + "m: " + seconds + "s ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Estamos Ready";
	}
}, 1000);


var i = 0;
var cambios = setInterval(function() {
	
	// background-image:url('img/1.gif');
	document.body.style.backgroundImage=" url(\'img/1.gif\');";
	
	if((i % 3 ) == 1){
		console.log(1);
		document.body.style.backgroundImage="url('assets/img/1.gif')";
	}
	else if ((i % 3) == 2){
		console.log(2);
		document.body.style.backgroundImage="url('assets/img/2.gif')";
	}
	else if ((i % 3) == 0){
		console.log(3);
		document.body.style.backgroundImage="url('assets/img/3.gif')";
	}
	i = i +1;
	/**/

}, 60000);