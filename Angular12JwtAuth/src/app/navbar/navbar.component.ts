import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  public isCollapsedMaster = true;
  public isCollapsedImport = true;
  public isCollapsedExport = true;
  // public profile = false;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleProfile(){
  //   this.profile = !this.profile;
  //   console.log(this.profile);
  // }

  // closeDropdown(){
  //   this.profile = false;
  //   console.log(this.profile);
  // }
  
}