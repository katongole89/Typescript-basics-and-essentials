export {}

//similar to types
//u can define functions
//interfaces can also be updated -== Reopeing of the interface
//interfaces can also be extended

interface User{
    readonly _id:number,
    name:string,
    email:string,
    googleId?: string,
    // startTrial:()=> string
    startTrial(): string,
    getCoupon(couponname:string):number
}

interface User{
    githubToken:string
}


// extending
interface Admin extends User {

}


const hitesh: User = {
    _id:11,
    name:'kat',
    email:'k@k.com',
    startTrial:()=> 'sfsfs',
    getCoupon:(name:'hty'| 'yuu')=> 10,
    githubToken: 'tywr'
}