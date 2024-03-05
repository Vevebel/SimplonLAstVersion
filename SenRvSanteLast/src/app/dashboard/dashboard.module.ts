import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashPrincComponent } from './dash-princ/dash-princ.component';
import { DashMedecinComponent } from './dash-medecin/dash-medecin.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { PatientComponent } from './patient/patient.component';
import { NavebarComponent } from './navebar/navebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashPrincComponent,
    DashMedecinComponent,
    DashAdminComponent,
    PatientComponent,
    NavebarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
