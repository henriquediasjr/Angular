import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  element:{}; //definindo a var do tipo que receberá javascript

  constructor() { }

  ngOnInit(): void {
  }

}
