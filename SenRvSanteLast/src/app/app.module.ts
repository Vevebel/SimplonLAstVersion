import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashPrincComponent } from './dasbord/dash-princ/dash-princ.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './HeaderFooter/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './HeaderFooter/footer/footer.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { LitesArticleComponent } from './lites-article/lites-article.component';
import { ListesArticleComponent } from './listes-article/listes-article.component';
import { ListesMedecinComponent } from './listes-medecin/listes-medecin.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { DetailMedecinComponent } from './detail-medecin/detail-medecin.component';
import { AproposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    DashPrincComponent,
    AuthentificationComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    PolitiqueConfidentialiteComponent,
    LitesArticleComponent,
    ListesArticleComponent,
    ListesMedecinComponent,
    DetailArticleComponent,
    DetailMedecinComponent,
    AproposComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
