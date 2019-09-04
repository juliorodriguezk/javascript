var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.component = (function() {
	return function(params) {
		'use strict';
		var _name = 'component',
			that = Object.create(null), //Initialize object to empty
			_htmlElement,
			_position = 'relative',
			_x = 0,
			_y = 0,
			_width = 0,
			_height = 0,
			_color = 0,
			_opacity = 1,
			_units = 'px';

		//START PRIVATE FUNCTIONS
		function _setPosition(value) {
			if(value) {
				_position = value;
			}
			_htmlElement.style.position = _position;
		}

		function _setX(value, units) {
			_x = value;
			_htmlElement.style.left = _x + (units || _units);
		}

		function _setY(value, units) {
			_y = value;
			_htmlElement.style.top = _y + (units || _units);
		}

		function _setWidth(value, units) {
			_width = value;
			_htmlElement.style.width = _width + (units || _units);
		}

		function _setHeight(value, units) {
			_height = value;
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

		function _init(params) {
			if(!params || !params.element) {
				throw new Error("component :: initialization :: HTML element is mandatory.");
			} else {
				_htmlElement = params.element;
			}

			_setPosition(params.position);

			if(params.units) {
				_setUnits(params.units);
			}
			if(params.x) {
				_setX(params.x);
			}
			if(params.y) {
				_setY(params.y);
			}
			if(params.width) {
				_setWidth(params.width);
			}
			if(params.height) {
				_setHeight(params.height);
			}
			if(params.color) {
				_setColor(params.color);
			}
			if(params.opacity) {
				_setOpacity(params.opacity);
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
				throw new Error("component :: setColor :: Not valid color.");
			}
		};

		that.show = function() {
			_htmlElement.classList.remove("hide");
		};

		that.hide = function() {
			_htmlElement.classList.add("hide");
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
		//RETURN PUBLICK OBJECT
		return that;
	}
}());

