import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalerieComponent } from './galerie/galerie.component';
import { TermineComponent } from './termine/termine.component';
import { PracticetimesComponent } from './practicetimes/practicetimes.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Carousel0Component } from './carousel0/carousel0.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { LoginMaskComponent } from './login-mask/login-mask.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'ueber_uns', component: AboutusComponent },
  { path: 'startseite', component: HomeComponent },
  { path: 'galerie', component: GalerieComponent,
          children: [ {path: '', component: Carousel0Component},
                      {path: '1', component: Carousel1Component},
                      {path: '2', component: Carousel2Component}]},
  { path: 'carousel/2', component: Carousel2Component, outlet: 'carousel'},
  { path: 'termine', component: TermineComponent },
  { path: 'probezeiten', component: PracticetimesComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'login', component: LoginMaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
