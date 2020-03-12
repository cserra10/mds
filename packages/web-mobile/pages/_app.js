import React from 'react'
import NextApp from 'next/app'
import { ThemedApp } from '@keldor/ui'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemedApp themeId="dark">
        <Component {...pageProps} />
      </ThemedApp>
    )
  }
}
