console.log("Inicio");
col=["red","blue","brown","green","yellow","orange","purple","black"];
var jugador=0;

var x=3
var nJugadores=2
var tablero=document.getElementById("tablero");      


function dimensionesTablero(){
    tablero.style.color="";
    tablero.style.backgroundColor=""; 
    console.log("entramos");
    x= document.getElementById("dimension").value;
    nJugadores=document.getElementById("jugadores").value;
    
    jugador=0;

    console.log("Las dimensiones del tablero son : "+x+"*"+x);
    console.log("Número de jugadores: "+nJugadores);
    console.log(parseInt(nJugadores)>=parseInt(x));
    
    if(parseInt(nJugadores)>=parseInt(x)){
      tablero.innerHTML= "Error: El número de jugadores tiene que ser inferior que las dimensiones del tablero";
      tablero.style.backgroundColor="white";
      tablero.style.color="red";
    console.log("entramos en el mensaje de alerta");
    }   
    else if(parseInt(x)<3 && parseInt(x)!=null && parseInt(x)!=''){
        tablero.innerHTML="Error: El número tiene que ser mayor o igual que 3!";
        tablero.style.backgroundColor="white";
        tablero.style.color="red";
        
     
      
    }else if(parseInt(x)>12 && parseInt(x)!=null && parseInt(x)!=''){
        tablero.innerHTML="Error: El número tiene que ser menor o igual que 12!";        
        tablero.style.backgroundColor="red";
        tablero.style.color="white";
          
    }else if(x.length===0){
        tablero.innerHTML="Por favor, introduce un número!";
        tablero.style.backgroundColor="white";
        tablero.style.color="red";
        
    }else{
        var tablerotexto="";

        
        for ( let y=0; y<x; y++) {
            tablerotexto+='<div class="row" id="'+y+'">';
            for (y2=0; y2<x; y2++){
              var columnas=12/x;
                 tablerotexto+=`<div class="tab" id="`+y+""+y2+`" onclick="dibujar(`+y+`,`+y2+`)"></div>`;
                
            }

            tablerotexto+='</div>';
            console.log("dibujar");
           
              
           
              
              
              
           console.log("hey");
        }
                     
        tablero.innerHTML=tablerotexto;
        let dim = 100 / x ;
        let dimS = dim +"%";
        var box = $(".tab");
        box.css("width", dimS);
        console.log(tablerotexto);
        updateSize();
            
    }
        
}



function dibujar(y,y2){
              
              var color=""
              color=document.getElementById(""+y+""+y2+"").style.backgroundColor;
              console.log(color);
              jugadorAnterior=col[jugador]
              
              if(color==""){
                console.log("a dibujar");
                document.getElementById(""+y+""+y2+"").style.backgroundColor=col[jugador];
                
                ganador(y,y2,col[jugador]);   
                
                
                if(jugador==document.getElementById("jugadores").value-1){
                  jugador=0;
                }else{
                  jugador++;
                  }
                  
              }
             
              else{
                console.log("error");
               
              }
              
              
              
                
              console.log("nJugadores: "+nJugadores);      
              } 
            


function ganador(y,y2,colorJugador){
             
              Y0=[[-1,0],[0,-1],[-1,-1],[-1,1],[-2,-2],[-2,0],[-2,2],[0,2],[2,2],[2,0],[2,-2],[0,-2]];
              YY=[[1,0],[0,1],[1,1],[1,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
              
              
            
              console.log("color Jugador: "+colorJugador);
              
              
              for(let i=0; i<Y0.length; i++){
                colorY0="";
                colorYY="";
                console.log(parseInt(y+Y0[i][0])+""+parseInt(y2+Y0[i][1]));
                if (document.getElementById(parseInt(y+Y0[i][0])+""+parseInt(y2+Y0[i][1]))){
                  colorY0=document.getElementById(""+parseInt(y+Y0[i][0])+""+parseInt(y2+Y0[i][1])).style.backgroundColor;
                }
                console.log("colorY0: "+colorY0);
                console.log(parseInt(y+YY[i][0])+""+parseInt(y2+YY[i][1]));
                if(document.getElementById(parseInt(y+YY[i][0])+""+parseInt(y2+YY[i][1]))){
                  colorYY=document.getElementById(""+parseInt(y+YY[i][0])+""+parseInt(y2+YY[i][1])+"").style.backgroundColor;
                }
                console.log("color YY:"+colorYY);
                c0=colorY0;
                c1=colorYY;
                if (c0==colorJugador && c1==colorJugador){
                  console.log("Ganador");
                  tablero.innerHTML="Ganó el jugador: "+colorJugador;
                  tablero.style.color="white";
                  tablero.style.backgroundColor=col[jugador];

                }
                }
              
                

              
              
}              



  


                
              

        
         
  

function updateSize(){
    var box = $(".tab");
    box.css("height", box.width());
}
    
$( window ).resize(updateSize);
$(document).ready(function(){
    updateSize();
})










console.log("Final")

