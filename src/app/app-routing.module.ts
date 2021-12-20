import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { BlockitGuard } from './guards/blockit/blockit.guard';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'fourth', component: FourthComponent},
  {path:'', redirectTo: '/first', pathMatch: 'full'},
  {
    path: 'customer',
  canActivate: [BlockitGuard],
  loadChildren: () => import('./modules/customer/customer.module')
    .then(m => m.CustomerModule)},
  {path:'**', component: FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
