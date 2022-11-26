let score: string|number = 33


// you can also use it on types
type User = {
    name:string
    id: number
}

type Admin ={
    username:string
    id:number
}

let person: User|Admin


//functions

const getUser = (id:string|number) => {
    // id.toLowerCase() Wont allow
    if(typeof id === "string"){
        // do string type
        id.toLowerCase()
    }else{
        // do number stuff
    }
}

//array
// array can cotain either a number or string
let testArr: (number|string)[] = ['ty', 1]
// whole array can contain all numbers or all strings
let testArr2: number[]|string[] = ['ty', '']