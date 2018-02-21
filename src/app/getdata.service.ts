import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GetdataService {
  
  constructor(private http: HttpClient) { }

  getJsonData() {
    return this.http.get("assets/products.json");
  }
}