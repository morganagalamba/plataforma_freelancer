import { Component, OnInit } from '@angular/core';
import { FreelancersService } from '../freelancers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-freelancers-feedback-screen',
  templateUrl: './freelancers-feedback-screen.component.html',
  styleUrls: ['./freelancers-feedback-screen.component.css']
})
export class FreelancersFeedbackScreenComponent implements OnInit {

  feedbacks: Feedback[] = [];
  freelancerName: string = "";
  constructor(
    private systemServices: FreelancersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {

   }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('freelancer');
    if (par != null ){
      this.freelancerName = par;
      this.feedbacks = this.systemServices.getFeedbackFromFreelancer(par);
    }
    
  }

}

class Feedback{
  service: string;
  name: string;
  description: string;

  constructor(name: string, description: string, service: string) {
    this.name = name;
    this.description = description;
    this.service = service;
  }

}

class Freelancer{
  name:string;
  services:string[];
  feedbacks: Feedback[];
  
  constructor(name:string, services:string[],
    feedbacks:Feedback[]){
    this.name = name;
    this.services = services;
    this.feedbacks = feedbacks;
  }
}
