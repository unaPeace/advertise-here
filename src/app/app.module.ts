import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SignageComponent } from './views/signage/signage.component';
import { BrandingComponent } from './views/branding/branding.component';
import { DigitalComponent } from './views/digital/digital.component';
import { CaseStudyComponent } from './views/case-study/case-study.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignageComponent,
    BrandingComponent,
    DigitalComponent,
    CaseStudyComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
