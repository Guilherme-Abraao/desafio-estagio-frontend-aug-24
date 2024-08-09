import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useChatStore from '../store/useChatStore';

const useUrlSync = () => {
  const location = useLocation();
  const history = useHistory();
  const { searchTerm, filter, setSearchTerm, setFilter } = useChatStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get('search') || '';
    const filterParam = params.get('filter') || 'all';

    setSearchTerm(term);
    setFilter(filterParam);
  }, [location.search, setSearchTerm, setFilter]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (filter !== 'all') params.set('filter', filter);
    history.replace({ search: params.toString() });
  }, [searchTerm, filter, history]);
};

export default useUrlSync;
