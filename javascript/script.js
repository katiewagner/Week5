//when the 'convert' button is clicked, the value the user inputs into the first textbox is converted to farhenheit.

var answer = 0;
$("button").click(function(event) {
	var celcius = $('#celcius').val();
	//console.log(celcius);
	var answer= celcius*(9/5)+32;
	//$('#farhenheit').html(answer);
	console.log(answer);
});