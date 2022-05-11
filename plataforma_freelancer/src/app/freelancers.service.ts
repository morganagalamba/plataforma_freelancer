import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreelancersService {

  private systemFreelancers: Freelancer[];
  private freelancers: string[] = ["Maria", "Beatriz", "Kece"];
  private feedbacks: Feedback[] = [new Feedback("Morgs","Serviço  foi muito bom pipipipopopo","Design"),
                                   new Feedback("Lucas","Serviço  foi muito bom pipipipopopo","Desenvolvimento") ];
  

  getFreelancer(){
    return this.freelancers;
  }
  getFeedbakcs(){
    return this.feedbacks;
  }

  getFreelancersFromService(service:string): string[]{
    var freelancers: string[] = [];
    for(let i=0 ; i < this.systemFreelancers.length; i++){
      for(let j=0 ; j < this.systemFreelancers[i].services.length; j++){
        if (this.systemFreelancers[i].services[j] == service){
          freelancers.push(this.systemFreelancers[i].name);
        }
      }
    }
    return freelancers;
  }

  constructor() {
    this.systemFreelancers = [
      new Freelancer("Maria",["Desenvolvimento","Design"],[new Feedback("Morgs","Serviço  foi muito bom, excelente profissional","Design")]), 
      new Freelancer("Lucas",["Desenvolvimento","Marketing"],[]),
      new Freelancer("Isabel",["Design","Marketing"],[]),
      new Freelancer("kece",["Consultoria","Marketing"],[]),
    ];
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