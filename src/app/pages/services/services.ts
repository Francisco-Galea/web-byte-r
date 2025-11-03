import { Component } from '@angular/core';
import { monoLayout, monoSettings, monoLaptop} from '@ng-icons/mono-icons';
import {NgIcon, provideIcons} from '@ng-icons/core';

@Component({
  selector: 'app-services',
  imports: [NgIcon], viewProviders: [provideIcons({monoLayout, monoSettings, monoLaptop})],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
