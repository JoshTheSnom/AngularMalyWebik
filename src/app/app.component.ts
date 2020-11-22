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
  search = '';
  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'},
  ];
  //i = 0;
  show = false;
  showHint() {
    this.show = true;
  }
  hideHint() {
    this.show = false;
  }

  get filteredOptions(): SearchOption[] {
    //return this.options;
    const result = [];
    const search = this.search.toLowerCase();
    if(search.length === 0) return this.options;
    for (const option of this.options) {
      if (option.title.toLowerCase().includes(search)) {
        result.push(option);
      }
    }
    return result;
  }
  
}
