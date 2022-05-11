import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services-screen',
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.css']
})
export class ServicesScreenComponent implements OnInit {
  
  services: string[] = [];
  usuarioLogado: string = "oi";
  constructor(
    private router: Router,
    private dadosUsuario: DataService,
    private systemServices: ServicesService
  ) { 
  }

  getUser(): void {
    this.usuarioLogado = this.dadosUsuario.getUsuarioLogado();
  }

  getServices(): void {
    this.services = this.systemServices.getServices();
  }
  ngOnInit(): void {
    this.getUser();
    this.getServices();
  }

  navigateToFreelancers(forService: string) {
    this.router.navigate(['/freelancers/' + forService]);
  }

  navigateToCreateService() {
    this.router.navigateByUrl('create');
  }
}