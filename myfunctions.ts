function addTwo(num:number): number{   
    return num+2;
}

function getUpper(val:string) {
    return val.toUpperCase();
}

function signUpUser(name:string,email:string,isPaid:boolean) {

}

let loginUser = (name:string,email:string,isPaid:boolean=false) => {

}

let myValue = addTwo(5)
getUpper("abc")
signUpUser("mani","mani@gmail.com",true);
loginUser("vaishu","vaishu@gmail.com");

function getValue(myVal:number) : (boolean | string){
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

const getHello = (s:string): string => {
  return "Hello"
}

const heros = ["thor","spiderman","ironman"]
heros.map((hero):string=> `hero is ${hero}`)

function consoleError(errMsg:string):void {
    console.log(errMsg);
}

function handleError(errMsg:string) :never {
    throw new Error(errMsg);
}