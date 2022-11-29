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

