var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.button = (function() {
	return function(params) {
		'use strict';
		var _name = 'button';

		if(params) {
			params.center = true;
			if(!params.text) {
				params.text = _name;
			}
		}

		var _htmlElement,
			_parentObj = $COMPONENTFRAMEWORK.executableComponent(params),
			that = Object.create(_parentObj);

		//START PRIVATE FUNCTIONS
		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
					_htmlElement.classList.add("button");
					if(params.rounded) {
						_htmlElement.style.borderRadius = "0.5em";
					}
				}
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