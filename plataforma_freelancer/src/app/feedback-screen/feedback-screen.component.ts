import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback-screen',
  templateUrl: './feedback-screen.component.html',
  styleUrls: ['./feedback-screen.component.css']
})
export class FeedbackScreenComponent implements OnInit {
  
  nome: string | null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.nome = " ";
   }

  ngOnInit(): void {
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
  }

}
