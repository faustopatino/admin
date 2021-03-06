import { PAGES_ROUTES } from './pages.routes';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  exports: [DashboardComponent, Graficas1Component, ProgressComponent],
  imports: [SharedModule, PAGES_ROUTES],
})
export class PagesModule {}
