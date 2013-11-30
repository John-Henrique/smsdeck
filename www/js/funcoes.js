//$(window).on("mobileinit",function(){
$( function(){
	
	
});


function mostra_carregando(){
    $.mobile.loading( 'show', {
      text: "Carregando",
      textVisible: true,
      theme: "a",
      textonly: false,
      html: ""
    });
}

function esconde_carregando(){
    $.mobile.loading( 'hide' );
}
