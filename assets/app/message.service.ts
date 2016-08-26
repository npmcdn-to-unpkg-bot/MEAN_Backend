/**
 * Created by Mathieu on 23/08/2016.
 */

import { Injectable } from '@angular/core';
import {Message} from './message.model';
import {Http, Headers} from  '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class MessageService {
    constructor(private http : Http) { }

    saveMessage(message : Message) : Observable {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type' : 'application/json'});

        return this.http.post('http://localhost:3000/message', body, {headers : headers})
            .map(data => {

                var datas = JSON.stringify(data);
                var body = JSON.parse(datas)._body;
                message.id = JSON.parse(body).id;
            });
    }

    deleteMessage(id : string) : Observable {
        return this.http.delete('http://localhost:3000/messages/delete/' + id)
            .map(data => data.json());
    }

    getMessages() {
        return this.http.get('http://localhost:3000/messages')
            .map(data => {
                const extracted = data.json();
                const messages : Message[] = [];

                let message :
                    for (let data of extracted.data) {
                        message = new Message(data.content, data._id);
                        messages.push(message);
                    }
                return messages;
            });
    }
}