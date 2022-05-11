import { Component, OnInit } from '@angular/core';
import { FreelancersService } from '../freelancers.service';

@Component({
  selector: 'app-freelancers-feedback-screen',
  templateUrl: './freelancers-feedback-screen.component.html',
  styleUrls: ['./freelancers-feedback-screen.component.css']
})
export class FreelancersFeedbackScreenComponent implements OnInit {

  freelancersService: FreelancersService;
  feedbacks: Feedback[] = [];

  constructor(_freelancersService: FreelancersService) {
    this.freelancersService = _freelancersService;
   
   }

  ngOnInit(): void {
    this.feedbacks = this.freelancersService.getFeedbakcs();
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
