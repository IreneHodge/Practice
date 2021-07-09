/* if you wanted to include the script in the header you need to use the document.ready method
$(document).ready(function() {
//     $("h1").css("color", "red")
// })

if you include the scripts at the end of the boday, than you don't need to use the document.ready
*/

// $("h1").css("color", "red")
// $("h1").addClass("big-title margin-50")
// $("h1").removeClass("big-title margin-50")
// $("h1").text("Goodbye")
// $("button").html("<em>Hey there</em>")
// $("h1").click(function() {
//     $("h1").css("color", "purple")
// })
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

// $(document).keypress(function(event) {
//    $("h1").html(event.key)
// })



/*  
How to do the jQuery commands in vanilla JS: (for my own practice)

document.querySelector("h1").style.color = "red"
document.querySelector("h1").classList.add("big-title", "margin-50")
document.querySelector("h1").classList.remove("big-title", "margin-50")
document.querySelector("h1").innerHTML = "Goodbye"

//1 button
document.querySelector("button").innerHTML = "<em>Hiya</em>"

//all buttons

var allButtons = document.querySelectorAll("button");

for(let i = 0; i < allButtons.length; i++){
   var button = allButtons[i];
   (button).innerHTML = "<em>You got this! </em>"
}

//adding event listener 

document.querySelector("h1").addEventListener("click", function() {
    document.querySelector("h1").style.color = 'purple'
})


for(var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple"
    })
}

document.addEventListener("keypress", function(event) {
    document.querySelector("h1").innerHTML = event.key
})
*/