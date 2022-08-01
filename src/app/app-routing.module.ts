import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { SignageComponent } from './views/signage/signage.component';
import { DigitalComponent } from './views/digital/digital.component';
import { BrandingComponent } from './views/branding/branding.component';
import { CaseStudyComponent } from './views/case-study/case-study.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signage', component: SignageComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'digital', component: DigitalComponent },
  { path: 'case-study', component: CaseStudyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
