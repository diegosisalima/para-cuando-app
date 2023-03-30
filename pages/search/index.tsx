import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

export const SearchPage: NextPageWithLayout = () => {
  return (
    <div>
      Search
      <EventSlider
        title="Recientes"
        subtitle="Las personas últimanete están hablando de esto"
        events={eventsMock}
      />
    </div>
  );
};
SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default SearchPage;
