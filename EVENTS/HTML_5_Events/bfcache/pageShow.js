(function() {
    var showCount = 0;

    EventUtil.addHandler(window, "load", function() {
        alert("load fired");
    });

    EventUtil.addHandler(window, "pageshow", function() {
        showCount++;
        alert("show has been fired " + showCount + " times. Persisted? " + event.persisted);
    });
})();