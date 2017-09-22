/**
 * Ensures that future event handlers are only applied after element is fully
 * loaded
 */

EventUtil.addHandler(window, "load", function(event) {
    var div = document.getElementById("myDiv");
    /**
     * Overwrites default context menu with 3 new links
     */
    EventUtil.addHandler(div, "contextmenu", function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);

        var menu = document.getElementById("myMenu");
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.style.visibility = "visible";
    });
    /**
     * Hides new context menu when the user clicks anywhere on screen
     */
    EventUtil.addHandler(document, "click", function() {
        document.getElementById("myMenu").style.visibility = "hidden";
    });
});