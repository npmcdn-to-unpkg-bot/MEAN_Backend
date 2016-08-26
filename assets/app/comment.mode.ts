/**
 * Created by Mathieu on 25/08/2016.
 */

import {User} from "./user.model";

export class Comment {
    constructor(public author : User,
                public content : string,
                public date : string,
                public replies : Comment[],
                public id?: string) {}
}