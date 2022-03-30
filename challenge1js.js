

	
	var input1 = document.querySelector("primero");
	
	var button1 = document.querySelector ("encriptador")

	var button2 = document.querySelector ("desencriptador")

	var input2 = document.querySelector ("segundo")


	var llaves = ["e","i","a","o","u"];
	var convertir = ["enter","imes","ai","ober","ufat"];






	function verificar() {

		document.getElementById("segundo").value = " ";	
		
		for (var position = 0; position < llaves.length; position++) {

			if (primero.value == llaves[position]) {
				document.getElementById("segundo").value = convertir[position]
			}
		}
primero.focus();
		
}

	function noVerificar() {

		document.getElementById("segundo").value = " ";	

		for (var position = 0; position < llaves.length; position++) {

			if (primero.value == llaves[position]) {
				document.getElementById("segundo").value = llaves[position]
			}
	}
}

	
	encriptador.onclick = verificar;

	desencriptador.onclick = noVerificar;


