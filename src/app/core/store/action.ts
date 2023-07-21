import { createAction, props } from '@ngrx/store';

export const enum HomePageActionEnum {
  INCREASE = '[Home Page] increase',
  DECREASE = '[Home Page] decrease',
  INCREASE_BY = '[Home Page] increase by',
}

export const HomePageAction = {
  increase: createAction(HomePageActionEnum.INCREASE),
  decrease: createAction(HomePageActionEnum.DECREASE),
  increase_by: createAction(HomePageActionEnum.INCREASE_BY, props<{ count: number }>()),
};
