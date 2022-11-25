export {}

let arr = ['kat', 1, false, 3, {name:'kat'}, 2]

const newData = arr.map((item):string =>{
    return 'katongole'
})


//Good practice to put void even though not necessary
const consoleError = (errmsg:string):void => {
    console.log(errmsg)
}