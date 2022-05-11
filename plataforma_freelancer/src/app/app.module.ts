import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackScreenComponent } from './feedback-screen/feedback-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ServicesScreenComponent } from './services-screen/services-screen.component';
import { FreelancersScreenComponent } from './freelancers-screen/freelancers-screen.component';
import { CreateServiceScreenComponent } from './create-service-screen/create-service-screen.component';
import { FormsModule } from '@angular/forms';
import { ContractedServiceScreenComponent } from './contracted-service-screen/contracted-service-screen.component';
import { FreelancersFeedbackScreenComponent } from './freelancers-feedback-screen/freelancers-feedback-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackScreenComponent,
    LoginScreenComponent,
    ServicesScreenComponent,
    FreelancersScreenComponent,
    CreateServiceScreenComponent,
    ContractedServiceScreenComponent,
    FreelancersFeedbackScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
