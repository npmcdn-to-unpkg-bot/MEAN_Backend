/**
 * Created by Mathieu on 23/08/2016.
 */

import { Injectable } from '@angular/core';
import {User} from './user.model';
import {Http, Headers} from  '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor(private http : Http) { }

    saveUser(user : User) : Observable {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});

        return this.http.post('http://localhost:3000/user', body, {headers : headers})
            .map(data => {

                var datas = JSON.stringify(data);
                var body = JSON.parse(datas)._body;
                user.id = JSON.parse(body).id;
            });
    }

    deleteUser(id : string) : Observable {
        return this.http.delete('http://localhost:3000/users/delete/' + id)
            .map(data => data.json());
    }

    getUsers() {
        return this.http.get('http://localhost:3000/users')
            .map(data => {
                const extracted = data.json();
                const users : User[] = [];

                let user :
                    for (let data of extracted.data) {
                        user = new User(data.mail, data.name, data.password, data._id);
                        users.push(user);
                    }
                return users;
            });
    }
}