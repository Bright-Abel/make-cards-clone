import { AboutMakeCards, ContactUs } from '../../../DashboardComponent';
import { useSelector } from 'react-redux';

const HelpAndSupport = () => {
  const { aboutMakeCardsID } = useSelector((store) => store.dashSlice);

  return (
    <main className="flex flex-col gap-8 lg:flex-row">
      <AboutMakeCards />

      {aboutMakeCardsID === 4 && <ContactUs />}
    </main>
  );
};
export default HelpAndSupport;
