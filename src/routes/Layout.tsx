import { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from '../components/InvoLoadingScreen/InvoLoadingScreen';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import MainMenu from '../components/MainMenu/MainMenu';
import DashboardIcon from '../assets/Dashboard.png';
import Transactions from '../assets/Page_1.png';
import Games from '../assets/Application.png';
import Staking from '../assets/Page.png';
import Analytics from '../assets/Ui_Kit.png';
import GDPR_Requests from '../assets/Mail.png';
import Player_Support from '../assets/User.png';
import Contact_Us from '../assets/Form.png';
import Documentation from '../assets/Table.png';
import Settings from '../assets/Icon.png';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  // If the app is still loading, render the loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  const lmitems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Transactions', icon: Transactions },
    { name: 'Games', icon: Games },
    { name: 'Staking', icon: Staking },
    { name: 'Analytics', icon: Analytics },
    { name: 'GDPR Requests', icon: GDPR_Requests },
    { name: 'Player Support', icon: Player_Support },
    { name: 'Contact Us', icon: Contact_Us },
    { name: 'Documentation', icon: Documentation },
    { name: 'Settings', icon: Settings },
  ];

  // This is an array of menu item names. These names will be displayed in the list on the UI.
  const mmitems = [
    "Today's Profits",
    'ARPPU',
    'PCR',
    'System LP',
    'Active Players',
    'Game GDP',
  ];

  const handleSelectItem = (lmitems: string) => {
    console.log(lmitems);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col MainMenu">
          <MainMenu items={mmitems} heading="MainMenu" />
        </div>
      </div>
      <div className="row">
        <div className="col-1 p-0 LeftMenu">
          <LeftMenu
            lmitems={lmitems}
            heading="LeftMenu"
            onSelectItem={handleSelectItem}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
