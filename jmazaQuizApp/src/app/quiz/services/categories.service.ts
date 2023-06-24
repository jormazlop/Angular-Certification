import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Category, CategoryAPI } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<CategoryAPI>(this.url).pipe(
      map(res => {
        return res.trivia_categories
      })
    );
  }
}
