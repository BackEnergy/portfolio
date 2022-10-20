import { ActionReducer } from '@ngrx/store';

import { ProjectState, WeatherState } from 'src/app/projects/store/projects.state';


export interface LazyModules {
  projects: ProjectState;
  weather: WeatherState;
}

export interface Shared {
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
