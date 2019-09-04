var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.button = (function() {
	return function(params) {
		'use strict';
		var _name = 'button',
			_htmlElement,
			_parentObj = $COMPONENTFRAMEWORK.executableComponent(params),
			that = Object.create(_parentObj);

		//START PRIVATE FUNCTIONS
		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
					_htmlElement.classList.add("button");
				}
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		}

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