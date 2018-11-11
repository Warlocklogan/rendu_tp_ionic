import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private menuController: MenuController) {
  }

  toggleMenu(): void {
    this.menuController.isOpen() ? this.menuController.close() : this.menuController.open();
  }


}
