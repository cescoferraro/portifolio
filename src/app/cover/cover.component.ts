import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var textFit: any
@Component({
  moduleId: module.id,
  selector: 'cover',
  templateUrl: 'cover.component.html',
  styleUrls: ['cover.component.css']
})
export class CoverComponent implements AfterViewInit {

  constructor() {


  }


  ngAfterViewInit() {
setTimeout(textFit(document.getElementById('name')),20000)
setTimeout(console.log("jkn"),20000)
  }


}
