import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = environment.weather_URL;

  constructor( private http : HttpClient) {}
  
  getWeatherData(cityname: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.url, {
      params: new HttpParams()
        .set('q', cityname)
        .set('units', "metric")
        .set('mode',"json")
        .set('appid', environment.api_id)
    })
  }
      
}
