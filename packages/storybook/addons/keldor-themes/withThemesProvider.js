/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ThemesProvider from './ThemesProviders'

export default themes => story => (
  <ThemesProvider
    story={story}
    themes={themes}
  >
    {story()}
  </ThemesProvider>
)
