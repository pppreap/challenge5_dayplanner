
//using momnent js to set current day
var currentDay = moment().format("dddd, MMMM Do YYYY").toString();
document.getElementById("currentDay").innerHTML = currentDay;


//color coded time blocks using .each  and .prop  method, and this, along with moment js hour format , api.jquery.com momentjs.com
var currentHour = moment().format("HH");
const colorblock = document.getElementsByClassName("colorblock");


$(".colorblock").each(function(){
    var time = parseInt($(this).prop('id'));
    if (time > currentHour){
    $(this).css('background-color','#77dd77');
    } else if (time < currentHour){
    $(this).css('background-color','#d3d3d3');    
    } else if (time === currentHour){
    $(this).css('background-color','#ff6961');  
    } else {
        $(this).css('background-color','white');    
    }
});




//add click event to savebtn, set time and value to localstorage
$(".saveBtn").click(function(e) {
    e.preventDefault();
    var value = $(this).siblings(".colorblock").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,value);
});

//get stored data from localStorage
var hour9 = localStorage.getItem("hr9");
$("#hr9 .colorblock").val(hour9);

var hour10 = localStorage.getItem("hr10");
$("#hr10 .colorblock").val(hour10);

var hour11 = localStorage.getItem("hr11");
$("#hr11 .colorblock").val(hour11);

var hour12= localStorage.getItem("hr12");
$("#hr12 .colorblock").val(hour12);

var hour13= localStorage.getItem("hr13");
$("#hr13 .colorblock").val(hour13);

var hour14= localStorage.getItem("hr14");
$("#hr14 .colorblock").val(hour14);

var hour15= localStorage.getItem("hr15");
$("#hr15 .colorblock").val(hour15);

var hour16= localStorage.getItem("hr16");
$("#hr16 .colorblock").val(hour16);







