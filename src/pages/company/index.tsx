// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import CompanyForm from 'src/views/form-registration/CompanyForm'
import TableCompany from 'src/views/tables/TableCompany'
import { useQuery } from "react-query";
import { fetchCompanies } from 'src/lib/CompanyServiceR'




const Company = () => {
 
  
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} >
        <CompanyForm></CompanyForm> 
        </Grid>
        <Grid item xs={12} >
        <TableCompany/>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default Company
