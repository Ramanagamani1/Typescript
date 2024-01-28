const User = {
    name: "mani",
    email: "mani@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid:boolean}) {
  
}

let newUser = {name:"vaishu",isPaid: false,email:"mani@gmail.com"}
createUser(newUser)

function createCourse():{} {
    return {name:"mani"}
}

createCourse();

// Type Aliases
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser1(user:User): User {
   return user;
}

createUser1({name:"", email:"", isActive: true})


// readOnly

type Student = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number
}


let myUser: Student = {
    _id: "1234",
    name: "Mani",
    email: "mani@gmail.com",
    isActive: false
}

// myUser._id = "3456";//not possible

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {cvv:number}

let myCardDetails:cardDetails = {
  cardnumber: "12345",
  cardDate: "Jan 27",
  cvv: 123
}

export {}