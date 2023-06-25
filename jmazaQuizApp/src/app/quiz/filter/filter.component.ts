import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../shared/services/filter.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';
import { Filter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories$?: Observable<Category[]>;
  filter: Filter = new Filter();

  constructor(private filterService: FilterService) {}

  isCreationDisabled(): boolean {
    return this.filter.category == 0 || this.filter.difficulty == 'none';
  }

  ngOnInit(): void {
    this.filterService.setFilter(new Filter());
    this.categories$ = this.filterService.getCategories();
  }

  onCreate(): void {
    this.filterService.setFilter(this.filter);
  }
}
