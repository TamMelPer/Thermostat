$(document).ready(function() {
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

