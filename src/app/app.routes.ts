import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReviewComponent } from './components/review/review.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'review', component: ReviewComponent},
  {path:'contact', component: ContactComponent},
];