import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public weather = null;
  private key = "1b1c4cf9f4e0c1c1db1b4790118cba93";

  constructor(private http: HttpClient){}
 
  ngOnInit(): void {
    this.http.get<any>(`http://api.weatherstack.com/current?access_key=${this.key}&query=Beirut`).subscribe(req => {this.weather = req.current.temperature;})
  }
}