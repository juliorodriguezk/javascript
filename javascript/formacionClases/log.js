var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.log = (function() {
	return function(params) {
		'use strict';
		var _name = 'log',
			_htmlElement,
			_parentObj = $COMPONENTFRAMEWORK.textArea(params),
			that = Object.create(_parentObj),
			_logDecorator = "",
			_AVAILABLE_DECORATORS = ['date', 'name', 'index', 'hour', 'nameDate', 'indexDateName', 'indexName', 'indexDate', 'nameHour', 'indexHourName', 'indexHour', 'nameDateHour', 'indexDateHourName', 'indexDateHour'],
			_numberOfLines = 0;

		//PRIVATE IMPLEMENTATIONS

		function _setDecorator(value) {
			var currentDate = Date.now(),
				hour = currentDate.getHours(),
				minutes = currentDate.getMinutes(),
				lineNumber = _numberOfLines + 1;

			currentDate = currentDate.toDateString();

			switch(value) {
				case _AVAILABLE_DECORATORS[0]:
					_logDecorator = currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[1]:
					_logDecorator = _name + " :: ";
					break;
				case _AVAILABLE_DECORATORS[2]:
					_logDecorator = lineNumber + " :: ";
					break;
				case _AVAILABLE_DECORATORS[3]:
					_logDecorator = lineNumber + " :: ";
					break;
				case _AVAILABLE_DECORATORS[4]:
					_logDecorator = _name + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[5]:
					_logDecorator = lineNumber + " :: " + _name + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[6]:
					_logDecorator = lineNumber + " :: " + _name + " :: ";
					break;
				case _AVAILABLE_DECORATORS[7]:
					_logDecorator = lineNumber + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[8]:
					_logDecorator = _name + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[9]:
					_logDecorator = lineNumber + " :: " + _name + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[10]:
					_logDecorator = lineNumber + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[11]:
					_logDecorator = lineNumber + " :: " + _name + " :: " + currentDate + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[12]:
					_logDecorator = lineNumber + " :: " + currentDate + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[13]:
					_logDecorator = _name + " :: " + currentDate + " :: " + hour + ":" + minutes + " :: ";
					break;
			}

		}

		function _writeLog(htmlText, textClass) {
			var txt = htmlText;
			if(textClass) {
				txt = '<span class = "' + textClass + '">' + txt + '</span>';
			}
			if(_logDecorator !== "") {
				txt = _logDecorator + txt;
			}
			_parentObj.writeLine(txt);
			_numberOfLines += 1;
		}

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
					_htmlElement.classList.add("log-console");
				}
				_setDecorator(params.logDecorator);
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS

		that.getName = function() {
			return _name;
		};

		that.setDecorator = function(decoratorType) {
			_setDecorator(decoratorType);
		};

		that.writeLine = function(text) {
			_writeLog(text);
		};

		that.removeLine = function() {
			_numberOfLines -= 1;
			_parentObj.removeLine();
		};

		that.clearText = function() {
			_numberOfLines = 0;
			_parentObj.clearText();
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