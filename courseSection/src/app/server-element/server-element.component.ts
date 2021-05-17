import { Component, 
  ContentChild, 
  ElementRef, 
  Input, 
  OnInit, 
  ViewChild,
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //isto é padrao eu poderia trocar para shadowDom ou None
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element:{type:string, name:string, content:string}; //definindo a var do tipo que receberá javascript
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('paragraphContent', { static:true }) paragraph:ElementRef;


  constructor() {
    console.log('constructor called')
    console.log('Text Content : ' + this.header)
   }

  ngOnInit(): void {
    console.log('ngOnInit called ')
  }

}
