import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from './news-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment-januard';

  storyItems: any[] = [];

  constructor(private _hackerNewsService: NewsServiceService) {
    // this.fetchTopStories();
    this.fetchAskStoryId();
  }

  fetchAskStoryId() {
    this._hackerNewsService.getAskStoriesId().subscribe((storyIds) => {
      for (const storyId of  this.getTwentyItems(storyIds)) {
        console.log(storyId)
        this.fetchAskStoryItem(storyId)
      }
    },
      (error) => {
        console.log('Error to fetch asks story ids', error)
      }
    )
  }

  fetchAskStoryItem(storyId: number) {
    this._hackerNewsService.getStoriesItem(storyId).subscribe((items) => {
      this.storyItems.push(items)
    },
      (error) => {
        console.log('Error to fetch asks item', error)
      }
    )
  }

  getTwentyItems(arrayOfItem: any[]){
    return arrayOfItem.slice(0,20)
  }

}
