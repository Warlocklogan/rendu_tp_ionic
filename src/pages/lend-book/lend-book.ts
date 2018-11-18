import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Livre } from '../../models/livre';
import {CdLivreProvider} from "../../providers/cd-livre/cd-livre.service";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Livre;

  constructor(private navParams: NavParams, private cd_livreService: CdLivreProvider, private viewController: ViewController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.cd_livreService.livreList[this.index];
  }

  toogleBook(): void {
    this.cd_livreService.toogleLending(this.book);
  }

  dismissModal(): void {
    this.viewController.dismiss();
  }

}
