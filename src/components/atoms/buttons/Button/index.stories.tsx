import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'atoms/buttons/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'ボタンのラベル',
}
