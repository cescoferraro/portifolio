import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage'
import {CoverComponent} from './cover/cover.component'
import {AboutComponent} from './about/about.component'
import {FooterComponent} from './footer/footer.component'
import {ProjectsComponent} from './projects/projects.component'
declare var require: any



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [MnFullpageDirective, FooterComponent, CoverComponent, AboutComponent, ProjectsComponent],
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Output() private options: MnFullpageOptions = new MnFullpageOptions({
    navigation: false,
    navigationPosition: "left",
    keyboardScrolling: true,
    slidesNavigation: false,
    slidesNavPosition: "bottom",
    controlArrows: false,
    verticalCentered: true,
    mnFullpageSlidesNavigation: false,
    mnFullpageSlidesNavPosition: "bottom"

  });
  title = 'app works!';
}
