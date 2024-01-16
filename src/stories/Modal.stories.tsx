// Import necessary dependencies
import * as React from "react";
import { Story, Meta } from "@storybook/react";

// Import your Modal component and ModalProps
import Modal from "../components/shared/Modal";

// Set up the Storybook metadata
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

// Define the Template for the Modal component
const Template: Story = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {/* Ensure that handleCloseModal is provided */}
      <Modal isOpen={isOpen} handleCloseModal={() => setIsOpen(false)}>
        <h1>Modal content here</h1>
        <button type="button" onClick={() => setIsOpen(false)}>
          Close Modal
        </button>
      </Modal>
    </>
  );
};

// Bind the Template to your Primary story
export const Primary = Template.bind({});
