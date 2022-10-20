import { createAction, props } from '@ngrx/store';

export enum ProjectActionType {
  GetProjects = '[Project] GET_PROJECTS',
  GetProjectsSuccess = '[Project] GET_PROJECTS_SUCCESS',
}

export const getProjects = createAction(ProjectActionType.GetProjects);
export const getProjectsSuccess = createAction(ProjectActionType.GetProjectsSuccess, props<any>());

export enum WeatherActionType{
  GetWeather = "[Weather] GET_WEATHER",
  GetWeatherSuccess = "[Weather] GET_WEATHER_SUCCESS",
}

export const getWeather = createAction(WeatherActionType.GetWeather);
export const getWeatherSuccess = createAction(WeatherActionType.GetWeatherSuccess, props<any>());
