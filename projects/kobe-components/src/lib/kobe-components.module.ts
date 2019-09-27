import { NgModule } from '@angular/core';
import { KobeComponentsComponent } from './kobe-components.component';
import { ValidationComponent } from './validation/validation.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [KobeComponentsComponent],
  imports: [ CommonModule
  ],
  exports: [KobeComponentsComponent]
})
export class KobeComponentsModule { }
