import {Component} from '@angular/core';
import {MyDet} from './shared_models/det_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dets: MyDet[];
}
