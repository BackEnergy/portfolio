import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public weather = null;
  key = environment.key;

  constructor(private http: HttpClient){}
 
  ngOnInit(): void {
    this.http.get<any>(`http://api.weatherstack.com/current?access_key=${this.key}&query=Beirut`).subscribe(req => {this.weather = req.current.temperature;})
  }
}