import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-condicoes-swich',
  imports: [CommonModule],
  templateUrl: './condicoes-swich.component.html',
  styleUrl: './condicoes-swich.component.css'
})
export class CondicoesSwichComponent {
  linguagem : String[] = ['Java', 'JavaScript']

}
