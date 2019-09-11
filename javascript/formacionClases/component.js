var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.component = (function() {
	return function(params) {
		'use strict';
		var _name = 'component',
			that = Object.create(null), //Initialize object to empty
			_htmlElement,
			_position = 'absolute',
			_x = 0,
			_y = 0,
			_width = 0,
			_height = 0,
			_color,
			_opacity,
			_background,
			_units = 'px';

		//START PRIVATE FUNCTIONS
		function _setPosition(value) {
			if(value != null) {
				_position = value;
			}
			_htmlElement.style.position = _position;
		}

		function _setX(value, units) {
			if(value != null) {
				_x = value;
			}
			_htmlElement.style.left = _x + (units || _units);
		}

		function _setY(value, units) {
			if(value != null) {
				_y = value;
			}
			_htmlElement.style.top = _y + (units || _units);
		}

		function _setWidth(value, units) {
			if(value != null) {
				_width = value;
			}
			_htmlElement.style.width = _width + (units || _units);
		}

		function _setHeight(value, units) {
			if(value != null) {
				_height = value;
			}
			_htmlElement.style.height = _height + (units || _units);
		}

		function _setColor(value) {
			_color = value;
			_htmlElement.style.backgroundColor = _color;
		}

		function _setUnits(value) {
			_units = value;
		}

		function _setOpacity(value) {
			if(value >= 0 && value <= 1) {
				_opacity = value;
				_htmlElement.style.opacity = _opacity;
			} else {
				console.warn("component :: opacity values out of range current value will not be changed");
			}
		}

		function _setBackground(value) {
			_background = value;
			_htmlElement.style.backgoundImage = "url('" + _background();

		}

		function _init(params) {
			if(!params || !params.element) {
				throw new Error("component :: initialization :: HTML element is mandatory.");
			} else {
				_htmlElement = params.element;
			}
			_setX(params.x);
			_setY(params.y);
			_setWidth(params.width);
			_setHeight(params.height);
			_setPosition(params.position);
			if(params.opacity != null) {
				_setOpacity(params.opacity);
			}
			if(params.position != null) {
				_setPosition(params.position);
			}
			if(params.units != null) {
				_setUnits(params.units);
			}
			if(params.color != null) {
				_setColor(params.color);
			}
			if(params.background != null) {
				_setBackground(params.background);
			}
			return that;
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.setPosition = function(xPos, yPos, units) {
			if(xPos != null && typeof xPos === 'number') {
				_setX(xPos, units);
			}
			if(yPos != null && typeof yPos === 'number') {
				_setY(yPos, units)
			}
		};

		that.getComponentData = function() {
			return {
				x : _x,
				y : _y,
				position : _position,
				width : _width,
				height : _height,
				color : _color
			};
		};

		that.setSize = function(width, height, units) {
			if(width != null && typeof width === 'number') {
				_setWidth(width, units);
			}
			if(height != null && typeof height === 'number') {
				_setHeight(height, units);
			}
		};

		that.setColor = function(color) {
			if(typeof color === 'string') {
				_setColor(color);
			} else {
				console.error("component :: setColor :: Not valid color.");
			}
		};

		that.setOpacity = function(opacity) {
			if(opacity != null && typeof opacity === 'number') {
				_setOpacity(opacity);
			}
		};

		that.show = function() {
			_htmlElement.classList.remove("hide");
		};

		that.hide = function() {
			_htmlElement.classList.add("hide");
		};

		that.setBackground = function(backgroundUrl) {
			if(backgroundUrl != null) {
				_setBackground(backgroundUrl);
			}
		};

		that.destroy = function() {
			for(var prop in this) {
				delete this.prop;
			}
			that = undefined;
			_htmlElement = undefined;
			_position = undefined;
			_x = undefined;
			_y = undefined;
			_width = undefined;
			_height = undefined;
			_color = undefined;
			_opacity = undefined;
			_units = undefined;
			if(_htmlElement) {
				_htmlElement.remove();
			}
			return undefined;
		};
		//RETURN PUBLIC OBJECT
		return that;
	}
}());

