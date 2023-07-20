import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../enum';

@Injectable()
export class IconRegistryService {
  get iconNames(): string[] {
    return Object.values(Icons);
  }

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {}

  init(): void {
    this.iconNames.forEach((name) =>
      this.iconRegistry.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/svg/${name}.svg`)
      )
    );
  }
}
