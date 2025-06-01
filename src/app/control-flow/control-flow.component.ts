import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  media : number = 8;

  nomes : String[] = ['Will', 'Leide', 'Yuri']

  linguagem : String = 'CSST';
}
