import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  // Total count of Transaction
  public totalTransaction(){
    // 
  }


  // Total Transaction
  public getTransaction(){
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }


}
