/*
Pruebas iniciales javascript
*/
(	function(moduleContext){
	var proto;

	moduleContext.UTILS.NETWORKING.REQUEST = function(){
		this.moduleName = "REQUEST";
		this.monitorId = null;
		this.successCallback = null;
		this.errorCallback = null;
		this.timedOutCallback = null;
		this.startRequestCallback = null;
		this.xmlhttp = null;
		/**
		 * [0] Request not initialized
		   [1] server connection established
		   [2] request received
		   [3] processing request
		   [4] request finished and response is ready
		 * @type {Array}
		 */
		this.statusVisited = [false,false,false,false,false];
	};
	//moduleContext.Request.prototype = 

	proto = moduleContext.UTILS.NETWORKING.REQUEST.prototype;	
	proto.REQUEST_TIMEOUT = 0;

/*
	createRequest = function(){
		try{
			if (window.XMLHttpRequest)
		  	{// code for IE7+, Firefox, Chrome, Opera, Safari
		  		this.xmlhttp=new XMLHttpRequest();
		  	}
			else
		  	{// code for IE6, IE5
			  	this.xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  	}	
		}catch(e){
			log(e);
		}
	};
	openRequest = function(){
	};
	sendRequest = function(){
	};
	addParameter = function(){
	};
	addHeader = function(){
	};
	addCallback = function(){
	};
	handleStatusChange = function(){
	this.xmlhttp.onreadystatechange=function()
  		{	
  			this.statusVisited[this.xmlhttp.readyState] = true);
			if (this.xmlhttp.readyState && this.statusVisited[this.xmlhttp.readyState - 1]){
  			if (this.xmlhttp.readyState === 4 )
  				switch(Math.floor(this.xmlhttp.status/100)){
  					case 1:
  					case 2:
  					case 3:
  					case 4:
  					case 5:
  					default:
  					break;
  				}
    		
  		}else{
  			log();
  		} 		
	};
	handleResponse = function(){
	};
	destroyRequest = function(){
		this.xmlhttp.abort();
	};
*/
	proto.toggleDebug = function (){
		this.VERBOSE = !this.VERBOSE;
	};
	proto.toggleMonitorize = function (){
		this.MONITORIZE = !this.MONITORIZE;
	};	
	proto.setRequestTimeOut = function (ms){
		if (typeof ms === 'number'){
			this.REQUEST_TIMEOUT = Math.floor(ms);
		}else{
			log.call(this, INFO.ERROR.NOT_NUMBER);
		}
	};
	proto.doRequest = function (kind, url, parameters){
		if (arguments.length < 2){

		}
	};	
	}
)(window.$MC);