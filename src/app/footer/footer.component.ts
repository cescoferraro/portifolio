import { Component, OnInit } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { MdCard } from '@angular2-material/card';


@Component({
  moduleId: module.id,
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [MdInput, MdCard]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
