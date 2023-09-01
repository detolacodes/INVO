import Layout from '../Layout';
import MainStatusContent from '../../components/MainStatusContent/MainStatusContent';
import MainChartsContent from '../../components/MainChartsContent/MainChartsContent';
import StakingChart from '../../components/StakingChart/StakingChart';
import SnapShotStaus from '../../components/SnapShotStaus/SnapShotStaus';
import StakedPortfolioDis from '../../components/StakedPortfolioDis/StakedPortfolioDis';
import AllowedGamesToTransfer from '../../components/AllowedGamesToTransfer/AllowedGamesToTransfer';
import DashRecentTransaction from '../../components/DashRecentTransaction/DashRecentTransaction';

function Home() {
  // This is an array of menu item names. These names will be displayed in the list on the UI.
  const mmitems = [
    "Today's Profits",
    'ARPPU',
    'PCR',
    'System LP',
    'Active Players',
    'Game GDP',
  ];
  const sssitems = [
    { name: 'Last Year Profit', value: 3127968 },
    { name: 'Last Month Profit', value: 119919 },
    { name: 'Last Week Profit', value: 54681 },
    { name: 'Yesterday Profit', value: 7829 },
    { name: 'Last Hour Profit', value: 990.1 },
    { name: 'All Time Profit', value: 7649968 },
  ];

  const spditems = [
    { name: '', value: 0, percentage: '', Sign: '-' },
    { name: '', value: 0, percentage: '', Sign: '-' },
    { name: '', value: 0, percentage: '', Sign: '-' },
    { name: '', value: 0, percentage: '', Sign: '-' },
    { name: '', value: 0, percentage: '', Sign: '-' },
  ];

  return (
    <Layout>
      <main className="col-11 p-0 MainStatusContentCosWidth">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-12 p-0">
                  <MainStatusContent
                    items={mmitems}
                    heading="MainStatusContent"
                  />
                </div>
              </div>
              <div className="row dash_bg">
                <div className="col-7 p-0 namecol-4">
                  <StakingChart />
                </div>
                <div className="col-2 namecol-2 p-0">
                  <SnapShotStaus items={sssitems} />
                </div>
                <div className="col-3 namecol-3 p-0">
                  <StakedPortfolioDis
                    items={spditems}
                    heading="StakedPortfolioDis"
                  />
                </div>
                <div className="row">
                  <div className="col p-0 AllowedGamesToTransfer">
                    <AllowedGamesToTransfer />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-0 DashRecentTransaction">
                    <DashRecentTransaction />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 MainStatusContent">
              <MainChartsContent />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
