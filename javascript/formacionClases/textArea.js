var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.textArea = (function() {
	return function(params) {
		'use strict';
		var _name = 'textArea',
			_htmlElement,
			_parentObj = $COMPONENTFRAMEWORK.textComponent(params),
			that = Object.create(_parentObj);


		function _removeLine() {
			var node = _htmlElement.lastChild;
			if(node.classList.contains('line')) {
				_htmlElement.removeChild(node);
			}
		}

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element
					_htmlElement.style.overflowX = "hidden";
					_htmlElement.style.overflowY = "scroll";
				}
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.writeLine = function(text) {
			if(text != null) {
				var line = document.createElement('div');
				line.classList.add('line');
				line.innerHTML = text;
				_htmlElement.appendChild(line);
			}
		};

		that.removeLine = function() {
			_removeLine();
		};

		that.clearText = function() {
			var elementsToRemove = [];
			_htmlElement.childNodes.forEach(function(element) {
				if(element.classList.contains('line')) {
					elementsToRemove.push(element);
				}
			});

			while(elementsToRemove.length) {
				_htmlElement.removeChild(elementsToRemove.pop());
			}
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