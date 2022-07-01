import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getProjects(): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3000/projects`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherRepository {

  key = environment.key;

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getWeather(): Observable<any> {
    return this.httpClient.get<any>(`http://api.weatherstack.com/current?access_key=${this.key}&query=Beirut`);
  }
}
