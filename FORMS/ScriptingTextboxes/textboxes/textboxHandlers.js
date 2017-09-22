var textbox = document.forms[0].elements[0];

/**
 * //1 = Changes background color of textbox once it is in focus (unless it is already red
 * from an error caused by other 2 blur and change event handlers)
 * 
 * //2 = Selects all text in text box so user can easily delete and start over without 
 * deleting individual characters
 */
EventUtil.addHandler(textbox, "focus", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    //1
    if (target.style.backgroundColor != "red") {
        target.style.backgroundColor = "yellow";
    }
    //2
    textbox.select();

});
//BOTH onblur AND onchange HANDLERS ARE NECESSARY FOR CONSISTENT FUNCTIONALITY
/**
 * Tests textbox input text against a numeric finding regex and turns background
 * red if any nonnumeric characters are found AND the user exits focus from the text box, in this case,
 * it would indicate the page creator needs numeric values in this form field
 */
EventUtil.addHandler(textbox, "blur", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    if (/[^\d]/.test(target.value)) {
        target.style.backgroundColor = "red";
    } else {
        target.style.backgroundColor = "";
    }
});

/**
 * Tests textbox input text against a numeric finding regex and turns background
 * red if any nonnumeric characters are found AND the user exits focus, thus triggering a change events,
 * from the text box, in this case, it would indicate the page creator needs numeric 
 * values in this form field
 */

EventUtil.addHandler(textbox, "change", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    if (/[^\d]/.test(target.value)) {
        target.style.backgroundColor = "red";
    } else {
        target.style.backgroundColor = "";
    }
});

EventUtil.addHandler(textbox, "")