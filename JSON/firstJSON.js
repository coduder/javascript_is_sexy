var book = {
    title: "Professional Javascript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011
};
//////////////////////////
/////JSON.stringify()/////
//////////////////////////
var jsonText = JSON.stringify(book);

//2nd argument as array = Filter book properties, resulting JSON object 
//only has title and edition properties, no others
var jsonTextArrayFilter = JSON.stringify(book, ["title", "edition"]);

//2nd argument is function(key, value) = allows you to change serialization of object,
//in order to return values that should be included for that key
var jsonTextFunction = JSON.stringify(book, function(key, value) {
    switch (key) {
        case "authors":
            return value.join(","); //Translates array to string

        case "year":
            return 5000;

        case "edition":
            return undefined; //Returning undefined ensures this property wil be omitted from JSON object

        default:
            return value;
    }
});

//Includes 4 space indenting white space and new lines for easier reading of json object
var json3rdArgument1 = JSON.stringify(book, null, 4);

//3rd argument = string means that string is used as indentation marker, thus in this case, each tab is represented by "--"
var json3rdArgument2 = JSON.stringify(book, null, "--");

//toJSON() specified in any object defines the custom serialization should stringify be called
//calling stringify on the object then calls the toJSON function
var book2 = {
    title: "Professional Javascript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011,
    toJSON: function() {
        return this.title;
    }
};


//////////////////////////
///////JSON.parse()///////
//////////////////////////

//An unrelated copy of the book object above
var bookcopy = JSON.parse(jsonText);

//2nd argument funciton on each key value pair, commonly used to turn date strings into date objects
var book3 = {
    title: "Professional Javascript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011,
    releaseDate: new Date(2011, 11, 1) //1 date object created in normal JS object
};

var jsonWithDate = JSON.stringify(book3); //2 date object turned into JSON string by Date() object's toJSON() method
var book3copy = JSON.parse(jsonWithDate, function(key, value) { //3 JSON string representation converted back to date object
    if (key == "releaseDate") {
        return new Date(value);
    } else {
        return value;
    }
});