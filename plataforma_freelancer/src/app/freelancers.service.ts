import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreelancersService {

  private systemFreelancers: Freelancer[];

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

  getFeedbackFromFreelancer(name:string): Feedback[]{
    var feedbacks: Feedback[] = [];
    for(let i=0 ; i < this.systemFreelancers.length; i++){
      if (this.systemFreelancers[i].name == name){
        for(let j=0 ; j < this.systemFreelancers[i].feedbacks.length; j++){
          feedbacks.push(this.systemFreelancers[i].feedbacks[j]);
        }
      }    
    }
    return feedbacks;
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