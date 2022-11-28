export {}

let array1: number[] = [1,2,3]
let array2:Array<number> = [1,2,3]

let array3: (number|string)[] = ['gah', 2]
let array4: Array<number|string> = ['gah', 2]


// let turpleArray: [name:string, age:number, married:boolean]
let turpleArray: [string, number, boolean] //-- this will only allow 3 values
turpleArray = ['kayo', 20, false]

let anyArray: Array<any> = []
anyArray = ['1',2,false]

