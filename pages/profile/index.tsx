import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const ProfilePage: NextPageWithLayout = () => {
  return <div>PROFILE</div>;
};
ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default ProfilePage;
