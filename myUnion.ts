let score: number | string = 33;

score = 44
score = "55"

type User = {
    name: string;
    id: number
}
type Admin = {
    username:string;
    id: number
}

let nagamani: User | Admin = {name:"mani", id:1}

nagamani = {username: "vaishu",id:2}


function getDBId(id: number | string) {
   if (typeof id === "string") {
    id.toLowerCase();
   } 
}

getDBId(3)
getDBId("3")

const data: (string | number | boolean)[] = [1,23,3,"4", true]

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" -> not possible