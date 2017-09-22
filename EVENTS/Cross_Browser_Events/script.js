var div = document.getElementById("myDiv");
/**
 * Indicates (via alert) when the targeted element (in this case 'div') 
 * has been moused over and then mousedout of and to what it was mouseout 
 * of into
 */

EventUtil.addHandler(div, "mouseout", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var relatedTarget = EventUtil.getRelatedTarget(event);
    alert("moused out of " + target.tagName + " to " + relatedTarget.tagName);
});

var myText = document.getElementById('myText');
/**
 * Indicates the chars that were pressed inside of a text insertable area
 * only indicates char keys that result in new characters added to area (no bckspace)
 */
EventUtil.addHandler(myText, "textInput", function(event) {
    event = EventUtil.getEvent(event);
    alert(event.data);
});