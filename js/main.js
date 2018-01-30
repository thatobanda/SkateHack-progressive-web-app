$(function() {
  // Call Weather API
  $.getJSON(
    "http://api.openweathermap.org/data/2.5/find?q=Pretoria&units=metric&APPID=9c007d6db96573c22650ad6742bb8975",
    function(data) {
      // Log results
      console.log(data);

      // Store api call results to chosen data e.g temp
      var location = data.list[0].name;
	   var code = data.list[0].sys.country;
      var weatherDescription = data.list[0].weather[0].description;
      var Temp_min = data.list[0].main.temp_min;
	   var Temp_max = data.list[0].main.temp;
      var humidity = data.list[0].main.humidity;
 var wind= data.list[0].wind.speed;
var clouds= data.list[0].clouds.all;
       

      // Log returned chosen data
      console.log(location);
	  console.log(code);
      console.log(weatherDescription);
      console.log( Temp_min);
	  console.log( Temp_max);
      console.log(humidity);
  console.log(wind);
 
  console.log(clouds);
  

	  console.log("Mild");

	  console.log('Cold');
 
      // Display data in front end(card)
      $(".location").append(location);
 $(".code").append(code);	  // Location
      $(".actual-temp").append( Temp_min+ "˚"); // Temp
	    $(".actual-temp_max").append( Temp_max+ "˚"); // Temp
      $(".description").append(weatherDescription); // Description
 $(".humidity").append(humidity);
 $(".wind").append(wind);
 $(".clouds").append(clouds);
      // Ensure temp data is set as a number
      parseInt(Temp_min);
	    parseInt(Temp_max);

		
			 
		
		 
  );
});


 

 
 
 
