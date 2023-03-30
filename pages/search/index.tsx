import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const SearchPage: NextPageWithLayout = () => {
  return <div>Search</div>;
};
SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default SearchPage;
