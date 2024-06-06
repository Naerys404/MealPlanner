export interface Food {
    name: string;
    active: boolean;
  }
  
export interface TypeOfFood {
    name: string;
    active: boolean;
    foods: Food[];
}

export interface Menu {
  day: string;
  lunch: string[];
  dinner: string[];
}