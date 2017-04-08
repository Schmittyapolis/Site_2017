$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).hover(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".hamburger" ).show();
$( ".cross" ).hide();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});