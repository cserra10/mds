import React from 'react'
import { action } from '@storybook/addon-actions'
import { TabServices } from '@keldor/ui'

export default { title: 'common/TabServices' }

export const Default = () => {
  // const [value, setValue] = useState(0)

  return (
    <TabServices
      onChange={action('onChange')}
      value="flights"
    />
  )
}
