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

  constructor() { }

  ngOnInit(): void {
  }
  
}