import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers', POR CLASSE
  // selector: '[app-servers]', POR ATRIBUTO
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";
  serverCreated = false;
  servers = ['test', 'test 2'];

  constructor() { 
   setTimeout( () => {
     this.allowNewServer = true;
   }, 2000)  
  }

  ngOnInit(): void {
  }

  OnCreateServer(){
    this.serverCreationStatus = "Server was created Successfully and the name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }



}
