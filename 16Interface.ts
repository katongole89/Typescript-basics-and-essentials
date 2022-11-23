export {}

interface Student {
    firstName:string,
    lastName?:string
}

// interface Student {
//     firstName:string,
//     lastName?:string
// }

const printFullname = (student:{firstName:string, lastName:string}) => {
    console.log(student.firstName, student.lastName)
}

const printFullname2 = (student:Student) => {
    console.log(student.firstName, student.lastName)
}

let harry = {firstName:'harrry'}

printFullname2(harry)

 