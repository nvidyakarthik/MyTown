$(document).ready(function() {
    
    var placeName = $("#placeName").val().trim();
    var street = $("#street").val().trim();
    var city = $("#city").val().trim();
    var state = $("#state").val().trim();
    var zip = $("#zip").val().trim();
    var siteLink = $("#siteLink").val().trim();
    var picLink = $("#picLink").val().trim();
    var description = $("#description").val().trim();
    var tag = $("#tag").val();
    var kid = $("#kidFriendly");
    
    $("#placePost").on("submit", function(event) {
        event.preventDefault();

        if (!placeName || !city || !state || !picLink || !description || !tag)
        
        var newPost = {};
        

    });


});

