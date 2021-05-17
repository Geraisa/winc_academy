const paintWall = function(color){
    console.log("The wall has been painted " + color);
}

paintWall("red");
paintWall("green");

//what happens if we call the function without an argument? Dan komt er te staan undefined.

const wallPaint = function(color1, color2){
    console.log("The north wall has been painted " + color1);
    console.log("The south-east has been painted " + color2);
}

wallPaint("grey", "orange");