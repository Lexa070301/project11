import {Component} from '@angular/core';
import {MyDet} from './shared_models/det_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dets: MyDet[] = [];
  cardname: string;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.dets.push(new MyDet(i + 1, 'Det ' + (i + 1)));
    }
  }

  deleteCard(id) {
    for (let i = 0; i < this.dets.length; i++) {
      if (this.dets[i].id == id) {
        this.dets.splice(i, 1);
      }
    }
  }

  addCard() {
    this.dets.push(new MyDet(this.dets[this.dets.length - 1].id + 1, this.cardname));
  }
}
