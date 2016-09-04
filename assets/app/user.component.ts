import {Component, OnInit} from '@angular/core';
import { User } from './user.model';
import { UserService } from "./user.service";

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'user.template.html',
    providers: [UserService]
})
export class UserComponent implements OnInit {
    users : User[] = [];
    showSuccessUser : Boolean = false;
    showErrorUser : Boolean = false;

    constructor(private userService : UserService ) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                users => this.users = users,
                error => console.error(error)
            );
    }

    deleteUser(id, index) {
        this.users.splice(index, 1);

        this.userService.deleteUser(id)
            .subscribe(
                () => console.log("Deleted"),
                error => console.log("Error")
            );
    }

    onAddUser() {

        /*const rnd = Math.ceil(Math.random() * 100);
        const user = new User(rnd + ' is an awesome number !');

        this.users.push(user);

        this.userService.saveUser(user)
            .subscribe(
                () => this.showSuccessUser = true,
                error => this.showErrorUser = true
            );
            */
    }

}