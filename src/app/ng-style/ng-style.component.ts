import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  condicao : boolean = false;

  lista : String[] = ['Aprovado', 'Reprovado', 'Aprovado']

}
