import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  allowNewServer = false;
  serverId = 0;
  serverName = '';
  serverStatus = 'offline';
  serverCreationStatus = 'No servers found';
  getServerId(){
    return this.serverId;
  }
  setServerId(){
    this.serverId = this.serverId+1;
  }
  setServerCreationStatus(){
    this.setServerId();
    this.serverCreationStatus = 'Server created on id '+this.serverId+' by name '+this.serverName;
  }
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
    setTimeout(
      ()=>{this.allowNewServer = true;}
      ,2000);
  }
  setServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
