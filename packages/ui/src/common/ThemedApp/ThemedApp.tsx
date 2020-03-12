import React from 'react'
import {ThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import themes from '@keldor/themes'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

const styles = theme => ({
  '@global': {
    'html, body': {
      backgroundColor: theme.palette.background.default,
      height: '100%',
      padding: 0,
      margin: 0
    }
  }
})

const TheApp = withStyles(styles)(({ children }: {children: any}) => children)

const ThemedApp = ({ themeId, children }: {themeId: string, children: any}) => {
  if (!themes[themeId]) {
    return <Typography color="error">Theme does not exist</Typography>
  }

  const muiTheme = createMuiTheme(themes[themeId])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={muiTheme}>
        <TheApp>
          {children}
        </TheApp>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default ThemedApp
