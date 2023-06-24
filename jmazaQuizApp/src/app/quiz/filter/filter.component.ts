import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) {}

  categories$?: Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ =  this.categoriesService.getCategories();
  }
}
