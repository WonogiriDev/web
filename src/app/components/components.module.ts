import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { FeedComponent } from './feed/feed.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    ToolbarComponent,
    FeedComponent,
    FeedDetailComponent,
  ],
  exports: [
    ToolbarComponent,
    FeedComponent,
    FeedDetailComponent
  ]
})
export class ComponentsModule { }
