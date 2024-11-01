var clicks = 0;
var points = 1;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;
var level5 = 0;
var level6 = 0;
var level7 = 0;
var level8 = 0;
var level9 = 0;

function onClick() {
clicks += points
document.getElementById("clicks").innerHTML = clicks;
}
function myFunction() {
    clicks -= 100;
    points += 1;
    document.getElementById("clicks").innerHTML = clicks;
    level1 += 1;
    document.getElementById("level1").innerHTML = level1;
}
var number = 0;
function myFunction2() {
    clicks -= 200
    points += 2
    document.getElementById("clicks").innerHTML = clicks;
    level2 += 1;
    document.getElementById("level2").innerHTML = level2;}

function myFunction3() {
    clicks -= 500
    points += 5
    document.getElementById("clicks").innerHTML = clicks;
    level3 += 1;
    document.getElementById("level3").innerHTML = level3;
}
function myFunction4() {
    clicks -= 2000
    points += 10
    document.getElementById("clicks").innerHTML = clicks;
    level4 += 1;
    document.getElementById("level4").innerHTML = level4;
}
function myFunction5() {
    clicks -= 5000
    points += 20
    document.getElementById("clicks").innerHTML = clicks;
    level5 += 1;
    document.getElementById("level5").innerHTML = level5;
}
function myFunction6() {
    clicks -= 20000
    points += 50
    document.getElementById("clicks").innerHTML = clicks;
    level6 += 1;
    document.getElementById("level6").innerHTML = level6;
}
function myFunction7() {
    clicks -= 50000
    points += 75
    document.getElementById("clicks").innerHTML = clicks;
    level7 += 1;
    document.getElementById("level7").innerHTML = level7;
}
function myFunction8() {
    clicks -= 100000
    points += 100
    document.getElementById("clicks").innerHTML = clicks;
    level8 += 1;
    document.getElementById("level8").innerHTML = level8;
}
function myFunction9() {
    clicks -= 500000
    points += 250
    document.getElementById("clicks").innerHTML = clicks;
    level9 += 1;
    document.getElementById("level9").innerHTML = level9;
}
