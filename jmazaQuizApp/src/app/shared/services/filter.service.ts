import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Category, CategoryAPI } from 'src/app/shared/models/category.model';
import { Filter } from 'src/app/shared/models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter = new BehaviorSubject<Filter>(new Filter());
  private url = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<CategoryAPI>(this.url).pipe(
      map((res: CategoryAPI) => {
        return res.trivia_categories
      })
    );
  }

  setFilter(filter: Filter): void {
    this.filter.next(filter);
  }

  getFilter(): Observable<Filter> {
    return this.filter.asObservable();
  }
}
