import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'ae4b1e4e248f4f3d9c4b0ed11a239f59';

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
