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
  dadosFreelancer: FreelancersService;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.service = "";
    this.dadosFreelancer = new FreelancersService();
  }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('service');
    this.service = par;
    this.freelancers = this.dadosFreelancer.getFreelancer();
  }

  navigateToContracted() {
    this.router.navigate(['contracted']);
  }

  navigateToCreateService() {
    this.router.navigate(['/create']);
  }

  navigateToFreelancersFeedback() {
    this.router.navigate(['freelancers-feedback']);
  }
}