$(document).ready(function() {
    $('#eventLocation').load(function() {
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
  });

  function formatDate(date){
      var formattedDate=moment(date).format('LLL');
      return formattedDate;
  }