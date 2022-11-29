// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.

const score: number[] = []
const namey: string[] = []

const identityThree = <Type>(val:Type):Type =>{
    return val
}

//more common syntax
const identityFour = <T>(val:T):T =>{
    return val
}

// ++++++++++++++++++++++  using generics with interfaces +++++++++++++++++++++++++++
interface Bottle{
    brand:string,
    type:number
}

//do more research for using generics with interfaces
// const identityFive = <Bottle>({})
// identityFive<Bottle>({})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++ Arrays and interfaces +++++++++++++++++++++++++++++++++++
const getSearchProduct =<T>(products:T[]):T =>{
    return products[3]
}
//added qomma to separate jsx from generics
const getSearchProductty =<T,>(products:T[]):T =>{
    return products[3]
}

//explanation- take T -- array of T return T ----meaning return value type in the array-- 
//Research what if the array has two types

// let testArr12: (string|number)[] = ['wer', 2, 3, 'wr']
// getSearchProduct(testArr12)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++ extends +++++++++++++++++++++++++++++++++++++++++++++ 
function anotherFunc <T, U extends number>(val1:T, val2:U ):object{
    return {val1, val2}
}
// anotherFunc(2, '4') //wont allow coz U must be any form of number
interface Database{
    connection:string,
    username: string,
    password:string
}
function anotherFunc2 <T, U extends Database>(val1:T, val2:U ):object{
    return {val1, val2}
}


