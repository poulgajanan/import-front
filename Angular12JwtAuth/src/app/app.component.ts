import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TokenStorageService } from './_services/token-storage.service';

// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private titleService: Title, 
              private tokenStorageService: TokenStorageService
              ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
   
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
   
  }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  logout(): void {
    this.tokenStorageService.signOut();    
    window.location.reload();
  }
}
