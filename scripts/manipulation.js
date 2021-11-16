function border()   {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var width = document.getElementById("width").value;
    if (red == '')  {
        red = '0'
    }
    if (green == '')  {
        green = '0'
    }
    if (blue == '')  {
        blue = '0'
    }
    if (width == '')  {
        width = 0
    }
    var color = rgb(parseInt(red), parseInt(green), parseInt(blue))
    document.getElementById("paragraph").style.borderColor = color
    document.getElementById("paragraph").style.borderWidth = width+"px"
    document.getElementById("paragraph").style.borderStyle = "solid"
}

function background()   {
    var red = document.getElementById("redg").value;
    var green = document.getElementById("greeng").value;
    var blue = document.getElementById("blueg").value;
    if (red == '')  {
        red = '0'
    }
    if (green == '')  {
        green = '0'
    }
    if (blue == '')  {
        blue = '0'
    }
    if (width == '')  {
        width = 0
    }
    var color = rgb(parseInt(red), parseInt(green), parseInt(blue))
    document.getElementById("paragraph").style.backgroundColor = color
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}