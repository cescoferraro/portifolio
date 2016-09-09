import {Component, OnInit} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class FooterComponent implements OnInit {
    hireMe: FormGroup;


    constructor(private formBuilder: FormBuilder) {
        this.hireMe = this.formBuilder.group({
            'sender': new FormControl('', Validators.compose([Validators.required])),
            'sendermail': new FormControl('', Validators.compose([Validators.required])),
            'subject': new FormControl('', Validators.compose([Validators.required])),
        });
    }

    ngOnInit() {
    }

    hire() {
        let text = this.hireMe.value.subject;
        window.open('mailto:francescoaferraro@gmail.com?subject=Iwannahireyou&body=' + text);
        console.log('skfjkndf');
    }
}
