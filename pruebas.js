/*
Pruebas iniciales javascript
*/
/*var PRUEBA_REQUEST0 = new $MC.Request(), PRUEBA_REQUEST1 = new $MC.Request(),PRUEBA_REQUEST2 = new $MC.Request();
var PRUEBA_MESSAGE0 = new $MC.Request(), PRUEBA_REQUEST1 = new $MC.Request(),PRUEBA_REQUEST2 = new $MC.Request();
PRUEBA_REQUEST0.test('test1');
PRUEBA_REQUEST1.test('test2');
PRUEBA_REQUEST2.test('test3');
*/
/*
var msgs = $MC.MESSAGES, toPrint = "";

console.log("TEST");
toPrint = msgs.getLanguage();
console.log(toPrint);
console.log("NOT VALID CASES SHOULD RETURN \"\"");
msgs.getMessage();
msgs.getMessage(null);
msgs.getMessage(undefined);
msgs.getMessage(1);
msgs.getMessage("1");
msgs.getMessage([]);
msgs.getMessage({});
msgs.getMessage(1, 2);
msgs.getMessage(1, "2");
msgs.getMessage("1", 2);
msgs.getMessage("1", "2");
msgs.getMessage(1, 2, 3);
msgs.getMessage(1, 2, "3");
msgs.getMessage(1, "2", 3);
msgs.getMessage(1, "2", "3");
msgs.getMessage("1", 2, 3);
msgs.getMessage("1", 2, "3");
msgs.getMessage("1", "2", 3);
msgs.getMessage("1", "2", "3");
msgs.getMessage("1", "2", "3", 1);
msgs.getMessage("1", "2", "3", "1");
msgs.getMessage("NONEXIST", "NONEXIST", "NONEXIST");
msgs.getMessage(null, null, null);
msgs.getMessage(null, null, undefined);
msgs.getMessage(null, undefined, undefined);
msgs.getMessage(undefined, null, null);
msgs.getMessage(undefined, null, undefined);
msgs.getMessage(undefined, undefined, null);
msgs.getMessage(undefined, undefined, undefined);
msgs.getMessage("BASIC", "NONEXIST");
msgs.getMessage("BASIC", "GENERIC");
msgs.getMessage("BASIC", "NONEXIST", "SMESSAGE");
msgs.getMessage("BASIC", "NONEXIST", "NONEXIST");
msgs.getMessage("BASIC", "GENERIC", "NONEXIST");
*/
function test(){
'use strict';
var test = new window.$MC.BASIC();
console.log(test.toString());
}



