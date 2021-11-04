import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // openNav() {
  //   const sidenav = document.getElementById("mySidenav") as HTMLDivElement;
  //   sidenav.style.width = "250px";
    
  //   const main = document.getElementById("main") as HTMLDivElement;
  //   main.style.marginLeft = "250px";

  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // }
  
  // closeNav() {
  //   const sidenav = document.getElementById("mySidenav") as HTMLDivElement;
  //   sidenav.style.width = "0px";

  //   const main =document.getElementById("main") as HTMLDivElement;
  //   main.style.marginLeft = "0px";

  //   document.body.style.backgroundColor = "white";
  // }
}