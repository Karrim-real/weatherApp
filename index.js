$(document).ready(function() {
	 $('.short').hide();
	$('.lead').addClass('animated bounceIn')
	if (navigator.geolocation) {
		var currentLocation = '';
		navigator.geolocation.getCurrentPosition(function(position) {
			currentLocation = position;
			// console.log(currentLocation);
			var latitude = currentLocation.coords.latitude;
			var longitude = currentLocation.coords.longitude;
			// console.log(latitude, longitude);
			var url = 'https://api.apixu.com/v1/current.json?key=a12d063f56dc4135b02153230191303&q=Nigeria';
			$.getJSON(url,function(data) {
				//stringify is used to convert json object into string
				var data1 = JSON.stringify(data);
				// console.log(data1);
				// //its turn a string of object to string
				var json = JSON.parse(data1);
				console.log(json);

				var country = json.location.country;
				var city = json.location.name;
				var state = json.location.region;
				var local_time = json.location.localtime.split(' ')[1];

				var temp_c = json.current.temp_c;
				var temp_f = json.current.temp_f;
				var humidity = json.current.humidity;
				var pressure_in = json.current.pressure_in;
				var last_updated = json.current.last_updated.replace('-', ' ');
				var cloud = json.current.cloud;
				var wind = json.current.wind_kph;

				$('.weather').html( state + ' ,'+ city  +', ' + country);
				
				// if (temp_c <= 30) {
				// 	$('.ade').css({
				// 		// backgroundImage: 'url(./img/sunset.jpg)'
				// 		backgroundColor: 'yellow'
				// 	})

				// } else {
				// 	$('.weather').css({
				// 		backgroundColor: 'red'
				// 		background-image: 'url(./img/sunset.jpg)'

				// 	})
				// }
				$('#info1').html(local_time);
				$('#info2').html('wind '+ wind+ 'kph');
				$('#info3').html(temp_c + ' &#8451');
					 $('.short').show();


					// Toggle Temperature
				var yes = true;
				$('#switchBtn').on('click',function() {
					
					if (yes) {
						$('#info3').html(temp_f + ' &#8457')
						yes = false;
						$('#switchBtn').html('Show in Celcius')

					} else{
						$('#info3').html(temp_c + ' &#8451');
						yes = true;
						$('#switchBtn').html('Show in Farenheight')
					};	
					
				})

				//Showing Sky Status

				if (cloud <= 30) {
					$('#info5').html('Clear Sky')
				} else{
					$('#info5').html('cloud Sky')
				};
				$('#info6').html('Humidity '+ humidity);

				

				console.log(country + ' ,' + city + ' ,'+ state);






				
				
			})
		})
	}

	
});