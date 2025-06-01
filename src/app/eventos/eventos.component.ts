import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  imagem : String = "assets/img/dia.jpeg";
  imagemNoite : String = "assets/img/noite.jpeg";

  alterarImagem(){
    if (this.imagem == "assets/img/dia.jpeg"){
      this.imagem = "assets/img/noite.jpeg"
    } else {
      this.imagem = "assets/img/dia.jpeg";
    }
  }

}
