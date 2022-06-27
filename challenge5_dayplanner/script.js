//using momnent js to set current day
var currentDay = moment().format("dddd, MMMM Do YYYY").toString();
document.getElementById("currentDay").innerHTML = currentDay;


//color coded time blocks using .each  and .prop  method, and this, along with moment js hour format , api.jquery.com
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




