export {}

const add = (n1:number, n2?:number):number => {
    if(n2){
        return n1+n2
    }else{
        return n1
    }
}

const add2 = (n1:number, n2:number = 20):number => {
    return n1+n2
}

// console.log(add('nameless j', 'df'))

// try to put the mandatory parameters first and then the optional ones