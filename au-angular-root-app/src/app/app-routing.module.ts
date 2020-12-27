import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppDokuMerchantSharedModule} from '../../projects/au-angular-dm-app/src/app/app.module';
import {AppPayBuddySharedModule} from '../../projects/au-angular-paybuddy-app/src/app/app.module';
import {AppAccountBillingSharedModule} from '../../projects/au-angular-ab-app/src/app/app.module';


const routes: Routes = [
  {path: 'dm',
    loadChildren: '../../projects/au-angular-dm-app/src/app/app.module#AppDokuMerchantSharedModule'},
  {path: 'paybuddy',
    loadChildren: '../../projects/au-angular-paybuddy-app/src/app/app.module#AppPayBuddySharedModule'},
  {path: 'ab',
    loadChildren: '../../projects/au-angular-ab-app/src/app/app.module#AppAccountBillingSharedModule'},
  { path: '**', redirectTo: '/dm/one'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppDokuMerchantSharedModule.forRoot(),
    AppPayBuddySharedModule.forRoot(),
    AppAccountBillingSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
