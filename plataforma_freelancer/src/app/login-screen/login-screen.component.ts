import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent implements OnInit {

  usuarios: string[] = [];
  senhas: string[] = [];
  dadosUsuario: DataService;
  
  constructor(private router: Router) { 
   this.dadosUsuario = new DataService();
  }

  ngOnInit(): void {
   //this.usuarios = this.dadosUsuario.getLogin();
   //this.senhas = this.dadosUsuario.getSenha();
  }


  logar(login: string, senha: string){

    if (this.dadosUsuario.checarUsuario(login,senha)) {
      this.router.navigateByUrl('services');
    }
    
    //his.dadosUsuario.novoUsuario(login);
    //this.dadosUsuario.novaSenha(senha);
  }

}

