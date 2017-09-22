var btn = document.getElementById("myBtn");

var handler = function(event) {
    switch (event.type) {
        case ("click"):
            alert("Cleeq");
            break;

        case ("mouseover"):
            event.target.style.backgroundColor = "red";
            break;

        case ("mouseout"):
            event.target.style.backgroundColor = "";
            break;
    }
};

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;