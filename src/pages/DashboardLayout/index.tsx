import './DashboardLayout.scss';
import Header from './Header';
import Tabs from '../../components/organisms/Tabs/Index'
import Activity from '../Activity/Index'
import Prices from '../Prices/Index'
import Wallets from '../Wallets/Index'
import Peer2Peer from '../Peer2Peer/Index'
import Settings from '../Settings/Index'
import { useCallback } from 'react';

const DashboardLayout = () => {
  const onAddNewWallet = useCallback(() => {

  }, [])
  
  const tabs = [
    {
      key: '1',
      title: 'Wallets',
      action: '+ Add new wallet',
      component: <Wallets />,
      handler: onAddNewWallet,
    },
    {
      key: '2',
      title: 'Prices',
      component: <Prices />,
    },
    {
      key: '3',
      title: 'Peer2Peer',
      component: <Peer2Peer />,
    },
    {
      key: '4',
      title: 'Activity',
      component: <Activity />,
    },
    {
      key: '5',
      title: 'Settings',
      component: <Settings />,
    },
  ]
  
  return (
    <div className="dashboard-layout">
        <Header />
      
        <Tabs tabs={tabs} />
    </div>
  );
};

export default DashboardLayout;
