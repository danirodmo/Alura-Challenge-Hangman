function agregarPalabra(){
	var palabraDigitada=document.querySelector("#input-nueva-palabra" ).value.toUpperCase();
	document.querySelector("#nueva-palabra").value=palabraDigitada;
	palabras.push(palabraDigitada);
	document.querySelector("#input-nueva-palabra").value="";
	document.querySelector("#input-nueva-palabra").focus();
	console.log(palabras);
}

function sortearPalabra(){
	return palabras[Math.round(Math.random()*(palabras.length-1))];
}

var mostrarPalabra="";
var letrasDigitadas="";
var errores=0;
var palabraElegida="";

function iniciarJuego(){
	errores=0;
	palabraElegida=sortearPalabra();
	mostrarPalabra="";
	letrasDigitadas="";
	console.log(palabras);
	console.log(palabraElegida);
	palabraSeparada=palabraElegida.split("");
	console.log(palabraSeparada);
	document.addEventListener("keyup",ingresarLetra);
	if(mostrarPalabra==palabraElegida){
		document.removeEventListener("keyup",ingresarLetra);
	}
	ahorcado();
	
}

function ingresarLetra(pulsar){
	if(pulsar.keyCode >= 65 && pulsar.keyCode <= 90 || pulsar.keyCode==165) {
		var letra="";
		letra=String.fromCharCode(pulsar.keyCode);
		if(letrasDigitadas.includes(letra)){
			alert("Letra ya ingresada intente con otra");
		}else{
			letrasDigitadas+=letra;
			if(palabraElegida.indexOf(letra)<0){													
				errores++;
				console.log(errores);
			}
			
			mostrarPalabra="";
			for (let x of palabraElegida) {
				console.log("Probando letra "+x);
				if(letrasDigitadas.includes(x)){ 
					mostrarPalabra+=x;
					
				}else{
					mostrarPalabra+=" _ ";
				}
				console.log("Palabra final a mostrar "+mostrarPalabra);		
				
				dibujarLetra();
				
				letrasInsertadas();
				
				if(mostrarPalabra==palabraElegida){
					console.log("Felicidades, ganaste");
					document.removeEventListener("keyup",ingresarLetra);
				}
			}
		}
	}else{
		alert("Por favor ingrese una letra");
		
	}
	

	
	console.log(letrasDigitadas);
	ahorcado();
	
}
 



