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
    { id: 1, question: 'Cómo se declara una variable en JS?', answer: 'Answer'},
    { id: 2, question: 'Qué es la asincronía?', answer: 'Answer'},
    { id: 3, question: 'Cómo manejar la asincronía en JS?', answer: 'Answer'},
    { id: 4, question: 'Qué es el package.json?', answer: 'Answer'},
    { id: 5, question: 'Qué es NPM?', answer: 'Answer'},
    { id: 6, question: 'Qué es Ecmascript?', answer: 'Answer'},
    { id: 7, question: 'Qué es un middleware en express?', answer: 'Answer'},
    { id: 8, question: 'Qué librerias han usado para hacer el flow de autenticación?', answer: 'Answer'},
    { id: 9, question: 'Qué es una clase?', answer: 'Answer'},
    { id: 10, question: 'Qué como crear una instancia de una clase?', answer: 'Answer'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
