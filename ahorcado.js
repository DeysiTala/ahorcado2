function imprimirHTML (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
  }
}


function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
  }
}


function obtienerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}

var hombre =  [        "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];

var palabra = obtienerPalabraSecreta ();
console.log(palabra);
imprimirMatriz(hombre);

function encuestar()
{
    for(var i=0; i<libreriaPalabras.length; i++)
    {
      //Preguntamos y guardamos la respuesta en rpta
      var rpta = prompt("Palabra"+ (i+1) +" de 4:\n"+QA[i][0]);
      //Ponemos rpta en minusculas para compararlas
      rpta = rpta.toLowerCase();

      if(rpta == libreriaPalabras[i][1]){
        aciertos++;//le suma 1 a sus aciertos
        correctas += libreriaPalabras[i][0]+"<br>";//guardamos las preguntas
      }
      else
        incorrectas += libreriaPalabras[i][0]+"<br>";//guardamos las preguntas
    }

    mostrarResultado();
}

function mostrarResultado()
{
  //Mostrar en el HTML las respuestas correctas e incorrectas
    divIntro.className = "hide";
    divRespuestas.className = "";

    if(aciertos == 4){

      divRespuestas.innerHTML += "<div class='alert alert-success'>Excelente!, lo hiciste perfecto</div>";
  }


function ingresarDatos() {
   //while (i<10){
     if(rpta == libreriaPalabras[i][1]){
        aciertos++;//le suma 1 a sus aciertos
        correctas += libreriaPalabras[i][0]+"<br>";//guardamos las preguntas
      }
      else{
        incorrectas += libreriaPalabras[i][0]+"<br>";//guardamos las preguntas
    }

    mostrarResultado();
}

   }


  
