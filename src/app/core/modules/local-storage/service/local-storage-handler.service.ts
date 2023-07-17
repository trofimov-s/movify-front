import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '../enum';

@Injectable()
export class LocalStorageHandlerService {
  setData(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  getData<T = string>(key: LocalStorageKeys): T | null {
    return localStorage.getItem(key) as T;
  }

  removeData(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
