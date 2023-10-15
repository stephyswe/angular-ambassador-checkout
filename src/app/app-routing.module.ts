import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { PageSuccessComponent } from './page-success/page-success.component';

const routes: Routes = [
  { path: 'success', component: PageSuccessComponent },
  { path: 'error', component: PageErrorComponent },
  { path: ':code', component: FormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
