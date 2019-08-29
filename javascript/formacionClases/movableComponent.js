var $COMPONENTFRAMEWORK = $COMPONENTFRAMEWORK || {};
$COMPONENTFRAMEWORK.movableComponent = (function() {
	return function(params) {
		'use strict';
		var _htmlElement = params.element,
			_parentObj = $COMPONENTFRAMEWORK.executableComponent(params),
			that = Object.create(_parentObj), //Initialize object to empty
			_stepSize = 1,
			_UP = 'up',
			_DOWN = 'down',
			_LEFT = 'left',
			_RIGHT = 'right',
			_moveAction = function() {
			},
			_moveInterval = null;

		//START PRIVATE FUNCTIONS
		function _setStepSize(value) {
			if(typeof value === 'number') {
				_stepSize = value;
			}
		}

		function _setMoveAction(value) {
			if(typeof value === 'function') {
				_moveAction = value;
			}
		}

		function _move(direction, performAction) {
			var compData = that.getComponentData(),
				x, y;
			switch(direction) {
				case _UP:
					y = compData.y - _stepSize;
					break;
				case _DOWN:
					y = compData.y + _stepSize;
					break;
				case _RIGHT:
					x = compData.x + _stepSize;
					break;
				case _LEFT:
					x = compData.x - _stepSize;
					break;
			}
			that.setPosition(x, y);
			if(performAction) {
				_moveAction(direction);
			}
		}

		function _moveX(value, performAction) {
			var direction = value ? _LEFT : _RIGHT;
			_move(direction, performAction);
		}

		function _moveY(value, performAction) {
			var direction = value ? _DOWN : _UP;
			_move(direction, performAction);
		}

		function _startMoveInterval(moveObj, milliseconds) {
			if(_moveInterval !== null) {
				_stopMoveInterval();
			}
			_moveInterval = setInterval(that.move, milliseconds || 1000, moveObj);
		}

		function _stopMoveInterval() {
			if(_moveInterval !== null) {
				clearInterval(_moveInterval);
				_moveInterval = null;
			}
		}

		function _init(params) {
			if(params.stepSize) {
				_setStepSize(params.stepSize);
			}
			if(params.moveAction) {
				_setMoveAction(params.moveAction);
			}
		}

		//INITIALIZE OBJECT
		_init(params);

		//ADD PUBLIC FUNCTIONS
		that.moveX = function(leftDirection) {
			_moveX(leftDirection, true);
		};

		that.moveY = function(downDirection) {
			_moveY(downDirection, true);
		};

		that.moveXY = function(leftDirection, downDirection) {
			_moveX(leftDirection, false);
			_moveY(downDirection, true);
		};

		/**
		 * @param moveObject =
		 * { times : Number,  //Number of movements default = 1
		 *   moveX : Boolean, // if true move in X axis default false
		 *   moveY : Boolean, // if true move in Y axis default false
		 *   left  : Boolean, // if move in X axis move in left direction default false
		 *   down : Boolean   // if move in Y axis move in down direction  default false
		 * }
		 */
		that.move = function(moveObject) {
			var counter = 0,
				times,
				executeMoveAction;

			if(!moveObject) {
				moveObject = {};
			}
			times = moveObject.times || 1;
			for(counter; counter <= times; counter += 1) {
				if(moveObject.moveX) {
					executeMoveAction = (counter === times && !moveObject.moveY);
					_moveX(moveObject.left, executeMoveAction);
				}
				if(moveObject.moveY) {
					executeMoveAction = counter === times;
					_moveY(moveObject.down, executeMoveAction);
				}
			}
		};

		that.startMoveInterval = function(moveObject, milliseconds) {
			_startMoveInterval(moveObject, milliseconds);
		};

		that.stopMoveInterval = function() {
			_stopMoveInterval();
		};

		//RETURN PUBLIC OBJECT
		return that;
	}
}());