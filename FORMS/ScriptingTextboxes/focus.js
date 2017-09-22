EventUtil.addHandler(window, "load", function(event) {
    var element = document.forms[0].elements[0];

    //HTML5 allows for non javascript focusing using <input type="text" autofocus>
    //This functionality must be checked for before trying to focus, otherwise errors
    if (element.autofocus != true) {
        element.focus();
        console.log("JS focus");
    }
});