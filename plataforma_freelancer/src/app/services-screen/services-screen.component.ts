import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services-screen',
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.css']
})
export class ServicesScreenComponent implements OnInit {
  
  services: string[] = ['Design', 'Desenvolvimento', 'Consultoria', 'Marketing'];
  usuarioLogado: string = "oi";
  constructor(
    private router: Router,
    private dadosUsuario: DataService
  ) { 
  }

  getUser(): void {
    this.usuarioLogado = this.dadosUsuario.getUsuarioLogado();
  }

  ngOnInit(): void {
    this.getUser();
    console.log(this.usuarioLogado);
  }

  navigateToFreelancers(forService: string) {
    this.router.navigate(['/freelancers/' + forService]);
  }

  navigateToCreateService() {
    this.router.navigateByUrl('create');
  }
}