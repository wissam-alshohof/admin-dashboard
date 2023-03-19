import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';



@NgModule({
  declarations: [
    ImgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgDirective]
})
export class SharedModule { }
