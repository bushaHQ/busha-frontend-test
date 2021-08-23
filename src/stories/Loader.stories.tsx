import { Story, Meta } from "@storybook/react";

import Loader, { LoaderProps } from "../components/shared/Loader";

export default {
  component: Loader,
  title: "Components/Loader",
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 100,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  width: 4,
};
