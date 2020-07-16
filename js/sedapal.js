// Menu
$(".menu-hamburguesa").click(function(){
	$(".menu-fullpage").toggle();
});
$("#cerrar-menu").click(function(){
	$(".menu-fullpage").toggle();
});



// Footer
if (screen.width<768){
	$(".contenido-menu").hide();
	$(".menu h4").click(function(){
		$(this).parent().find(".contenido-menu").toggle();
		$(this).parent().find("h4").toggleClass("abierto");
	});
}