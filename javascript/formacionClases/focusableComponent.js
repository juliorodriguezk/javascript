var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.focusableComponent = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.textComponent(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_onBlurAction = function() {
			},
			_onFocusAction = function() {
			},
			_focused = false;

		//START PRIVATE FUNCTIONS
		function _setBlurAction(value) {
			if(typeof value === 'function') {
				_onBlurAction = value;
			}
		}

		function _setFocusAction(value) {
			if(typeof value === 'function') {
				_onFocusAction = value;
			}
		}

		function _focus() {
			_focused = true;
			return _onFocusAction();
			_htmlElement.classList.add("focused");
		}

		function _blur() {
			_focused = false;
			return _onBlurAction();
			_htmlElement.classList.remove("focused");
		}

		function _init(params) {
			if(params.focusAction) {
				_setFocusAction(params.focusAction);
			}
			if(params.blurAction) {
				_setBlurAction(params.blurAction);
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.setBlurAction = function(action) {
			_setBlurAction(action);
		};

		that.setFocusAction = function(action) {
			_setFocusAction(action)
		};

		that.focus = function() {
			_focus();
		};

		that.blur = function() {
			_blur();
		};

		that.isFocused = function() {
			return _focused;
		};

		//RETURN PUBLICK OBJECT
		return that;
	}
}());