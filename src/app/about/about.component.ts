import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnInit {
    @ViewChild('mycard') mycard: ElementRef;
    @ViewChild('mycontainer') mycontainer: ElementRef;

    constructor(public element: ElementRef) { }


    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log(this.element)
        console.log(this.mycard)
        console.log(this.mycontainer)

    }

}
