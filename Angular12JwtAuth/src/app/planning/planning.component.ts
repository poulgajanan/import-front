import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  LogoPath: string;
  NamePath: string;
  NotificationImg : string;  
  MessageImg : string;
  constructor() {    
    // this.LogoPath = "./assets/Images/logo_icon.png"
    // this.NamePath = "./assets/Images/logo.png"
    // this.NotificationImg = "./assets/Images/headericon/notification.png";
    // this.MessageImg = "./assets/Images/headericon/message.png";
    this.LogoPath = ""
    this.NamePath = ""
    this.NotificationImg = "";
    this.MessageImg = "";
  }

  ngOnInit(): void {
  }

}
