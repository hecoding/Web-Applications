function validar(texto) { // preguntado al profesor, validar que no esté vacío
	if(texto.length == 0) {
		alert("necesita tener algo");
		return false;
	}
	else
		return true;
}

function contarTextarea(texto) { // preguntado al profesor, textarea único
	if(texto.length > 100) {
		var nuevoTexto = "";
		for (i = 0; i < 100; i++) {
			nuevoTexto += texto[i];
		}

		return nuevoTexto;
	}
	else return texto;
}

$(document).ready(function() {
	$("form :input[type=text]:first").focus();
	$("form :input[type=text][required]").css("background-color", "red");
	$("form textarea[required]").css("background-color", "red");
	$("form :input[type=text][required]").mouseenter(function() {
		$("#INFO").text("campo obligatorio");
	});
	$("form :input[type=text][required]").mouseleave(function() {
		$("#INFO").text("");
	});
	$("form textarea[required]").mouseenter(function() {
		$("#INFO").text("campo obligatorio");
	});
	$("form textarea[required]").mouseleave(function() {
		$("#INFO").text("");
	});

	$("form :input[type=text][required]").blur(function() {
		if(!validar( $(this).val() )) {
			$(this).focus();
		}
	});
	$("form textarea[required]").blur(function() {
		if(!validar( $(this).val() )) {
			$(this).focus();
		}
		else
			$(this).val( contarTextarea($(this).val()) );
	});
	$("form :input[type=radio]:first").attr("checked", "checked");
	$("form :input[type=submit]").one("click", function() {
		if( !$("input[type=checkbox] :checked") )
			alert("No ha seleccionado ninguna opción");
	});
});