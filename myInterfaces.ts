interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponname: string,value:number): number
}

interface User {
    githubToken: string
}

const nagamani: User = {dbId:21, email:"mani@gmail.com", userId: 1234, githubToken:"1234", startTrail: ()=> {
    return "trail started"
}, getCoupon: (name: "mani",off:10)=> {
    return 10
}}

nagamani.email = "mn@gmail.com"