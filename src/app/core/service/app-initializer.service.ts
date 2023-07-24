/* eslint-disable  @typescript-eslint/no-unused-vars */

import { Injectable } from '@angular/core';
import { ActionCreator, Store } from '@ngrx/store';

import { AppState } from '../store';
import { UserDataActions } from '../store/user/action';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class AppInitializerService {
  private readonly INIT_ACTIONS_MAP: ActionCreator<string, () => TypedAction<string>>[] = [
    // UserDataActions.getUserLocationData,
  ];

  constructor(private store: Store<AppState>) {}

  init(): void {
    this.INIT_ACTIONS_MAP.forEach((action) => this.store.dispatch(action()));
  }
}
