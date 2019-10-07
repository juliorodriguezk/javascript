var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.focusableComponent = (function() {
	return function(params) {
		'use strict';
		var _name = 'focusableComponent',
			_htmlElement,
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
			_htmlElement.classList.add("focused");
			return _onFocusAction();
		}

		function _blur() {
			_focused = false;
			_htmlElement.classList.remove("focused");
			return _onBlurAction();
		}

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
				}
				if(params.focusAction) {
					_setFocusAction(params.focusAction);
				}
				if(params.blurAction) {
					_setBlurAction(params.blurAction);
				}
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

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