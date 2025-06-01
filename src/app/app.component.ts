import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { EventosComponent } from './eventos/eventos.component';
import { CondicoesComponent } from './condicao-if/condicoes.component';
import { CondicaoForComponent } from './condicao-for/condicao-for.component';
import { CondicoesSwichComponent } from './condicao-swich/condicoes-swich.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimeComponent, EventosComponent, CondicoesComponent, CondicaoForComponent, CondicoesSwichComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  somaDeDois = 10 + 5;
  name = 'Willian';
}
