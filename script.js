/*
    Program Name: Recipe Display Application'
    Author: Kyle Lanes
    
    Date: 07/25/17
    
    Filename: script.js
    
*/

//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display


//attach event listener to h3 elements to invoke to display function when clicked
$("h3").click(display);