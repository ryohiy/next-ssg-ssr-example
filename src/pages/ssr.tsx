// pages/ssr.tsx
import { GetServerSideProps, NextPage } from 'next';
import FruitList from '../components/FruitList';
import { getRandomFruits } from '@/utils/fruits';

interface SSRPageProps {
    fruits: string[];
}

const SSRPage: NextPage<SSRPageProps> = ({ fruits }) => {
    return (
        <div>
            <h1>Server-Side Rendering (SSR) Page</h1>
            <p>This page is rendered on each request.</p>
            <FruitList fruits={fruits} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<SSRPageProps> = async () => {
    const fruits = getRandomFruits(5);
    return {
        props: { fruits },
    };
};

export default SSRPage;