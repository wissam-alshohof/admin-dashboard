import { Component } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(public loader: LoaderService) { }

}
