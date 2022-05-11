import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancersService } from '../freelancers.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feedback-screen',
  templateUrl: './feedback-screen.component.html',
  styleUrls: ['./feedback-screen.component.css']
})
export class FeedbackScreenComponent implements OnInit {
  
  nome: string;
  service: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private systemServices: FreelancersService,
    private dadosUsuario: DataService,
    private router: Router) {
    this.nome = " ";
    this.service = "";
   }

  ngOnInit(): void {
    let name = this.activatedRoute.snapshot.paramMap.get('name:service')
    let aux = "";

    if (name != null){
      for(let i=0; i < name.length ; i++){    
        if (name[i] == ":"){
          this.nome = aux;
          aux = ""
        } else {
          aux = aux + name[i];
        }
      }
      this.service = aux;
    }

  }

  addFeedback(feedback: string){
    console.log(feedback);
    this.systemServices.addNewFeedbackfor(this.nome,this.service,feedback,this.dadosUsuario.getUsuarioLogado());
    //this.router.navigate(['freelancers-feedback/' + this.nome]);
    this.router.navigate(['services']);

  }

}
