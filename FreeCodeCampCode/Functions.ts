export {}

let arr = ['kat', 1, false, 3, {name:'kat'}, 2]

const newData = arr.map((item):string =>{
    return 'katongole'
})


//Good practice to put void even though not necessary - when function is returning nothing
const consoleError = (errmsg:string):void => {
    console.log(errmsg)
}

// TypeScript introduced a new type never, which indicates the values that will never occur.
const handleError = (errmsg:string):never => {
    throw new Error(errmsg)    
}