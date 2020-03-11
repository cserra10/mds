import React from 'react'
import { addDecorator } from '@storybook/react'
import themes from '@mds/themes'
import withThemesProvider  from '../addons/mds-themes/withThemesProvider'

addDecorator(withThemesProvider(themes))
