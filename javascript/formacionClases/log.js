var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.log = (function() {
	return function(params) {
		'use strict';
		var _name = 'log',
			_htmlElement,
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
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
					_htmlElement.classList.add("log-console");

				}
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

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

		that.destroy = function() {
			for(var prop in this) {
				delete this.prop;
			}
			_htmlElement = undefined;
			that = undefined;
			_logDecorator = undefined;
			_parentObj.destroy();
			_parentObj = undefined;
		};

		//RETURN PUBLICK OBJECT
		return that;
	}
}());