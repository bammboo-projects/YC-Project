import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let today = new Date().toISOString().substr(0, 10);
    // document.querySelector("#today").value = today;
  }

}
