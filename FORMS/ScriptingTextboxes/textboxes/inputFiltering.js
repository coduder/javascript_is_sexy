/**
 * Event handler to block certain characters from being entered in textbox. In this 
 * case blocks all non-numeric characters.
 */
EventUtil.addHandler(textbox, "keypress", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var charCode = EventUtil.getCharCode(event);
    // charCode > 9 to ensure that up down and other keys are still allowed in 
    //different browswers and also want to ensure ctrl+v,c,z are still useable
    if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey) {
        EventUtil.preventDefault(event);
    }
});

/**
 * Need to also ensure that text pasted into a textbox has valid characters, so the
 * clipboard data needs to be inspected prior to pasting
 */

EventUtil.addHandler(textbox, "paste", function(event) {
    event = EventUtil.getEvent(event);
    var text = EventUtil.getClipboardText(event);

    if (!/^\d*$/.test(text)) {
        EventUtil.preventDefault(event);
    }
});