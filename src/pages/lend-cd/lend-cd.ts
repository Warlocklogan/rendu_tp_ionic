import { CdService } from './../../services/cd.service';
import { Cd } from './../../models/Cd';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;

  constructor(private navParams: NavParams, private cdService: CdService, private viewController: ViewController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index];
  }

  toggleCd(): void {
    this.cd.isLending = !this.cd.isLending;
  }

  dismissModal(): void {
    this.viewController.dismiss();
  }


}
