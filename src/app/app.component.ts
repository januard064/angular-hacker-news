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
  isLoading: boolean = true;
  isError: boolean = false

  storyItemsSkeleton: any[] = [0, 1, 2, 3, 4, 5]

  constructor(private _hackerNewsService: NewsServiceService) {
    // this.fetchTopStories();
    this.fetchAskStoryId();
  }

  fetchAskStoryId() {
    this._hackerNewsService.getAskStoriesId().subscribe((storyIds) => {
      for (const storyId of this.getTwentyItems(storyIds)) {
        this.fetchAskStoryItem(storyId)
      }
    },
      (error) => {
        console.log('Error to fetch asks story ids', error)
        this.isLoading = false
        this.isError = true
      }
    )
  }

  fetchAskStoryItem(storyId: number) {
    this._hackerNewsService.getStoriesItem(storyId).subscribe((items) => {
      this.storyItems.push(items)

      this.isLoading = false

    },
      (error) => {
        console.log('Error to fetch asks item', error)
        this.isLoading = false
        this.isError = true
      }
    )
  }

  getTwentyItems(arrayOfItem: any[]) {
    return arrayOfItem.slice(0, 20)
  }

}
