var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

//only key range
//only value with key of "007", similar to directly acessing object store and using get("007")
var onlyRange = IDBKeyRange.only("007");

//lower bound (i.e. object at which the cursor should start)
//start at 007 and continue to end
var lowerRange = IDBKeyRange.lowerBound("007");
//start immediately after 007? 2nd argument = true
var lowerRangeX = IDBKeyRange.lowerBound("007", true);

//upper bound (i.e. don't go past this key) &&&&& start at the begining
//start at beginning and go to ace
var upperRange = IDBKeyRange.upperBound("ace");
//want to go up to but not include the specified key? 2nd argument = true
var upperRangeX = IDBKeyRange.upperBound("ace", true);

//Specify lower and upper bound? bound(lower, upper, lowerX, upperX)
//start at 007 and go to ace (all inclusive)
var boundRange1 = IDBKeyRange.bound("007", "ace");
//start after 007 and go to ace
var boundRange1X = IDBKeyRange.bound("007", "ace", true);
//start at "007", go to item before ace
var boundRange2x = IDBKeyRange.bound("007", "ace", false, true);

//ONCE RANGE IS SPECIFIED -> PASS IT INTO OPEN CURSOR METHOD TO KEEP CONSTRAINTS
var store = database.transaction("users").objectStore("users"),
    range = IDBKeyRange.bound("007", "ace"),
    request = store.openCursor(range);

//outputs only values between 007 and ace which are fewer than example in firstCursor.js
request.onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
        console.log("key: " + cursor.key + ", Value: " +
            JSON.stringify(cursor.value));
        cursor.continue();
    } else {
        console.log("done");
    }
}