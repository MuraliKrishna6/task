import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiData: any;
  searchByTitle = ""
  searchById = ""
  result: any

  constructor(private apiservice: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.apiservice.getApiData().subscribe(res => {
      this.apiData = res
    })
  }


  searchByTitleData() {
    this.apiservice.searchByTitle(this.searchByTitle)?.subscribe(res => {
   if (res) {
        this.apiData = res
        console.log("search by name", this.apiData)
      }
    })
    this.searchByTitle = ""
  }

  searchByIdData() {
    this.apiservice.searchById(this.searchById)?.subscribe(res => {
      this.apiData = res
      console.log("search by id", this.apiData)
    })
    this.searchById = ""
  }



}
