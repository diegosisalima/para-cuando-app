import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
/*data*/
import { categories } from '../../lib/data/categories';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
  const currentCategory = categories.find(
    (category) => category.id === Number(category_id)
  );
  console.log(currentCategory);
  return (
    <div>
      <h1 className="text-2xl">
        {currentCategory?.name}
        <p>{currentCategory?.description}</p>
      </h1>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
