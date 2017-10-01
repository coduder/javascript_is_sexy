//No arguments = read-only access to all objects in database
var transaction = database.transaction();

//Key name is arguments gives read-only access to the object store of that name
var transaction2 = database.transaction("user");

//first argument as array of names gives read-only access to specified stores
var transaction3 = database.transaction(["users", "anotherStore"]);

//FOR WRITABLE ACCESS AND VERSION CHANGE NEED 2ND ARGUMENT
//this argument has variation accross browsers and should be assigned as such
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;

//read/write transaction
var transaction4 = database.transaction("users", IDBTransaction.READ_WRITE);


//use of get, put, add to modify an object store
//ASSUMES EXISTENCE OF OBJECT STORE FROM firstIndexedDB.js
var request = database.transaction("users").objectStore("users").get("007");
request.onerror = function(event) {
    alert("did not get the object!");
};

request.onsuccess = function(event) {
    var result = event.target.name;
    alert(result.firstName);
};

//because any number of requests can be completed as part of a single transaction,
//the transaction object itself also has event handlers

transaction.onerror = function(event) {
    //entire transaction is canceled
};

transaction.onsuccess = function(event) {
    //entire transaction completed successfully
};