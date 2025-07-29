function somar() {
	let somatorio = 0;

	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;

	// agora com parseFloat em vez de Number
	somatorio = parseFloat(n1) + parseFloat(n2);

	document.getElementById("resultado").textContent = somatorio;
}
