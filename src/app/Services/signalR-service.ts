// signalr.service.ts
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder().configureLogging(signalR.LogLevel.Debug)  // add this for diagnostic clues
    .withUrl(environment.apiUrl+"/chatHub", {
      accessTokenFactory: () => {
        const token = localStorage.getItem('token'); // Replace with your token retrieval logic
        return `Bearer ${token}`;
      },
      skipNegotiation: true,  // skipNegotiation as we specify WebSockets
      transport: signalR.HttpTransportType.WebSockets  // force WebSocket transport,
    })
    .build()
      
  }

  public startConnection = () => {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.error('Error while starting connection: ' + err));
  };

  public sendMessage = (user: string, message: string) => {
    this.hubConnection.invoke('SendMessage', user, message);
  };

  public receiveMessage = () => {
    return this.hubConnection.on('ReceiveMessage', (user, message) => {
      // Handle the received message
      console.log(`${user}: ${message}`);
      // Update your chat component's UI with the new message
    });
  };
}