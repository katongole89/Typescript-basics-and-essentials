export {}

let User ={
    name:'katongole',
    email:'kat@gmail.com',
    isActive:false
}


//returning an object
const createUser = (user:{name:string, email:string, isActive:boolean}):{name:string, email:string, isActive:boolean} =>{
    console.log(user.name)
    return {name:'', email:'', isActive:false}
}

createUser(User)