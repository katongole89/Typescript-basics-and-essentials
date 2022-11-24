export {}

//public - can be access anywhere in the application
//private - can only be accessed within that particular class
//protected - can only be accessed  within that class and the children

class Student{
    protected name:string

    constructor(studentName:string){
        this.name = studentName
    }

    welcomeFunc(){
        console.log(`welcome ${this.name}`)
    }
}

class Teacher extends Student{
    constructor(teacherName:string){
        super(teacherName)
    }

    assignTask(){
        console.log('task assigned')
    }
}

let t1 = new Teacher('vincent')
// console.log(t1.name)
t1.assignTask()
t1.welcomeFunc()