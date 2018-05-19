function displayMap() {
	var place = $(this).attr("data-name");
	var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB2lCcLg3Cj16demvVcakCTtQfbud5lf2Q&libraries=places&callback=initAutocomplete";

	//ajax call 
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {

		var dataArray = response.data;

		for (var i = 0; i< dataArray.length; i++){

			var mapDIV = $("<div>");

			mapDIV.addClass("map")
		}

		
});
}