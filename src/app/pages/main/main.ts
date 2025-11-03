import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  string_phrases = signal<string[]>([
    'Transformamos tus ideas en soluciones digitales',
    'Te ayudamos a crecer en el mundo de internet',
    'Testing'
  ]);

}
