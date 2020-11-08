import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = '';
  name = '';
  text = '';

  submit(email: string, name: string, text: string) {
    console.log(this.email);
    console.log(this.name);
    console.log(this.text);
  }

}
