import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default {
  component: Sidebar,
  title: "Components/Sidebar",
} as Meta;

const Template: Story<{handleClick: () => void}> = (args) => {
    const [view, setView] = useState('Wallets')
    const handleClick = (item: string) => setView(item)
    return (
        <div style={{display: 'flex', gap: 40}}>
            <Sidebar handleClick={handleClick} />   
            <div style={{fontSize: 24, fontWeight: 'bold'}}>{view}</div>
        </div>
    )
};

export const Primary = Template.bind({});
