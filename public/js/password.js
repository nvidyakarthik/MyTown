$(document).ready(function () {

    var pass = $("#password").val();
    var confirmPass = $("#confirmpassword").val();

    //Passport is hashing the passwords so can't get value
    $("#confirmpassword").on("keyup", function () {
        if (pass != confirmPass) {
            $("#passMatch").removeAttr("hidden");
        } else {
            $("#passMatch").hide();
        }
    });


});