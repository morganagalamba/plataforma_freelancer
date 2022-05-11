import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancersService } from '../freelancers.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-freelancers-screen',
  templateUrl: './freelancers-screen.component.html',
  styleUrls: ['./freelancers-screen.component.css']
})

export class FreelancersScreenComponent implements OnInit {

  service: string | null;
  freelancers: string[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private systemServices: FreelancersService,
    private dadosUsuario: DataService
  ) {
    this.service = "";
  }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('service');
    this.service = par;
    if (this.service != null){
      this.freelancers = this.systemServices.getFreelancersFromService(this.service);
    }
    
  }

  navigateToContracted(freelancer: string) {
    if(this.service != null){
      this.contractNewService(new Service(freelancer,this.service));
    }
    this.router.navigate(['contracted']);
  }

  contractNewService(service: Service) {
    this.dadosUsuario.updatecontractedServices(service);
  }

  navigateToCreateService() {
    this.router.navigate(['/create' ]);
  }

  navigateToFreelancersFeedback(freelancer: string) {
   
    this.router.navigate(['freelancers-feedback/' + freelancer]);
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