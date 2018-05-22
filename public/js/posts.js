$(document).ready(function () {

    $("#placePost").on("submit", function (event) {
        event.preventDefault();

        var placeName = $("#placeName").val().trim();
        var street = $("#street").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var siteLink = $("#siteLink").val().trim();
        var picLink = $("#picLink").val().trim();
        var description = $("#description").val().trim();
        var category = $("#category").val();
        var kid = document.querySelector('input[value="kid"]');
        var userid=$("#userid").attr("value");

        var kidFriendly;

        if (kid) {
            kidFriendly = 1;
        } else {kidFriendly = 0};
        
        var newPost = {
            name: placeName,
            street: street,
            city: city,
            state: state,
            websitelink: siteLink,
            picturelink: picLink,
            description: description,
            kidfriendly: kidFriendly,
            UserId: userid,
            CategoryId: category
        };

        if (!placeName || !city || !state || !picLink || !description) {
            //$("#postModal").modal("show");
            $("#missingInput").text("One or more of the required fields is missing, please check your submission.").removeAttr("hidden");
            //alert("One or more of the required fields is missing, please check your submission.")
        } else {
            $.post("/api/posts", newPost, function () {
                //alert("Your place has been submitted and will be posted pending review.");
                //window.location.href = "/";
                location.reload();
            });
            

        };

    });

    $("#searchButton").click(function() {
        
        var city = $("#cityname").val().trim();
        window.location.href='/api/posts/city/'+city;   
      
    });
    
});

