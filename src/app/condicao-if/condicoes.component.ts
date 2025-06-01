import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-condicoes',
  imports: [CommonModule],
  templateUrl: './condicoes.component.html',
  styleUrl: './condicoes.component.css'
})
export class CondicoesComponent {
  exbirQuadrado : boolean = false;

 acaoDoButton(){
  if (this.exbirQuadrado === true){
    this.exbirQuadrado = false;
  } else {
    this.exbirQuadrado = true;
  }
 }
}
