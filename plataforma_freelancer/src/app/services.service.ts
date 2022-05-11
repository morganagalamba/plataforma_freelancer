import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: string[];

  constructor() { 
    this.services = ['Design', 'Desenvolvimento', 'Consultoria', 'Marketing'];
  }

  getServices(){
    return this.services;
  }

}
