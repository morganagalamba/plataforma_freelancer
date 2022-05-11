import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private usuarios: string[][] = [];
  private usuarioLogado: string;
  private contractedServices: Service[];

  getUsuarioLogado(): string{
    return this.usuarioLogado;
  }

  changeUsuario(name:string){
    this.usuarioLogado = name ;
  }

  updatecontractedServices(service: Service){
    this.contractedServices.push(service);
  }

  getContractedServices(): Service[]{
    return this.contractedServices;
  }

  checarUsuario(name: string, senha: string): boolean {
    for(let i=0 ; i<2 ; i++){
      if (this.usuarios[i][0] == name && this.usuarios[i][1] == senha){
        this.changeUsuario(name);
        return true
      }
    }
    return false
  }

  constructor() { 
    this.usuarios = [["morgs","12345"],["isabel", "2234"]];
    this.usuarioLogado = "bla";
    this.contractedServices = [];
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