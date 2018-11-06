import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index.component';
import { IndexRoutes } from './index.routing';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutes
  ]
})
export class IndexModule {
}
