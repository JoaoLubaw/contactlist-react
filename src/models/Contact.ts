export class Contact {
    fullname: string
    id: number
    number: string
    email:string 

    constructor(
        fullname: string,
        id:number,
        number:string,
        email: string

    ) {
        this.fullname = fullname
        this.id = id
        this.number = number
        this.email = email
    }
}