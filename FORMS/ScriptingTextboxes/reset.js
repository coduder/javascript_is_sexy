var form = document.getElementById("myForm");
EventUtil.addHandler(form, "reset", function(event) {
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
});


//programatically reset form
form.reset();