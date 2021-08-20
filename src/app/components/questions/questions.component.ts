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
        'Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) y que sabremos si se llevaron a cabo con éxito o no. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca, Por ejemplo una imagen que todavía no está cargada, pero en un futuro lo estará. Si queremos que una parte del código se ejecute solo cuando la imagen esté cargada, podemos utilizar promesas.',
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
        'Significa que no es necesario indicar el tipo de dato que se guardará en una variable, es más, el tipo de una variable puede ir cambiando a lo largo de nuestro programa, pudiendo la misma variable ser numérica y luego string un par de líneas mas adelante.',
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
        'El == solo compara el valor y devuelve true si estos son iguales ejemplo: ( 1 == "1"). Mientras que el operador === compara tanto el valor como el tipo de dato, por ejemplo: ( 2 === 2)true ,(2 === "2")false.',
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
        'Undefined, es asignado por JS de forma automática como valor inicial de una variable en caso de que no le asignes un valor. En cambio el valor Null, debe ser asignado mediante el código que escribamos. Null, significa que la variable no tiene ningún valor y Undefined Es la forma en que JS dice que no sabe que es esa variable.',
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
        'Es una funcion, la cual puede acceder a variables definidas tanto dentro como fuera de esta funcion.',
    },
    {
      id: 21,
      question: '¿En P.O.O, que es la herencia?',
      answer:
        'Es el mecanismo por el cual una clase recibe o "hereda" las características (atributos y métodos) de otra clase. La herencia permite que se puedan definir nuevas clases basadas de unas ya existentes a fin de reutilizar el código, generando así una jerarquía de clases dentro de una aplicación. Si una clase deriva de otra, esta hereda sus atributos y métodos y puede añadir nuevos atributos, métodos o redefinir los heredados.',
    },
    {
      id: 22,
      question: '¿En P.O.O, que es el polimorfismo?',
      answer:
        'Es la posibilidad de definir clases diferentes que tienen métodos o atributos denominados de forma idéntica, pero que se comportan de manera distinta, debido a los parámetros utilizados durante su invocación.',
    },
    {
      id: 23,
      question: '¿En P.O.O, que es el encapsulamiento?',
      answer:
        `Es el proceso en el que organizamos los datos y metodos de una clase, restringiendo el acceso a estos por cualquier otro medio que no sea el especificado, de esta manera aseguramos la integridad de los datos del objeto. 
        para ello contamos con tres niveles de acceso "Public", "Private" y "Protected".`,
    },
    {
      id: 24,
      question: '¿Qué es una interface(P.O.O)?',
      answer:
        'Una interfaz es un conjunto de métodos abstractos y de constantes cuya funcionalidad es la de determinar el funcionamiento de una clase, es decir, funciona como un molde o como una plantilla. Al ser sus métodos abstractos estos no tiene funcionalidad alguna, sólo se definen su tipo, argumento y tipo de retorno.',
    },
    {
      id: 25,
      question: '¿Cuál es la diferencia entre "public", "private" y "protected" dentro de una clase (TS)?',
      answer:
      `Público (Public): En este nivel cualquier función de cualquier clase puede acceder a los datos o métodos de una clase que se definen con este nivel.
        Protegido (Protected): El acceso en este nivel está restringido al «público» es decir solamente son accesibles dentro de su clase y por subclases.
          Privado (Private): En este nivel se puede declarar miembros accesibles sólo para la propia clase.`,
    },
    {
      id: 26,
      question: '¿Cuál seria el beneficio de una clase que "extiende" de otra?',
      answer:
        'Podemos crear una clase hija que herede a una clase padre, adquiriendo toda su funcionalidad y añadiendo la suya propia.',
    },
    {
      id: 27,
      question: '¿Cuál es el beneficio de que una clase herede de una interface?',
      answer:
        'El beneficio es que una clase puede implementar más de una interface.',
    },
    {
      id: 28,
      question: '¿Qué es una "clase abstracta"?',
      answer:
        'Las clases abstractas son aquellas que por sí mismas no se pueden identificar con algo "concreto" (no existen como tal en el mundo real), pero sí poseen determinadas características que son comunes en otras clases que pueden ser creadas a partir de ellas. Ej: Vehiculo',
    },
  ];
  // Para controlar la asincronia en Javascript, es decir, para definir en qué momentos sí hay que bloquear la ejecución del código hasta obtener una respuesta, contamos con mecanismos tales como: callbacks, promesas(ES6), async/await (que es "sugar sintax" para hacer más sencillo el uso de promesas en el código).
  constructor() {}

  ngOnInit(): void {}
}
