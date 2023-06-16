let imagenes = new Array(2);
imagenes[0] = new Array(3);
imagenes[1] = new Array(3);

let imgActual = 0;
/*Ruta imagen*/
imagenes[0][0] = "Imagenes/RadioEnlace.jpg";
/*tamaño width*/
imagenes[0][1] = 550;
/*tamaño height*/
imagenes[0][2] = 550;

imagenes[1][0] = "Imagenes/Mineros SA.jpg";
imagenes[1][1] = 650;
imagenes[1][2] = 520;

document.getElementById('img').src = imagenes[0][0];
document.getElementById('img').width = imagenes[0][1];
document.getElementById('img').height = imagenes[0][2];


function imgSig(){
    if (imgActual>0){
        imgActual = 0;
        document.getElementById('img').src = imagenes[imgActual][0];
        document.getElementById('img').width = imagenes[imgActual][1];
        document.getElementById('img').height = imagenes[imgActual][2];
    }
        else{
            imgActual=imgActual+1;
            document.getElementById('img').src = imagenes[imgActual][0];
            document.getElementById('img').width = imagenes[imgActual][1];
            document.getElementById('img').height = imagenes[imgActual][2];
        }
}

function imgAnt(){
   if (imgActual<=0) {
        imgActual=1;
        document.getElementById('img').src = imagenes[imgActual][0];
        document.getElementById('img').width = imagenes[imgActual][1];
        document.getElementById('img').height = imagenes[imgActual][2];
    }
        else{
            imgActual =imgActual-1;
            document.getElementById('img').src = imagenes[imgActual][0];
            document.getElementById('img').width = imagenes[imgActual][1];
            document.getElementById('img').height = imagenes[imgActual][2];
        }
}
