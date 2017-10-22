import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
// we reused some code from previous projects and there are still remnants of it here, not all of this is currently used but it might be someday -Saku
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  rootPage = 'TabsPage';
 
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'To-Do Dodo', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'list' },
    { title: 'Dodo Notes', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'clipboard' },
    { title: 'About', pageName: 'SpecialPage', icon: 'information-circle' },
  ];
 
  constructor(public navCtrl: NavController, private auth: AuthService) { 
    let info = this.auth.getUserInfo();

  }
 
  openPage(page: PageInterface) {
    let params = {};
 
    
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
  
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
 
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
 
}
