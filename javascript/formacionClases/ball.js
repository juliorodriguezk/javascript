var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.ball = (function() {
	return function(params) {
		'use strict';
		if(params) {
			//Remove width and height params for avoid set wrong size in component
			delete params.width;
			delete params.height;
			// If text available it should be centered
			params.center = true;
		}
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.movableComponent(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_name = 'ball';

		//START PRIVATE FUNCTIONS
		function _setSize(size, units) {
			if(size != null && typeof size === 'number') {
				_parentObj.setSize(size, size, units);
			}
		}

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
				}
				_htmlElement.classList.add("ball");
				_setSize(params.size);
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.setSize = function(size, units) {
			_setSize(size, units);
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