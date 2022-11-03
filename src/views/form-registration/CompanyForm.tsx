// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import useTranslation from 'next-translate/useTranslation'

import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import Collapse from '@mui/material/Collapse'

import {addCompany} from 'src/lib/CompanyService'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})



const CompanyForm = () => {

  
  const { t } = useTranslation('common');
  // ** States
  const [language, setLanguage] = useState<string[]>([])
  const [date, setDate] = useState<Date | null | undefined>(null)
  const [values, setValues] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  const [collapse, setCollapse] = useState<boolean>(true)

  const handleClick = () => {
    setCollapse(!collapse)
  }
  const handleSubmit = async (event:any) => {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
      abbreviation: event.target.abbreviation.value,
      email: event.target.email.value
    }

    addCompany(data);
  }




  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={11.5}>
          <CardHeader onClick={handleClick} title={t('company_form_title')} titleTypographyProps={{ variant: 'h6' }} />
        </Grid>
          <IconButton size='small' onClick={handleClick}>
            {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
          </IconButton>
      </Grid>
      <form onSubmit={handleSubmit}>
      <Collapse in={collapse}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={10}>
              <TextField id='name' name='name' fullWidth type='text' label={t('name')} placeholder={t('company_name_example')} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField name='abbreviation' fullWidth type='text' label={t('company_abbreviation')} placeholder='ML' />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField name='email' fullWidth type='email' label='Email' placeholder={t('company_email_example')} />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            {t('create')}
          </Button>
        </CardActions>
        </Collapse>
      </form>
    </Card>
  )
}

export default CompanyForm
