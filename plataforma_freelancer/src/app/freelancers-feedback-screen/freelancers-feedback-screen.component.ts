import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancers-feedback-screen',
  templateUrl: './freelancers-feedback-screen.component.html',
  styleUrls: ['./freelancers-feedback-screen.component.css']
})
export class FreelancersFeedbackScreenComponent implements OnInit {

  feedbacks: Feedback[] = [new Feedback("Morgs","Serviço  foi muito bom pipipipopopo","Design"),new Feedback("Lucas","Serviço  foi muito bom pipipipopopo","Desenvolvimento") ]
  constructor() { }

  ngOnInit(): void {
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
