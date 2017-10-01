//May want to specify more than one key for some data sets.
//i.e. tracking records based on userID and username

//.createIndex() 1st argument = name of index
//2nd argument = name of the property to index
//3rd argument = options object containing the
//key unique, should always be specified to indicate if the key is unique accross all records
var store = database.transaction("users").objectStore("users"),
    index = store.createIndex("username", "username", { unique: true });

//more nuanced description of indexes on chapter 23 pages 796 - 798