import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { ComponentsModule } from './components/components.module';
import { RouterModule, Routes } from '@angular/router'
import { MaterialModule } from './material.module';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'detail/:id', component: FeedDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
