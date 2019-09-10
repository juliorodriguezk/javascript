var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.textArea = (function() {
	return function(params) {
		'use strict';
		var _name = 'textArea',
			_htmlElement,
			_parentObj = $COMPONENTFRAMEWORK.textComponent(params),
			that = Object.create(_parentObj),
			_lastLineRegEx = new RegExp('.*<BR/>$', 'g');

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
				_htmlElement.innerHTML = _htmlElement.innerHTML + text + '<br/>';
			}
		};
		that.removeLine = function() {
			var exist =_lastLineRegEx.test(_htmlElement.innerHTML);

			debugger;
			var tmpContent = _htmlElement.innerHTML.replace(_lastLineRegEx, "");
			_htmlElement.innerHTML = tmpContent;
		};
		that.clearText = function() {
			that.removeText();
		};
		that.destroy = function() {
			for(var prop in this) {
				delete this.prop;
			}
			_htmlElement = undefined;
			that = undefined;
			_lastLineRegEx = undefined;
			_parentObj.destroy();
			_parentObj = undefined;
		};
		//RETURN PUBLICK OBJECT
		return that;
	}
}());