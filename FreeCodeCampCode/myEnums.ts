export {}

//create restrictable options
//Default code
// const AISLE = 0 //problem is watif someone changes the number
// const MIDDLE = 1
// const WINDOW =2



const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

//Note by default first value is set to 0

//set your own default 
const enum SeatChoice2 {
    AISLE = 20,
    MIDDLE =22,
    WINDOW
}

//set custom values
const enum SeatChoice3 {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window'
}

const hcSeat = SeatChoice3.AISLE
console.log(hcSeat)

//put const infront of the enums such that not alot of javascript codeis generated


