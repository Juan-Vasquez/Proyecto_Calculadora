//Objeto Calculadora
var Calculadora = (function(num1, num2){

	var resultado = 0

	function actualizarResulatdo(nuevoResultado){
		resultado = nuevoResultado
	}

	return {
		sumar: function(){
			var resultado = num1 + num2
			nuevoResultado(resultado)
		},
		restar: function(){
			var resultado = num1 - num2
			nuevoResultado(resultado)
		},
		multiplicar: function(){
			var resultado = num1 * num2
			nuevoResultado(resultado)
		},
		dividir: function(){
			var resultado = num1 / num2
			nuevoResultado(resultado)
		},
		resultado: function(){
			return resultado
		}
	}
})

//Animaciones a Botones------------------------
var Pantalla = document.getElementById("display");

//Boton on..
var On = document.getElementById("on");
On.addEventListener('mousedown',function(){
	On.setAttribute("style","transform: scale(0.90,0.90)")
})

On.addEventListener('mouseout',function(){
	On.setAttribute("style","transform: scale(1,1)")
})

function reset(){
	Pantalla.textContent = 0
}
On.onclick = reset;
//Boton +/-
var boton = document.getElementById("sign");
boton.addEventListener('mousedown',function(){
	boton.setAttribute("style","transform: scale(0.90,0.90)")
})

boton.addEventListener('mouseout',function(){
	boton.setAttribute("style","transform: scale(1,1)")
})

//Boton Raiz
var Raiz = document.getElementById("raiz");
Raiz.addEventListener('mousedown',function(){
	Raiz.setAttribute("style","transform: scale(0.90,0.90")
})

Raiz.addEventListener('mouseout',function(){
	Raiz.setAttribute("style","transform: scale(1,1)")
})

//Boton dividir
var Dividir = document.getElementById("dividido");
Dividir.addEventListener('mousedown',function(){
	Dividir.setAttribute("style","transform: scale(0.90,0.90)")
})

Dividir.addEventListener('mouseout',function(){
	Dividir.setAttribute("style","transform: scale(1,1)")
})

//Boton 7------------------------------------------------------------
var siete = document.getElementById("7");
siete.addEventListener('mousedown',function(){
	siete.setAttribute("style","transform: scale(0.90,0.90)")
})

siete.addEventListener('mouseout',function(){
	siete.setAttribute("style","transform: scale(1,1)")
})

siete.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 7
	}else{
		Pantalla.textContent += 7
	}
	
}
//--------------------------------------------------------------------
//Boton 8-------------------------------------------------------------
var ocho = document.getElementById("8");
ocho.addEventListener('mousedown',function(){
	ocho.setAttribute("style","transform: scale(0.90,0.90)")
})

ocho.addEventListener('mouseout',function(){
	ocho.setAttribute("style","transform: scale(1,1)")
})

ocho.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 8
	}else{
		Pantalla.textContent += 8
	}
}
//--------------------------------------------------------------------
//Boton 9-------------------------------------------------------------
var nueve = document.getElementById("9");
nueve.addEventListener('mousedown',function(){
	nueve.setAttribute("style","transform: scale(0.90,0.90)")
})

nueve.addEventListener('mouseout',function(){
	nueve.setAttribute("style","transform: scale(1,1)")
})

nueve.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 9
	}else{
		Pantalla.textContent += 9
	}
}
//--------------------------------------------------------------------
//Boton 4-------------------------------------------------------------
var cuatro = document.getElementById("4");
cuatro.addEventListener('mousedown',function(){
	cuatro.setAttribute("style","transform: scale(0.90,0.90)")
})

cuatro.addEventListener('mouseout',function(){
	cuatro.setAttribute("style", "transform: scale(1,1)")
})

cuatro.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 4
	}else{
		Pantalla.textContent += 4
	}
}
//--------------------------------------------------------------------
//Boton 5-------------------------------------------------------------
var cinco = document.getElementById("5");
cinco.addEventListener('mousedown',function(){
	cinco.setAttribute("style","transform: scale(0.90,0.90)")
})

cinco.addEventListener('mouseout',function(){
	cinco.setAttribute("style","transform: scale(1,1)")
})

cinco.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 5
	}else{
		Pantalla.textContent += 5
	}
}
//----------------------------------------------------------------------
//Boton 6---------------------------------------------------------------
var seis = document.getElementById("6");
seis.addEventListener('mousedown',function(){
	seis.setAttribute("style","transform: scale(0.90,0.90)")
})

seis.addEventListener('mouseout',function(){
	seis.setAttribute("style","transform: scale(1,1)")
})

seis.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 6
	}else{
		Pantalla.textContent += 6
	}
}

//-----------------------------------------------------------------------
//Boton 1----------------------------------------------------------------
var uno = document.getElementById("1");
	uno.addEventListener('mousedown',function(){
	uno.setAttribute("style","transform: scale(0.90,0.90)")
})

uno.addEventListener('mouseout',function(){
	uno.setAttribute("style","transform: scale(1,1)")
})

uno.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 1
	}else{
		Pantalla.textContent += 1
	}
}

//-----------------------------------------------------------------------
//Boton 2----------------------------------------------------------------
var dos = document.getElementById("2");
dos.addEventListener('mousedown',function(){
	dos.setAttribute("style","transform: scale(0.90,0.90)")
})

dos.addEventListener('mouseout',function(){
	dos.setAttribute("style","transform: scale(1,1)")
})

dos.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 2
	}else{
		Pantalla.textContent += 2
	}
}

//-----------------------------------------------------------------------
//Boton 3----------------------------------------------------------------
var tres = document.getElementById("3");
tres.addEventListener('mousedown',function(){
	tres.setAttribute("style","transform: scale(0.90,0.90)")
})

tres.addEventListener('mouseout',function(){
	tres.setAttribute("style","trasform: scale(1,1)")
})

tres.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 3
	}else{
		Pantalla.textContent += 3
	}
}

//-----------------------------------------------------------------------
//Boton 0----------------------------------------------------------------
var cero = document.getElementById("0");
cero.addEventListener('mousedown',function(){
	cero.setAttribute("style","transform: scale(0.90,0.90")
})

cero.addEventListener('mouseout',function(){
	cero.setAttribute("style","transform: scale(1,1)")
})

cero.onclick = function(){
	if(Pantalla.textContent == 0){
		Pantalla.textContent = 0
	}else{
		Pantalla.textContent += 0
	}
}

//------------------------------------------------------------------------
//Boton punto-------------------------------------------------------------
var Punto = document.getElementById("punto");
Punto.addEventListener('mousedown',function(){
	Punto.setAttribute("style","transform: scale(0.90,0.90)")
})

Punto.addEventListener('mouseout',function(){
	Punto.setAttribute("style","transform: scale(1,1)")
})

function puntoDecimal(){
	var numeros;
	
	for(var i=0; i<Pantalla.textContent.length; i++){
		numeros = Pantalla.textContent[i]
	}

	if(numeros == 0){
		Pantalla.innerHTML += "."
	}else if(numeros==1 || numeros==2 || numeros==3){
		Pantalla.innerHTML += "."
	}	
	else if(numeros == "."){}

}
Punto.onclick = puntoDecimal;

//--------------------------------------------------------------------------
//Boton Igual --------------------------------------------------------------
var igual = document.getElementById("igual");
igual.addEventListener('mousedown',function(){
	igual.setAttribute("style","transform: scale(0.90,0.90)")
})

igual.addEventListener('mouseout',function(){
	igual.setAttribute("style","transform: scale(1,1)")
})
//--------------------------------------------------------------------------
//Boton de multiplicacion --------------------------------------------------
var multi = document.getElementById("por");
multi.addEventListener('mousedown',function(){
	multi.setAttribute("style","transform: scale(0.90,0.90)")
})

multi.addEventListener('mouseout',function(){
	multi.setAttribute("style","transform: scale(1,1)")
})

multi.onclick = function(){
	Pantalla.textContent = " * "
}
//--------------------------------------------------------------------------
//Boton de Restar ----------------------------------------------------------
var restar = document.getElementById("menos");
restar.addEventListener('mousedown',function(){
	restar.setAttribute("style","transform: scale(0.90,0.90)")
})

restar.addEventListener('mouseout',function(){
	restar.setAttribute("style","transform: scale(1,1)")
})

restar.onclick = function(){
	Pantalla.textContent = " - "
}
//--------------------------------------------------------------------------
//Boton de sumar -----------------------------------------------------------
var sumar = document.getElementById("mas");
sumar.addEventListener('mousedown',function(){
	sumar.setAttribute("style","transform: scale(0.90,0.90)")
})

sumar.addEventListener('mouseout',function(){
	sumar.setAttribute("style","transform: scale(1,1)")
})

sumar.onclick = function(){
	Pantalla.textContent = " + "
}
//---------------------------------------

function limpiar(){
	Pantalla.textContent = ""
}