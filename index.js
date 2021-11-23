//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    return (drivers.slice (0,2))
};

function  returnLastTwoDrivers(drivers) {
    return (drivers.slice (-2))
};

let selectingDrivers = [(returnFirstTwoDrivers) , (returnLastTwoDrivers)]


function createFareMultiplier(createdMultiplier){
    return function (fare){
                return fare*createdMultiplier
    }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, oneOrTheOther){
    return oneOrTheOther(arrayOfDrivers)
}

