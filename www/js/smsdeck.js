/**
Controla as ações do SMSdeck Android
*/

var dados = {"Recentes":{"status":false,"mensagens":[{"mensagem":"Mensagem recente","status":true},{"mensagem":"Mensagem recente","status":false},{"mensagem":"Mensagem recente","status":false},{"mensagem":"Mensagem recente","status":false},{"mensagem":"Mensagem recente","status":true}]},"Amizade":{"status":false,"mensagens":[{"mensagem":"Oi meu amigo como vai?","status":false},{"mensagem":"Oi meu amigo como vai?","status":false},{"mensagem":"Oi meu amigo como vai?","status":true},{"mensagem":"Oi meu amigo como vai?","status":false},{"mensagem":"Oi meu amigo como vai?","status":false}]},"Bom dia":{"status":false,"mensagens":[{"mensagem":"Bom dia como voc\u00c3\u00aa est\u00c3\u00a1","status":true},{"mensagem":"Bom dia como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Bom dia como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Bom dia como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Bom dia como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Bom dia como voc\u00c3\u00aa est\u00c3\u00a1","status":true}]},"Boa noite":{"status":false,"mensagens":[{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":true},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":false},{"mensagem":"Boa noite como voc\u00c3\u00aa est\u00c3\u00a1","status":true}]},"Cantadas":{"status":true,"mensagens":[{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":false},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":true},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":true},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":true},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":true},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":false},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":false},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":false},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":false},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":false},{"mensagem":"Esse baton ficou lindo na tua boca, pena que vou ter que tir\u00c3\u00a1-lo com meus l\u00c3\u00a1bios","status":true}]},"Picantes":{"status":false,"mensagens":[{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":false},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":false},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":true},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":false},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":false},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":false},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":true},{"mensagem":"Estou louco pra entrar em voc\u00c3\u00aa","status":false}]}};
		
var sms = {
	
	/*
	Executa ações ao iniciar a aplicação
	*/
	iniciar: function(){
		this.get_categorias();
		this.get_mensagens('');
	},
	
	
	/*
	Recupera informações na base de dados
	localStore
	*/
	get_dados: function( categoria_solicitada ){
		
		//return localStorage.getItem( nome_base );
		
		console.log( categoria_solicitada );
		
		categoria_solicitada = dados[categoria_solicitada];
		
		console.log( "get_dados() Categoria solicitada: "+ categoria_solicitada );
		return categoria_solicitada;
	},
	
	
	/*
	Grava informações na base de dados
	localStore
	*/
	set_dados: function( nome_base, valor ){
		
		localStorage.setItem( nome_base, valor );
	},
	
	
	/*
	Marca uma mensagem como utilizada
	*/
	set_mensagem_utilizada: function( mensagem_id ){
		
		// grava na base a informação
		this.set_dados( 'smsdeck_utilizadas', mensagem_id );
	},
	
	
	/*
	Carrega a lista de categorias
	*/
	get_categorias: function(){
		
		// exibe o carregando
		this.carregando( true );
		
		
		// HTML com os links para a fase
		html = '<li data-role="list-divider">Categorias</li>';
		
		$.each( dados, function( index, chave ){
			
			//console.log( "Categoria: "+ chave.status );
			
			html += '<li><a href="#'+ index +'" id="'+ index +'" class="'+ sms.classe_item( chave.status, 'privada' , 'livre' ) +'">'+ index +'</a></li>';
		});
		
		$( '.categoria_lista' ).append( html );
		
		// exibe o carregando
		this.carregando( false );
	},
	
	
	
	/*
	Força uma vibração no dispositivo
	Provavelmente funcione apenas em 
	celulares
	*/
	vibrar: function(){
		
		// verificando se notification está disponivel
		// não disponivel em navegadores
		if( navigator.notification ){
			navigator.notification.vibrate(2000);
		}else{
			console.log( "Vibração não disponível neste dispositivo" );
		}
	}, 
	
	
	/*
	Força uma vibração no dispositivo
	*/
	beep: function(){
		
		// verificando se notification está disponivel
		// não disponivel em navegadores
		if( navigator.notification ){
			navigator.notification.beep(3);
			
			console.log( "Beep() iniciado");
		}else{
			console.log( "Beep não disponível neste dispositivo" );
		}
		
	},
	
	
	
	/*
	Adiciona o conteúdo da categoria selecionada 
	dentro da página principal
	*/
	get_mensagens: function( categoria_selecionada, callback ){
		
		// exibe o carregando
		this.carregando( true );
		
		
		if( categoria_selecionada == undefined || categoria_selecionada == '' ){
			categoria_selecionada = 'Recentes';
			
			console.log( "Categoria não foi definida" );
		}
		
		// HTML com os links para a fase
		html = '';
		
		
		dados_encontrados = this.get_dados( categoria_selecionada );
		
		// evitando gerar erro quando a categoria não está definida
		if( dados_encontrados != undefined ){
			
			$.each( dados_encontrados.mensagens, function( index, chave ){
				
				//dados.Cantadas.mensagens
				console.log( "status categoria: "+ dados_encontrados.status );
								
				html += '<li id="mensagem_'+ categoria_selecionada +'_'+ index +'" class="mensagens_listadas '+ chave.status +' '+ sms.classe_item( dados_encontrados.status, 'privada' , 'livre' ) +'"><p>'+ chave.mensagem +'</p></li>';
			});
			
			
			// escreve o HTML contendo as novas mensagens
			this.escreve_mensagens( html );
			
		}else{
			html ='';
			html = '<li><h2>Temos um problema...</h2><p>Não existem mensagens na categoria selecionada: '+ categoria_selecionada +'</p></li>';
			// escreve o HTML contendo as novas mensagens
			this.escreve_mensagens( html );
			
			console.log( "Não existem mensagens na categoria selecionada: "+ categoria_selecionada );
		}
		
		
		/*
		tentando atualizar o listview apenas quando 
		uma categoria for clicada
		*/
		if( callback != undefined ){
			$( '.mensagens_lista' ).listview( 'refresh' );
			
			console.log( 'Get_mensagens() callback ativado ' );
		}
		
		
		// exibe/esconde o carregando
		this.carregando( false );
	},
	
	
	/* 
	Responsável por remover o conteúdo HTML 
	existente e adicionar o novo conteúdo
	*/
	escreve_mensagens: function( html ){

		// remove as mensagens existentes
		$( '.mensagens_listadas' ).remove();
		
		// adiciona as novas mensagens
		$( '.mensagens_lista' ).append( html );
	},
	
	
	/*
	Quando o usuário clicar em uma mensagem iremos 
	exibir um popup contendo as formas de 
	compartilhamento disponívels
	
	@var mensagem string contendo a mensagem 
	a ser compartilhada
	*/
	compartilhar: function( evento ){
		
		console.log( "compartilhar() ativado");
		
		// mensagem selecionada
		mensagem = $( "#"+ evento ).text();
		
		
		// lista das redes sociais (ou métodos de compartilhamento) disponiveis
		redes = {"sms":{"nome":"SMS","url":"sms:?body="},"twitter":{"nome":"Twitter","url":"twitter:\/\/messages?body="},"email":{"nome":"Email","url":"mailto:?body="},"facebook":{"nome":"Facebook Messenger","url":"fb:\/\/messaging?body="}};
		
		
		html = '<li data-role="divider" class="redes_sociais">Compartilhar com</li>';
		
		// percorrendo o array das redes sociais
		$.each( redes, function( index, chave ){
			
			html += '<li class="redes_sociais"><a href="'+ chave.url + mensagem +'" class="redes_sociais_botao">'+ chave.nome +'</a></li>';
			
			console.log( "compartilhar "+ mensagem +" com "+ chave.nome );
		});
		
		
		console.log( evento );
		
		$( '.redes_sociais' ).remove();
		$( '#compartilhar' ).append( html ).listview( 'refresh' ); // listview
		$( '#popup_compartilhar' ).popup( "open" );//
	},
	
	
	/*
	escolhe a classe, para itens privados
	*/
	classe_item: function( bool_verificar, classe_livre, classe_privado ){
		
		if( bool_verificar ){
			return classe_livre;
		}else{
			return classe_privado;
		}
	},
	
	
	// exibe / esconde o popup carregando
	carregando: function( status ){
		setTimeout(function(){
			if( status == true ){
			    $.mobile.loading( 'show', {
			      text: "Carregando",
			      textVisible: true,
			      theme: "a",
			      textonly: false,
			      html: ""
			    });
			}else{
				$.mobile.loading( 'hide' );
			}
		}, 0);
	}
};





$(function(){
	// inicia a execução
	sms.iniciar();
	
	
	$( '.categoria_lista a' ).live( 'click', function(){
		
		// seleciona as mensagens da categoria clicada
		sms.get_mensagens( this.id, 'refresh' );
		
		// executar o vibrar
		sms.vibrar();
		sms.beep();
		
		$( '#painel_categorias' ).panel( "close" );
	});
	
	
	// quando clicar (tap) e segurar uma mensagem
	$( ".mensagens_listadas" ).live( "taphold", tapholdHandler );
	
	/* 
	Handler para auxiliar na manipulação do evento
	sem ele não dá pra aplicar a ação
	*/
	function tapholdHandler( event ){
		sms.compartilhar( event.currentTarget.id );
		
		sms.beep();
		
		console.log( "tapholdHandler ativado");
	}
	
	
	/*
	Depois de clicar em uma opção de compartilhamento 
	devemos fechar o menu de opções para permitir 
	selecionar outra mensagem
	*/
	$( '.redes_sociais_botao' ).live( 'click', function(){
		$( '#popup_compartilhar' ).popup( 'close' );
	});
	
});



document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	// apenas para iterar o evento deviceready
}

// apenas para o momento em que a aplicação estiver pronta
document.addEventListener("deviceReady", deviceReady, false);

var gaPlugin;
function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(successHandler, errorHandler, "UA-12345678-1", 10);
}