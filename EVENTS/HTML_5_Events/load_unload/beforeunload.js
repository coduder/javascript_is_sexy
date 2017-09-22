/**
 * Create a message pop up to display incase the user decides to unload the page
 * Doesn't hold user hostage, only displays alert indicating leave or stay
 * buttons (Opera does not support this event)
 * 
 * AFTER TESTING WITH SAFARI CHROME AND FIREFOX IT APPEARS event.returnValue must be
 * set to a string. This string will not be displayed and a generic message will be 
 * displayed. Firefox apparently may or may not diplay the message and chater on the 
 * web seems to suggest that if the user interacted with the page in some way and there
 * is potential for dataloss, then the pop up will display. This hasn't been tested
 */

EventUtil.addHandler(window, "beforeunload", function(event) {
    event = EventUtil.getEvent(event);
    var message = "I'm really going to miss you if you go!" //This will no longer be displayed in chrome
    event.returnValue = ""; //Necessary to indicate the message to display in the alert in all browsers

    //Used to have to specify a string to return by the function, however the ability to
    //show personal messages has been removed from chrome and it now displays a generic mesage
    //"Do you want to leave this site?"
    //"Changes you made may not be saved"
    return "";

});