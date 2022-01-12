export interface Category {
   status: string;
   data: CategoryData[];
}

export interface CategoryData {
   categoryKey: string;
   categoryName: string;
   categoryImage: string;
}

export interface Commerce {
   status: string;
   data: CommerceData[];
}

export interface CommerceData {
   commerceKey: string;
   commerceName: string;
   commerceAddress: string;
   commerceBio: string;
   districtName: string;
   regionName: string;
   commerceImage: string;
}
