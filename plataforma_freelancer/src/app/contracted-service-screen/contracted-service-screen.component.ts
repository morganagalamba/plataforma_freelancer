import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contracted-service-screen',
  templateUrl: './contracted-service-screen.component.html',
  styleUrls: ['./contracted-service-screen.component.css']
})

export class ContractedServiceScreenComponent implements OnInit {

  services: Service[] = [ new Service("Design","Wilton"), new Service("Desenvolvimento","Isabel")]

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToFeedback() {
    this.router.navigate(['feedback']);
  }

  navigateToFreelancersFeedback() {
    this.router.navigate([ 'freelancers-feedback']);
  }

}

class Service { 
  name: string;
  freelancer: string;
  feedbacks: String[];

  constructor(name: string, freelancer: string) {
    this.name = name;
    this.freelancer = freelancer;
    this.feedbacks = [];
  }

}