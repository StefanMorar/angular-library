import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent, ButtonSize } from 'projects/button/src/public-api';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.LARGE,
  text: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.SMALL,
  text: 'Button',
};
