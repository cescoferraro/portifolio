import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Output() private options: MnFullpageOptions = new MnFullpageOptions({
    navigation: false,
    navigationPosition: "left",
    keyboardScrolling: true,
    slidesNavigation: true,
    slidesNavPosition: "bottom",
    controlArrows: false,
    verticalCentered: true,
    mnFullpageSlidesNavigation: false,
    mnFullpageSlidesNavPosition: "bottom"

  });
}
