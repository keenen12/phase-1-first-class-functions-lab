// Code your solution in this file!
const returnFirstTwoDrivers = function(newArray) {
    const drivers = newArray.slice(0, 2);
    return drivers;

}

const returnLastTwoDrivers = function(newArray2) {
    const drivers2 = newArray2.slice(2, 4);
    return drivers2;
}

const selectingDrivers = [
    returnFirstTwoDrivers(element),
    returnLastTwoDrivers(element),
];