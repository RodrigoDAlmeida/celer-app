// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useRef } from 'react'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'
import FormProducts from 'src/views/form-registration/CompanyForm'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import CompanyForm from 'src/views/form-registration/CompanyForm'
import TableCompany from 'src/views/tables/TableCompany'

const Company = () => {
  const refreshTrigger = useRef();
  return (
    
    <DatePickerWrapper>
      
      <Grid container spacing={6}>
        <Grid item xs={12} >
        <CompanyForm {...refreshTrigger} ></CompanyForm> 
        </Grid>
        <Grid item xs={12} >
        <TableCompany/>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default Company
