import { Component, OnInit } from '@angular/core';

interface Question{
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [
    { id: 1, question: 'Cómo se declara una variable en JS?', answer: 'JavaScript tiene tres tipos de declaraciones de variables: 1)var Declara una variable, opcionalmente la inicia a un valor, 2)let Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor, 3)const Declara un nombre de constante de sólo lectura y ámbito de bloque'},
    { id: 2, question: 'Qué es la asincronía?', answer: 'Es la ocurrencia de eventos independientes del flujo principal del programa. La programación asíncrona nos da la capacidad de “diferir” la ejecución de una función a la espera de que se complete una operación, normalmente de I/O (red, disco duro, …), y así evitar bloquear la ejecución hasta que se haya completado la tarea en cuestión. En un modelo asincrónico, el código se ejecuta sin bloquear el hilo principal de ejecución, es decir que, al ejecutarse una operación asíncrona, no se esperará el resultado, sino que se seguirán ejecutando las lineas de código siguientes.'},
    { id: 3, question: 'Cómo manejar la asincronía en JS?', answer: 'En JavaScript las formas de manejar la asincronía son: 1)Callbacks, 2) Promesas, 3)Async/Await'},
    { id: 4, question: 'Qué es el package.json?', answer: 'Es un archivo que contiene informacion sobre el proyecto como por ejemplo: nombre, version, descripcion, scripts definidos, autor y las dependencias del mismo.'},
    { id: 5, question: 'Qué es NPM?', answer: 'NPM (Node Package Manager) es un gestor de modulos o paquetes de Node, npm nos ayuda a administrar modulos, distribuir paquetes y agregar dependencias de una manera sencilla en nuestros proyectos'},
    { id: 6, question: 'Qué es Ecmascript?', answer: 'Es la especificación definida para crear un lenguaje de scripting de propósito general. ECMAScript proporciona las reglas, detalles y directrices que un lenguaje de scripting debe seguir, para que se considere que cumple con dicha especificación. Javascript es uno de los lenguajes de scripting, que se ajusta a la especificación ECMAScript.'},
    { id: 7, question: 'Qué es un middleware en express?', answer: 'Un middleware es una funcion que se puede ejecutar antes o despues del manejo de una ruta. Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validaciones de datos, etc.'},
    { id: 8, question: 'Qué librerias han usado para hacer el flow de autenticación?', answer: 'bcrypt: para hashear las contraseñas y luego validarlas, autenticacion con session: express-session,  cookie-parser, autenticacion con JWT: jwt'},
    { id: 9, question: 'Qué es una clase?', answer: 'Una clase es la forma de definir una colección de objetos permitiendo que éstos posean los mismos atributos y métodos.'},
    { id: 10, question: 'Cómo crear una instancia de una clase?', answer: 'Mediante el operador "new" seguido por el nombre de una clase ya declarada anteriormente. asi obtendremos un nuevo objeto el cual tendrá los atributos de la clase a la cual hace referencia el constructor. ejemplo: new Auto()'},
    
  ]
  // Para controlar la asincronia en Javascript, es decir, para definir en qué momentos sí hay que bloquear la ejecución del código hasta obtener una respuesta, contamos con mecanismos tales como: callbacks, promesas(ES6), async/await (que es "sugar sintax" para hacer más sencillo el uso de promesas en el código).
  constructor() { }

  ngOnInit(): void {
  }

}
