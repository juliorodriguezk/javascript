/*
Pruebas iniciales javascript
*/
$MC = window.$MC ||	{};
(	function(moduleContext){
	var proto, log;

	moduleContext.Request = function(){
		this.monitorId = null;
		this.successCallback = null;
		this.errorCallback = null;
		this.timedOutCallback = null;
	};
	
	proto = moduleContext.Request.prototype;	

	proto.REQUEST_TIMEOUT = 0;
	proto.VERBOSE = true;
	proto.MONITORIZE = true;

	log = function (message){
		if (this.VERBOSE){
			console.log (message);
		}
	}

	proto.toggleDebug = function (){
		this.VERBOSE = !this.VERBOSE;
	};
	proto.toggleMonitorize = function (){
		this.MONITORIZE = !this.MONITORIZE;
	};	
	proto.setRequestTimeOut = function (ms){
		if (typeOf ms === 'number'){
			proto.REQUEST_TIMEOUT = Math.floor(ms);
		}else{
			log.call(this, INFO.ERROR.NOT_NUMBER);
		}
		}
	};
	}
)($MC)