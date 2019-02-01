import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InicioComponent,
  ],
  exports: [
    InicioComponent,
  ]
})
export class InicioModule { }
