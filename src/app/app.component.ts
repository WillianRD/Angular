import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { EventosComponent } from './eventos/eventos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimeComponent, EventosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  somaDeDois = 10 + 5;
  name = 'Willian';
}
