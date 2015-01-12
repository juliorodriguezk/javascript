/*
Pruebas iniciales javascript
*/
(function(moduleContext){
	var proto, log;

	moduleContext.BASIC = function(){
		'use strict';
		this.moduleName = 'BASIC';
	    this.VERBOSE = true;
	    this.MONITORIZE = true;
	};
	proto = moduleContext.BASIC.prototype;

	proto.toString = function(){
		'use strict';
		return  '[MCObject ' + this.moduleName + ']';
	};

	proto.log = function (module, messageKind, message){
		'use strict';
		if (this.VERBOSE){
			try{
				console.log (message);
			}catch(e){
				alert(message);
			}
		}
	};
	proto.setModuleName = function (name){
		'use strict';
		if (arguments.length > 0 && typeof name === 'string'){
			this.moduleName = name;
		}
		return this.moduleName;
	};
	proto.getModuleName = function (){
		'use strict';
		return this.moduleName;
	};		
	proto.toggleDebug = function (){
		'use strict';
		this.VERBOSE = !this.VERBOSE;
	};
	proto.toggleMonitorize = function (){
		'use strict';
		this.MONITORIZE = !this.MONITORIZE;
	};	
	}
)(window.$MC);