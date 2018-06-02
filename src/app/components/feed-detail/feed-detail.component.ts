import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  item: any

  constructor(private route: ActivatedRoute) {
    this.getDetailData()
  }

  ngOnInit() {
  }
  
  async getDetailData() {
    const id = parseInt(this.route.snapshot.params.id)
    const data = await JSON.parse(localStorage.getItem('data-wonogiridev'))
    this.item = data.items[id]
    console.log(this.item)
  }

}
