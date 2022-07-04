import { Component, OnInit } from '@angular/core';
import { ProjectsFacade } from './store/projects.facade';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  pending$ = this.projectsFacade.pending$;
  projects$ = this.projectsFacade.projects$;

  constructor(
    private readonly projectsFacade: ProjectsFacade,
  ) { }

  ngOnInit(): void {
    this.projectsFacade.getProjects();
  }
}
