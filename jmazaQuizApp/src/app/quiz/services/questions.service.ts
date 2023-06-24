import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Filter } from 'src/app/shared/models/filter.model';
import { Question, QuestionAPI } from 'src/app/shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private url = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) { }

  getQuestions(filter: Filter): Observable<Question[]> {

    const url = `https://opentdb.com/api.php?amount=5&category=${filter.category}&difficulty=${filter.difficulty}&type=multiple`;

    return this.http.get<QuestionAPI>(url).pipe(
      map((res: QuestionAPI) => {
        return res.results;
      })
    );
  }

}
