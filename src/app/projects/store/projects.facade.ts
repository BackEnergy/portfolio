import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getProjects, getWeather } from "./projects.actions";
import { selectProjectPending, selectProjects, selectWeather, selectWeatherPending } from "./projects.selectors";

@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade{
  public pending$: Observable<boolean> = this.store.select(selectProjectPending);
  public projects$: Observable<any> = this.store.select(selectProjects);

  public constructor(
    private readonly store: Store<any>,
  ){}

  public getProjects(){
    this.store.dispatch(getProjects());
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherFacade{
  public pending$: Observable<boolean> = this.store.select(selectWeatherPending);
  public weather$: Observable<any> = this.store.select(selectWeather);

  public constructor(
    private readonly store: Store<any>,
  ){}

  public getWeather(){
    this.store.dispatch(getWeather());
  }
}
