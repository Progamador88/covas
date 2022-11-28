var canvasWidth=screen.width-70;
var canvasHeight=screen.height-300;
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById('myCanvas');
if (screen.width < 992 ){
   canvas.width=canvasWidth;
   canvas.height=canvasHeight;
   document.body.style.overflow="hidden";
}
    ctx = canvas.getContext("2d");
    canvas.addEventListener("touchstart", myTouch);
    var color="black";
    var widthOfLine =2
    function myTouch(e)
    {
        //Início da Atividade Adicional
        //color = document.getElementById("color").value;
       // widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", touchMove);
    function touchMove(e)
    {
         currentPositionOfMouseX = e.touches[0].clientX - canvas.offsetLeft;
         currentPositionOfMouseY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }

