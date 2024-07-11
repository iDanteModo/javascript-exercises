const removeFromArray = function(array, ...value) {
    return array.filter(x =>  !value.includes(x));


}

// Do not edit below this line
module.exports = removeFromArray;
