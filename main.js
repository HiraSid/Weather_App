$(document).ready(function() {
  $(".search").val("");
  $(".search").focus();
  $(".getapi").css('display', 'none');
  // $(".nogetapi").css('display', 'none');
  // $(".is-custom-notification").css('display', 'none');
  
});

$(".search").on("change keyup paste", function() {
   $(".getapi").css('display', 'none');
  let = SEARCH_TERM = $(".search").val();
  let UNITS = "metric" // TODO: Check what the user selected and pass it to the url
  const API_KEY = 'e24552fa091342f7f4e86823c3f8ddce'
  const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${SEARCH_TERM}&units=${UNITS}&appid=${API_KEY}`
  $(".nogetapi").css('display', 'flex');
  function time( sec,lpc){
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();
    // console.log(date, timestr);
    return timestr
// $("#d1").html(date);
// $("#d2").html(timestr);
  }
  $.get(SEARCH_URL, function(res) {
    if (res) {
      $(".nogetapi").css('display', 'none');
      document.getElementById("location_name").innerHTML = res['name'] + ", " + res['sys']['country'];
      document.getElementById("location_lon").innerHTML = res.coord.lon;
      document.getElementById("location_lat").innerHTML = res.coord.lat;
      document.getElementById("location_temp_syssunrise").innerHTML =time( res.sys.sunrise);
      document.getElementById("location_temp_syssunset").innerHTML = time(res.sys.sunset);
      document.getElementById("location_temp").innerHTML = res['main']['temp'];
      document.getElementById("location_temp_max").innerHTML = res['main']['temp_max'];
      document.getElementById("location_temp_min").innerHTML = res['main']['temp_min'];
      document.getElementById("location_temp_pressure").innerHTML = res.main.pressure;
      document.getElementById("location_temp_humidity").innerHTML = res.main.humidity;

      document.getElementById("location_temp_windspeed").innerHTML = res.wind.speed;
      document.getElementById("location_temp_windgust").innerHTML = res.wind.gust;
      document.getElementById("location_temp_winddeg").innerHTML = res.wind.deg;
      document.getElementById("location_temp_cloudsall").innerHTML = res.clouds.all;
       $(".getapi").css('display', 'flex');
    } 
  });
});
