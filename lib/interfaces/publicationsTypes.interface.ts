// Generated by https://quicktype.io

export interface TypesResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: TaypesPublications[];
}

export interface TaypesPublications {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}