import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FreelancersService } from '../freelancers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service-screen',
  templateUrl: './create-service-screen.component.html',
  styleUrls: ['./create-service-screen.component.css']
})
export class CreateServiceScreenComponent implements OnInit {

  service: string; 

  constructor(private dadosUsuario: DataService,
    private systemServices: FreelancersService,
    private router: Router
    ) { 
    this.service = "";
  }

  ngOnInit(): void {
  
  }

  addNewService(service: string){
    console.log(service);
    this.systemServices.addNewFreelancerService(this.dadosUsuario.getUsuarioLogado(),service);
    //botar rota para services screen 
    this.router.navigateByUrl('services');
  }

}
