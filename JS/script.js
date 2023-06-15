let imagenes = Array(4);
let imgActual = 0;

imagenes[0] = "Imagenes/RadioEnlace.jpg";
imagenes[1] = "Imagenes/Mineros SA.jpg";
imagenes[2] = "Imagenes/LinkPlanner.png";
imagenes[3] = "Imagenes/ZW Risaralda.jpg";

document.getElementById('img').src = imagenes[imgActual];

function imgSig(){
    if (imgActual>2){
        imgActual = 0;
        document.getElementById('img').src = imagenes[imgActual];
    }
        else{
            imgActual=imgActual+1;
            document.getElementById('img').src = imagenes[imgActual];
        }
}

function imgAnt(){
   if (imgActual<=0) {
        imgActual=3;
        document.getElementById('img').src = imagenes[imgActual];
    }
        else{
            imgActual =imgActual-1;
            document.getElementById('img').src = imagenes[imgActual];
        }
}
