import { Component, OnInit} from '@angular/core';
import { WeatherFacade } from '../projects/store/projects.facade';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  weather$ = this.weatherFacade.weather$;

  constructor(private readonly weatherFacade: WeatherFacade){}

  ngOnInit(): void {
    //this.http.get<any>(`http://api.weatherstack.com/current?access_key=${this.key}&query=Beirut`).subscribe(req => {this.weather = req.current.temperature;})
    this.weatherFacade.getWeather();
  }
}