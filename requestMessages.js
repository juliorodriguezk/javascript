(	
		/**@todo This implementation should not be autoexecutable and should be called dinamically from messages implementation */	
	function(messages){
	'use strict';
		messages.REQUEST ={
			'ES':{	
				'REQUEST_STATUS':{
		 				0           : 'Peticion no inicializada',
		   				1           : 'Conexion establecida con el servidor',
		   				2           : 'Peticion recivida',
		   				3           : 'Procesando peticion',
		   				4           : 'Peticion finalizada respuesta lista'
				},
				'REQUEST_STATUS_ERRORS':{
						0           : 'Error no ha sido posible crear la peticion',
						1           : 'Error en la transicion entre estados de la peticion',
						2           : 'Error Tiempo de espera de la aplicacion termino antes de recibir respuesta'
				},				
				'REQUEST_RESPONSES':{
						'1XX'       : 'Peticion recivida continuando proceso',
						101         : 'Conmutando protocolos',
						102         : 'Procesando',
						'2XX'       : 'Peticion procesada con exito',
						200         : 'OK',
						201         : 'Creado',
						202         : 'Aceptada',
						203         : 'Información no autoritativa',
						204         : 'Sin contenido',
						205         : 'Recargar contenido',
						206         : 'Contenido parcial',
						207         : 'Estado múltiple',						
						'3XX'       : 'Redireccion',
						300         : 'Múltiples opciones',
						301         : 'Movido permanentemente',
						302         : 'Movido temporalmente',
						303         : 'Vea otra',
						304         : 'No modificado',
						305         : 'Utilice un proxy',
						306         : 'Cambie de proxy',
						307         : 'Redirección temporal',						
						'4XX'       : 'Error en el cliente',
						400         : 'Solicitud incorrecta',
						401         : 'No autorizado',
						402         : 'Pago requerido',
						403         : 'Prohibido',
						404         : 'No encontrado',
						405         : 'Método no permitido',
						406         : 'No aceptable',
						407         : 'Autenticación Proxy requerida',
						408         : 'Tiempo de espera agotado',
						409         : 'Conflicto',
						410         : 'Ya no disponible',
						411         : 'Requiere longitud',
						412         : 'Falló precondición',
						413         : 'Solicitud demasiado larga',
						414         : 'URI demasiado larga',
						415         : 'Tipo de medio no soportado',
						416         : 'Rango solicitado no disponible',
						417         : 'Falló expectativa',
						418         : 'Soy una tetera',
						422         : 'Entidad no procesable',
						423         : 'Bloqueado',
						424         : 'Falló dependencia',
						425         : 'Colección sin ordenar',
						426         : 'Actualización requerida',
						429         : 'Demasiadas peticiones',
						449         : 'Reintente con una extension microsoft',					
						'5XX'       : 'Error en el servidor',
						500         : 'Error interno',
						501         : 'No implementado',
						502         : 'Pasarela incorrecta',
						503         : 'Servicio no disponible',
						504         : 'Tiempo de espera de la pasarela agotado',
						505         : 'Versión de HTTP no soportada',
						506         : 'Variante también negocia',
						507         : 'Almacenamiento insuficiente',
						509         : 'Límite de ancho de banda excedido',
						510         : 'No extendido',
						'UNDEF'     : 'Error no definido'						
					}
				}
		};
	}
)(window.$MC.MESSAGES);