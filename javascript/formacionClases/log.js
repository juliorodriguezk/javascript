var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.log = (function() {
	return function(params) {
		'use strict';

		var _name = 'log',
			_htmlElement,
			_parentObj = $COMPONENTFRAMEWORK.textArea(params),
			that = Object.create(_parentObj),
			_logDecorator = "",
			_AVAILABLE_DECORATORS = ['date', 'name', 'index', 'hour', 'seconds', 'nameDate', 'indexNameDate',
				'indexName', 'indexDate', 'nameHour', 'indexNameHour', 'indexHour', 'nameDateHour', 'indexDateHour',
				'indexNameDateHour', 'nameSeconds', 'indexNameSeconds', 'indexSeconds', 'nameDateSeconds',
				'indexDateSeconds', 'indexNameDateSeconds'],
			_LINE_NUMBER_EXP = "{{ _numberOfLines }}",
			_HOURS_EXP = "{{ hours }}",
			_MINUTES_EXP = "{{ minutes }}",
			_SECONDS_EXP = "{{ seconds }}",
			_DATE_EXP = "{{ currentDate }}",
			_numberOfLines = 0;

		//PRIVATE IMPLEMENTATIONS

		function _setDecorator(value) {
			var currentDate = _DATE_EXP,
				hour = _HOURS_EXP,
				minutes = _MINUTES_EXP,
				seconds = _SECONDS_EXP,
				lineNumber = _LINE_NUMBER_EXP;

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
					_logDecorator = hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[4]:
					_logDecorator = hour + ":" + minutes + ":" + seconds + " :: ";
					break;
				case _AVAILABLE_DECORATORS[5]: //'nameDate'
					_logDecorator = _name + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[6]://'indexNameDate'
					_logDecorator = lineNumber + " :: " + _name + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[7]://'indexName'
					_logDecorator = lineNumber + " :: " + _name + " :: ";
					break;
				case _AVAILABLE_DECORATORS[8]://'indexDate'
					_logDecorator = lineNumber + " :: " + currentDate + " :: ";
					break;
				case _AVAILABLE_DECORATORS[9]://'nameHour'
					_logDecorator = _name + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[10]://'indexNameHour'
					_logDecorator = lineNumber + " :: " + _name + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[11]://'indexHour'
					_logDecorator = lineNumber + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[12]://'nameDateHour'
					_logDecorator = _name + " :: " + currentDate + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[13]://'indexDateHour'
					_logDecorator = lineNumber + " :: " + currentDate + " :: " + hour + ":" + minutes + " :: ";
					break;
				case _AVAILABLE_DECORATORS[14]://'indexNameDateHour'
					_logDecorator = lineNumber + " :: " + _name + " :: " + currentDate + " :: " + hour + ":" + minutes +
						" :: ";
					break;

				case _AVAILABLE_DECORATORS[15]://'nameSeconds'
					_logDecorator = _name + " :: " + hour + ":" + minutes + ":" + seconds + " :: ";
					break;
				case _AVAILABLE_DECORATORS[16]://'indexNameSeconds'
					_logDecorator = lineNumber + " :: " + _name + " :: " + hour + ":" + minutes + ":" + seconds + " :: ";
					break;
				case _AVAILABLE_DECORATORS[17]://'indexSeconds'
					_logDecorator = lineNumber + " :: " + hour + ":" + minutes + ":" + seconds + " :: ";
					break;
				case _AVAILABLE_DECORATORS[18]://'nameDateSeconds'
					_logDecorator = _name + " :: " + currentDate + " :: " + hour + ":" + minutes + ":" + seconds + " :: ";
					break;
				case _AVAILABLE_DECORATORS[19]://'indexDateSeconds'
					_logDecorator = lineNumber + " :: " + currentDate + " :: " + hour + ":" + minutes + ":" + seconds + " :: ";
					break;
				case _AVAILABLE_DECORATORS[20]://'indexNameDateSeconds'
					_logDecorator = lineNumber + " :: " + _name + " :: " + currentDate + " :: " + hour + ":" + minutes +
						":" + seconds + " :: ";
					break;

			}

		}

		function _createLogTxt(text) {
			decoratorText = _logDecorator;
			if(decoratorText !== "") {
				var decoratorText = _logDecorator,
					currentDate = new Date,
					hour = currentDate.getHours(),
					minutes = currentDate.getMinutes(),
					seconds = currentDate.getSeconds();
				decoratorText = decoratorText.replace(_DATE_EXP, currentDate.toDateString());
				decoratorText = decoratorText.replace(_HOURS_EXP, hour);
				decoratorText = decoratorText.replace(_MINUTES_EXP, minutes);
				decoratorText = decoratorText.replace(_SECONDS_EXP, seconds);
				decoratorText = decoratorText.replace(_LINE_NUMBER_EXP, _numberOfLines);
			}
			return decoratorText + text;
		}

		function _writeLog(htmlText, textClass) {
			var txt = htmlText;
			if(textClass) {
				txt = '<span class = "' + textClass + '">' + txt + '</span>';
			}
			_numberOfLines += 1;
			_parentObj.writeLine(_createLogTxt(txt));
		}

		function _init(params) {
			if(params) {
				if(params.element) {
					_htmlElement = params.element;
					_htmlElement.classList.add("log-component");
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