import { Component, OnInit } from '@angular/core';

import { REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, FormBuilder, Validators, FORM_DIRECTIVES } from '@angular/forms'

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
    hireMe: FormGroup




    constructor(private _fb: FormBuilder) {
        this.hireMe = this._fb.group({
            'sender': new FormControl("", Validators.compose([Validators.required])),
            'sendermail': new FormControl("", Validators.compose([Validators.required])),
            'subject': new FormControl("", Validators.compose([Validators.required])),
        })
    }

    ngOnInit() {
    }

    hire() {

        window.open('mailto:francescoaferraro@gmail.com?subject=Iwannahireyou&body='+this.hireMe.value.subject);
        console.log("skfjkndf")
    }
}
