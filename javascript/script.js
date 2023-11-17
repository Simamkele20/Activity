// Question1
let NewHeader= document.getElementById("heading")
NewHeader.innerHTML= "JavaScript";

// Question2
document.querySelector(".paragraph").innerHTML=
"This is a language I have mastered and I am proud of myself. I complished this because I believed in myself";

// Question 3
document.querySelector("h3").innerHTML=
"Things I've accomplished so far"

// Question4
document.querySelectorAll("p")[1].innerHTML=
'I have discovered that I can accomplish anything I put my mind to'

// Question 5.1
var Input1 = document.querySelector("[data-firstMultiply]");

// Question 5.2
var Input2 = document.querySelector("[data-secondMultiply]");

// Question 5.3
var Btn1 = document.querySelector("[data-calculate1]");
addEventListener("click", Multiplication,);

// Question 5.4
var Span1 = document.querySelector("[data-first]");

// Question 5.5
function Multiplication(){
    var result = Input1.value * Input2.value;
    Span1.innerHTML = result;
}

