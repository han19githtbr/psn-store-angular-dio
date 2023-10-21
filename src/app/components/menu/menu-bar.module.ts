import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuBarRoutingModule } from './menu-bar-routing.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuBarRoutingModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuBarModule { }
