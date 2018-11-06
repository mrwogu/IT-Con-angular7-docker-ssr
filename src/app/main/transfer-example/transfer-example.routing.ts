import { Routes, RouterModule } from '@angular/router';

import { TransferExampleComponent } from './transfer-example.component';

const routes: Routes = [
  {
    path: '',
    component: TransferExampleComponent
  }
];

export const TransferExampleRoutes = RouterModule.forChild(routes);
