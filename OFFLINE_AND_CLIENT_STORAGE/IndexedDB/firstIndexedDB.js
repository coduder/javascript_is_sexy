var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;

var request, database;

/*
Databases must be opened. a call to .open("name") wil attempt to
find a database with the name "name" and open it, if not, it will
create it and then open it. onerror and onsuccess event handlers
need to be added in most browsers for proper functionality
*/

request = indexedDB.open("admin");
request.onerror = function(event) {
    alert("Something bad happened while trying to open: " + event.target.errorCode);
};
request.onsuccess = function(event) {
    database = event.target.result;

    /*
    Always assign an onversionchange event handler to close a database and get rid of concurrency issues
    */
    database.onversionchange = function() {
        database.close();
    }

};

/*
Must initialize version of database imediately
*/
if (database.version != "1.0") {
    request = database.setVersion("1.0");
    request.onerror = function(event) {
        alert("Something bad happened while trying to set version: " + event.target.errorCode);
    };
    request.onsuccess = function(event) {
        alert("database initialization complete. Database name: " +
            database.name + ", Version: " + database.version);
    };
} else {
    alert("database already initialized. Database name: " +
        database.name + ", Version: " + database.version);
}

/*
To update version, ensure onblocked event handler exists to make sure
there are no issues if a user has multiple tabs open and one has
database access
*/

request = database.setVersion("2.0");
request.onblocked = function() {
    alert("Please close all other tabs and try again.");
};
request.onsuccess = function() {
    //handle success
};
/*
Creating an Object store, think about what the primary key will
 be, must be globably unique
*/
var user = { //first user object to store in database
    username: "007",
    firstName: "James",
    lastName: "Bond",
    password: "foo"
};

var store = db.createObjectStore("users", { keypath: "username" });

/*
load an array of objects onto a store, if you want verification of
completed request, store references to to requests and use event handlers
*/
var users = [];
users.add(user);

var i = 0,
    request,
    reqeuests = [],
    len = users.length;

while (i < len) {
    request = store.add(users[i++]);
    request.onerror = function() {
        //handle error
    };
    request.onsuccess = function() {
        //handle success
    };
    requests.push(request);
}