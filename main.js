var imagenes = ['img/img1.jpeg','img/img2.jpeg','img/img3.jpeg','img/img4.jpeg'],
cont = 0;

function carrousel(contenedor){
  contenedor.addEventListener('click', e => {
    let atras = contenedor.querySelector('.atras'),
    adelante = contenedor.querySelector('.adelante'),
    img = contenedor.querySelector('img'),
    tgt = e.target;

    if(tgt == atras){
      if(cont > 0){
        img.src = imagenes[cont-1];
        cont--;
      }else{
        img.src - imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }

    }else if(tgt == adelante){
      if(cont < imagenes.length - 1){
        img.src = imagenes[cont + 1];
        cont++;
      }else{
        img.src - imagenes[0];
        cont = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector('.contenedor');
  carrousel(contenedor);
});

document.querySelector('#boton').addEventListener('click',traerDatos);

function traerDatos(){
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET','data.json',true)
  
  xhttp.send();

  xhttp.onreadystatechange = function(){

    if(this,this.readyState == 4 && this.status ==200){
      //console.log(this.responseText)
      let datos = JSON.parse(this.responseText);
      //console.log(datos);
      let res = document.querySelector('#res');
      res.innerHTML = '';

      for(let item of datos){
        //console.log(item.Python);
        res.innerHTML +=`
        <tr>
        <td>${item.Lenguajes}</td>
        <td>${item.puntaje}</td>
        </tr>
        `
      }
    }
  }
}

document.getElementById("buttonContact").addEventListener('click', function(){

  var nombre = document.getElementById("nameInput").value;
  var email = document.getElementById("mailInput").value;
  var message = document.getElementById("messageInput").value;

  console.log(nombre);

  if ( (nombre === "") || (email === "") || (message === "") || (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))){
    alert("Ha ingresado un carácter inválido o ha dejado algún campo vacío.");

  } else{



      console.log("Nombre: "+nombre);
      console.log("E-mail: "+email);
      console.log("Mensaje: "+message);
      alert("Su solicitud ha sido enviada.");

  }

});