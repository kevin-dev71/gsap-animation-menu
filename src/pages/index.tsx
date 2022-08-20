import { Layout } from '@/components/Layout';
import { Home } from '@/components/modules/Home';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
