import { Livre } from './../../models/Livre';
import { Component } from '@angular/core';
import { LivreService } from '../../services/livre.service';
import { ModalController, MenuController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  listBook: Livre[];

  constructor(private livreService: LivreService, private modalController: ModalController, private menuController: MenuController) {
  }

  ionViewWillEnter(): void {
   this.listBook = this.livreService.livreList.slice();
  }

  onLoadBook(index: number): void {
    let modal = this.modalController.create(LendBookPage, {index: index});
    modal.present();
  }

  toggleMenu(): void {
    this.menuController.isOpen() ? this.menuController.close() : this.menuController.open();
  }

}
