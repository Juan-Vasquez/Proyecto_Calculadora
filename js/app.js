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
//Boton on..
var On = document.getElementById("on");
On.addEventListener('mousedown',function(){
	On.setAttribute("style","transform: scale(0.90,0.90)")
})

On.addEventListener('mouseout',function(){
	On.setAttribute("style","transform: scale(1,1)")
})

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

Dividir.addEvenetListener('mouseout',function(){
	Dividir.setAttribute("style","transform: scale(1,1)")
})

//Boton 7
var siete = document.getElementById("7");
siete.addEventListener('mousedown',function(){
	siete.setAttribute("style","transform: scale(0.90,0.90)")
})

siete.addEventListener('mouseout',function(){
	siete.setAttribute("style","transform: scale(1,1)")
})

//Boton 8
var ocho = document.getElementByid("8");
ocho.addEventListener('mousedown',function(){
	ocho.setAttribute("style","transform: scale(0.90,0.90)")
})

ocho.addEventListener('mouseout',function(){
	ocho.setAttribute("style","transform: scale(1,1)")
})

//Boton 9
var nueve = document.getElementById("8");
nueve.addEventListener('mousedown',function(){
	nueve.setAttribute("style","transform: scale(0.90,0.90)")
})

nueve.addEventListener('mouseout',function(){
	nueve.setAttribute("style","transform: scale(1,1)")
})

//Boton 4
var cuatro = document.getElementById("4");
cuatro.addEventListener('mousedown',function(){
	cuatro.setAttribute("style","transform: scale(0.90,0.90)")
})

cuatro.addEventListener('mouseout',function(){
	cuatro.setAttribute("style", "transform: scale(1,1)")
})

//Boton 5
var cinco = document.getElementById("5");
cinco.addEventListener('mousedown',function(){
	cinco.setAttribute("style","transform: scale(0.90,0.90)")
})

cinco.addEventListener('mouseout',function(){
	cinco.setAttribute("style","transform: scale(1,1)")
})

//Boton 6
var seis = document.getElementById("6");
seis.addEventListener('mousdown',function(){
	seis.setAttribute("style","transform: scale(0.90,0.90)")
})

seis.addEventListener('mouseout',function(){
	seis.setAttribute("style","transform: scale(1,1)")
})

//Boton 1
var uno = document.getElementById("1");
uno.addEventListener('mousedown',function(){
	uno.setAttribute("style","transform: scale(0.90,0.90)")
})

uno.addEventListener('mouseout',function(){
	uno.setAttribute("style","transform: scale(1,1)")
})

//Boton 2
var dos = document.getElementById("2");
dos.addEventListener('mousedown',function(){
	dos.setAttribute("style","transform: scale(0.90,0.90)")
})

dos.addEventListener('mouseout',function(){
	dos.setAttribute("style","transform: scale(1,1)")
})

//Boton 3
var tres = document.getElementById("3");
tres.addEventListener('mousedown',function(){
	tres.setAttribute("style","transform: scale(0.90,0.90)")
})

tres.addEventListener('mouseout',function(){
	tres.setAttribute("style","trasform: scale(1,1)")
})

//Boton 0
var cero = document.getElementById("0");
cero.addEventListener('mousedown',function(){
	cer.setAttribute("style","transform: scale(0.90,0.90")
})

cero.addEventListener('mouseout',function(){
	cero.setAttribute("style","transform: scale(1,1)")
})


//----------------------------------------
