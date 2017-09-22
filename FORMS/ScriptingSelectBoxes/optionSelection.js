var selectbox = document.forms[0].elements["location"];
var selectedIndex = selectbox.selectedIndex;
var selectedOption = selectbox.options[selectedIndex];

alert("selected index: " + selectedIndex + "\nSelected Text: " + selectedOption.text +
    "\nSelected value: " + selectedOption.value);