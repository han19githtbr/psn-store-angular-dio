import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarModule } from './components/menu/menu-bar.module';
import { CardModule } from './components/card/card.module';
//import { CardLabelModule } from './components/card/card-label/card-label.module';
//import { CardPricingModule } from './components/card/card-pricing/card-pricing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuBarModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
