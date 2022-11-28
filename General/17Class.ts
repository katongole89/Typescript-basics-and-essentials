export {}

class Student{
    name:string

    constructor(studentName:string){
        this.name = studentName
    }

    welcomeFunc(){
        console.log(`welcome ${this.name}`)
    }
}

let s1 = new Student('katongole Richard')
console.log(s1.name)
s1.welcomeFunc() 