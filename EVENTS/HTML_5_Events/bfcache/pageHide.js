EventUtil.addHandler(window, "pagehide", function() {
    alert("Hiding. Persisted? " + event.persisted);
});