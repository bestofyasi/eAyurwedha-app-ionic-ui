import { DocsdetailsPageModule } from './../pages/docsdetails/docsdetails.module';
import { TipsTreatmetPageModule } from './../pages/tips-treatmet/tips-treatmet.module';
import { TipsMedicinePageModule } from './../pages/tips-medicine/tips-medicine.module';
import { TipsGenaralPageModule } from './../pages/tips-genaral/tips-genaral.module';
import { DoctorsPageModule } from './../pages/doctors/doctors.module';
import { DoctorsPage } from './../pages/doctors/doctors';
import { LoginPageModule } from './../pages/login/login.module';
import { SignupPageModule } from './../pages/signup/signup.module';
import { IntroPageModule } from './../pages/intro/intro.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ForumPageModule } from '../pages/forum/forum.module';
import { InboxPageModule } from '../pages/inbox/inbox.module';
import { HealthtipsPageModule } from '../pages/healthtips/healthtips.module';
import { CommentsPageModule } from '../pages/comments/comments.module';
import { DocspagePage } from '../pages/docspage/docspage';
import { DocspagePageModule } from '../pages/docspage/docspage.module';
import { AppoimentsPageModule } from '../pages/appoiments/appoiments.module';
import { ReportsPageModule } from '../pages/reports/reports.module';
import { ViewappoinmentPageModule } from '../pages/viewappoinment/viewappoinment.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    SignupPageModule,
    LoginPageModule,
    ForumPageModule,
    DoctorsPageModule,
    InboxPageModule,
    TipsGenaralPageModule,
    TipsMedicinePageModule,
    TipsTreatmetPageModule,
    HealthtipsPageModule,
    CommentsPageModule,
    DocsdetailsPageModule,
    DocspagePageModule,
    AppoimentsPageModule,
    ReportsPageModule,
    ViewappoinmentPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
