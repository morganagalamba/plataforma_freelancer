import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancersService } from '../freelancers.service';

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
    private systemServices: FreelancersService
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

  navigateToContracted() {
    this.router.navigate(['contracted']);
  }

  navigateToCreateService() {
    this.router.navigate(['/create']);
  }

  navigateToFreelancersFeedback(freelancer: string) {
    this.router.navigate(['freelancers-feedback/' + freelancer]);
  }
}