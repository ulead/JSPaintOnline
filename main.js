let drawSize= 1;
let drawColor = "black";

window.addEventListener('load' ,() =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    console.log("event");
    // resizing 
    canvas.height = 800;//window.innerHeight ;
    canvas.width = window.innerWidth /2;


   let painting = false ;


   // eventListeners

   function startPosition(e){
    painting = true ;
    draw(e);

   }

   function finishPosition(){
    painting =false ;
    ctx.beginPath();

   }

   function draw(e){
    if(!painting) return;
    ctx.lineWidth = drawSize ;
    ctx.lineCap="round";
    ctx.strokeStyle=drawColor;

    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
   
   }
   

   canvas.addEventListener('mousedown', startPosition);
   canvas.addEventListener('mouseup', finishPosition);
   canvas.addEventListener('mousemove',  draw);


});

document.querySelector("#colorpicker").addEventListener("input",event=>{
    var item = event.target;
    var color = item.value
    setColor(color);
});


document.querySelectorAll(".drawsize").forEach(element => {
    addEventListener("click",event =>{
        var clicked = event.target;
        var size = clicked.id;
        setSize(size);


    });
    
});


function setColor(colorRGB){
    drawColor = colorRGB ;

}
function setSize(dsize){
    drawSize = dsize ;

}

document.querySelector("#save").addEventListener("click",event=>{
    console.log("save");
    var image = canvas.toDataURL();
    // Create a link
    var aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = 'canvas_image.png';
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
});