'use strict';

class Thermostat {
    constructor() {
        this.DEFAULT_TEMPERATURE = 20;
        this.temperature = this.DEFAULT_TEMPERATURE;
      this.MINIMUM_TEMPERATURE = 10;
      this.powerSavingMode = true;
      this.MAX_LIMIT_PSM_ON = 25;
      this.MAX_LIMIT_PSM_OFF = 32;
      this.MEDIUM_ENERGY_LOWER_LIMIT = 18;
      this.MEDIUM_ENERGY_HIGHER_LIMIT = 25;
      
    }

    getCurrentTemperature() {
      return this.temperature;
    }

    up() {
        if (this.isMaximumTemperature()) {
            return;
        }
        return this.temperature += 1;
    }

    down() {
        if (this.isMinimumTemperature()) {
            return;
        } else {
        return this.temperature -= 1;
        }
    }

    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

    isPowerSavingModeOn() {
        return this.powerSavingMode === true;
    }

    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
      }

      switchPowerSavingModeOn() {
        this.powerSavingMode = true;
      }

    isMaximumTemperature() {
        if (this.isPowerSavingModeOn() === false) {
            return this.temperature === this.MAX_LIMIT_PSM_OFF;
        }
        return this.temperature === this.MAX_LIMIT_PSM_ON;
    }

    reset(){
        return this.temperature = this.DEFAULT_TEMPERATURE;
    }

    energyUsage() {
        if (this.temperature < this.MEDIUM_ENERGY_LOWER_LIMIT) {
            return 'low-usage';
        } else if (this.temperature > this.MEDIUM_ENERGY_HIGHER_LIMIT) {
            return 'high-usage';
        } else {
            return 'medium-usage';
        }
    }

  };