var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.executableComponent = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.focusableComponent(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_executableAction = function() {
			};

		//START PRIVATE FUNCTIONS
		function _setExecutableAction(value) {
			if(typeof value === 'function') {
				_executableAction = value;
			}
		}

		function _init(params) {
			if(params.executeAction) {
				_setExecutableAction(params.executeAction);
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.execute = function() {
			return _executableAction();
		};

		//RETURN PUBLICK OBJECT
		return that;
	}
}());