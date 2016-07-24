import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage'
import {CoverComponent} from './cover/cover.component'
import {AboutComponent} from './about/about.component'
import {ProjectsComponent} from './projects/projects.component'
declare var require:any


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [MnFullpageDirective, CoverComponent, AboutComponent, ProjectsComponent],
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @Output() private options: MnFullpageOptions = new MnFullpageOptions({
        navigation: true,
        navigationPosition: "left",
        keyboardScrolling: true,
        mnFullpageSlidesNavigation: false,
        mnFullpageSlidesNavPosition: "bottom"

    });
  title = 'app works!';
}
