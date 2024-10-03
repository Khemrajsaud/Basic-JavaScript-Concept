// Const = a variable that can't changed
let pi = 3.14;
let radius;
let circumference;

// pi = 345.87;

// radius = window.prompt('enter the radius of a circle');
// radius = Number(radius);

// circumference = 2*pi*radius;

//  console.log(circumference);
 
document.getElementById("butten").onclick = function(){
    radius = document.getElementById("input").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("text").textContent = circumference + "cm";
}