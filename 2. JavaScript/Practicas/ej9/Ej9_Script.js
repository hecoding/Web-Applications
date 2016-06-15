function comprobarNoNumeros(queCampo) {
  var valido = true;
  var nombre = document.formulario.nombre.value;
  if(nombre == "") valido = false;
  else {
    for (var i = 0; i < nombre.length; i++) {
      if(nombre[i] >= 0 || nombre[i] <= 9)
        valido = false;
    };
  }

  if(!valido)
    alert("Campo " + queCampo + " no válido");
  else
    document.getElementById("cosasBien").innerHTML += queCampo + " correcto<br>";
}

function NIFCorrecto(){
  var valido = true;
  var dni = document.formulario.nif.value;
  var num = dni.slice(0,8);
  var letra = dni.substring(8);
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
                'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  if (letras[num % 23] === letra)
    document.getElementById("cosasBien").innerHTML += "DNI correcto<br>";
  else
    alert("El DNI no está bien");
}

function comprobarTelefono(){
  //comprobar 9 digitos
  var telf = document.formulario.telefono.value;
  if(telf.length == 9)
    document.getElementById("cosasBien").innerHTML += "Teléfono correcto<br>";
  else
    alert("El teléfono debe tener 9 dígitos");

}

function comprobarEmail(){
  //comprobar @ ni primero ni ultimo
  var expresionRegularCorreo = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  var mail = document.formulario.mail.value;

  if(expresionRegularCorreo.test(mail))
    document.getElementById("cosasBien").innerHTML += "Email correcto<br>";
  else
    alert("Direccion de correo invalida");
}

function comprobarFecha(){
  var fecha = document.formulario.fecha.value;
  var anio = fecha.slice(0,4);

  if(anio <= 1997)
    document.getElementById("cosasBien").innerHTML += "Fecha de nacimiento correcta<br>";
  else
    alert("Debes tener más de 18 años para continuar");
}

function mouseOverName(){
    document.getElementById("ayuda").innerHTML = "Introduce tu verdadero nombre<br>";
}

function mouseOverApellido(){
    document.getElementById("ayuda").innerHTML = "Introduce tu verdadero apellido<br>";
}

function mouseOverNIF(){
    document.getElementById("ayuda").innerHTML = "Introduce tu numero de DNI con la letra<br>";
}

function mouseOverTelefono(){
    document.getElementById("ayuda").innerHTML = "Introduce un telefono valido de 9 digitos<br>";
}

function mouseOut(){
  document.getElementById("ayuda").innerHTML = "";
}

function cuenta(){
  document.getElementById("caracteres").innerHTML = 75 - document.getElementById("sugerencia").value.length;
}

function cambiarOpciones(value){
  if(value==0)//domicilio
  {
    //document.getElementById("muypicante").disabled=true;
    var x = document.getElementById("picante");
    for(var i = 0; i < x.options.length; i++ ){
      if(x.options[i].text=="Alto")
        x.remove(i);
    }
  }else{
    //document.getElementById("muypicante").disabled=false;
    var x = document.getElementById("picante");
    if(x.options.length < 3){
      var option = document.createElement("option");
      option.text = "Alto";
      option.value = "alto";
      x.options.add(option, x[0]);
    }
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function dameValor(nombre){
  var ini = document.cookie.indexOf(nombre);
  if(ini == -1) //No existe la cookie
    valor = "";
  var sep = document.cookie.indexOf("=", ini);
  var fin = document.cookie.indexOf(";", ini);
  if(fin == -1) // la ultima no acaba en ;
    fin = document.cookie.length;
  return document.cookie.substring(sep+1, fin);
}

function ponValor(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+date.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function cargarDatos(){
  var valor = dameValor("nombre");
  alert(valor);
  document.formulario.nombre.value = valor;
  valor = dameValor("apellido");
  document.formulario.apellido.value = valor;
  valor = dameValor("nif");
  document.formulario.nif.value = valor;
  valor = dameValor("telefono");
  document.formulario.telefono.value = parseInt(valor);
}

function registrarDatos(){
  ponValor("nombre", document.formulario.nombre.value, 30);
  ponValor("apellido", document.formulario.apellido.value, 30);
  ponValor("nif", document.formulario.nif.value, 30);
  ponValor("telefono", toString(document.formulario.telefono.value), 30);
}


// Cookies borraValor
function deleteCookie(cname){
  setCookie(cname, "", -1);
}

// Cookies comprobar
function checkCookie() {
  var username=getCookie("nombre");
    if (username=="") {
      alert("Welcome for first time!");
    } else {
      alert("Welcome again!");
      cargarDatos();
    }
}
