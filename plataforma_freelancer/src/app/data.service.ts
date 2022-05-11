import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private usuarios: string[][] = [];

  getLogin(){
    return this.usuarios;
  }
  getSenha(){
    //return this.senhas;
  }

  novoUsuario(nome: string){
    //this.usuarios.push(nome);
  }
  novaSenha(senha: string){
    //this.senhas.push(senha);
  }

  checarUsuario(name: string, senha: string): boolean {
    for(let i=0 ; i<2 ; i++){
      if (this.usuarios[i][0] == name && this.usuarios[i][1] == senha){
        return true
      }
    }
    return false
  }

  constructor() { 
    this.usuarios = [["morgs","12345"],["isabel", "2234"]]
  }


}
