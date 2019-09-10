var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.textComponent = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.component(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_fontUnits = 'px',
			_fontSize,
			_fontColor,
			_text = '',
			_center = false,
			_name = 'textComponent';

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

		function _setText(value) {
			_text = value;
			var textContainer = document.createElement("div");
			if(_center) {
				textContainer.classList.add("center");
			}
			textContainer.innerHTML = _text;
			_htmlElement.innerHTML = '';
			_htmlElement.appendChild(textContainer);
		}

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
					_htmlElement.classList.add("textComponent");
				}
				if(params.fontSize != null) {
					_setFontSize(params.fontSize);
				}
				if(params.fontColor) {
					_setFontColor(params.fontColor);
				}
				if(params.fontUnits) {
					_setFontUnits(params.fontUnits);
				}
				if(params.center) {
					_center = params.center;
				}
				if(params.text) {
					_setText(params.text);
				}
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.changeFont = function(size, color) {
			if(typeof size === 'number') {
				_setFontSize(size);
			}
			if(color) {
				_setFontColor(color);
			}
		};
		that.setText = function(text) {
			if(text != null) {
				_setText(text);
			}
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
		//RETURN PUBLIC OBJECT
		return that;
	}
}());