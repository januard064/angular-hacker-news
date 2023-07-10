import { Component, Input } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

interface IStoryItem {
  by: string,
  descendants: number,
  id: number,
  kids: number[],
  score: number,
  text: string,
  time: number,
  title: string,
  type: string
}


@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent {
  @Input() storyItem: any
  @Input() commentsId: any
  @Input() dataIndex: number = 0

  comments: any[] = []

  constructor(private _hackerCommentService: NewsServiceService) {
    this.storyItem = {}
    // console.log(this.storyItem)

  }

  ngOnInit() {
    console.log('storyId', this.commentsId)
    // this.fetchCommentDatas()
  }

  fetchCommentDatas(commentId: number) {
    this._hackerCommentService.getStoriesItem(commentId).subscribe((comments) => {
      console.log('comments', comments)
      this.comments.push(comments)
    },
      (error) => {
        console.log('Error to fetch asks item', error)
      }
    )
  }

  openModal() {
    const modalDiv = document.getElementById(this.storyItem.id)
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
    for( const commentId of this.commentsId ){
      this.fetchCommentDatas(commentId)
    }
  }


  closeModal() {
    const modalDiv = document.getElementById(this.storyItem.id)
    if (modalDiv != null) {
      modalDiv.style.display = 'none'
    }
    this.comments = []
  }

}
