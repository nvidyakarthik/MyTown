function displayMap() {
	var geocoder;
	var map;
	var APIkey = "AIzaSyDEodj1ydbJGQfBZlLer37smCWKXOauY5g"
	var queryURL = "https://maps.googleapis.com/maps/api/js?key=" + APIkey + "&libraries=places&callback=initAutocomplete"

	//ajax call 
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {

		var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

		

		
});
}