//delay until the document loads
$(document).ready(function() {

	$('#submit-btn').click(function() {
		event.preventDefault();
//get the user input and store it in a variable
		var city = $('#city-type').val().trim().toLowerCase();
//change body class attribute to correct value
		$('body').attr('class', getCityClass(city));
//reset input box
		$('#city-type').val('');

	});
});
//use function that returns city class depending on user input.
/*If city input is (new york, or new york city, or nyc)
then return class 'nyc'.
Fuction will store this value and return it above.
*/
function getCityClass (city) {
	if (city == "new york" || city =='new york city' || city =='nyc') {
		return 'nyc';
		} else if (city == 'san francisco' || city == 'sf' || city=='by area') {
		return 'sf';
		} else if (city == 'los angeles' || city == 'la' || city == "lax") {
		return 'la';
		} else if (city == 'austin' || city == 'atx') {
		return 'austin';
		} else if (city == 'sydney' || city == 'syd') {
		return 'sydney';
		} 
}