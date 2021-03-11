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
    { id: 2, question: 'Qué es la asincronía?', answer: 'Answer'},
    { id: 3, question: 'Cómo manejar la asincronía en JS?', answer: 'En JavaScript las formas de manejar la asincronía son: 1)Callbacks, 2) Promesas, 3)Async/Await'},
    { id: 4, question: 'Qué es el package.json?', answer: 'Answer'},
    { id: 5, question: 'Qué es NPM?', answer: 'NPM (Node Package Manager) es un gestor de modulos o paquetes de Node, npm nos ayuda a administrar modulos, distribuir paquetes y agregar dependencias de una manera sencilla en nuestros proyectos'},
    { id: 6, question: 'Qué es Ecmascript?', answer: 'Answer'},
    { id: 7, question: 'Qué es un middleware en express?', answer: 'Un middleware es una funcion que se puede ejecutar antes o despues del manejo de una ruta. Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validaciones de datos, etc.'},
    { id: 8, question: 'Qué librerias han usado para hacer el flow de autenticación?', answer: 'Answer'},
    { id: 9, question: 'Qué es una clase?', answer: 'Una clase es la forma de definir una colección de objetos permitiendo que éstos posean los mismos atributos y métodos.'},
    { id: 10, question: 'Qué como crear una instancia de una clase?', answer: 'Answer'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
