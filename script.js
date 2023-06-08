let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 243;
let y = 170; 
let dy = 1;
let dx =1;

//pelota x y y
// 10 y 110

//Cordenadas de la raqueta derecha
let raquetX = 470;
let raquetY = 110;

//cordenadas de la raqueta iquierda
let raquet2X = 10;
let raquet2Y = 110;


let downPressed = false;
let upPressed = false;

let downPressed2 = false;
let upPressed2 = false;


function drawText(){

    ctx.fillStyle="Red";
    ctx.fillText("Player 1:  40",0,10);
    ctx.fillText("Player 2:  40",420,10);

}

//Eventos de mobimiento de raquetas callbacks funsion como parametro de otra funcion derecha

document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);


function keyDownHandler(e){
    //alert(e.keyCode);
    if(e.keyCode == 40)
    {
        downPressed = true;
    }
    else if(e.keyCode == 38){
        upPressed = true;
    }

    if(e.keyCode == 87)
    {
        downPressed2 = true;
    }
    else if(e.keyCode == 83){
        upPressed2 = true;
    }
}

function keyUpHandler(e){
    //alert(e.keyCode);
    if(e.keyCode == 40)
    {
        downPressed = false;
    }
    else if(e.keyCode == 38){
        upPressed = false;
    }
    if(e.keyCode == 87)
    {
        downPressed2 = false;
    }
    else if(e.keyCode == 83){
        upPressed2 = false;
    }
}







function drawBall()
        {
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI*2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          
           
        }

function drawraquet(){

            //Raqueta izquierda
            ctx.beginPath();
            ctx.rect(raquet2X,raquet2Y,10,60);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();

            //segunda raqueta derecha
            ctx.beginPath();
            ctx.rect(raquetX,raquetY,10,60);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        
            
            
        }  
function colission(){

    let distancex = (raquetX) - x;
            if(distancex < 0){
                distancex = -distancex;
            }
            let distancey = raquetY - y;
            if(distancex < 10 && distancey < 10){
                dx = -dx;
            }
            //colicion con raqueta izquierda
            let distancex2 = (raquet2X) - x;
            if(distancex2 < 0){
                distancex2 = -distancex2;
            }
            let distancey2 = raquet2Y - y;
            if(distancex2 < 10 && distancey2 < 10  ){
                dx = -dx;
            }
    
  

    

}

        function draw(){
            
            ctx.clearRect(0, 0, 480, 320);
            drawBall();
            drawraquet();
            colission();
            drawText();

         
            if(y >= 310)
            {
                
                dy = dy *(-1);


            }

            if(y <= 10)
            {
            
                dy = dy *(-1);

            }

    
            x = x +dx;
            y = y + dy;

            //Teclas Up y Down derecha
            if(downPressed == true)
            {
                raquetY++
            }
            if(upPressed == true)
            {
                raquetY--
            }

            //Teclas Up y Down izquierda
            if(downPressed2 == true)
            {
                raquet2Y--
            }
            if(upPressed2 == true)
            {
                raquet2Y++
            }
        
        } 
        
        


        
function aumentar()
{
    let contador = 0;
    if(contador = 1)
    {
    dy++;
}
}

 setInterval(draw, 10);