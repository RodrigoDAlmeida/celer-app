// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg id="ewlo62D5nuC1" xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={35}
              viewBox="0 0 185 215" shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"><defs>
                <linearGradient id="ewlo62D5nuC8-fill"
                  x1="2872.994524" y1="1602.204231" x2="1908.84" y2="1013.28"
                  spreadMethod="pad" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0 0)"><stop id="ewlo62D5nuC8-fill-0" offset="0%"
                    stop-color="#1de5bc" /><stop id="ewlo62D5nuC8-fill-1" offset="100%" stop-color="#0898a5" />
                </linearGradient></defs><g transform="matrix(1.33333 0 0-1.33333-207.71675 347.816613)">
                <g transform="matrix(.1 0 0 0.1 0 0)">
                  <path d="M4500,0L0,0v3600h4500v-3600" opacity="0" fill="#fff" /><g>
                    <g clip-path="url(#ewlo62D5nuC9)">
                      <g>
                        <path d="M2570.34,1570.53l-5.44-5.44c-129.49-129.53-340.25-129.53-469.79.02-129.51,129.51-129.53,340.29-.02,469.81c23.46,23.44,49.59,42.58,77.39,57.52-157.79,74.49-351.86,47.69-483.56-80.36-192.42-197.09-159.84-545.36,74-779.18c312.71-312.709,821.51-312.728,1134.2-.01l39.3,39.29Zm-935.16,634.92c37,59.13,79.93,113.89,127.69,161.66c312.73,312.71,821.54,312.71,1134.25,0l39.3-39.29-366.08-298.35-6.73,6.74c-331.99,331.99-689.93,350.16-928.43,169.24" fill="url(#ewlo62D5nuC8-fill)" />
                      </g>
                      <clipPath id="ewlo62D5nuC9">
                        <path d="M2570.34,1570.53l-5.44-5.44c-129.49-129.53-340.25-129.53-469.79.02-129.51,129.51-129.53,340.29-.02,469.81c23.46,23.44,49.59,42.58,77.39,57.52-157.79,74.49-351.86,47.69-483.56-80.36-192.42-197.09-159.84-545.36,74-779.18c312.71-312.709,821.51-312.728,1134.2-.01l39.3,39.29Zm-935.16,634.92c37,59.13,79.93,113.89,127.69,161.66c312.73,312.71,821.54,312.71,1134.25,0l39.3-39.29-366.08-298.35-6.73,6.74c-331.99,331.99-689.93,350.16-928.43,169.24Z" />
                      </clipPath>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
