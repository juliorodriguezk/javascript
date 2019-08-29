var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.textComponent = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.component(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_fontUnits = 'px',
			_fontSize,
			_fontColor;

		//START PRIVATE FUNCTIONS
		function _setFontSize(value) {
			_fontSize = value;
			_htmlElement.style.fontSize = _fontSize + _fontUnits;
		}

		function _setFontColor(value) {
			_fontColor = value;
			_htmlElement.style.color = _fontColor;
		}

		function _setFontUnits(value) {
			_fontUnits = value;
		}

		function _init(params) {
			if(params.fontSize) {
				_setFontSize(params.fontSize);
			}
			if(params.fontColor) {
				_setFontColor(params.fontColor);
			}
			if(params.fontUnits) {
				_setFontUnits(params.fontUnits);
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.changeFont = function(size, color) {
			if(typeof size === 'number') {
				_setFontSize(size);
			}
			if(color) {
				_setFontColor(color);
			}
		};
		that.setText = function(text) {
			_htmlElement.innerHTML = text;
		};
		that.removeText = function() {
			_htmlElement.innerHTML = "";
		};
		that.destroy = function() {
			for(var prop in this) {
				delete this.prop;
			}
			_htmlElement = undefined;
			that = undefined;
			_fontUnits = undefined;
			_fontSize = undefined;
			_fontColor = undefined;
			_parentObj.destroy();
			_parentObj = undefined;
		};
		//RETURN PUBLICK OBJECT
		return that;
	}
}());