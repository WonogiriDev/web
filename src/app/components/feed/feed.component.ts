import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items: any[]

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.getItems()
  }

  async getItems() {
    const data = await JSON.parse(localStorage.getItem('data-wonogiridev'))
    if (!data) {
      await this.appService.getFeeds().subscribe((res: any) => {
        this.items = res.items
      })
    }
    this.items = data.items
  }
}
