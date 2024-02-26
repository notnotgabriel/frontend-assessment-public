import styled from 'styled-components'

import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack';

import { useFetchCharacters } from './useFetchCharacters'

const CharacterAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
`

export function CharactersTable() {
  const { isError, isLoading, data, page, goToPage } = useFetchCharacters()

  if(isError) {
    return <p>Error trying to fetch characters. Try again later.</p>
  }


  if(isLoading) {
    return <p>loading...</p>
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    goToPage(value);
  };

  return (
    <Stack spacing={2}>
      <Box sx={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Characters">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Dimension</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.characters.results.map((character) => (
                <TableRow key={character.id}>
                  <TableCell><CharacterAvatar src={character.image} /></TableCell>
                  <TableCell>{character.name}</TableCell>
                  <TableCell>{character.location.name}</TableCell>
                  <TableCell>{character.location.dimension}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Pagination count={data.characters.info.pages} page={page} onChange={handlePageChange} />
    </Stack>
  )
}