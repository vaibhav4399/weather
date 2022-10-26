import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather-data';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';

  constructor(private weatherService: WeatherService) { }

  cityname: string = "Alaska";
  weatherData!: WeatherData;
  unitsbool: boolean = true;
  units: string = this.unitsbool ? "metric" : "imperial";
  error?: string;

  ngOnInit(): void  {
    this.getWeatherData(this.cityname, this.units);
  }

  onSubmit() {
    this.getWeatherData(this.cityname,this.units);
  }

  onChange() {
    this.units = this.unitsbool ? "metric" : "imperial";
    this.cityname = this.weatherData.name;  
    this.getImperialWeatherData(this.cityname,this.units);
  }

  private getWeatherData(cityname: string, units: string) {
    this.weatherService.getWeatherData(cityname,units)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          this.cityname = "";
          console.log(this.weatherData);
        }
      })
  }

  private getImperialWeatherData(cityname: string, units: string) {
    this.weatherService.getImperialWeatherData(cityname,units)
    .subscribe({
      next: (response) => {
        this.weatherData.main = response.main;
        this.cityname = "";
      },
      error: (error) => {
        console.log(error.message);
      }
    })
  }

}
