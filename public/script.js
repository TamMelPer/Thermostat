$(document).ready(function() {

$('#current-city').change(function() { 
	var city = $('#current-city').val();
	$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6ea521e50cfe7612e4494d54cddb44b9&units=metric', function(data) {
		$('#current-temperature').text(data.main.temp);
	})
})

    let thermostat = new Thermostat();
		
		function updateTemperature() {
			$('#temperature').html(thermostat.getCurrentTemperature());
			$('#temperature').removeClass().addClass(thermostat.energyUsage());
		}

		updateTemperature();

    $('#temperature-up').click(() => {
			thermostat.up();
			updateTemperature();   
    });

		$('#temperature-down').click(() => {
			thermostat.down();
			updateTemperature();  
    });

		$('#temperature-reset').click(function() {
			thermostat.resetTemperature();
			updateTemperature();
		});
	
		$('#powersaving-on').click(function() {
			thermostat.switchPowerSavingModeOn();
			$('#power-saving-status').text('on')
			updateTemperature();
		})
	
		$('#powersaving-off').click(function() {
			thermostat.switchPowerSavingModeOff();
			$('#power-saving-status').text('off')
			updateTemperature();
		})

});

