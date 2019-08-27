function identity(x) {
	return x;
}

function add(x, y) {
	return x + y;
}

function sub(x, y) {
	return x - y;
}

function mul(x, y) {
	return x * y;
}

function identityf(x) {
	return function() {
		return x;
	}
}

// esta función se invoca de la siguiente formas:
// addf(first)(second)
// o
// var test = addf(first); test (second);
function addf(first) {
	return function(second) {
		return first + second;
	}
}

//Ejemplo de Higer order functions (funciones que reciben como parámetros otras funciones)
function liftf(functionName) {
	return function(first) {
		return function(second) {
			return functionName(first, second);
		}
	};
}

function curry(functionName, first) {
	return function(second) {
		return functionName(first, second);
	}
}

//Fara implementar  la función incremento se puede usar:
//inc = addf(1)
//inc = liftf(add)(1)
// inc = curry(add,1)

function twice(binary) {
	return function(a) {
		return binary(a, a);
	};
}

function reverse(binary) {
	return function(a, b) {
		return binary(b, a);
	};
}

function composea(func1, func2) {
	return function(a) {
		return func2(func1(a));
	};
}

function composeb(func1, func2) {
	return function(a, b, c) {
		return func2(func1(a, b), c);
	};
}

function limit(func, maxTimesCall) {
	return function(a, b) {
		maxTimesCall -= 1;
		if(maxTimesCall >= 0) {
			return func(a, b);
		}
	};
}

//generator
function from(start) {
	return function() {
		var next = start;
		start += 1;
		return next;
	};
}

function to(generator, maxValue) {
	return function() {
		var next = generator();
		if(next < maxValue) {
			return next;
		}
	};
}

function fromTo(first, maxValue) {
	return to(from(first), maxValue);
}

