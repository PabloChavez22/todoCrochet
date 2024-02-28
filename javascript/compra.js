/**carousel img**/

document.getElementById("next").onclick = function() {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);

}

document.getElementById("prev").onclick = function() {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
}

/*****************prec.estimado********************/

function ShowSelected(){
    var cod = document.getElementById("cantidadD").value;
    var total = document.getElementById("precioProducto").innerHTML;
    total = total * cod;
    document.getElementById('totalEstimado').innerHTML = total;
    /*alert(cod); muestra el pop alert con el cod*/
}

document.getElementById('totalEstimado').innerHTML = 0;
/**************talle********************/

const botones = document.querySelectorAll(".talle_boton");
const cuandoSeHaceClick = function(evento){
    /*this.style.borderColor = "blue";*/
    borrando();
    this.classList.add("talle_select");
}

function borrando(){
    document.querySelectorAll(".talle_boton").forEach((el)=> el.classList.remove("talle_select"));
}
botones.forEach(boton =>{
    boton.addEventListener("click", cuandoSeHaceClick);
});

/********************color*********************/

const color = document.querySelectorAll(".color");
const cuandoHaceClick = function(evento){
    borrandoColor();
    this.classList.add("color_select");
}
function borrandoColor(){
    document.querySelectorAll(".color").forEach((el)=>el.classList.remove("color_select"));
}
color.forEach(colore => {
    colore.addEventListener("click",cuandoHaceClick);
});

/************************funcion de formularios******************************/

let loginForm = document.getElementById('formularioProducto');//para q no envie formulario sin ver ticket.
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();

    botonclickeado = document.getElementById('posta');//aca va el submit del 2°form.
    if(!botonclickeado.onclick){
        console.log('esperando compra');
    }else{
        console.log('mandar formulario');
    }
});
/*********datos**********/
const eleccion = [];

const boton_resumen = document.getElementById("datoProducto");
boton_resumen.onclick = agregar;

function calcularPrecio (){
    var precio = document.getElementById('precioProducto').innerHTML;
    const cantidad = document.getElementById('cantidadD').options[cantidadD.selectedIndex].text;
    var elPrecio = 0;
    elPrecio = precio*cantidad;

    return elPrecio;
}

function agregar (){

    var talles = document.querySelector('.talle_select');
    var elTalle = talles.dataset.valu;
    var colores = document.querySelector(".color_select");
    var elColor = colores.dataset.value;

    boxvalue = document.getElementById('producto').innerText;
    boxvalue1 = elTalle;
    boxvalue2 = elColor;
    boxvalue3 = document.getElementById('cantidadD').options[cantidadD.selectedIndex].text;
    boxvalue4 = calcularPrecio();
    const sujeto = [];

    sujeto.push(boxvalue);//producto
    sujeto.push(boxvalue1);//talle
    sujeto.push(boxvalue2);//color
    sujeto.push(boxvalue3);//cant
    sujeto.push(boxvalue4);//precio
    console.log(sujeto);//muestro en consola array.

    
    sujeto.map((item) => {//clono array.
        eleccion.push(item);
        return item;
    });

    console.log(eleccion);//muestro en consola que clono array.
    var pasa = boxvalue3;
    if(!(pasa === 'Cantidad')){
        const contenedor = document.getElementById("formularioProducto");
        const contenedor2 = document.getElementById("datosPersonales");

        contenedor.classList.add('divAbajo');
        contenedor2.classList.remove('oculto');
        contenedor2.classList.add('divArriba');
        aviso();
    }

    eleccion.splice(0,eleccion.length);//limpio el array exterior.
    console.log(eleccion);//verifico en consola array exterior vacio.
};

function aviso() {
    cuadro_vacio = document.getElementById('elegiste');
    cuadro_vacio.innerHTML = 
    '\nProducto : '+eleccion[0] +'<br>'+
    'Talle : '+eleccion[1] +'<br>'+
    'Color : '+eleccion[2] +'<br>'+
    'Cantidad : '+eleccion[3] +'<br>'+
    'Precio : $'+eleccion[4] +'.<br><br>';   
}

const boton_borrar = document.getElementById('borrar');
boton_borrar.addEventListener("click",nuevoForm);

document.querySelector("#formularioCompleto").addEventListener("submit", function(event){
    var campo1=document.getElementById('t_targeta');
    var campo2=document.getElementById('nroTarjeta');
    var campo3=document.getElementById('name');
    var campo4=document.getElementById('surname');
    var campo5=document.getElementById('emailAddress');
    
    if(campo1 !== "" && campo2 !== "" && campo3 !== "" && campo4 !== "" && campo5 !== ""){
        alert("Pago realizado! ");
    }
});

function nuevoForm(){
    const contenedor1 = document.getElementById("formularioProducto");
    const contenedor2 = document.getElementById("datosPersonales");

        contenedor1.classList.remove('divAbajo');
        contenedor2.classList.remove('divArriba');
        contenedor2.classList.add('oculto');
        alert("Pago cancelado");
}