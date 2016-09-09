import { MnFullpageService  } from 'ng2-fullpage/components/fullpage/mnFullpage.service';
import { MnFullpageOptions  } from 'ng2-fullpage/components/fullpage/mnFullpage-options.class';
import {Component, Output} from '@angular/core';
import {Project} from '../../shared'


@Component({
    selector: 'app-dev',
    templateUrl: 'dev.component.html',
    styleUrls: ['dev.component.scss']
})
export class DevComponent {
    fullpageService: MnFullpageService;
    gulpGolang: Project;
    blog: Project;
    iot: Project;

    /* tslint:disable:no-unused-variable */
    @Output() private options: MnFullpageOptions = new MnFullpageOptions({
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        verticalCentered: true,
        lockAnchors: true

    });

    constructor(private _full: MnFullpageService) {
        this.fullpageService = _full;
        this.gulpGolang = new Project(
            {
                title: "Gulp-Golang",
                subtitle: "Javascript",
                img: '/assets/img/gulp2.png',
                logo: '/assets/img/js.png',
                link: 'http://blog.cescoferraro.xyz',
                description: 'A gulp wrapper for golang commands. ' +
                'Completely inspired by gulp-go. ' +
                'This aims to let users have better control of their golang environment ' +
                'with the build system. Because go run does not solve all problems.'
            });
        this.iot = new Project(
            {
                title: 'Power',
                subtitle: 'Iot/Ionic2',
                img: '/assets/img/iotscreen.png',
                logo: '/assets/img/iot.png',
                link: 'https://iot.cescoferraro.xyz',
                description: 'This projects aims to provide cheap solution ' +
                'to home automation systems.ts an Ionic 2 app develop ' +
                'with all the cool tech you se around Angular2 blog, ' +
                'but as its tech, its still beta. But you can check it out!'
            });

        this.blog = new Project(
            {
                title: "My Blog",
                subtitle: "Golang/Hugo",
                img: '/assets/img/blog.png',
                logo: '/assets/img/blog.png',
                link: 'http://blog.cescoferraro.xyz',
                description: 'Here it is where I pour my tech heart. ' +
                'Mainly about golang/angular2/ionic2/swift'
            })


    }


}
