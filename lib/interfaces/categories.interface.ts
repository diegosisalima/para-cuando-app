// Generated by https://quicktype.io

export interface CategoriesResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  CurrentPage: number;
  results: Category[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface Publicacion {
  titulo: string;
  tipo: string;
  categoria: string;
  porqueRecomiendas: string;
  linkReferencia: string;
}
