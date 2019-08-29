function testFramework() {
	// var myLogBox = $COMPONENTFRAMEWORK.log({
	// 	element : document.getElementById("logConsole"),
	// 	color : 'grey',
	// 	height : 200,
	// 	opacity : 0.8
	// });
	// myLogBox.setSize(100, null, '%');
	// myLogBox.error("Ha habido un error");
	// myLogBox.warn("Esto es un warn !");
	// myLogBox.log("Esto es un log normal");
	// myLogBox.emphasis("Esto es un texto destacado");
	var myLogBox = $COMPONENTFRAMEWORK.textComponent({
		element : document.getElementById("logConsole"),
	});
	var myArray = [];
	for(var i = 0; i < 10000; i++) {
		var newComp = $COMPONENTFRAMEWORK.textComponent({
			element : document.getElementById("logConsole"),
		});
		myArray.push(newComp);
	}
	var cont = 0;
	setInterval(function() {
		myArray[cont] = myArray[cont].destroy();
		cont += 1;
	}, 100);
}