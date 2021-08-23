import * as React from "react";
import { Story, Meta } from "@storybook/react";

import Modal, { ModalProps } from "../components/shared/Modal";

export default {
  component: Modal,
  title: "Components/Modal",
  decorators: [
    (Story) => (
      <div id="modal-root">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen}>
        <h1>Modal content here</h1>
        <button type="button" onClick={() => setIsOpen(false)}>
          Close Modal
        </button>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
