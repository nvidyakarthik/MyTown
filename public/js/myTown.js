$(document).ready(function () {

    $("#placePost").on("submit", function (event) {
        event.preventDefault();

        var placeName = $("#placeName").val().trim();
        var street = $("#street").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zip").val().trim();
        var siteLink = $("#siteLink").val().trim();
        var picLink = $("#picLink").val().trim();
        var description = $("#description").val().trim();
        var tag = $("#tag").val();
        var kid = $("#kidFriendly").val();
        var userid=$("#userid").val();
        
        var newPost = {
            name: placeName,
            street: street,
            city: city,
            state: state,
            zip: zip,
            siteLink: siteLink,
            picLink: picLink,
            description: description,
            tag: tag,
            kid: kid,
            UserId:userid,
            CategoryId:tag
        };

        if (!placeName || !city || !state || !picLink || !description || !tag) {
            //$("#postModal").modal("show");
            alert("One or more of the required fields is missing, please check your submission.")
        } else {
            $.post("/api/posts", newPost, function () {
                alert("Thank you for submitting a post! Your post is now waiting for review before being published.")
            });
        };

    });

    $("")


});

