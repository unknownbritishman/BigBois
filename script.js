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
    if (clicks >= 100) {
        clicks -= 100;
        points += 1;
        document.getElementById("clicks").innerHTML = clicks;
        level1 += 1;
        document.getElementById("level1").innerHTML = level1;
        document.getElementById("points").innerHTML = points;
        updateCurrencyDisplay();
      } else {
        alert("not enough banas")
      }
}
var number = 0;
function myFunction2() {
    if (clicks >= 200) {
    clicks -= 200
    points += 2
    document.getElementById("clicks").innerHTML = clicks;
    level2 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level2").innerHTML = level2;} else {
        alert("not enough banas")
    }}

function myFunction3() {
    if (clicks >= 500) {
    clicks -= 500
    points += 5
    document.getElementById("clicks").innerHTML = clicks;
    level3 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level3").innerHTML = level3;
} else {
    alert("not enough banas")
}}
function myFunction4() {
    if (clicks >= 2000) {
    clicks -= 2000
    points += 10
    document.getElementById("clicks").innerHTML = clicks;
    level4 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level4").innerHTML = level4;
} else {
    alert("not enough banas")
}}
function myFunction5() {
    if (clicks >= 5000) {
    clicks -= 5000
    points += 20
    document.getElementById("clicks").innerHTML = clicks;
    level5 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level5").innerHTML = level5;
} else {
    alert("not enough banas")
}}
function myFunction6() {
    if (clicks >= 20000) {
    clicks -= 20000
    points += 50
    document.getElementById("clicks").innerHTML = clicks;
    level6 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level6").innerHTML = level6;
} else {
    alert("not enough banas")
}}
function myFunction7() {
    if (clicks >= 100000) {
    clicks -= 100000
    points += 75
    document.getElementById("clicks").innerHTML = clicks;
    level7 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level7").innerHTML = level7;
} else {
    alert("not enough banas")
}}
function myFunction8() {
    if (clicks >= 500000) {
        
    clicks -= 500000
    points += 100
    document.getElementById("clicks").innerHTML = clicks;
    level8 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level8").innerHTML = level8;
} else {
    alert("not enough banas")
}}
function myFunction9() {
    if (clicks >= 1000000) {
    clicks -= 1000000
    points += 250
    document.getElementById("clicks").innerHTML = clicks;
    level9 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level9").innerHTML = level9;
} else {
    alert("not enough banas")
}}
function myFunction10() {
    if (clicks >= 5000000) {
    clicks -= 5000000
    points += 500
    document.getElementById("clicks").innerHTML = clicks;
    level9 += 1; 
    document.getElementById("points").innerHTML = points;
    document.getElementById("level10").innerHTML = level10;
} else {
    alert("not enough banas")
}}
function myFunction11() {
    if (clicks >= 5000000) {
    clicks -= 5000000
    points += 750
    document.getElementById("clicks").innerHTML = clicks;
    level9 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level11").innerHTML = level11;
} else {
    alert("not enough banas")
}}
function myFunction12() {
    if (clicks >= 10000000) {
    clicks -= 10000000
    points += 1000
    document.getElementById("clicks").innerHTML = clicks;
    level9 += 1;
    document.getElementById("points").innerHTML = points;
    document.getElementById("level12").innerHTML = level12;
} else {
    alert("not enough banas")
}}



