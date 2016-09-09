//noinspection TypeScriptCheckImport
import {MnFullpageOptions} from 'ng2-fullpage';
import {Component, Output} from '@angular/core';
import {Project} from '../shared'


@Component({
    selector: 'app-dev',
    templateUrl: './dev.component.html',
    styleUrls: ['./dev.component.scss']
})
export class DevComponent {
    gulpGolang: Project;


    /* tslint:disable:no-unused-variable */
    @Output() private options: MnFullpageOptions = new MnFullpageOptions({
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        verticalCentered: true,
        lockAnchors: true

    });

    constructor() {
        this.gulpGolang = new Project(
            {
                title: "Gulp-Golang",
                subtitle: "That good",
                img: '/assets/img/blog.png',
                logo: '/assets/img/blog.png',
                link: 'http://blog.cescoferraro.xyz',
                description: 'Here it is where I pour my tech heart. ' +
                'Mainly about golang/angular2/ionic2/swift'
            })


    }


}
