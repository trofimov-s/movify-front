import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageHandlerService {
  setData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getData<T = string>(key: string): T | null {
    return localStorage.getItem(key) as T;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
