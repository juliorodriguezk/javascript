function testFramework() {
	var myLogBox = $COMPONENTFRAMEWORK.log({
		element : document.getElementById("logConsole"),
		color : 'grey',
		height : 200,
		opacity : 0.8
	});
	myLogBox.setSize(100, null, '%');
	myLogBox.error("Ha habido un error");
	myLogBox.warn("Esto es un warn !");
	myLogBox.log("Esto es un log normal");
	myLogBox.emphasis("Esto es un texto destacado");
}