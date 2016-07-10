//when the 'convert' button is clicked, the value the user inputs into the first textbox is converted to farhenheit.

var answer = 0;
$("button").click(function(event) {
	var celsius = $('#celsius').val();
	var answer= celsius*(9/5)+32;
	$('#fahrenheit').attr("value", answer+" degrees Fahrenheit");
	//console.log(answer);
});