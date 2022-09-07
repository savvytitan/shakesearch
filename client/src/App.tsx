import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { QueryInput, SearchResult } from './components'

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [result, setSearchResult] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const debouncedQueryChangeCallback = useDebouncedCallback(async (q) => {
    try {
      if (RegExp(/\s+/g).test(q)) {
        setLoading(false);
        setQuery('');
        setSearchResult([]);
        setError(undefined);
        return;
      } else if (q.length > 2) {
        setLoading(true)
        const response = await fetch(`http://localhost:3001/search?q=${q}`);
        const json = await response.json();
        setSearchResult(json)
        setError(undefined);
      } else {
        setLoading(false);
        setQuery('');
        setSearchResult([]);
        setError(undefined);
        return;
      }
    } catch (e) {
      console.error(e)
      setSearchResult([])
      setError(e);
    } finally {
      setLoading(false)
      setQuery(q)
    }
  }, 1000);

  return (
    <div>
      <QueryInput onChange={e => debouncedQueryChangeCallback(e.target.value)} />
      <SearchResult result={result} query={query} loading={loading} error={error} />
    </div>
  );
}

export default App;
