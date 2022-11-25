// Readonly,Qtn-mark/

export {}

type User = {
    readonly _id:string
    name:string;
    email:string;
    isActive:boolean,
    creditCardDetails?:number //---made optional
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
//readonly -- u cant update that field when being used eg
let newUser:User = {
    _id:'1',
    name: 'rick',
    email:'k@k.com',
    isActive:false
}
// newUser._id = '2' //wont allow because its a readonly field
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// creating a new type from  other types
type cardDate ={
    cardDate:string
}

type cardName ={
    cardName:string
}

type cardDetails = cardDate & cardName & {
    cvv:string
}


const TestCombine = (card:cardDetails) =>{}

TestCombine({cardDate:'we', cardName:'er', cvv:''})
