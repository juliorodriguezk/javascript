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
	// var myLogBox = $COMPONENTFRAMEWORK.textComponent({
	// 	element : document.getElementById("logConsole"),
	// });
	// myLogBox.getName();
	// console.log("TEST");
//	var myArray = [];
//	for(var i = 0; i < 10000; i++) {
//		var newComp = $COMPONENTFRAMEWORK.textComponent({
//			element : document.getElementById("logConsole"),
//		});
//		myArray.push(newComp);
//	}
//	var cont = 0;
//	setInterval(function() {
//		myArray[cont] = myArray[cont].destroy();
//		cont += 1;
//	}, 100);
	var myYellowBall = $COMPONENTFRAMEWORK.log({
		element : document.getElementById("test"),
		width : 1000,
		height : 200,
		text : "hola",
		fontSize : 10,
		center : true,
		size : 500
	});
	myYellowBall.error("ESTA LA BORRO QUE NO APAREZCA");
	myYellowBall.log("ESTA ES LA PRIMERA FRASE QUE QUIERO METER");
	myYellowBall.warn("ESTA ES LA segunda FRASE QUE QUIERO METER");
	myYellowBall.error("ESTA ES LA tercera FRASE QUE QUIERO METER");
	myYellowBall.error("ESTA LA BORRO QUE NO APAREZCA");
	myYellowBall.clearText();
 }