import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreelancersService {

  private freelancers: string[] = ["Maria", "Beatriz", "Kece"];

  getFreelancer(){
    return this.freelancers;
  }
  constructor() { }
}
