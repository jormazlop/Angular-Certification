import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter.model';
import { Question, QuestionAPI } from 'src/app/shared/models/question.model';
import { Answer, AnswerList } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  answerList = new AnswerList();

  answerList$ = new BehaviorSubject<AnswerList>(this.answerList);

  questionList: Question[] = [];

  constructor(private http: HttpClient) {}

  generateNewQuestions(filter: Filter): Observable<Question[]> {

    const url = `https://opentdb.com/api.php?amount=5&category=${filter.category}&difficulty=${filter.difficulty}&type=multiple`;

    return this.http.get<QuestionAPI>(url).pipe(
      map((res: QuestionAPI) => {
        this.questionList = res.results;
        return res.results;
      })
    );
  }

  getQuestions(): Question[] {
    return this.questionList;
  }

  getAnswerList(): Observable<AnswerList> {
    return this.answerList$.asObservable();
  }

  updateAnswerList(answer: Answer): void {
    this.answerList.answerList[answer.id] = answer;
    this.answerList$.next(this.answerList);
  }

}
