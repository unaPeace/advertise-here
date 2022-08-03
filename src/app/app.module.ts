import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

import { HomeComponent } from './views/home/home.component';
import { SignageComponent } from './views/signage/signage.component';
import { BrandingComponent } from './views/branding/branding.component';
import { DigitalComponent } from './views/digital/digital.component';
import { CaseStudyComponent } from './views/case-study/case-study.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

const firebaseConfig = {
  apiKey: "AIzaSyBu58nTx_7Zg_FWUX3XXaP42Pog4RIdcXY",
  authDomain: "advertise-here-bd0bf.firebaseapp.com",
  databaseURL: "https://advertise-here-bd0bf-default-rtdb.firebaseio.com",
  projectId: "advertise-here-bd0bf",
  storageBucket: "advertise-here-bd0bf.appspot.com",
  messagingSenderId: "56271848858",
  appId: "1:56271848858:web:6bd1acdc8543f49c1a2623",
  measurementId: "G-ZDY582H837"
};

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
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
