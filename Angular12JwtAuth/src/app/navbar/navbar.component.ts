import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  // public profile = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href='/login';
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