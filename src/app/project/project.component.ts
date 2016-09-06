import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'project',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.scss'],
    inputs:['title','description']
})
export class ProjectComponent implements OnInit {
    public title: string;
    public description: string;


    constructor() { }

    ngOnInit() {
    }

}
