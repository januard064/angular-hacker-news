import { Component, Input } from '@angular/core';


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

  constructor() {
    this.storyItem = {}
    // console.log(this.storyItem)
  }

  openModal() {
    const modalDiv = document.getElementById('myModal')
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }


 closeModal() {
    const modalDiv = document.getElementById('myModal')
    if (modalDiv != null) {
      modalDiv.style.display = 'none'
    }
  }

}
