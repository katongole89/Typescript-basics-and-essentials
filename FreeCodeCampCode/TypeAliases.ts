export {}

//type aliases are similar to interfaces

type User = {
    name:string
    age:number
    isActive:boolean
}

const GetUser = (user:User):User =>{
    return user
}

let newUser = {name:'katongole', age:27, isActive:false}

GetUser(newUser)