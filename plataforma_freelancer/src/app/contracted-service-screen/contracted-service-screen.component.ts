import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contracted-service-screen',
  templateUrl: './contracted-service-screen.component.html',
  styleUrls: ['./contracted-service-screen.component.css']
})

export class ContractedServiceScreenComponent implements OnInit {

  services: Service[] = []

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private dadosUsuario: DataService
    ) { }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('contractedService');
    
    this.getServices()
  }

  getServices(){
    this.services = this.dadosUsuario.getContractedServices();
  }

  navigateToFeedback() {
    this.router.navigate(['feedback']);
  }

  navigateToFreelancersFeedback() {
    this.router.navigate([ 'freelancers-feedback']);
  }

}

class Service{
  freelancer: string;
  service: string;

  constructor(freelancer: string, service: string){
    this.freelancer = freelancer;
    this.service = service;
  }
}