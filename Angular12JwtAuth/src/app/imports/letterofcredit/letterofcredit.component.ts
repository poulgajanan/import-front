import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letterofcredit',
  templateUrl: './letterofcredit.component.html',
  styleUrls: ['./letterofcredit.component.css']
})
export class LetterofcreditComponent implements OnInit {

  tab : Number = 1;

  constructor() { }

  changeTab(newTab : Number){
    this.tab = newTab;
  }

  ngOnInit(): void {
  }

}
