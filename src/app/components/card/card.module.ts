import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardLabelModule } from './card-label/card-label.module';
import { CardPricingModule } from './card-pricing/card-pricing.module';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    CardLabelModule,
    CardPricingModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
