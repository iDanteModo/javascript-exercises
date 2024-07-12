const getTheTitles = function(books) {
    let titles = [];

    // Iterating over an array of objects using forEach, we add to titles every specific attribute from object, EX .title for our case
    books.forEach(function(book){
        titles.push(book.title);
    });
    return titles;
};
// Do not edit below this line
module.exports = getTheTitles;
