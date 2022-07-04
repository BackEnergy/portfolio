import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public project = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:3000/projects/cebf95a5-0318-4542-a075-2cb69a2527a3`).subscribe(req => {this.project = req.title;})
  }

}
