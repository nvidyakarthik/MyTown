function displayMap() {
	var place = $(this).attr("data-name");
	var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB2lCcLg3Cj16demvVcakCTtQfbud5lf2Q&libraries=places&callback=initAutocomplete";

	//ajax call 
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {

		var dataArray = response.data;

		$("#mood-view").empty();

		for (var i = 0; i < dataArray.length; i++){

		//tried showDiv and #gif-area with same results. 
		var moodDiv = $("<div>");

		moodDiv.addClass("moodGif");

		var pRating = $("<p>").html("Rating: " + dataArray[i].rating);

		moodDiv.append(pRating);

		var newImg = $("<img>");

		newImg.attr("src", dataArray[i].images.fixed_height_still.url);
      	newImg.attr("data-still", dataArray[i].images.fixed_height_still.url);
      	newImg.attr("data-animate", dataArray[i].images.fixed_height.url);
      	newImg.attr("data-state", "still");
      	moodDiv.append(newImg);


      	$("#mood-view").append(moodDiv);
   
	}
});
}