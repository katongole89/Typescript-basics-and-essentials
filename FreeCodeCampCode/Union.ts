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

const getUser = (id:string|number) => {
    // id.toLowerCase() Wont allow
    if(typeof id === "string"){
        // do string type
        id.toLowerCase()
    }else{
        // do number stuff
    }
}