import { createReducer, on } from '@ngrx/store';
import { HomePageAction } from './action';

export interface HomeState {
  counter: number;
}

const homeState: HomeState = {
  counter: 0,
};

export const homeReducer = createReducer(
  homeState,
  on(HomePageAction.increase, (state) => ({ ...state, counter: state.counter + 1 })),
  on(HomePageAction.decrease, (state) => ({ ...state, counter: state.counter - 1 })),
  on(HomePageAction.increase_by, (state, { count }) => ({
    ...state,
    counter: state.counter + count,
  }))
);
