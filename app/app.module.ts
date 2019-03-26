import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { VideosComponent } from './components/videos/videos.component';
import { MusicComponent } from './components/music/music.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule } from '@angular/forms';
library.add(fas);

import {HttpClientModule} from '@angular/common/http';


import {ROUTES} from 'src/app/app.routes';
import {RouterModule} from '@angular/router'

import {ItemsService} from '../app/Services/ItemsService';
import { LoginWithAccountComponent } from './components/login-with-account/login-with-account.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    StoreComponent,
    VideosComponent,
    MusicComponent,
    LoginComponent,
    FooterComponent,
    LoginWithAccountComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES,{useHash:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
