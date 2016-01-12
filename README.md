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
        
##  Alternativa OO al switch o if else con lógica asociada
        var asociaciones = {
            "funcionA": hazAlgo,
            "funcionB": hazOtraCosa,
            "funcionC": hazOtraCosa,
            "defecto" : hazPorDefecto,
        };

        (asociaciones.hasOwnProperty( valor ) && typeof asociaciones [ valor ] === "function")? asociaciones[ valor ](): asociaciones[ "defecto" ]();

Más info en 
http://www.nikola-breznjak.com/blog/javascript/converting-a-javascript-switch-statement-into-a-function-lookup/
https://coderwall.com/p/6e7rea/consider-lookup-tables-instead-of-switch-or-if-else

##  Activar y desactivar css usando querySelector && disabled

#  ECMAScript6

## Constantes

    const MICONSTANTE = 31.27;

Si declaramos una constante y le asignamos un valor objeto los valores del objeto se pueden cambiar

## Variables y funciones de bloque

    let variable;
    {
        function miFuncion(){ return "padre";}
            miFuncion(); //"padre"
            {
                function miFuncion(){return "anidada";}
                miFuncion(); //"anidada"
            }
            miFuncion(); //"padre"
        }
    }

## Arrow functions
    
    /* Definición de funciones */
    
    parametro => parametro + 1; //Equivale a function(parametro){ return parametro +1;}
    (parametroA, parametroB) => parametro + parametroB; //Equivale a function(parametroA, parametroB){ return parametroA + parametroB;}
    
## Asignación de parámetros por defecto

    function miFuncion (x, y = 7, z = 1){
        return x +y + z;
    }
    miFuncion(2);//10
    
## Resto de parámetros

    function miFuncion (x, y, ...otros){
        return otros.length;
    }
    miFuncion(1, 2, true, [1,2,3,4,5], {"obj": "a"}); //3
    var resto = [3, 4, 5]
    var miArray = [1, 2, ...resto];//[1,2,3,4,5]
    
## Interpolación strings

    var persona = {nombre: "John", apellido: "Doe", trabajo: "programador"};
    var presentación = ' Hola, soy ${persona.nombre} ${persona.apellido} y trabajo de ${persona.trabajo}';
    
## Definición y asignación de objetos

    var obj = {x, y}; //Se puede omitir el x:valor;
    var obj = {prop1: 1, ["prop_" + generaIndice()]: 2}; //Se puede llamar a funciones para definir los índices
    var obj = {mi_atributo(param1, param2){ return 1;}}; {mi_atributo : 1}
    
## Acceso a parámetros

    function ([a, b], {nombre: valor}){
        console.log(a + ": " + nombre + " " + valor);
    }

## Exportar e importar valores y funciones

    // lib/miLibreria.js
    export var miValor = 100;
    export function diParametro (parametro){console.log(parametro ? parametro : "pasa un parámetro válido");}
    
    // miAplicacion.js
    
    import * as miLib from "lib/miLibreria";
    diParametro(miLib.miValor); // 100
    
    import {valor} as miLib from "lib/miLibreria"
    diParametro(miLib.miValor); // "pasa un parámetro válido"
