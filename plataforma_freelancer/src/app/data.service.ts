import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private usuarios: string[] = [];
  private senhas: string[] = [];

  getLogin(){
    return this.usuarios;
  }
  getSenha(){
    return this.senhas;
  }

  novoUsuario(nome: string){
    this.usuarios.push(nome);
  }
  novaSenha(senha: string){
    this.senhas.push(senha);
  }


  constructor() { }
}
