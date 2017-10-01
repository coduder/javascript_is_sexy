//"name=Nicholas; domain=.wrox.com"
document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("Nicholas") + "; domain=.wrox.com";


//USING CookieUtil.js
//set cookies
CookieUtil.set("name", "Nicholas");
CookieUtil.set("book", "Professional Javascript");

//read the values
alert(CookieUtil.get("name"));
alert(CookieUtil.get("book"));

//remove the cookies
CookieUtil.unset("name");
CookieUtil.unset("book");

//Set a cookie with path, domain, and expiration
CookieUtil.set("name", "Nicholas", "/books/projs/", "www.wrox.com", new Date("January 1, 2010"));

//delete that cookie
CookieUtil.unset("name,", "/books/projs/", "www.wrox.com");

//set a secure cookie
CookieUtil.set("name", "Nicholas", null, null, null, true);