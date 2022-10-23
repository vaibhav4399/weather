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

  cityname!: string;
  weatherData?: WeatherData

  ngOnInit(): void  {
    this.getWeatherData("Alaska");
    this.cityname = "";
  }

  onSubmit() {
    this.getWeatherData(this.cityname);
    this.cityname = "";
  }

  private getWeatherData(cityname: string) {
    this.weatherService.getWeatherData(cityname)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(this.weatherData);
        }
      })
  }
}
