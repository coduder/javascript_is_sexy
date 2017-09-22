var form = document.getElementById("myForm");

/**
 * Create an event handler to prevent default submission of a form, likely to
 * do own form validation
 */

EventUtil.addHandler(form, "submit", function(event) {

    //get event object
    event = EventUtil.getEvent(event);

    //prevent form submission
    EventUtil.preventDefault(event);
});

/**
 * Prevent the submit button from being double clicked and double submissions
 * SHOULD FIND A WAY TO COMBINE THESE EVENT HANDLERS
 */
EventUtil.addHandler(form, "submit", function(event) {

    //get event object
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    //get submit  button
    var btn = target.elements["submit-btn"];

    //disable it
    btn.disabled = true;
});
/*
Form validation code here
*/

//programitically submit form
form.submit(); //submit event does NOT fire in this case