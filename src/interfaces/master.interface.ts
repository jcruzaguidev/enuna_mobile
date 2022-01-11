export interface Category {
   status: string;
   data: CategoryData[];
}

export interface CategoryData {
   categoryKey: string;
   categoryName: string;
}
