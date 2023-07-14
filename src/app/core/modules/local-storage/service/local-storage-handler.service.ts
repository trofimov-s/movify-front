import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageHandlerService {
  setData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getData(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
