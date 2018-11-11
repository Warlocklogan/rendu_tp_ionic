import { LivreService } from './../../services/livre.service';
import { Component } from '@angular/core';
import { NavParams, ModalController, ViewController } from 'ionic-angular';
import { Livre } from '../../models/livre';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Livre;

  constructor(private navParams: NavParams, private livreService: LivreService, private viewController: ViewController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.livreService.livreList[this.index];
  }

  toogleBook(): void {
    this.book.isLending = !this.book.isLending;
  }

  dismissModal(): void {
    this.viewController.dismiss();
  }

}
