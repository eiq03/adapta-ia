import { useCallback, useEffect, useState } from 'react';

import { ApiError } from '@/shared/api/client';
import { searchPictograms } from '@/shared/api/pictograms';

type Status = 'idle' | 'loading' | 'done' | 'error';

/** Options from ARASAAC for a word; starts with `initialQuery` (CA-004-21, CA-004-22).
 * With an empty `initialQuery` (adding a pictogram, CA-004-28) it waits for the first search. */
export function usePictogramSearch(initialQuery: string) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<number[]>([]);
  const [status, setStatus] = useState<Status>(initialQuery ? 'loading' : 'idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return undefined;
    let active = true;
    searchPictograms(query)
      .then((ids) => {
        if (!active) return;
        setResults(ids);
        setStatus('done');
      })
      .catch((caught: unknown) => {
        if (!active) return;
        setError(caught instanceof ApiError ? caught.message : 'Algo deu errado. Tente de novo.');
        setStatus('error');
      });
    return () => {
      active = false;
    };
  }, [query]);

  const search = useCallback((next: string) => {
    const trimmed = next.trim().slice(0, 50);
    if (!trimmed) return;
    setStatus('loading');
    setQuery(trimmed);
  }, []);

  return { query, results, status, error, search };
}
