//when the 'convert' button is clicked, the value the user inputs into the first textbox is converted to farhenheit.

var answer = 0;
$("button").click(function(event) {
	var celsius = $('#celsius').val();
	var answer= celsius*(9/5)+32;
	$('#fahrenheit').attr("value", answer+" degrees Fahrenheit");
	if (answer >= 80) {
		$('img').attr("src", "images/too_hot.jpg")
		$('#weatherCaption').html("It's a desert out there!")
	} else if (answer <=65) {
		$('img').attr("src", "images/coat_weather.jpg")
		$('#weatherCaption').html("Definitely grab a coat.")
	}
	else {
		$('img').attr("src", "images/perfect-o.jpg")
		$('#weatherCaption').html("Perfect-o!")
	};
});

