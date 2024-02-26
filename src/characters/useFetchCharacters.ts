import { useState, useCallback } from 'react'
import request, { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

const ENDPOINT = 'https://rickandmortyapi.com/graphql'

export function useFetchCharacters() {
  const [page, setPage] = useState(1);
  const query = useQuery({
    queryKey: ['characters', page],
    queryFn: async () => {
      const response = await request(ENDPOINT, gql`
      query Query {
        characters(page: ${page}) {
          info {
            count,
            next,
            prev,
            pages
          }
          results {
            name,
            image,
            id,
            location {
              id,
              name,
              dimension
            }
          }
        }
      }
      `, { page });  
      return response;
    }
  })

  const goToPage = useCallback(
    (page: number) => {
      setPage(page)
    },
    [page],
  );

  return {
    page,
    goToPage,
    ...query
  }
}
