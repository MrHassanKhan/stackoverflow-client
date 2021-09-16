import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DateAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, DateAgoPipe],
  exports: [PageNotFoundComponent, DateAgoPipe]
})
export class SharedModule { }
