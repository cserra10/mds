import React from 'react'
import { addDecorator } from '@storybook/react'
import themes from '@keldor/themes'
import withThemesProvider  from '../addons/keldor-themes/withThemesProvider'

addDecorator(withThemesProvider(themes))
