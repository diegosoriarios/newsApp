import { Component } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {}

  articles;

  ionViewDidEnter() {
    this.apiService.getNews().subscribe(data => {
      console.log(data)
      this.articles = data['articles']
    })
  }
}
