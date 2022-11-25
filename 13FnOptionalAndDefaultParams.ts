export {}

const addBoolTest = (n1:number, n2?:boolean):number => {
    if(n2 === void 0){
        console.log('we here')
        return 25
    }else{
        return n1
    }
}

addBoolTest(1)

//setting the default 
const add2 = (n1:number, n2:number = 20):number => {
    return n1+n2
}

// console.log(add('nameless j', 'df'))

// try to put the mandatory parameters first and then the optional ones