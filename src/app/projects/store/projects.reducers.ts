import { ActionReducer, createReducer, on } from "@ngrx/store";
import { getProjects, getProjectsSuccess, getWeather, getWeatherSuccess } from "./projects.actions";
import { ProjectState, WeatherState } from "./projects.state";

export const projectInitialState: ProjectState = {
  projects: [],
  pending: false,
};

export const projectReducer: ActionReducer<ProjectState> = createReducer(
  projectInitialState,
  on(
    getProjects,
    (state: ProjectState): ProjectState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    getProjectsSuccess,
    (state: ProjectState, action: any): ProjectState => ({
      ...state,
      projects: action.projects,
      pending: false,
    }),
  ),
);


export const weatherInitialState: WeatherState = {
  weather: [],
  pending: false,
}

export const weatherReducer: ActionReducer<WeatherState> = createReducer(
  weatherInitialState,
  on(
    getWeather,
    (state: WeatherState): WeatherState => ({
      ...state,
      pending: true,
    }),
  ),
  on(
    getWeatherSuccess,
    (state: WeatherState, action: any): WeatherState => ({
      ...state,
      weather: action.weather,
      pending: false,
    }),
  ),
);