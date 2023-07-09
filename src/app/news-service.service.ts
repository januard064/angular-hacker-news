import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private baseUrl = 'https://hacker-news.firebaseio.com/v0'

  constructor( private _http:HttpClient ) { }

  getAskStoriesId(){
    return this._http.get<number[]>(`${this.baseUrl}/askstories.json`)
  }

  getStoriesItem(itemId: number){
    return this._http.get<any>(`${this.baseUrl}/item/${itemId}.json`)
  }
}
