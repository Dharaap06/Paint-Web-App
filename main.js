var mouseEvent="empty";
var last_positon_of_x, last_positon_of_y;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="blue";
width_of_the_line= 1;
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave()
{
mouseEvent="mouseleave";


}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup()
{
mouseEvent="mouseup";


}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown()
{
mouseEvent="mousedown";


}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x= e.clientX- canvasoffsetleft;
current_position_of_mouse_y= e.clientY- canvasoffsettop;

last_positon_of_x= current_position_of_mouse_x;
last_positon_of_y= current_position_of_mouse_y;


if(mouseEvent == "mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_the_line;

console.log("last position of x and y coordinates = ");
console.log("x =" + last_positon_of_x + " , y = " + last_positon_of_y);
ctx.moveTo(last_positon_of_x, last_positon_of_y);

console.log("current position of x and y coordinates = ");
console.log("x =" + current_positon_of_mouse_x + " , y = " + current_positon_of_mouse_y);
ctx.lineTo(current_positon_of_mouse_x, current_positon_of_mouse_y);
ctx.stroke();
}

}

