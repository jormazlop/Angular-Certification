import { TestBed } from "@angular/core/testing";
import { FilterService } from "./filter.service";
import { Filter } from "../models/filter.model";

describe('TestService', () => {
  let service: FilterService;
  beforeEach(() => {
    service = TestBed.inject(FilterService);
  });

  it('Initialize the filter', () => {

    service.getFilter().subscribe((filter) => {
        expect(filter).toEqual(new Filter());
    });
  });

  it('Update the filter', () => {

    const filter = new Filter();
    filter.category = 25;
    filter.difficulty = 'easy';

    service.setFilter(filter);

    service.getFilter().subscribe((filter) => {
      expect(filter).toEqual(filter);
    });
  });
})
