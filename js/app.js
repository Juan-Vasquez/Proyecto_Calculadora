//Variables Globales
var num1 = 0;
var num2 = 0;
var signo = " ";

//Objeto Calculadora
var Calculadora = {
	    init: function(){

      if(signo == "+"){
      	resetear();
      	Pantalla.textContent = this.sumar();
      }
      else if(signo == "-"){
      	resetear();
      	Pantalla.textContent = this.restar();
      }
      else if(signo == "*"){
      	resetear();
      	Pantalla.textContent = this.multiplicar();
      }
      else if(signo == "/"){
      	resetear();
      	Pantalla.textContent = this.dividir();
      }
    },

    sumar: function(){
    	var resultado = parseFloat(num1) + parseFloat(num2);
    	return resultado;
    },

    restar: function(){
    	var resultado = parseFloat(num1) - parseFloat(num2);
    	return resultado;
    },

    multiplicar: function(){
    	var resultado = parseFloat(num1) * parseFloat(num2);
    	return resultado;
    },

    dividir: function(){
    	var resultado = parseFloat(num1) / parseFloat(num2);
    }

}

//variable hacia la pantalla de la calculadora y funciones------------------------
var Pantalla = document.getElementById("display");

//Boton 7------------------------------------------------------
var siete = document.getElementById("7");
siete.addEventListener('mousedown',function(){
	siete.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"7"
	}else{
		Pantalla.textContent = Pantalla.textContent + "7"
	}
})

siete.addEventListener('mouseup',function(){
	siete.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------
//Boton 8-------------------------------------------------------------
var ocho = document.getElementById("8");
ocho.addEventListener('mousedown',function(){
	ocho.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent== "0"){
		Pantalla.textContent = +"8"
	}else{
		Pantalla.textContent = Pantalla.textContent + "8"
	}
})

ocho.addEventListener('mouseup',function(){
	ocho.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------
//Boton 9-------------------------------------------------------------
var nueve = document.getElementById("9");
nueve.addEventListener('mousedown',function(){
	nueve.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"9"
	}else{
		Pantalla.textContent = Pantalla.textContent + "9"
	}

})

nueve.addEventListener('mouseup',function(){
	nueve.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------
//Boton 4-------------------------------------------------------------
var cuatro = document.getElementById("4");
cuatro.addEventListener('mousedown',function(){
	cuatro.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"4"
	}else{
		Pantalla.textContent = Pantalla.textContent + "4"
	}
	
})

cuatro.addEventListener('mouseup',function(){
	cuatro.setAttribute("style", "transform: scale(1,1)")
})

//--------------------------------------------------------------------
//Boton 5-------------------------------------------------------------
var cinco = document.getElementById("5");
cinco.addEventListener('mousedown',function(){
	cinco.setAttribute("style","transform: scale(0.90,0.90)")

		if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"5"
	}else{
		Pantalla.textContent = Pantalla.textContent + "5"
	}

})

cinco.addEventListener('mouseup',function(){
	cinco.setAttribute("style","transform: scale(1,1)")
})

//----------------------------------------------------------------------
//Boton 6---------------------------------------------------------------
var seis = document.getElementById("6");
seis.addEventListener('mousedown',function(){
	seis.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"6"
	}else{
		Pantalla.textContent = Pantalla.textContent + "6"
	}
})

seis.addEventListener('mouseup',function(){
	seis.setAttribute("style","transform: scale(1,1)")
})

//-----------------------------------------------------------------------
//Boton 1----------------------------------------------------------------
var uno = document.getElementById("1");
	uno.addEventListener('mousedown',function(){
	uno.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"1"
	}else{
		Pantalla.textContent = Pantalla.textContent + "1"
	}
})

uno.addEventListener('mouseup',function(){
	uno.setAttribute("style","transform: scale(1,1)")
})

//-----------------------------------------------------------------------
//Boton 2----------------------------------------------------------------
var dos = document.getElementById("2");
dos.addEventListener('mousedown',function(){
	dos.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"2"
	}else{
		Pantalla.textContent = Pantalla.textContent +"2"
	}
})

dos.addEventListener('mouseup',function(){
	dos.setAttribute("style","transform: scale(1,1)")
})

//-----------------------------------------------------------------------
//Boton 3----------------------------------------------------------------
var tres = document.getElementById("3");
tres.addEventListener('mousedown',function(){
	tres.setAttribute("style","transform: scale(0.90,0.90)")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"3"
	}else{
		Pantalla.textContent = Pantalla.textContent +"3"
	}

})

tres.addEventListener('mouseup',function(){
	tres.setAttribute("style","trasform: scale(1,1)")
})


//-----------------------------------------------------------------------
//Boton 0----------------------------------------------------------------
var cero = document.getElementById("0");
cero.addEventListener('mousedown',function(){
	cero.setAttribute("style","transform: scale(0.90,0.90")

	if(Pantalla.textContent == "0"){
		Pantalla.textContent = +"0"
	}else{
		Pantalla.textContent = Pantalla.textContent + "0"
	}
})

cero.addEventListener('mouseup',function(){
	cero.setAttribute("style","transform: scale(1,1)")
})

//------------------------------------------------------------------------
//Boton punto-------------------------------------------------------------
var Punto = document.getElementById("punto");
Punto.addEventListener('mousedown',function(){
	Punto.setAttribute("style","transform: scale(0.90,0.90)")


})

Punto.addEventListener('mouseup',function(){
	Punto.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------------

//Boton de multiplicacion --------------------------------------------------
var multi = document.getElementById("por");
multi.addEventListener('mousedown',function(){
	multi.setAttribute("style","transform: scale(0.90,0.90)")

	num1 = Pantalla.textContent;
	signo = "*";
	limpiar();


})

multi.addEventListener('mouseup',function(){
	multi.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------------
//Boton de Restar ----------------------------------------------------------
var restar = document.getElementById("menos");
restar.addEventListener('mousedown',function(){
	restar.setAttribute("style","transform: scale(0.90,0.90)")

	num1 = Pantalla.textContent;
	signo = "-";
	limpiar();

})

restar.addEventListener('mouseup',function(){
	restar.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------------
//Boton de sumar -----------------------------------------------------------
var sumar = document.getElementById("mas");
sumar.addEventListener('mousedown',function(){
	sumar.setAttribute("style","transform: scale(0.90,0.90)")

	num1 = Pantalla.textContent;
	signo = "+";
	limpiar();

})

sumar.addEventListener('mouseup',function(){
	sumar.setAttribute("style","transform: scale(1,1)")
})

//---------------------------------------
//Boton on..----------------------------------------------
var On = document.getElementById("on");
On.addEventListener('mousedown',function(){
	On.setAttribute("style","transform: scale(0.90,0.90)")

	resetear(); // funcion resetear

})

On.addEventListener('mouseup',function(){
	On.setAttribute("style","transform: scale(1,1)")
})

//---------------------------------------------------------
//Boton +/-  ----------------------------------------------
var Boton = document.getElementById("sign");
Boton.addEventListener('mousedown',function(){
	Boton.setAttribute("style","transform: scale(0.90,0.90)")
})

Boton.addEventListener('mouseup',function(){
	Boton.setAttribute("style","transform: scale(1,1)")
})

//---------------------------------------------------------
//Boton Raiz ----------------------------------------------
var Raiz = document.getElementById("raiz");
Raiz.addEventListener('mousedown',function(){
	Raiz.setAttribute("style","transform: scale(0.90,0.90")
})

Raiz.addEventListener('mouseup',function(){
	Raiz.setAttribute("style","transform: scale(1,1)")
})
//---------------------------------------------------------
//Boton dividir -------------------------------------------
var Dividir = document.getElementById("dividido");
Dividir.addEventListener('mousedown',function(){
	Dividir.setAttribute("style","transform: scale(0.90,0.90)")

	num1 = Pantalla.textContent;
	signo = "/";
	limpiar();

})

Dividir.addEventListener('mouseup',function(){
	Dividir.setAttribute("style","transform: scale(1,1)")
})
//-------------------------------------------------------------
//Boton Igual --------------------------------------------------------------
var igual = document.getElementById("igual");
igual.addEventListener('mousedown',function(){
	igual.setAttribute("style","transform: scale(0.90,0.90)")
	
	num2 = Pantalla.textContent;
	Calculadora.init();

})

igual.addEventListener('mouseup',function(){
	igual.setAttribute("style","transform: scale(1,1)")
})

//--------------------------------------------------------------------------



//Funcion limpiar pantalla...
function limpiar(){
	Pantalla.textContent = "";
}

function resetear(){
	Pantalla.textContent = 0;
	operaciona = 0;
	operacionb = 0;
	signo = " ";
}