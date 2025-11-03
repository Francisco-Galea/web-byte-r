import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from './components/header/header';
import { Services } from './pages/services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Services],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
