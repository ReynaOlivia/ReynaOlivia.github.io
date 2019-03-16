$("#numero").change(function(){
	if(parseInt(this.value)<20){
		$('#numero').val(''); } //limpia el input

});
var x;
var buttons;
x = document.getElementById("numero").value; //obtiene el elemento que se pone en el input

function ingresar(){
	$( "#puls" ).empty();
	x = document.getElementById("numero").value; 
	for (var i = 1; i <= x; i++){
		buttons = $('<button id="numeros" class='+i+'>'+ i + '</button>') //crea botones dinamicamente, se va incrementando
		buttons.appendTo('#puls');
	}

}
function mult2(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%2==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult3(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%3==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult4(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%4==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult5(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%5==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult6(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%6==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult7(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%7==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult8(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%8==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function mult9(){
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB");
}
	var multiplos=[]; //declarando un arreglo vacio
	for (var i=1; i<=x; i++){  
		if (i%9==0) { 
			multiplos.push(i) }
	}
	multiplos.forEach(function(element){ 
		$("."+element+"").css("background-color", "Green");
	});
}

function limpiar(){
	$( "#puls" ).empty();
}

function numerosPrimos(){
	var multiplos=[];
	for (var i=1; i<=x; i++){  
		 $("."+i+"").css("background-color", "#58D4BB"); }
	var a = x;
	var b = 2;
	var numPrim = [];

	for (; b < a; b++){
		if(pri(b)){
			numPrim.push(b);
		}
	}

 function pri(numero){
	for(var i=2; i<numero; i++){
		if(numero%i===0){
			return false;
		}	
	} 
	return numero !==1;
 }
   

numPrim.forEach(function(element){
	$("."+element+"").css("background-color", "Green");
});
}