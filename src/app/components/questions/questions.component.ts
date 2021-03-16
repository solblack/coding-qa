import { Component, OnInit } from '@angular/core';

interface Question {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [
    {
      id: 1,
      question: 'Cómo se declara una variable en JS?',
      answer:
        'JavaScript tiene tres tipos de declaraciones de variables: 1)var Declara una variable, opcionalmente la inicia a un valor, 2)let Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor, 3)const Declara un nombre de constante de sólo lectura y ámbito de bloque',
    },
    {
      id: 2,
      question: 'Qué es la asincronía?',
      answer:
        'Es la ocurrencia de eventos independientes del flujo principal del programa. La programación asíncrona nos da la capacidad de “diferir” la ejecución de una función a la espera de que se complete una operación, normalmente de I/O (red, disco duro, …), y así evitar bloquear la ejecución hasta que se haya completado la tarea en cuestión. En un modelo asincrónico, el código se ejecuta sin bloquear el hilo principal de ejecución, es decir que, al ejecutarse una operación asíncrona, no se esperará el resultado, sino que se seguirán ejecutando las lineas de código siguientes.',
    },
    {
      id: 3,
      question: 'Cómo manejar la asincronía en JS?',
      answer:
        'En JavaScript las formas de manejar la asincronía son: 1)Callbacks, 2) Promesas, 3)Async/Await',
    },
    {
      id: 4,
      question: 'Qué es el package.json?',
      answer:
        'Es un archivo que contiene informacion sobre el proyecto como por ejemplo: nombre, version, descripcion, scripts definidos, autor y las dependencias del mismo.',
    },
    {
      id: 5,
      question: 'Qué es NPM?',
      answer:
        'NPM (Node Package Manager) es un gestor de modulos o paquetes de Node, npm nos ayuda a administrar modulos, distribuir paquetes y agregar dependencias de una manera sencilla en nuestros proyectos',
    },
    {
      id: 6,
      question: 'Qué es Ecmascript?',
      answer:
        'Es la especificación definida para crear un lenguaje de scripting de propósito general. ECMAScript proporciona las reglas, detalles y directrices que un lenguaje de scripting debe seguir, para que se considere que cumple con dicha especificación. Javascript es uno de los lenguajes de scripting, que se ajusta a la especificación ECMAScript.',
    },
    {
      id: 7,
      question: 'Qué es un middleware en express?',
      answer:
        'Un middleware es una funcion que se puede ejecutar antes o despues del manejo de una ruta. Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validaciones de datos, etc.',
    },
    {
      id: 8,
      question: 'Qué librerias han usado para hacer el flow de autenticación?',
      answer:
        'bcrypt: para hashear las contraseñas y luego validarlas, autenticacion con session: express-session,  cookie-parser, autenticacion con JWT: jwt',
    },
    {
      id: 9,
      question: 'Qué es una clase?',
      answer:
        'Una clase es una plantilla para la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos. Cada clase es un modelo que define un conjunto de variables (el estado), y métodos apropiados para operar con dichos datos (el comportamiento). Cada objeto creado a partir de la clase se denomina instancia de la clase.',
    },
    {
      id: 10,
      question: 'Cómo crear una instancia de una clase?',
      answer:
        'Mediante el operador "new" seguido por el nombre de una clase ya declarada anteriormente. asi obtendremos un nuevo objeto el cual tendrá los atributos de la clase a la cual hace referencia el constructor. ejemplo: new Auto()',
    },
    {
      id: 11,
      question: '¿Qué es el “modo estricto” de JavaScript y cómo se implementa?',
      answer:
        'El uso de la directiva "use strict" previene que se tomen ciertas acciones o medidas y muestra más excepciones. Para utilizar el Modo Estricto lo único que tenemos que hacer es agregar la frase entre comillas «use strict». El caso más común (y popular) es cuando se aplica a nivel de archivo (la frase está arriba del todo en nuestro archivo), pero también se puede aplicar a una función específica',
    },
    {
      id: 12,
      question: '¿Qué es una promesa en Javascript?',
      answer:
        'answer',
    },
    {
      id: 13,
      question: '¿Qué es un callback?',
      answer:
        'Un Callback es una función que se pasa como parámetro en otra función. El callback se ejecutará después de que esa función haya terminado de ejecutarse',
    },
    {
      id: 14,
      question: '¿Qué significa que Javascript sea Dynamic Type o de tipado dinámico?',
      answer:
        'answer',
    },
    {
      id: 15,
      question: '¿Qué es IIFE (o función auto-invocada) y para qué sirve?',
      answer:
        'Es un patrón en JavaScript que ejecuta una función tan pronto como se declara. Esto se conoce como una expresión de función inmediatamente invocada o patrón auto ejecutable, y sencillamente hace que una función se ejecute inmediatamente. Se utiliza básicamente para evitar el conflicto de nombres. Las variables u objetos declarados no son accesibles fuera de esta función',
    },
    {
      id: 16,
      question: '¿Cuál es la diferencia entre == y ===?',
      answer:
        'answer',
    },
    {
      id: 17,
      question: '¿Cuál es la diferencia entre "var", "let" y "const"?',
      answer:
        'CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro. VAR: Es una variable que SI puede cambiar su valor y su ámbito es local. LET: Es una variable que también podra cambiar su valor, pero solo funcionará en el bloque donde fue declarada.',
    },
    {
      id: 18,
      question: 'Cuál es la diferencia entre "null" y "undefined"?',
      answer:
        'answer',
    },
    {
      id: 19,
      question: 'Cuál es la diferencia entre "declaración de función" y "expresión de función"?',
      answer:
        'La declaración de función se encuentra en el ámbito global a todo el programa (p.ej: function sumar(a,b){return a + b;}) Al contrario, con la expresión de función, que sólo corresponde a una sección definida del programa (p.ej: let sumar = function(a,b){return a + b;})',
    },
    {
      id: 20,
      question: '¿Qué es un "clojure"?',
      answer:
        'answer',
    },
  ];
  // Para controlar la asincronia en Javascript, es decir, para definir en qué momentos sí hay que bloquear la ejecución del código hasta obtener una respuesta, contamos con mecanismos tales como: callbacks, promesas(ES6), async/await (que es "sugar sintax" para hacer más sencillo el uso de promesas en el código).
  constructor() {}

  ngOnInit(): void {}
}
