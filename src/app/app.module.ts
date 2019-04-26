import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ActiveDirective } from './active.directive';
import { GalerieComponent } from './galerie/galerie.component';
import { TermineComponent } from './termine/termine.component';
import { PracticetimesComponent } from './practicetimes/practicetimes.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { BackendapiService } from './backendapi.service';
import { WerbungComponent } from './werbung/werbung.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { LoginMaskComponent } from './login-mask/login-mask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginmodalDirective } from './loginmodal.directive';
import { Carousel0Component } from './carousel0/carousel0.component';
import { TerminModalComponent } from './termin-modal/termin-modal.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    HomeComponent,
    ActiveDirective,
    GalerieComponent,
    TermineComponent,
    PracticetimesComponent,
    CommentsComponent,
    ContactComponent,
    ImpressumComponent,
    WerbungComponent,
    CalendarComponent,
    CommentListComponent,
    Carousel1Component,
    Carousel2Component,
    LoginMaskComponent,
    LoginmodalDirective,
    Carousel0Component,
    TerminModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [BackendapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
