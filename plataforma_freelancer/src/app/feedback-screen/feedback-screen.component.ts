import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancersService } from '../freelancers.service';

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
    private systemServices: FreelancersService) {
    this.nome = " ";
    this.service = "";
   }

  ngOnInit(): void {
    let name = this.activatedRoute.snapshot.paramMap.get('name:service')
    let aux = "";

    if (name != null){
      console.log(name);
      for(let i=0; i < name.length ; i++){    
        if (name[i] == ":"){
          console.log("aaaa")
          this.nome = aux;
          aux = ""
        } else {
          aux = aux + name[i];
        }
      }
      this.service = aux;
    }
    console.log(this.nome);
    console.log(this.service);
  }

}
