import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractedServiceScreenComponent } from './contracted-service-screen/contracted-service-screen.component';
import { CreateServiceScreenComponent } from './create-service-screen/create-service-screen.component';
import { FeedbackScreenComponent } from './feedback-screen/feedback-screen.component';
import { FreelancersFeedbackScreenComponent } from './freelancers-feedback-screen/freelancers-feedback-screen.component';
import { FreelancersScreenComponent } from './freelancers-screen/freelancers-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ServicesScreenComponent } from './services-screen/services-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'services', component: ServicesScreenComponent },
  { path: 'freelancers/:service', component: FreelancersScreenComponent },
  { path: 'feedback/:name:service', component: FeedbackScreenComponent },
  { path: 'create', component: CreateServiceScreenComponent },
  { path: 'contracted', component: ContractedServiceScreenComponent},
  { path: 'freelancers-feedback/:freelancer', component: FreelancersFeedbackScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
