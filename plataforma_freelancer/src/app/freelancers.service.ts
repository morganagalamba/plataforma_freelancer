import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreelancersService {
  
  private freelancers: string[] = ["Maria", "Beatriz", "Kece"];
  private feedbacks: Feedback[] = [new Feedback("Morgs","Serviço  foi muito bom pipipipopopo","Design"),
                                   new Feedback("Lucas","Serviço  foi muito bom pipipipopopo","Desenvolvimento") ]

  getFreelancer(){
    return this.freelancers;
  }
  getFeedbakcs(){
    return this.feedbacks;
  }
  constructor() { }
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