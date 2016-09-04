import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { UserComponent } from './user.component';
import { MdButtonModule } from '@angular2-material/button';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    imports: [MdButtonModule],
    directives: [MessageComponent, UserComponent]
})
export class AppComponent {
    
}