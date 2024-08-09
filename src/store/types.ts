export interface ChatStoreState {
    searchTerm: string;
    filter: string;
    setSearchTerm: (term: string) => void;
    setFilter: (filter: string) => void;
  }