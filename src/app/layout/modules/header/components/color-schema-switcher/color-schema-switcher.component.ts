import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColorSchemaEnum, ColorSchemaService } from '@movify/color-schema';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-color-schema-switcher',
  templateUrl: './color-schema-switcher.component.html',
  styleUrls: ['./color-schema-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSchemaSwitcherComponent implements OnInit {
  isDarkMode$: Observable<boolean>;

  constructor(private colorSchemaService: ColorSchemaService) {}

  ngOnInit(): void {
    this.isDarkMode$ = this.colorSchemaService.shema$.pipe(map((s) => s === ColorSchemaEnum.DARK));
  }

  changeColorSchema(): void {
    this.colorSchemaService.changeColorSchema();
  }
}
