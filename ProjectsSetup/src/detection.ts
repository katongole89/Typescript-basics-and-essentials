// DETECTION PROBLEMS -- TYPE NARROWING
// --typeof
// --using !
// -- in

const detectType = (val:number|string):void =>{
    if(typeof val === 'number'){

    }else{
        val.toLocaleLowerCase()
    }
}

const detectType2 = (val:string|null):void =>{
    if(!val){
        console.log('please provide val')
    }
}

//narrowing down interfaces and types
interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminCheck(account:User|Admin):boolean{
    if('isAdmin' in account){
        return account.isAdmin
    }else{
        return false
    }
}