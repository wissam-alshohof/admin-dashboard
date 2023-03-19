import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';



@NgModule({
  declarations: [
    ImgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgDirective, MatIconModule]
})
export class SharedModule { }
