import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //isto é padrao eu poderia trocar para shadowDom ou None
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element:{type:string, name:string, content:string}; //definindo a var do tipo que receberá javascript

  constructor() { }

  ngOnInit(): void {
  }

}
