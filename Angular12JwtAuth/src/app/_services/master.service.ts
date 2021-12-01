import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  postCompanySetup(){

  }
  
  postLicense(){

  }
  
}
