import { Meta, Story } from '@storybook/react'

import { Example } from '.'

export default {
  title: 'examples/Example',
  component: Example,
} as Meta

const Template: Story = () => <Example />

export const Default = Template.bind({})
Default.args = {}
