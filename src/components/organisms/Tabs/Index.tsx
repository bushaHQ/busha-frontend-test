import { ReactNode, useState, VoidFunctionComponent } from "react";
import './Tabs.scss'

interface TabProps {
    tabs: TabItems[];
    className?: string;
}

export interface TabItems {
    key: string;
    title: string;
    action?: string;
    handler?: () => void;
    component: ReactNode;
}

const Tab: VoidFunctionComponent<TabProps> = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState<number>(0);

    const handleClick = (currentTab: number) => {
        setCurrentTab(currentTab);
      }
        
    return (
         <div className="tab">
            <div className="tab__menu">
                {tabs.map((button, i) => (
                    <button 
                        key={button.title} 
                        className={`tab__links ${i === currentTab ? 'active' : ''}`}
                        onClick={() => handleClick(i)}>
                            {button.title}
                    </button>
                ))}
            </div>
        
            <div className="tab__content">
            {currentTab !== -1 &&
                <>
                <div className="tab__content-body">
                     <h3>{tabs[currentTab].title}</h3>
                     <p>{tabs[currentTab].action}</p>
                </div>
                   
                    {tabs[currentTab].component}
                </>
            }
            </div>
        </div>
    )
}
  
  export default Tab