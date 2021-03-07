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
    { id: 2, question: 'Qué es la asincronía?', answer: 'Answer'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
