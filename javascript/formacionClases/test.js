function testFramework() {
	/*
* EJEMPLO DE UN COMPONENTE TIPO BOTÓN
*
*/
	var myButton = $COMPONENTFRAMEWORK.button({
		element : document.getElementById("button"),
		fontSize : 20,
		color : "lightblue",
		x : 100,
		y : 200,
		width : 150,
		height : 40,
		text : "Botón1",
		rounded : true,
		executeAction : function() {
			debugger;
		}
	});

	var myButton2 = $COMPONENTFRAMEWORK.button({
		element : document.getElementById("button2"),
		fontSize : 20,
		color : "lightblue",
		x : 300,
		y : 200,
		width : 150,
		height : 40,
		text : "Botón2",
		rounded : true,
		executeAction : function() {
			debugger;
		}
	});

	// //enfoco el botón1 a los  5 segundos y compruebo poniendo en la consola el estado del foco de los 2 botones
	// setTimeout(function() {
	// 	myButton.focus();
	// 	console.log("A los 5 segundos :: ¿Tiene el foco el botón 1?" + myButton.isFocused());
	// 	console.log("A los 5 segundos :: ¿Tiene el foco el botón 2?" + myButton2.isFocused());
	// }, 5000);
	//
	// //desenfoco el botón1 y enfoco el botón2 a los  10 segundos y compruebo poniendo en la consola el estado del foco de los 2 botones
	// setTimeout(function() {
	// 	myButton.blur();
	// 	myButton2.focus();
	// 	console.log("A los 10 segundos :: ¿Tiene el foco el botón 1?" + myButton.isFocused());
	// 	console.log("A los 10 segundos :: ¿Tiene el foco el botón 2?" + myButton2.isFocused());
	// }, 10000);
	// //desenfoco el botón 2 a los 15 segundos
	//
	// setTimeout(function() {
	// 	myButton2.blur();
	// 	console.log("A los 15 segundos :: ¿Tiene el foco el botón 1?" + myButton.isFocused());
	// 	console.log("A los 15 segundos :: ¿Tiene el foco el botón 2?" + myButton2.isFocused());
	// }, 15000);

	//Hacemos uso del bind para cambiar el color en el focus y el blur del botón

	var focusFunction = function() {
		this.setColor("blue");
	};

	focusFunction = focusFunction.bind(myButton);
	//Versión con this
	var blurFunction = function() {
		this.setColor("lightblue");
	};
	blurFunction = blurFunction.bind(myButton);

	myButton.setBlurAction(blurFunction);
	myButton.setFocusAction(focusFunction);
	//A los 5 segundos le damos el foco
	setTimeout(function() {
		myButton.focus();
		console.log("A los 5 segundos :: ¿Tiene el foco el botón 1?" + myButton.isFocused());
	}, 5000);
	//A los 10 segundos le quitamos el foco

	setTimeout(function() {
		myButton.blur();
		console.log("A los 10 segundos :: ¿Tiene el foco el botón 1?" + myButton.isFocused());
	}, 10000);

	/*
	* EJEMPLO DE UN COMPONENTE TIPO BALL
	*
	*/
	// var myBall = $COMPONENTFRAMEWORK.ball({
	// 	element : document.getElementById("ball"),
	// 	fontSize : 25,
	// 	color : "green",
	// 	x : 0,
	// 	y : 100,
	// 	size : 100,
	// 	text : "Bola",
	// 	stepSize : 1,
	// 	executeAction : function() {
	// 		debugger;
	// 	}
	// });
	// //Fijamos el step size a 100 pixels para apreciar el movimiento
	// myBall.setStepSize(100);
	// //2.5 segundos se mueve la bola dirección derecha
	// setTimeout(function() {
	// 	myBall.moveX();
	// }, 1000);
	// //Se mueve la bola dirección arriba
	// setTimeout(function() {
	// 	myBall.moveY();
	// }, 3000);
	// //Se mueve la bola dirección abajo
	// setTimeout(function() {
	// 	myBall.moveY(true);
	// }, 5000);
	// //Se mueve la bola dirección izquierda
	// setTimeout(function() {
	// 	myBall.moveX(true);
	// }, 7000);
	// //Se mueve la bola dirección arriba derecha
	// setTimeout(function() {
	// 	myBall.moveXY();
	// }, 9000);
	// //Se mueve la bola dirección abajo derecha
	// setTimeout(function() {
	// 	myBall.moveXY(false, true);
	// }, 11000);
	// //Se mueve la bola dirección abajo izquierda
	// setTimeout(function() {
	// 	myBall.moveXY(true, true);
	// }, 13000);
	// //Se mueve la bola dirección arriba izquierda
	// setTimeout(function() {
	// 	myBall.moveXY(true, false);
	// }, 15000);
	//
	// //Fijamos el step size a 10 pixels para apreciar el movimiento
	// setTimeout(function() {
	// 	myBall.setStepSize(10);
	// }, 15500);
	//
	// //Se mueve la bola 200 veces dirección abajo derecha
	//
	// setTimeout(function() {
	// 	moveObj = {
	// 		times : 50,  //Number of movements default
	// 		moveX : true, // if true move in X axis default false
	// 		moveY : true, // if true move in Y axis default false
	// 		left : false, // if move in X axis move in left direction default false
	// 		down : true   // if move in Y axis move in down direction  default false
	// 	};
	// 	myBall.move(moveObj);
	// }, 17000);
	//
	// //Se mueve la bola 10 veces dirección izquierda
	// setTimeout(function() {
	// 	moveObj = {
	// 		times : 20,  //Number of movements default
	// 		moveX : true, // if true move in X axis default false
	// 		moveY : false, // if true move in Y axis default false
	// 		left : true, // if move in X axis move in left direction default false
	// 		down : false   // if move in Y axis move in down direction  default false
	// 	};
	// 	myBall.move(moveObj);
	// }, 19000);
	//
	// //Iniciamos un movimiento contínuo de la bola arriba a la derecha cada 0.5segundos
	// setTimeout(function() {
	// 	moveObj = {
	// 		times : 1,  //Number of movements default
	// 		moveX : true, // if true move in X axis default false
	// 		moveY : true, // if true move in Y axis default false
	// 		left : false, // if move in X axis move in left direction default false
	// 		down : false   // if move in Y axis move in down direction  default false
	// 	};
	// 	myBall.startMoveInterval(moveObj, 500);
	// }, 20000);
	//
	//
	// //detenemos el movimiento de la bola tras 8 segundos antes de que se cumplan los 10 anteriores
	// setTimeout(function() {
	// 	myBall.stopMoveInterval();
	// }, 28000);

	//Ejecutamos la acción asociada a nuestra instancia de bola
	//comprobamos que en este caso el contexto this de la función es el window
	// myBall.execute();
	//
	// //cambiamos el contexto de la función al componente
	// var myFunc = function() {
	// 	debugger;
	// };
	// myFunc = myFunc.bind(myBall);
	//
	// //myFunc = myFunc.bind(myObj);
	// myBall.setExecutableAction(myFunc);
	// myBall.execute();

	/*
	* EJEMPLO DE UN COMPONENTE TIPO LOG
	*
	*/
	// var myLog = $COMPONENTFRAMEWORK.log({
	// 	element : document.getElementById("log"),
	// 	width : 1000,
	// 	height : 200,
	// 	fontSize : 20,
	// 	x : 500,
	// 	y : 200,
	// 	size : 500,
	// 	text : "Componente de tipo log",
	// 	logDecorator : 'indexNameDateSeconds'
	// });
	// setTimeout(function() {
	// 	myLog.log("Primer log normal que metemos");
	// }, 1000);
	// setTimeout(function() {
	// 	myLog.warn("Este segundo log es un warning");
	// }, 2000);
	// setTimeout(function() {
	// 	myLog.emphasis("Tercer log que es del tipo énfasis (Negrita)");
	// }, 3000);
	// setTimeout(function() {
	// 	myLog.error("Cuarto log que es del tipo error");
	// }, 4000);
	// setTimeout(function() {
	// 	myLog.emphasis("ESTE LOG SE BORRARÁ AL CABO DE 5 SEGUNDOS");
	// }, 5000);
	// setTimeout(function() {
	// 	myLog.removeLine();
	// }, 10000);
	// setTimeout(function() {
	// 	myLog.emphasis("EN 5 SEGUNDOS SE VA A VACIAR EL LOG");
	// }, 11000);
	// setTimeout(function() {
	// 	myLog.clearText();
	// }, 16000);
}