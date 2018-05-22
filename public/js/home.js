$(document).ready(function () {
  /* $('#eventLocation').load(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `https://api.eventful.com/json/events/search?app_key=%20tLZjcCM8s77cvN5x%20&location=+Phoenix&date=Future`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
          console.log(response);
          var cityName=response.events.event[0].city_name;
          var eventName=response.events.event[0].title;
          var d=response.events.event[0].start_time;
          var date=formatDate(d);
          var address=response.events.event[0].venue_address;
          var imgURL=results.events.event[0].image.thumb.url;


          $('#response').html(eventName + "will be in" + cityName + "at" + date + "and address" + address);
          $('#testImage').attr('scr', imgURL);

//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There are no events in this area.")
      }
    });
  });
*/
  /* $.get("/api/categories", function(data) {
     for(var i=0;i<data.length;i++){
       $( "#filters" ).append("<div class='categories'><a href='/api/posts/:"+data[i].id+"'>"+data[i].categoryName+"</a></div>");

    } 
  }); */

  /* $.ajax({
    type: 'GET',
   
    url: '/api/categories'
  }).then(function(){
    console.log("klk");
    

  });
     */
  /* 
    $.get("/api/allPosts", function (data) {
      for (var i = 0; i < data.length; i++) {
        var id = data[i].id;
        var infoId = "infopost" + id;
        var address = data[i].street + ", " + data[i].city + ", " + data[i].state;
        var kidfriendly;
  
        if (data[i].kidfriendly) {
          kidfriendly = "<img src='../images/kidfriendly.png' alt='Kid Friendly!' width='30px'>";
        } else {
          kidfriendly = "";
        };
  
        $("#activities").append("<div class='posts' id=post" + id + "></div>");
  
        $("#post" + id).append("<h6>" + data[i].name + " " + kidfriendly +"</h6");
        $("#post" + id).append("<img src=" + data[i].picturelink + " alt=" + data[i].name + " id=picpost" + id + " class=displayPic>");
        $("#post" + id).append("<div hidden class='info' id=" + infoId + "></div>");
  
        $("#" + infoId).append("<div id='des'><h6 class='des'><u>Review:</u></h6>" + data[i].description + "</div>");
        //$("#" + infoId).append("<br><h6 class='address'><u>Map:</u></h6>");
        $("#" + infoId).append("<div id='map'></div>");
        $("#" + infoId).append("<div class='address'>" + address + "</div>");
        $("#" + infoId).append('<a class="weblink" target="_blank" href="'+ data[i].websitelink +'">Website</a>');
  
  
  
        "<a href='#' id=" + data[i].id + ">" + data[i].name + "</a>"
         var posts = $("")
  
      }
  
  
  
    });*/


  function flip() {
    if ($(this).attr("class") === "posts" || $(this).attr("class") === "posts flipBack") {
      $(this).removeClass("flipBack").addClass("flip");

      setTimeout(() => {
        $("#info" + this.id).removeAttr("hidden").show();
        $("#pic" + this.id).addClass("displayPicBorder");
        $("#name" + this.id).addClass("postName");
      }, 1000 * 0.5);
    }

    else if ($(this).attr("class") === "posts flip") {
      $(this).removeClass("flip").addClass("flipBack");
      setTimeout(() => {
        $("#info" + this.id).hide();
        $("#pic" + this.id).removeClass("displayPicBorder");
        $("#name" + this.id).removeClass("postName");
      }, 1000 * 0.5);
    }

  };

  $(document).on("click", ".posts", flip);

  /* $.ajax({
    url: "https://api.eventful.com/json/events/search?app_key=tLZjcCM8s77cvN5x&location=+Phoenix&date=Future",
    dataType: 'jsonp',
    success: function (weekend) {
      console.log(weekend);

      var eventNames = [];
      for (var i = 0; i < weekend.events.event.length; i++) {
        $("#weekend").append("<div class='event' id='apiCard'>");
        $("#apiCard").append("<h6 class='eventTitle'>" + weekend.events.event[i].title + "</h6>");
        if (weekend.events.event[i].image !== null) {
          $("#apiCard").append("<img class='eventImg' src='" + weekend.events.event[i].image.thumb.url + "' alt='event' width='80px'>");
        }
        $("#apiCard").append("<div class='eventDes'>" + weekend.events.event[i].description + "</div>");
        $("#apiCatd").append("<h6 class='eventAddress'><u>Address:</u></h6>");
        $("#apiCatd").append("<div class='eventAddress'>" + weekend.events.event[i].venue_address + "</div>");
        $("#apiCatd").append("<a href='" + weekend.events.event[i].city_name + "' class='weblink eventLink' target='_blank'>Website</a>");
      }

    }
  }); */

 

});
