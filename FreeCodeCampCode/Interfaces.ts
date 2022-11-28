export {}

//similar to types
//u can define functions

interface User{
    readonly _id:number,
    name:string,
    email:string,
    googleId?: string,
    // startTrial:()=> string
    startTrial(): string,
    getCoupon(couponname:string):number
}


const hitesh: User = {
    _id:11,
    name:'kat',
    email:'k@k.com',
    startTrial:()=> 'sfsfs',
    getCoupon:(name:'htt')=> 10
}