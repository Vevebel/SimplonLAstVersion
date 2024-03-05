import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashPrincComponent } from './dash-princ/dash-princ.component';
import { DashMedecinComponent } from './dash-medecin/dash-medecin.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { PatientComponent } from './patient/patient.component';
import { NavebarComponent } from './navebar/navebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailMedecinComponent } from './detail-medecin/detail-medecin.component';
import { HistoriqueRvComponent } from './historique-rv/historique-rv.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ListeRdvEnAttenteComponent } from './liste-rdv-en-attente/liste-rdv-en-attente.component';
import { GestutilisateursComponent } from './gestutilisateurs/gestutilisateurs.component';
import { GestPlanningComponent } from './gest-planning/gest-planning.component';
import { GestArticleComponent } from './gest-article/gest-article.component';
import { GestContenuComponent } from './gest-contenu/gest-contenu.component';
import { GestRendezVousComponent } from './gest-rendez-vous/gest-rendez-vous.component';


@NgModule({
  declarations: [
    DashPrincComponent,
    DashMedecinComponent,
    DashAdminComponent,
    PatientComponent,
    NavebarComponent,
    SidebarComponent,
    DetailMedecinComponent,
    HistoriqueRvComponent,
    MedecinsComponent,
    ListeConsultationComponent,
    ListeRdvEnAttenteComponent,
    GestutilisateursComponent,
    GestPlanningComponent,
    GestArticleComponent,
    GestContenuComponent,
    GestRendezVousComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
