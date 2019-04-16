$(document).ready( function(){

  //API steps

  $("#location-input").focus();

  //lcation entry event  &q=12866&days=7
  // let url = "http://api.apixu.com/v1/forecast.json?key=1a3ea6499f0b4045878222804190404";
  // let days = "7";
  $("#location-input").on("input", function(){
    if($(this).val().length == 5 ) {

    let url = `http://api.apixu.com/v1/forecast.json?key=1a3ea6499f0b4045878222804190404&q=${$(this).val()}&days=7`;

    $(".cards").text("");

$.ajax(
  {
    url: url,
    success: function(result){
      let forecast = result.forecast.forecastday;

      console.log(forecast);
      //Headline calling out the location of the input
      let location = [];
      $(".location-heading").text(`7-Day Forecast for ${result.location.name}, ${result.location.region}`);
      $(".location-heading").text=("");

      $.each (forecast, function(index, dayOfWeek) {
        let $highLowH3 = $("<h3/>", { text: Math.round(dayOfWeek.day.maxtemp_f) + "\xB0/" + Math.round(dayOfWeek.day.mintemp_f) + "\xB0"});
        // let $highLowH3 = $("<h3/>", { text: dayOfWeek.day.maxtemp_f + "/" + dayOfWeek.day.mintemp_f});
        let $weatherImg = $("<img/>", { src: "https:" + dayOfWeek.day.condition.icon});
        let $condition = $("<h4/>", { text: dayOfWeek.day.condition.text});
        let $dateH3 = $("<h3/>", { text: dayOfWeek.date});
        let $article = $("<article/>", { class: "col-1"});

        $article.append($dateH3);
        $article.append($weatherImg);
        $article.append($condition);
        $article.append($highLowH3);

        $(".cards").append($article);

      });
             }
          });
        };
      });
})
