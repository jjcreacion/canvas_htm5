let nodes = [];
let text = [];
let paneles = [];
let objetoActual = null;

function drawNodes(ctx, nodes){
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        text[i] = 'Nodo('+ (i+1) + ') Coord X: ' + node.x + ' Coord Y: ' + node.y + '<br>';
       
        ctx.strokeStyle = '#FD2600';
        ctx.fillStyle = '#FD2600';
        ctx.font = "10px Arial";
        ctx.fillText(i + 1, node.x - 3, node.y - 7);
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
        ctx.stroke();
    }
    document.getElementById('nodos').innerHTML=text;
}

function colocarPanel(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  
    paneles.push({x: 550, y: 300, width: 30, height: 30, color: '#000000'});
    ctx.fillStyle = paneles[0].color;
    ctx.fillRect(paneles[0].x, paneles[0].y, paneles[0].width, paneles[0].height);
    ctx.stroke();
}

function dibujarCapa(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#FD2600';
    ctx.lineWidth = 3;

    for(let i = 0; i < nodes.length; i++){
        ctx.moveTo(nodes[i].x, nodes[i].y);
        i < nodes.length - 1 ? ctx.lineTo(nodes[i + 1].x, nodes[i + 1].y): ctx.lineTo(nodes[0].x, nodes[0].y); //Punto final
        ctx.stroke();
    }
    canvas.removeEventListener("click",true);
}

window.onload = async () =>{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //Cargar Imagen de fondo
    var img = new Image();
    img.src = 'bg.jpg';
    img.onload = function(){
    ctx.drawImage(img, 0, 0);
    }

    canvas.addEventListener("click",(e) => {
        let x = e.clientX - canvas.offsetLeft;
        let y = e.clientY - canvas.offsetTop;
        
        nodes.push({ x, y});
        drawNodes(ctx, nodes);
    });

 /*   canvas.onmousedown = function(e){
        for(var i = 0; paneles.length; i++){
            if(paneles[i].x < e.clientX && (paneles[i].width + paneles[i].x > e.clientX)){
                objetoActual = paneles[i];
                break;
            }
        }
    }

    canvas.onmousemove = function(e){
        if(objetoActual != null){
            objetoActual.x = e.clientX;
            objetoActual.y = e.clientY;
        }
        colocarPanel(); 
    }*/

    /*
    ************ Lineas ***************
    ctx.moveTo(100, 100);//Punto inicial 
    ctx.lineTo(500, 500); //Punto final
    ctx.moveTo(500, 100);//Punto inicial 
    ctx.lineTo(100, 500); //Punto final
    ctx.stroke();
    
    *************** Circulos ***********
    ctx.beginPath();
    ctx.arc(300, 300, 100, 0, 2 * Math.PI);
    ctx.stroke();
    primer parametro eje x - segundo eje y - tercer parametro diametro - 
    cuarto parametro Arco, borde de a circunferencia, debe estar en cero para que se muestre todo
    
    ***********Cuadros de textos************
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World", 10, 50);*/
}