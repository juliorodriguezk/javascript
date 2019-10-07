var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.log = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.textArea(params),
			that = Object.create(_parentObj),
			_logDecorator = "";

		//PRIVATE IMPLEMENTATIONS
		function _writeLog(htmlText, textClass) {
			var txt = htmlText;
			if(textClass) {
				txt = '<span class = "' + textClass + '">' + txt + '</span>';
			}
			if(_logDecorator !== "") {
				txt = _logDecorator + txt;
			}
			_parentObj.writeLine(txt);
		}

		function _init(params) {
			if(_htmlElement) {
				_htmlElement.classList.add("log-console");

			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.log = function(text) {
			_writeLog(text);
		};
		that.emphasis = function(text) {
			_writeLog(text, 'emphasis');
		};
		that.error = function(text) {
			_writeLog(text, 'error');
		};
		that.warn = function(text) {
			_writeLog(text, 'warn');
		};
		//RETURN PUBLICK OBJECT
		return that;
	}
}());