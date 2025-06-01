import { Component } from '@angular/core';

@Component({
  selector: 'app-anime',
  imports: [],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent {
  //Função para exibir uma mensagem
  mensagem(){
    alert("Hello, World")
  }

}
