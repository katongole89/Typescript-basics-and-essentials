export {}

//create restrictable options
//Default code
// const AISLE = 0 //problem is watif someone changes the number
// const MIDDLE = 1
// const WINDOW =2



enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

//Note by default first value is set to 0

//set your own default 
enum SeatChoice2 {
    AISLE = 20,
    MIDDLE =22,
    WINDOW
}

//set custom values
enum SeatChoice3 {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window'
}

const hcSeat = SeatChoice.AISLE
console.log(hcSeat)


