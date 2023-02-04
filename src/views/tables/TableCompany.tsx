// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useQuery } from 'react-query'
import { getCompanies } from 'src/lib/CompanyService'
import ContentLoader from 'react-content-loader'
import useTranslation from 'next-translate/useTranslation'

interface Column {
  id: 'name' | 'abbreviation' | 'email'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}


const columns: readonly Column[] = [

  { id: 'name', label: 'name', minWidth: 170 },
  { id: 'abbreviation', label: 'company_abbreviation', minWidth: 100 },
  { id: 'email', label: 'email' }
]

const TableStickyHeader = () => {
  const { t } = useTranslation('common');
  const [page] = useState<number>(0)
  const [rowsPerPage] = useState<number>(10)

  

  const { data, isLoading } = useQuery('company', getCompanies, {refetchInterval: 100,})



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 2000 }}>

        {isLoading ?   <ContentLoader viewBox="0 0 380 70"> 
              <rect x="5" y="10" rx="3" ry="4" width="300" height="8" />
              <rect x="5" y="25" rx="3" ry="4" width="200" height="8" />
              <rect x="5" y="40" rx="3" ry="4" width="300" height="8" />
              <rect x="5" y="55" rx="3" ry="4" width="200" height="8" />
              
  </ContentLoader> :
          (
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                      {t(column.label)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                
                {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={row.abbreviation}>
                      {columns.map(column => {
                        const value = row[column.id]

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}

      </TableContainer>
    </Paper>
  )
}

export default TableStickyHeader
