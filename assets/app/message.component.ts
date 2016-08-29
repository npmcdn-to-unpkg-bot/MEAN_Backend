import {Component, OnInit} from '@angular/core';
import { Message } from './message.model';
import { MessageService } from "./message.service";

@Component({
    selector: 'messages',
    templateUrl: 'message.template.html',
    providers: [MessageService]
})
export class MessageComponent implements OnInit {
    messages : Message[] = [];
    showSuccessMessage : Boolean = false;
    showErrorMessage : Boolean = false;

    constructor(private messageService : MessageService ) { }

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
    }

    deleteMessage(id, index) {
        this.messages.splice(index, 1);

        this.messageService.deleteMessage(id)
            .subscribe(
                () => console.log("Deleted"),
                error => console.log("Error")
            );
    }

    onAddMessage() {

        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message(rnd + ' is an awesome number !');

        this.messages.push(message);

        this.messageService.saveMessage(message)
            .subscribe(
                () => this.showSuccessMessage = true,
                error => this.showErrorMessage = true
            );
    }

}