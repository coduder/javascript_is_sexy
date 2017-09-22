/**
 *  Both handlers fire at similer times:
 * + DOMContentLoaded when the DOM tree is fully formed, without regard for images, 
 *      JS files, CSS files, or other such resources.
 * + readystatechange has readyState property with 5 possible string values
 *      - unitialized = object exists but has not been initialized
 *      - loading = object is currently loading data
 *      - loaded = object has finished loading its data
 *      - interactive = object can be interacted with but is NOT fully loaded
 *      - complete = object is completely loaded
 *  * with regard to interactive state, images and other external sources may or may 
 *      not be available
 * 
 * if both event handlers are present their firing order is non deterministic, large 
 * pages with many external sources will see see interactive on readyState well before 
 * DOMContentLoaded fires (and vice versa for small )
 */

EventUtil.addHandler(document, "DOMContentLoaded", function(event) {
    alert("content loaded");
});


EventUtil.addHandler(document, "readystatechange", function(event) {
    //Due to inconsistency in firing order, both interactive and complete should be checked
    //to ensure earliest possible event catch
    if (document.readyState == "interactive" || document.readyState == "complete") {
        //Once the first event is caught, must remove the event handler so when the next
        //event fires, nothing happens
        EventUtil.removeHandler(document, "readystatechange", argument.callee);
        alert("Content loaded");
    }
});