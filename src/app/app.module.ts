import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ViewFoodComponent } from './view-food/view-food.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchRestaurantComponent,
    ViewFoodComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
