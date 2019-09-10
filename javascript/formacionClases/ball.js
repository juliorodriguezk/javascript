var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.yellowBall = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.textComponent(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_name = 'yellowBall';

		//START PRIVATE FUNCTIONS

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
				}
				_htmlElement.classList.add("ball");
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.destroy = function() {
			for(var prop in this) {
				delete this.prop;
			}
			_htmlElement = undefined;
			that = undefined;
			_parentObj.destroy();
			_parentObj = undefined;
		};
		//RETURN PUBLIC OBJECT
		return that;
	}
}());