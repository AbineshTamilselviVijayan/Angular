import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverAliveStatus = 'No alive servers';
  serversName = '';
  serversAlive = false;
  altName = '';
  setServersName(){
    this.setAltName();
  }
  setAltName(){
    this.serversAlive = true;
    this.altName = this.serversName;
    this.serverAliveStatus = 'Server '+this.altName+' is alive';
  }
}
