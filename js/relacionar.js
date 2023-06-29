  
//var txt= '{"data":[{"id":"1","pregunta":"El caballo de napoleón es de color negro","respuesta":"Verdadero"},{"id":"2","pregunta":"El cabello de napoleón es de color blanco","respuesta":"Falso"},{"id":"3","pregunta":"¿Cual es el color del caballo blanco de napoleón?","respuesta":"Verdadero"}]}';

  //var txt = '{"data":[{"ID":"1","pregunta":"¿De que color es el cielo?","texto":"el cielo es azul porque dios es niño","palabra":"Azul","imagen":"imagen/cielo.jpg","Colorp":"#41E634","Colors":"#B1FAB5"},{"ID":"2","pregunta":"¿Cual es la bandera de MExico?","texto":"Tricolor de la seleccion","palabra":"Tricolor","imagen":"imagen/mexico.jpg","Colorp":"#F54231","Colors":"#F57D31"},{"ID":"3","pregunta":"¿Cual es un animal que ladra?","texto":"el mejor amigo del hombre un perro","palabra":"perro","imagen":"imagen/perro.jpg","Colorp":"#4A73F5","Colors":"#44B4F5"}]}';


 var idprimero=""; 
 var auxpintarprimero = 0;





  function inicio()
  {

  	document.getElementById('aux_color1').value='';
  	document.getElementById('aux_color2').value='';
	document.getElementById('promedio').innerHTML="";
	mostrar_preguntas(txt);
	mostrar_respuestas(txt);





  }	

  function numero_al_azar(minimo,maximo) 
{ 
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo); 
}

 function mostrar_preguntas(txt)
 {
		    var respuesta="";
		    var azar=0;
   			var array=[];
    
			var jsonData = JSON.parse(txt);


			for(var i = 0; i < jsonData.data.length; i++)
			{
			      array[i]=i;
			}


			for (var i = 0; i < jsonData.data.length; i++) {
			
			 var counter;
       	     var cadena;
       	     var respuestacad;
       	     var color_primario;
       	     var color_secundario;

       	     do
       	     {
       	     	var numeroAleatorio = numero_al_azar(0,(jsonData.data.length-1));
       	     	var item = array[numeroAleatorio];
       	     	
				if(item!="X")
				{
					counter = jsonData.data[item];
					cadena =counter.pregunta;
					respuestacad = counter.ID;
					color_primario = counter.Colorp;
					color_secundario = counter.Colors
					array[item]="X";
				}
       	     }while(item=="X");

	     
			     
			     
				respuesta = respuesta + "<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-3 col-sm-3'><p class='no_pregunta' id='lap"+i+"'>"+(i+1)+"</p></div><div class='col-lg-9 col-md-9 col-sm-9'><div class='col-lg-12 col-md-12 col-sm-12'><p id='p"+i+"' class='noresp'></p></div><div  id='"+i+"' class='col-lg-12 col-md-12 col-sm-12 noselect' onmousemove='cambiacolor(this);' onmouseout='salircolor(this);' onmousedown='cambiacolorclick(this);'  ><center></center><p>"+cadena+"</p></br><center><input type='hidden' id='pr"+i+"' value='"+respuestacad+"'/></center><input type='hidden' id='colorp"+i+"' value='"+color_primario+"'/><input type='hidden' id='colors"+i+"' value='"+color_secundario+"'/></div></div></div><br>";
			

			}


			respuesta = respuesta+"";

		    document.getElementById('preguntas').innerHTML = respuesta;
 }


	function mostrar_respuestas(txt)
	{
		var respuesta="";
		var azar=0;
   		var array=[];
   		var jsonData = JSON.parse(txt);

   		for(var i = 0; i < jsonData.data.length; i++)
	    {
	        array[i]=i;
	    }



		
		for (var i = 0; i < jsonData.data.length; i++) {

			var counter;
       		var cadena;

       		do
       		{
				var numeroAleatorio = numero_al_azar(0,(jsonData.data.length-1));
				var item = array[numeroAleatorio];
				if(item!="X")
              	{
                  counter= jsonData.data[item];
                  array[item]="X";
                  //cadena=counter.respuesta;
              	}
              

       		}while(item=="X");

				var tipo = Math.floor(Math.random() * (3) + 1);
				
			    if(tipo==1)//texto
			    {
			    	cadena = counter.texto;
			    	var respuestacad = counter.ID;
			    	respuesta = respuesta + "<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-3 col-sm-3'><p class='no_pregunta' id='lar"+i+"'> </p></div><div class='col-lg-9 col-md-9 col-sm-9'><div class='col-lg-12 col-md-12 col-sm-12'><p></p></div><div class='col-lg-12 col-md-12 col-sm-12 noselect' id='v"+i+"' onmousemove='cambiacolorRes(this);' onmouseout='salircolorRes(this);' onmouseup='salircolorclickRes(this);'><center></center><center><p>"+cadena+"</p><input type='hidden' id='c"+i+"' value=''/><input type='hidden' id='r"+i+"' value='"+respuestacad+"'/></center></div></div></div><br>";

			    }
			    else if (tipo==2)//palabra
			    {
			    	cadena = counter.palabra;
			    	var respuestacad = counter.ID;
			    	respuesta = respuesta + "<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-3 col-sm-3'><p class='no_pregunta' id='lar"+i+"'> </p></div><div class='col-lg-9 col-md-9 col-sm-9'><div class='col-lg-12 col-md-12 col-sm-12'><p></p></div><div class='noselect' id='v"+i+"' onmousemove='cambiacolorRes(this);' onmouseout='salircolorRes(this);' onmouseup='salircolorclickRes(this);'><center></center><center><p>"+cadena+"</p><input type='hidden' id='c"+i+"' value=''/><input type='hidden' id='r"+i+"' value='"+respuestacad+"'/></center></div></div></div><br>";
			    }
			    else//imagen
			    {
					cadena = counter.imagen;
					var palabra = counter.palabra;
					var respuestacad = counter.ID;
					respuesta = respuesta+"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-3 col-sm-3'><p class='no_pregunta' id='lar"+i+"'> </p></div><div class='col-lg-9 col-md-9 col-sm-9'><div class='col-lg-12 col-md-12 col-sm-12'><p></p></div><div class='noselect' id='v"+i+"' onmousemove='cambiacolorRes(this);' onmouseout='salircolorRes(this);' onmouseup='salircolorclickRes(this);'><center><img src='"+cadena+"' alt='"+palabra+"' style='display: block; margin-left: auto; margin-right: auto; width: 50%; height:auto; max-height: 110px; '><input type='hidden' id='c"+i+"' value=''/><input type='hidden' id='r"+i+"' value='"+respuestacad+"'</center></div></div></div><br>";
			    }


			
			}

			respuesta = respuesta+"";

		    document.getElementById('respuestas').innerHTML = respuesta;

	}


  function cambiacolorclick(x)
  {
  	auxpintarprimero =1;
  	document.getElementById('aux_respuesta').value = "";
  	document.getElementById('aux_pregunta').value="";
    var id = x.id;
    idprimero = id;
    var color1 = document.getElementById('colorp'+id).value;
    var color2= document.getElementById('colors'+id).value;
    document.getElementById(id).style.backgroundColor = color1;
    document.getElementById('aux_color1').value=color1;
    document.getElementById('aux_color2').value=color2;

    var respues = document.getElementById('pr'+id).value; 
    document.getElementById('aux_respuesta').value = respues;
    var numpre = parseInt(id);
    document.getElementById('aux_pregunta').value=""+(numpre+1);

  }

  function salircolorclik(x)
  {
  	document.getElementById('aux_respuesta').value = "";
  }

  function cambiacolor(x)
  {
  	 var id = x.id;
  	 var c = document.getElementById('pr'+id).value;
  	 if(c!="")
  	 {
  	 	if(auxpintarprimero==0)
  	 	{
  	 		var color2 = document.getElementById('colors'+id).value;
			document.getElementById(id).style.backgroundColor = color2; 	
  	 	}
  
  	 }

  	


  }

  function salircolor(x)
  {
  	 var id = x.id;
  	 var c = document.getElementById('aux_respuesta').value;
  	 var f = document.getElementById('pr'+id).value; 
  	 
 
  	 	if(c=="" && f!=""){
  		document.getElementById(id).style.backgroundColor = "azure";
  	  	}
  	 
  	 
  }


  function cambiacolorRes(x)
  {
  	var id = x.id;
  	var id1 = x.id.substring(1,2);

	 var res = document.getElementById('c'+id1).value;
  	if(res=="")
  	{
  		var color2 = document.getElementById('aux_color2').value;
	  	document.getElementById(id).style.backgroundColor = color2;
  	}
  	else
  	{

  	}
  }

  function salircolorRes(x)
  {
	 var id = x.id;
	 var id1 = x.id.substring(1,2);

	 var res = document.getElementById('c'+id1).value;
	 if(res=="")
	 {
	  	 document.getElementById(id).style.backgroundColor = "azure";

	 }
  }

  function salircolorclickRes(x)
  {

  	var id = x.id;
  	var id1 = x.id.substring(1,2);
  	 var resp = document.getElementById('aux_pregunta').value;

  	
	  	var respues = document.getElementById('aux_respuesta').value;
	  	document.getElementById('aux_respuesta').value = "";

	  	//cambiar color
	     var color1 = document.getElementById('aux_color1').value;	
	  	 document.getElementById(id).style.backgroundColor = color1;
	     
	     //cambiar respuesta por el numero de respuesta
	    
	    if(resp!="")
	    {
	      document.getElementById('lar'+id1).innerHTML = resp;
	  	} 
	     //document.getElementById('aux_pregunta').value="Pregunta "+(id+1);
	  	 
	  	  
	  	 document.getElementById('pr'+idprimero).value = "";
	    document.getElementById('c'+id1).value = respues;
	    document.getElementById('aux_pregunta').value='';
	    idprimero="";
	    auxpintarprimero=0;

	    document.getElementById('aux_color1').value=''
	    document.getElementById('aux_color2').value=''
  }


 function calcular()
 {

 	$("#myModal").modal();

 	var preguntas = 0;
    var respuesta = 0;
    var promedio = 0;

    


 	// var txt = '{"data":[{"ID":"1","pregunta":"¿De que color es el cielo?","texto":"el cielo es azul porque dios es niño","palabra":"Azul","imagen":"imagen/cielo.jpg"},{"ID":"2","pregunta":"¿Cual es la bandera de MExico?","texto":"Tricolor de la seleccion","palabra":"Tricolor","imagen":"imagen/mexico.jpg"},{"ID":"3","pregunta":"¿Cual es un animal que ladra?","texto":"el mejor amigo del hombre un perro","palabra":"perro","imagen":"imagen/perro.jpg"}]}';

 	 var jsonData = JSON.parse(txt);


 	 	for (var i = 0; i < jsonData.data.length; i++) {
	    var counter = jsonData.data[i];
	    //console.log(counter.counter_name);
	    //alert(counter.pregunta);
        var texto = document.getElementById('c'+i);
       
        preguntas= preguntas+1;
        var cadena = document.getElementById('r'+i);


	    //alert(texto.value+"=="+cadena);

	    if(texto.value==cadena.value)
	    {
             respuesta=respuesta+1;
             document.getElementById('p'+i).style.color = "#87d36c";
             document.getElementById('p'+i).innerHTML = "Respuesta correcta¡¡";
	    }
	    else
	    {
	    	respuesta=respuesta+0;
        document.getElementById('p'+i).style.color = "#7164f7";
        document.getElementById('p'+i).innerHTML = "La respuesta incorrecta¡¡";
	    }
	}
	
    promedio = (respuesta*100)/preguntas;

     document.getElementById('promedio').innerHTML = "Promedio es: "+promedio+" <br> No. preguntas: "+preguntas+" <br> No. respuesta correctas: "+respuesta;

     if(promedio<10)
     {
      document.getElementById('procentaje').src='assets/porcentaje/0.png';
      

     }
     else if(promedio<20 && promedio>=10)
     {
      document.getElementById('procentaje').src='assets/porcentaje/10.png';
     }

     else if(promedio<30 && promedio>=20)
     {
      document.getElementById('procentaje').src='assets/porcentaje/20.png';
  
     }

     else if(promedio<40 && promedio>=30)
     {
      document.getElementById('procentaje').src='assets/porcentaje/30.png'; 
     }

     else if(promedio<50 && promedio>=40)
     {
      document.getElementById('procentaje').src='assets/porcentaje/40.png'; 
     }

     else if(promedio<60 && promedio>=50)
     {
      document.getElementById('procentaje').src='assets/porcentaje/50.png'; 

     }
     else if(promedio<70 && promedio>=60)
     {
      document.getElementById('procentaje').src='assets/porcentaje/60.png'; 

     }
     else if(promedio<80  && promedio>=70)
     {
      document.getElementById('procentaje').src='assets/porcentaje/70.png'; 

     }
     else if(promedio<90  && promedio>=80)
     {
      document.getElementById('procentaje').src='assets/porcentaje/80.png'; 

     }
     else if(promedio<100  && promedio>=90)
     {
      document.getElementById('procentaje').src='assets/porcentaje/90.png'; 

     }
     else if(promedio>=100)
     {
      document.getElementById('procentaje').src='assets/porcentaje/100.png';  

     }
     else
     {

     }



 }
