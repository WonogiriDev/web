import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private appService: AppService) {}
  
  ngOnInit() {
    this.getAllFeed()
  }

  getAllFeed() {
    this.appService.getFeeds().subscribe(async res => {
      await localStorage.setItem('data-wonogiridev', JSON.stringify(res))
    })
  }
}
