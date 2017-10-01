//assume document.cookie=data=name=Nicholas@book=Professiona%20JavaScript

//get all subcookies
var data = SubCookieUtil.getAll("data");
alert(data.name); //Nicholas
alert(data.book); //Professional JavaScript

//get subcookies individually
alert(SubCookieUtil.get("data", "name")); //Nicholas
alert(SubCookieUtil.get("data", "name")); //Professional JavaScript

//set two subcookies
SubCookieUtil.set("data", "name", "Nicholas");
SubCookieUtil.set("data", "book", "Professional Javascript");

//Set all subcookies with expiration date
SubCookieUtil.setAll("data", { name: "Nicholas", book: "Professional JavaScript" },
    new Date("January 1, 2010"));

//Change value of name and change expiration date for cookie
SubCookieUtil.set("data", "name", "Michael", new Date("Februrary 1, 2010"));

//just remove the "name" subcookie
SubCookieUtil.unset("data", "name");

//remove entire cookie
SubCookieUtil.unsetAll("data");