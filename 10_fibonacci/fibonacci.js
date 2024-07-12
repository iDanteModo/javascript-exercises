const fibonacci = function(index) {
    if(index < 0) {
        return "OOPS";
    }
    let array =[];
    // Add the first 2 numbers so you dont get an undefined on the FOR array push (i-2);
    array.push(1);
    array.push(1);
    for (i = 2; i <= 1000; i ++)
    // Add the numbers to the array, i-1 and i-2 (Extample for i==2 , i-1 ==1 & i -2 ==1 so it will add 2)
        array.push(array[i-1]+(array[i-2])) ;

    if(index == 0){
        return 0;
    }
    return array[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
