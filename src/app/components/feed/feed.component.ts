import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items: any[]

  constructor(private router: Router) { }

  ngOnInit() {
    this.getItems()
  }

  async getItems() {
    const data = await JSON.parse(localStorage.getItem('data-wonogiridev'))
    this.items = data.items
  }
}
