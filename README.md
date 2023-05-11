javascript
==========
# Conceptos generales


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
    
## Cors arreglo servidor
    const headers = new Headers();
    Headers.set('Access-Control-Allow-Origin', '*'');
    return new Response ('ok', {headers, status:200})

    Express manualmente
    res.writeHead(200, {'Access-Control-Allow-Origin': '*''})


    Exppress middleware
    import cors from 'cors';
    const app = express();
    app.use(cors());
