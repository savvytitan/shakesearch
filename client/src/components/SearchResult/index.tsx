import React from 'react'
import Item from './Item'
import { Container } from './styles'

interface SearchResultProps {
  result: string[];
  query: string;
  loading: boolean;
  error?: any;
}

const SearchResult: React.FC<SearchResultProps> = ({ result, query, loading, error }) => {
  return (
    <Container>
      {
        loading
          ? <div>loading...</div>
          : error
            ? <div>Something went wrong.</div>
            : result.map((r, index) => <Item key={index} text={r} query={query} />)
      }
    </Container>
  )
}

export default SearchResult