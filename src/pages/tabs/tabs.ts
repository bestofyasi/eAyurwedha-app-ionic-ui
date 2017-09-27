import { DoctorsPage } from './../doctors/doctors';
import { InboxPage } from './../inbox/inbox';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ForumPage } from '../forum/forum';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InboxPage;
  tab3Root = DoctorsPage;
  tab4Root = ForumPage;

  constructor() {

  }
}
