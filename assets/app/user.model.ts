/**
 * Created by Mathieu on 25/08/2016.
 */

export class User {
    constructor(public mail: string,
                public name: string,
                public password? : string,
                public id?: string) {}
}