function move(direction) {
    var layerText = document.getElementById("newtext");

    switch (direction) {

        case "left":
            layerText.style.left = "50px";
            break;

        case "right":
            layerText.style.left = "150px";
            break;

        case "up":
            layerText.style.top = "50px";
            break;

        case "down":
            layerText.style.top = "150px";
            break;
    }
}