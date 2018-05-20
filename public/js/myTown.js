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
        var kid = $("#kidFriendly").val();
        var userid=$("#userid").val();

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
            UserId:userid,
            CategoryId:category
        };

        if (!placeName || !city || !state || !picLink || !description || !category) {
            //$("#postModal").modal("show");
            alert("One or more of the required fields is missing, please check your submission.")
        } else {
            $.post("/api/posts", newPost, function () {
                alert("Thank you for submitting a post! Your post is now waiting for review before being published.")
                window.location.href = "/";
            });
            

        };

    });

    $("")


});

