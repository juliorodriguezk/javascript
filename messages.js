(
	function(messages){
		'use strict';
		var proto;
		messages.BASIC ={
			'INHERIT'               : null,
			'ES':{
				'GENERIC':{
					'LANG'          : 'El idioma seleccionado es',
					'KEY'           : 'El valor asociado a tu peticion es',
					'MESSAGE'       : 'La clase de mensaje es',
					'SMESSAGE'      : 'El mensaje solicitado es'					
				},
				'GENERIC_ERRORS':{
					'LANG_NA'       : 'El idioma seleccionado no esta disponible',
					'KEY_NA'        : 'La clave buscada no esta definida',
					'MESSAGE_NA'    : 'La clase solicitada no esta definida',
					'SMESSAGE_NA'   : 'El mensaje solicitado no esta definido',
					'NOT_DEF'       : 'Error generico no definido'

				},
				'TYPE':{
						'NOT_NUMBER': 'Tipo numero',
						'NOT_STRING': 'Tipo cadena de caracteres',
						'NOT_BOOL'  : 'Tipo booleano',
						'NOT_CHAR'  : 'Tipo caracter',
						'NOT_OBJECT': 'Tipo objeto',
						'NOT_FUNC'  : 'Tipo funcion'
				},	
				'TYPE_ERRORS':{
						'NOT_NUMBER': 'El valor recibido no es un numero',
						'NOT_STRING': 'El valor recibido no es una cadena de caracteres',
						'NOT_BOOL'  : 'El valor recibido no es un booleano',
						'NOT_CHAR'  : 'El valor recibido no es un caracter',
						'NOT_OBJECT': 'El valor recibido no es un objeto',
						'NOT_FUNC'  : 'El valor recibido no es una funcion',
						'NOT_OK'    : 'El valor recibido no es correcto o falta'
				}
			}
		};
		
		proto = messages.constructor.prototype;
		
		proto.LANG = 'ES';
		proto.ROOT_MODULE = 'BASIC';

		proto.setLanguage = function (language){
			if (arguments.length > 0 && typeof name === 'string'){
				if(this.BASIC[language]){		
					this.LANG = language;
				}
			}
			return this.LANG; 			
		};
		proto.getLanguage = function (){
			return this.LANG; 			
		};		

		proto.getMessage = function (module, messageKind, message){
			var checkInherit = null, msg = '';
			if(arguments.length === 3 && typeof module === 'string'&& typeof messageKind === 'string' && typeof message === 'string'){
				if (!this[module]){
					checkInherit = this.ROOT_MODULE;
				}else if (!this[module][messages.getLanguage()]){
					if(module !== this.ROOT_MODULE){
						checkInherit = this[module].INHERIT ? this[module].INHERIT:this.ROOT_MODULE;
					}
				}else if (!this[module][messages.getLanguage()][messageKind]){
					if(module !== this.ROOT_MODULE){
						checkInherit = this[module].INHERIT ? this[module].INHERIT:this.ROOT_MODULE;
					}			
				}else if (!this[module][messages.getLanguage()][messageKind][message]){
					if(module !== this.ROOT_MODULE){
						checkInherit = this[module].INHERIT ? this[module].INHERIT:this.ROOT_MODULE;
					}		
				}else if(this[module][messages.getLanguage()][messageKind][message]){
					msg = this[module][messages.getLanguage()][messageKind][message];
				}
			}
			if(checkInherit){
				return this.getMessage(checkInherit, messageKind, message);
			}else{
				return msg;
			}
		};
		
		proto.getMessageInOtherLang = function (language, module, messageKind, message){
			var prevLang = this.getLanguage(), msg;
			if(this.setLanguage(language) === language){
				msg = this.getMessage(module, messageKind, message);
				this.setLanguage(prevLang);
			}else{
				msg = this.getMessage(this.ROOT_MODULE, 'GENERIC_ERRORS', 'LANG_NA');
			}
		};		
	}
)(window.$MC.MESSAGES);