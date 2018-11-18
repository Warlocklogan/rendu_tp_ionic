import { Cd } from '../../models/Cd';
import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';
import {CdLivreProvider} from "../../providers/cd-livre/cd-livre.service";

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  listCd: Cd[];

  constructor(private menuController: MenuController, private cd_livreService: CdLivreProvider, private modalController: ModalController) {
  }

  ionViewWillEnter(){
   this.listCd = this.cd_livreService.cdList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalController.create(LendCdPage, {index: index});
    modal.present();
  }

  toggleMenu(): void {
    this.menuController.isOpen() ? this.menuController.close() : this.menuController.open();
  }

}
