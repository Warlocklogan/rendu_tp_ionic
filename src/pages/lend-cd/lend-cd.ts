import { Cd } from '../../models/Cd';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {CdLivreProvider} from "../../providers/cd-livre/cd-livre.service";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;

  constructor(private navParams: NavParams, private cd_livreService: CdLivreProvider, private viewController: ViewController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cd_livreService.cdList[this.index];
  }

  toggleCd(): void {
    this.cd_livreService.toogleLending(this.cd);
  }

  dismissModal(): void {
    this.viewController.dismiss();
  }


}
