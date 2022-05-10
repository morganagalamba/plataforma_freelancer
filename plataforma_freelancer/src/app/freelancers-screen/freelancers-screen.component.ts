import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-freelancers-screen',
  templateUrl: './freelancers-screen.component.html',
  styleUrls: ['./freelancers-screen.component.css']
})
export class FreelancersScreenComponent implements OnInit {

  service: string | null;
  freelancers: Freelancer[] = [new Freelancer("Wilton Ramos", 4), new Freelancer("Vinicius Scala", 5), new Freelancer("Marcos", 1), new Freelancer("Marta", 2), new Freelancer("João", 4)];
  filteredFreelancers: Freelancer[] = []
  isFiltered: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.service = "";
  }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('service');
    this.service = par;
  }

  navigateToFeedback(freelancer: Freelancer) {
    this.router.navigate(['contracted']);
  }

  navigateToCreateService() {
    this.router.navigate(['/create']);
  }
}

class Freelancer {
  name: string;
  score: number;
  email: string;
  services: string[];

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
    this.email = "oioi@gmail.com";
    this.services = [];
  }

  getScore() {
    return this.score.toString() + " estrelas de 5";
  }
}
