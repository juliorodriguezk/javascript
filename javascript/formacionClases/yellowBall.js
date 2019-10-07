var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.yellowBall = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.component(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_name = 'yellowBall';

		//START PRIVATE FUNCTIONS

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
				}
				_htmlElement.classList.add("ball");
				_parentObj.setColor("yellow");
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.setColor = function() {
			console.error("yellowBall :: setColor :: Yellow ball is yellow don't change my color please.");
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