import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignalRService } from '../Services/signalR-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../Services/auth-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  userName = "Kuladeep";
  messages: Message[] = [
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ];
  @ViewChild('messagesContainer') private messagesContainer: any;
  @ViewChild('messageInput') messageInput!: ElementRef;

  isCollapsed = false;

  toggleChat() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private signalRService: SignalRService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {


    this.signalRService.startConnection();
    this.signalRService.receiveMessage();

    this.http.get(environment.apiUrl + '/api/chat/messages').subscribe(response => {
      //this.messages = response as string[];
    });

  }
  // Automatically scroll to the bottom when a new message is added
  scrollToBottom(): void {
    setTimeout(() => {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }, 0);
  }

  sendMessage() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text',

      })
    };
    this.messages.push({ text: this.message, sender: 'user' });
    this.scrollToBottom();

    //this.signalRService.sendMessage(this.userName, this.message);
    this.http.post(environment.apiUrl + '/bot', { query: this.message }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, responseType: 'text' }).subscribe(x => {
      console.log(x)
      if (x) {
        this.messages.push({ text: x as string, sender: 'bot' });
        this.scrollToBottom();
      }
    })
    this.messageInput.nativeElement.style.height = 'auto';
    this.message = '';
  }
  autoResize(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';  // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`;  // Set height to scrollHeight
  }

}
interface Message {
  text: string;
  sender: 'bot' | 'user';
}