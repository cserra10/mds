import React from 'react'
import NextApp from 'next/app'
import { ThemedApp } from '@keldor/ui'

export default class App extends NextApp {
  render() {
    const { theme } = this.props?.router?.query
    const { Component, pageProps } = this.props
    return (
      <ThemedApp themeId={theme || 'dark'}>
        <Component {...pageProps} />
      </ThemedApp>
    )
  }
}
