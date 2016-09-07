import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input() title
    @Input() subtitle
    @Input() link
    @Input() logo
    @Input() img
    @Input() description

  constructor() { }

  ngOnInit() {
  }

}
