window.$MC = Object.create?Object.create(null):{__proto__:null};
(
function(myContext){
	var proto;
	myContext.mcConfiguration = {
		'APP_NAME': 'DEMO'
	};
	myContext.objectsStructure = {
		'BASIC'  	: true,
		'MESSAGES'  : false,
		'UTILS':{
			'NETWORKING':{
				'REQUESTS': false
			}
		},
		'MODELS'    : false,
		'VIEWS'     : false,
		'CONTROLERS': false		
	};

	myContext.objectsUrls ={
		'BASIC':{
			'SOURCES': ['basic.js'],
		},			
		'REQUESTS':{
			'SOURCES': ['request.js'],
			'LANGS'  : ['requestMessages.js'],
			'HELPERS': [],
			'STYLES' : []
		},
		'MESSAGES':{
			'SOURCES': ['messages.js'],
		}		
	};

	function createEmptyObject(){
		'use strict';
		var obj = Object.create?Object.create(null):{__proto__:null};
		return obj;
	}

	function freeObject(obj){
		'use strict';
		var key;
			if(typeof obj === 'object'){
				for (key in obj){
					if(typeof obj[key] === 'object'){
						freeObject(obj[key]);
					}
					delete obj[key];
				}
		}
	}

	function addScript (src, filetype){
		'use strict';
		var node; 
		if (filetype==='js'){
   			node=document.createElement('script');
  			node.setAttribute('type','text/javascript');
       		node.setAttribute('src', src);
 		}
 		else if (filetype==='css'){
   			node=document.createElement('link');
  			node.setAttribute('rel', 'stylesheet');
  			node.setAttribute('type', 'text/css');
  			node.setAttribute('href', src);
 		}
 		if (typeof node!== undefined){
  			document.getElementsByTagName('head')[0].appendChild(node);
 		}
	}

	function addSources(source){
		'use strict';
		var key, sourceType, structure;
		structure = this.objectsUrls[source];
		if (structure){
			for (key in structure){
				switch(key){
					case 'SOURCES':
					case 'LANGS':
					case 'HELPERS':
						sourceType = 'js';
						break;
					case 'STYLES':
						sourceType = 'css';					
						break;
				}
			    structure[key].forEach(function(sourceToAdd){
			    	addScript(sourceToAdd, sourceType);	
			    });
			}
		}
	}
	function createStructure (structure){
		var key;
		for (key in structure){
			if(!this[key]){
				this[key] = createEmptyObject();
			}

			if (typeof structure[key] === 'boolean' && structure[key] === true){
				addSources.call(myContext, key);
			}
			else{
				createStructure.call(this[key], structure[key]);				
			}
		}
		return true;
	}

	function init(){
		'use strict';
		createStructure.call(myContext, myContext.objectsStructure);
		freeObject(myContext.objectsStructure);
		delete myContext.objectsStructure;
		freeObject(myContext.objectsUrls);
		delete myContext.objectsUrls;
	}
	init();
}
)(window.$MC);













 