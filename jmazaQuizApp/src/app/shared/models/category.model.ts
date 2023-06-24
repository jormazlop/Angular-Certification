export interface Category {
  id: number;
  name: string;
}

export interface CategoryAPI {
  trivia_categories: Category[];
}
