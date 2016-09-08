import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';


@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
