import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-condicao-for',
  imports: [CommonModule],
  templateUrl: './condicao-for.component.html',
  styleUrl: './condicao-for.component.css'
})
export class CondicaoForComponent {
  nomes : String[] = ['Will', 'Leide', 'Yuri'];

}
