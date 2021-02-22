import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  result: any;

  constructor(private http: HttpClient) { }

  apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=76f475bf"


  getApiData() {
    return this.http.get(this.apiUrl)
  }


  searchByTitle(searchByTitle: any) {
    return this.http.get("http://www.omdbapi.com/?apikey=76f475bf&t=" + searchByTitle)
  }

  searchById(searchById: any) {
    return this.http.get("http://www.omdbapi.com/?apikey=76f475bf&i=" + searchById)
  }


}
