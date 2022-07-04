import { Injectable } from "@angular/core";
import { CreateEffectMetadata, createEffect, ofType, Actions } from "@ngrx/effects";
import { Observable, switchMap, map, tap } from "rxjs";
import { ProjectRepository, WeatherRepository } from "../shared/project.repository";
import { getProjectsSuccess, getWeatherSuccess, ProjectActionType, WeatherActionType } from "./projects.actions";

@Injectable()
export class ProjectEffects {

  public getProjects$: CreateEffectMetadata = createEffect(
    (): Observable<any> => (
      this.actions$
        .pipe(
          ofType(ProjectActionType.GetProjects),
          switchMap((): Observable<any[]> => this.projectRepository.getProjects()),
          map((projects: any[]): any => getProjectsSuccess({ projects })),
        )
    ),
  );



  public constructor(
    private readonly actions$: Actions,
    private readonly projectRepository: ProjectRepository,
  ) {
  }
}

@Injectable()
export class weatherEffects {
  public getWeather$: CreateEffectMetadata = createEffect(
    (): Observable<any> => (
      this.actions$
        .pipe(
          ofType(WeatherActionType.GetWeather),
          switchMap((): Observable<any[]> => this.weatherRepository.getWeather()),
          map((weather: any[]): any => getWeatherSuccess({ weather })),
        )
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly weatherRepository: WeatherRepository,
  ) {
  }

}