// ** React Imports
import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import useTranslation from 'next-translate/useTranslation'

import GetAll from 'src/api/company/CompanyService'
const URL_API = "https://gbpjn8sulk.execute-api.us-east-1.amazonaws.com/prod/company"

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
  { id: 'email', label: 'Email'}
]

interface Data {
  name: string
  abbreviation: string
  email: string
}

function createData(name: string, abbreviation: string, email: string, size: number): Data {
  return { name, abbreviation, email }
}


const TableStickyHeader = () => {
  // ** States
  const { t } = useTranslation('common');
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState(false)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const GetAll = async () => {
    try{
      setLoading(true)
      const response = await fetch(URL_API)
      const data = await response.json()
      setData(data)
    }catch(error){
      console.log(error)
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    GetAll()
  }, [])

  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
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
      </TableContainer>
    </Paper>
  )
}

export default TableStickyHeader
