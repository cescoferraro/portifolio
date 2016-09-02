import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var textFit: any
@Component({
    selector: 'cover',
    templateUrl: 'cover.component.html',
    styleUrls: ['cover.component.scss']
})



export class CoverComponent implements AfterViewInit {

    constructor() {


    }


    ngAfterViewInit() {
        // setTimeout(textFit(document.getElementById('name')),20000)
        // setTimeout(console.log("jkn"),20000)
    }


}
