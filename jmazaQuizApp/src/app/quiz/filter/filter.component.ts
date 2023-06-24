import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';
import { Filter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter: Filter = new Filter();

  categories$?: Observable<Category[]>;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.categories$ = this.filterService.getCategories();
  }

  onCreate(): void {
    this.filterService.setFilter(this.filter);
  }
}
