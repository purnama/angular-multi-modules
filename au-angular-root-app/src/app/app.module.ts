import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {AppDokuMerchantSharedModule} from '../../projects/au-angular-dm-app/src/app/app.module';
import {AppPayBuddySharedModule} from '../../projects/au-angular-paybuddy-app/src/app/app.module';
import {AppAccountBillingSharedModule} from '../../projects/au-angular-ab-app/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppDokuMerchantSharedModule.forRoot(),
    AppPayBuddySharedModule.forRoot(),
    AppAccountBillingSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
