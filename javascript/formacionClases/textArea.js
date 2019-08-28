var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.textArea = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = this.textComponent(params),
			that = Object.create(_parentObj),
			_lastLineRegEx = new RegExp('.*<BR/>$', 'g');

		function _init(params) {
			if(_htmlElement) {
				_htmlElement.style.overflowX = "hidden";
				_htmlElement.style.overflowY = "scroll";
			}
		}
		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.writeLine = function(text) {
			if(text != null) {
				_htmlElement.innerHTML = _htmlElement.innerHTML + text + '<br/>';
			}
		};
		that.removeLine = function() {
			var tmpContent = _htmlElement.innerHTML.replace(_lastLineRegEx, "");
			_htmlElement.innerHTML = tmpContent;
		};
		that.clearText = function() {
			that.removeText();
		};
		//RETURN PUBLICK OBJECT
		return that;
	}
}());