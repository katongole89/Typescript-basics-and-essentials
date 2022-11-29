// DETECTION PROBLEMS

const detectType = (val:number|string):void =>{
    if(typeof val === 'number'){

    }else{
        val.toLocaleLowerCase()
    }
}

const detectType2 = (val:string|null):void =>{
    if(!val){
        console.log('please provide val')
    }

}