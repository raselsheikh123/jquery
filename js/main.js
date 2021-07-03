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

});