// private only here - only accessible in class
// protected - here and children
// public -accessed everywhere --default


// Jr dev code
//Classes
// class User{
//     // name:string
//     email:string
//     name:string
//     city:string = 'df' //if not passed in a constructor then set default
//     readonly region:string ='central' //this value can not be changed

//     constructor(email:string, name:string){
//         this.email = email
//         this.name = name
//     }
// }

// Sr dev code
class User{
    readonly region:string ='central'
    constructor(
        public email:string,
        public name:string
        ){        
    }
}

//creating an object from the class
const testObj = new User('ka@k.com', 'rick')
console.log(testObj.name)
