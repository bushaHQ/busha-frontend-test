import { MainLayout } from "./layouts";
import DesignSystem from "./pages/DesignSystem";

function App() {
  return (
    <MainLayout
      routes={[
        {
          link: '/wallet',
          name: 'Wallet',
          render: () => <DesignSystem />,
        },
        {
          link: '/prices',
          name: 'Prices',
          render: () => <DesignSystem />,
        },
        {
          link: '/peer-2-peer',
          name: 'Peer2Peer',
          render: () => <DesignSystem />,
        },
        {
          link: '/activity',
          name: 'Activity',
          render: () => <DesignSystem />,
        },
        {
          link: '/settings',
          name: 'Settings',
          render: () => <DesignSystem />,
        },
      ]}
    />
  );
}

export default App;
