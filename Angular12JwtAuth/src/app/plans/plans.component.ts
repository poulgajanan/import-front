import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  ImagePath : string;  

  constructor() {
    this.ImagePath = "./assets/images/logo.png";
  }

  ngOnInit(): void {
  }

}
