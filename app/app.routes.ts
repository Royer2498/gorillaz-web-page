import { Routes,Router} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { StoreComponent } from './components/store/store.component';
import { VideosComponent } from './components/videos/videos.component';
import { LoginComponent } from './components/login/login.component';
import { LoginWithAccountComponent } from './components/login-with-account/login-with-account.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'music', component: MusicComponent },
    { path: 'store', component: StoreComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'loginWithAccount', component: LoginWithAccountComponent },    
    { path: '', pathMatch:'full',redirectTo:'home'},
    { path: '**', pathMatch:'full',redirectTo:'home'},
];

