import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatRadioModule, MatRippleModule, MatSidenavModule } from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    CarouselModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    CarouselModule,
  ],
})
export class MaterialModule { }
