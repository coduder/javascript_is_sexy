/**
 * Example of poor practive (i.e. multiple simple onclick event handlers) vs 
 * good practice of event delegation (i.e. assigning on master onclick event handler 
 * with switch statements for different DOM elements)
 */

//Traditional bad way that can create a very long list of event handlers unecessarily
/*var item1 = document.getElementById("goSomewhere");
var item2 = document.getElementById("doSomething");
var item3 = document.getElementById("sayHi");

EventUtil.addHandler(item1, "click", function(event) {
    location.href = "http://wrox.com";
});

EventUtil.addHandler(item2, "click", function(event) {
    document.tite = "I changed the document's title";
});

EventUtil.addHandler(item3, "click", function(event) {
    alert('hi');
});*/

//Good way, event delegation attaches single event handler to highest point in DOM tree
var list = document.getElementById("myLinks");

EventUtil.addHandler(list, "click", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    switch (target.id) {
        case "doSomething":
            document.title = "I changed the document's title";
            break;
        case "goSomewhere":
            location.href = "http://wrox.com";
            break;
        case "sayHi":
            alert("hi");
            break;
    }
});