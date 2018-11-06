import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferExampleRoutes } from './transfer-example.routing';
import { TransferExampleComponent } from './transfer-example.component';

@NgModule({
  declarations: [TransferExampleComponent],
  imports: [
    CommonModule,
    TransferExampleRoutes
  ]
})
export class TransferExampleModule {
}
