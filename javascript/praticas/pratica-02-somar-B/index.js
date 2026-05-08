function somar() {
	let somatorio = 0;

	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;

	// mesmo com input type="number", .value ainda vem como string, então a conversão é necessária
	somatorio = Number(n1) + Number(n2);

	document.getElementById("resultado").textContent = somatorio;
}
