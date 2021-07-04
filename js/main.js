$('document').ready(function(){

$('.hide').click(function(){
    $('.lorem').hide(500);
});
$('.show').click(function(){
    $('.lorem').show(500);
});
$('.hide_show').click(function(){
    $('.lorem').toggle('slow');
    $('.nav').toggle('slow');
});

$('.fade-color').click(function(){
    $('.red').fadeIn('slow');
    $('.green').fadeIn(2000);
    $('.blue').fadeIn(3000);
    
});
$('.fade-toggle').click(function(){
    $('.red').fadeToggle(1000);
    $('.green').fadeToggle(2000);
    $('.blue').fadeToggle(3000);
});
$('.alart-link').click(function(){
    alert("Are you Sure To Open This Page");
});

});