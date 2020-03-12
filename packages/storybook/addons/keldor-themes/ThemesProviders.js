/* eslint-disable react/jsx-filename-extension, react/prop-types,
no-param-reassign, prefer-destructuring, no-undef */
import React from 'react'
import addons from '@storybook/addons'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default ({ story, children, themes }) => {
  const themesArr = Object.keys(themes)

  if (themesArr.length < 1) {
    return (<>{story ? story() : children}</>)
  }

  const savedTheme = localStorage.getItem('keldor-theme')
  const defaultThemeId = themes[savedTheme] ? savedTheme : themesArr[0]
  localStorage.setItem('keldor-theme', defaultThemeId)
  const [currentThemeId, setCurrentThemeId] = React.useState(defaultThemeId)

  React.useEffect(() => {
    const channel = addons.getChannel()
    channel.on('themeSelected', setCurrentThemeId)
    channel.emit('setThemes', themes)
    return () => {
      const channelUnmount = addons.getChannel()
      channelUnmount.removeListener('themeSelected', setCurrentThemeId)
    }
  }, [themes, children])

  const muiTheme = currentThemeId ? createMuiTheme(themes[currentThemeId]) : createMuiTheme()

  return (
    <ThemeProvider theme={muiTheme}>
      {story ? story() : children}
    </ThemeProvider>
  )
}
