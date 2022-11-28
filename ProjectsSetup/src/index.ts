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
    private _courseCount = 1

    readonly region:string ='central'
    constructor(
        public email:string,
        public name:string
        ){        
    }

    //getters and setters
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum:number){
        this._courseCount = courseNum
    }
    //setter doesnt return anything - not even void not allowed
}

//creating an object from the class
const testObj = new User('ka@k.com', 'rick')
console.log(testObj.name)


//inheritence
class Admin extends User{
    isFamily:boolean

    //u can do without this if no variables above or defaults set 
    constructor(email:string, name:string, isFamily:boolean){
        super(email, name)
        this.isFamily = isFamily
    }

    changeCou(){
        this.courseCount +=4
    }
}

// eg no variables above or their defaults are set
// class Admin extends User{
//     changeCou(){
//         this.courseCount +=4
//     }
// }

const newAdmin = new Admin('kat@g.com', 'kat', false)