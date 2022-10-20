import { createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { State } from "src/app/shared/models/store.model";

export const selectProjectPending: (state: State) => boolean = (state: State): boolean => state.projects.pending;

export const selectProjectPendingSelector: MemoizedSelector<State, boolean, DefaultProjectorFn<boolean>> = (
  createSelector(
    selectProjectPending,
    (pending: boolean): boolean => pending,
));

export const selectProjects: (state: State) => any = (state: State): any => state.projects.projects;

export const selectProjectsSelector: MemoizedSelector<State, any, DefaultProjectorFn<any>> = (
  createSelector(
    selectProjects,
    (projects: any): any => projects,
));



export const selectWeatherPending: (state: State) => boolean = (state: State): boolean => state.weather.pending;

export const selectWeatherPendingSelector: MemoizedSelector<State, boolean, DefaultProjectorFn<boolean>> = (
  createSelector(
    selectWeatherPending,
    (pending: boolean): boolean => pending,
));

export const selectWeather: (state: State) => any = (state: State): any => state.weather.weather;

export const selectWeatherSelector: MemoizedSelector<State, any, DefaultProjectorFn<any>> = (
  createSelector(
    selectWeather,
    (weather: any): any => weather,
));