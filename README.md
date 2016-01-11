javascript
==========
# Clases autoejecutables javascript

## Esquema de la clase 
    var $CONTENEDOR_OBJETOS = $CONTENEDOR_OBJETOS || {};
    (function(namespace) {

     /*Constructor*/
     var Nombre_de_la_clase = function(parametrosInic) {
        this.nombre_del_atributo = valor_inicial_atributo;
     };

     /*Variables privadas del objeto, si se modifican afectan a todas
       las nuevas instancias, pueden ser usadas para declarar constanttes
       privadas o variables que cambien globalmente para toda las instancias
       de la clase, si la clase es extendida no son accesibles
     */
     var nombre_de_la_variable_privada = valor;

     /*Métodos privados sin acceso al objeto this hay que 
       pasarlo como parametro si se necesita
       si la clase es extendida no son accesibles
     */

     var nombre_metodo_privado = function( parametros ){
       //Codigo del método privado
     }
     /* Atajo prototype para los métodos*/
     var proto = Nombre_de_la_clase.prototype;

     /* CONSTANTES PÚBLICAS DE LA CLASE */
     proto.NOMBRE_DE_LA_CONSTANTE = valor_de_la_constante;

     /* MÉTODOS PÚBLICOS DE LA CLASE */
     proto.nombre_del_metodo = function (parametros){
     //Código a ejecutar;
     };

     /*Añadirlo al contenedor para poder crear instancias*/
     namespace.Nombre_de_la_clase_para_llamar = Nombre_de_la_clase;

    )($CONTENEDOR_OBJETOS)

## Crear una instancia en el código
    var instancia = new namespace.Nombre_de_la_clase_para_llamar(parametrosInic);
    
## Comprobar si una propiedad pertenece a un objeto
    /* Comprobar en el propio objeto NO en los prototypes heredados*/
    var pertenece = Objeto.hasOwnProperty('propiedad_a_comprobar');
    
    /* Comprobar en el propio objeto O en los prototypes heredados*/
    var pertenece = 'propiedad_a_comprobar' in Objeto;
    
    /*En el siguiente caso:/
    var Objeto = {'nombre': 'Julio'};
        Objeto.hasOwnProperty('nombre'); //true
        'nombre' in Objeto: //true
        Objeto.hasOwnProperty('valueOf'); //false
        'valueOf' in Objeto: //true    
