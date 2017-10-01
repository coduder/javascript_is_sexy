//cursors are necessary to retrieve multiple items within a single transaction
//UNLIKE TRADITIONAL DATABASE QUERIES a cursor doesn't collect all
//info at once, rather iterates over
var store = database.transaction("users").objectStore("users"),
    request = store.openCursor();


//.openCursor() has 2 arguments, first is keyRange (look at firstKeyRange.js)
//2nd is an int code indicating direction
//This cursor iterates over all non duplicate items in a store starting at the top
request2 = store.openCursor(null, IDBCursor.NEXT_NO_DUPLICATE);

//This cursor iterates over all (including duplicate) items starting at bottom and going up
request3 = store.openCursor(null, IDBCursor.PREV);

//onsuccess event firing indicates that the next item in the object store is accessible
//via event.target.result
request.onsuccess = function(event) {
    //handle success
    //retrieve info about single result
    var cursor = event.target.result;
    if (cursor) { //always check
        console.log("Key: " + cursor.key + ", Value: " +
            JSON.stringify(cursor.value)); //since in this instance cursor.value is an object
    }
};

request.onfailure = function(event) {
    //handle error
};

////////ALTERNATIVE ONSUCESS EVENT HANDLER////////////
//if you want to use a cursor to update an individual record
//can also set up for a delete request on page 793 of Professional Javascript
request.onsuccess = function(event) {
    var cursor = event.target.result,
        value,
        updateRequest;

    if (cursor) { //always check
        if (cursor.key == "foo") {
            value = cursor.value; //get current value
            value.password = "magic!"; //update the password

            updateRequest = cursor.update(value);
            updateRequest.onsuccess = function() {
                //handle success
            };
            updateRequest.onfailure = function() {
                //handle failure
            };
        }
    }
};

//two methods to make each cursor make multiple requests
// continue(key) -> moves to next item or next item matching key when specified (optional)
// advance(count) -> moves the cursor ahead by count number of items

///to iterate over all items in objectstore
request.onsuccess = function(event) {
    var curosr = event.target.result;
    if (cursor) { //always check
        console.log("Key: " + cursor.key + ", Value: " +
            JSON.stringify(cursor.value)); //since in this instance cursor.value is an object
        cursor.continue(); //go to next one
    } else {
        console.log("Done!");
    }
}