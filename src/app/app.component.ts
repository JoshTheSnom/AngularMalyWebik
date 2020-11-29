import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl} from '@angular/forms';


type SearchOption = { title: string, path: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebar = true;
  title = 'PRGUkol1';
  
  
}
