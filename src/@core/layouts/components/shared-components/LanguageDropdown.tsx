// ** React Imports
import { useState, SyntheticEvent, Fragment } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import setLanguage from 'next-translate/setLanguage'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'


// ** Icons Imports
import Earth from 'mdi-material-ui/Earth'
import "/node_modules/flag-icons/css/flag-icons.min.css";


const LanguageDropdown = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  // ** Hooks
  const router = useRouter()

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }


const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'us'
  },
  {
    code: 'pt',
    name: 'Português',
    country_code: 'br'
  }

]

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }

  function selectLanguage(code:string){

    setLanguage(code)
    handleDropdownClose();
  }

  return (
    <Fragment>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleDropdownOpen} aria-controls='customized-menu'>
        <Earth />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 200, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {languages.map(({code, name, country_code}) =>(
            <MenuItem sx={{ p: 0 }} onClick={() => selectLanguage(code)}>
            <Box sx={styles}>
            
            <span className={`fi fi-${country_code == 'us' ? 'us' : 'br'}`} style={{ marginRight: 5 }}/> 
              {name}
            </Box>
            </MenuItem>
        ))}
      </Menu>
    </Fragment>
  )
}

export default LanguageDropdown
